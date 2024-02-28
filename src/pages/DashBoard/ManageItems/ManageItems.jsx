import React from "react";
import useMenu from "../../../components/hooks/useMenu";
import { FiTrash2 } from "react-icons/fi";
import { FaEdit } from "react-icons/fa";

const ManageItems = () => {
  const [menu] = useMenu();
  return (
    <div className="bg-white p-6">
      <p className="text-xl font-bold mb-2">Total Items:{menu.length}</p>
      <div className="overflow-x-auto">
        <table className="table ">
          {/* head */}
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
                 <button className="btn bg-[#D1A054]">
                 <FaEdit className="text-xl text-white" />
                 </button>
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

export default ManageItems;
