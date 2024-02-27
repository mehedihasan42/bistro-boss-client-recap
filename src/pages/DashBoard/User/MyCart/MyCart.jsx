import useOrder from "../../../../components/hooks/useOrder";
import SectionTitle from "../../../../components/shared/SectionTitle/SectionTitle";
import { FaRegTrashCan } from "react-icons/fa6";
import Swal from "sweetalert2";

const MyCart = () => {
    const [orderData,refetch] = useOrder();
    const total = orderData.reduce((sum, item) => sum + item.price, 0);
  
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
          fetch(`http://localhost:5000/order/${id}`, {
            method: "DELETE",
          })
          .then((data) => {
              console.log(data)
            if (data.status === 200) {  
              refetch()  
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          })
          .catch(error => {
              console.error('Error deleting order:', error);
              Swal.fire({
                  title: "Error",
                  text: "Failed to delete order.",
                  icon: "error",
              });
          });
        }
      });
    };
    return (
        <>
      <span className="mt-4">
        <SectionTitle
          heading="WANNA ADD MORE?"
          subHeading="---My Cart---"
        />
      </span>
      <div className="flex space-x-7 bg-white py-8 w-10/12 items-center justify-center">
        <h2 className="font-bold text-xl text-[#151515]">
          Total Bookings: {orderData.length}
        </h2>
        <p className="font-bold text-xl text-[#151515]">
          Total Price: ${total}
        </p>
        <button className="btn btn-sm bg-[#D1A054]">Pay</button>
      </div>
      <div className="w-10/12 mx-auto">
        <table className="table bg-white rounded-none">
          {/* head */}
          <thead>
            <tr className="bg-[#D1A054] text-white">
              <th></th>
              <th>Item Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orderData.map((orders, index) => (
              <tr key={orders._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={orders.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{orders.name}</td>
                <td>${orders.price}</td>
                <td>
                  <button
                    onClick={() => handleDelete(orders._id)}
                    className="btn btn-ghost btn-sm bg-red-700"
                  >
                    <FaRegTrashCan className="text-xl text-white" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
    );
};

export default MyCart;