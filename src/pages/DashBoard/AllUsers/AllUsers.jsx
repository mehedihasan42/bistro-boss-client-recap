import React from "react";
import useUsers from "../../../components/hooks/useUsers";
import { FiTrash2 } from "react-icons/fi";
import { HiOutlineUserGroup } from "react-icons/hi2";
import Swal from "sweetalert2";

const AllUsers = () => {
  const [userData,refetch] = useUsers();
  const handleUpdate = email =>{
    fetch(`http://localhost:5000/users/admin/${email}`,{
        method:'PATCH'
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.modifiedCount >0){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "This user is an admin now",
                showConfirmButton: false,
                timer: 1500
              });
            refetch()
        }     
    })
  }
  return (
    <div className="bg-white p-6">
      <p className="text-xl font-bold mb-2">Total Users: {userData.length}</p>
      <div className="overflow-x-auto">
        <table className="table ">
          {/* head */}
          <thead>
            <tr className="bg-[#D1A054] text-white">
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="">
            {userData.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? 
                    "admin"
                   : 
                    <button
                      onClick={() => handleUpdate(user.email)}
                      className="btn bg-[#D1A054]"
                    >
                      <HiOutlineUserGroup className="text-xl text-white" />
                    </button>
                  }
                </td>
                <td>
                  <button className="btn bg-rose-700">
                    <FiTrash2 className="text-xl text-white" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
