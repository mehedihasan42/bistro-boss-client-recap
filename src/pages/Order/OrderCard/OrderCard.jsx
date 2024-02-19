import React from 'react';

const OrderCard = ({item}) => {
    
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure><img src={item.image} alt="Shoes" /></figure>
        <div className="card-body">
         <div className='text-center'>
         <h2 className="font-bold text-[151515] text-xl">{item.name}</h2>
          <p className='text-[#737373]'>{item.recipe}</p>
         </div>
         
          <div className="card-actions justify-end">
          <button className="btn btn-outline border-[#BB8506] text-[#BB8506] border-b-4">Add To Cart</button>
          </div>
        </div>
        <p className='bg-black text-white w-12 p-2 rounded absolute right-6 mt-2'>${item.price}</p>
      </div>
    );
};

export default OrderCard;