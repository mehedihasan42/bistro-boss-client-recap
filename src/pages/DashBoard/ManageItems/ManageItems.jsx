import React from "react";
import useMenu from "../../../components/hooks/useMenu";
import { FiTrash2 } from "react-icons/fi";
import { FaEdit } from "react-icons/fa";
import useAxiosSecure from "../../../components/hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [menu, refetch] = useMenu();
  const axiosSecure = useAxiosSecure();
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`http://localhost:5000/menu/${id}`).then((data) => {
          if (data.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Item deleted successfully.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div className="bg-white p-6">
      <p className="text-xl font-bold mb-2">Total Items:{menu.length}</p>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="bg-[#D1A054] text-white">
              <th></th>
              <th>Item Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody className="">
            {menu.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="w-16 rounded-">
                      <img src={item.image} />
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>${item.price}</td>

                <td>
                  <Link to={`/menu/${item._id}`} className="btn bg-[#D1A054]">
                    <FaEdit className="text-xl text-white" />
                  </Link>
                </td>

                <td>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn bg-rose-700"
                  >
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

export default ManageItems;
