import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useOrder from '../../../components/hooks/useOrder';

const OrderCard = ({item}) => {

  const {user} = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
  const {_id,image,name,recipe,price} = item
  const [,refetch] = useOrder()

  const handleAddToCart = (item)=>{
    console.log(item)
    if(user){
     const orderData = {foodId:_id,image,name,recipe,price,email:user.email}
     fetch('http://localhost:5000/order', {
      method: 'POST',
      body: JSON.stringify(orderData), // Serialize orderData to JSON string
      headers: {
        'Content-Type': 'application/json', // Specify content type as JSON
      },
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.insertedId){
        Swal.fire({
          title: "Order success!",
          text:`${item.name} ordered successfully`,
          icon: "success"
        });
        refetch()
      }
    })
   }
   else{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Go to Log in!"
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/login',{state:{from:location}})
      }
    });
   }
  }

 
    
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure><img src={image} alt="Shoes" /></figure>
        <div className="card-body">
         <div className='text-center'>
         <h2 className="font-bold text-[151515] text-xl">{name}</h2>
          <p className='text-[#737373]'>{recipe}</p>
         </div>
         
          <div className="card-actions justify-end">
          <button onClick={()=>handleAddToCart(item)} className="btn btn-outline border-[#BB8506] text-[#BB8506] border-b-4">Add To Cart</button>
          </div>
        </div>
        <p className='bg-black text-white w-12 p-2 rounded absolute right-6 mt-2'>${price}</p>
      </div>
    );
};

export default OrderCard;