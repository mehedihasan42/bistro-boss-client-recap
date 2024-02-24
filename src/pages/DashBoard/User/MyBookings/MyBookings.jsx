import React from 'react';
import useOrder from '../../../../components/hooks/useOrder';

const MyBookings = () => {
    const [orderData] = useOrder()
    const total = orderData.reduce((sum,item)=>sum+item.price,0)
    return (
        <div className='flex space-x-7'>
           <h2 className='font-bold text-xl text-[#151515]'>Total Bookings: {orderData.length}</h2>
           <p className='font-bold text-xl text-[#151515]'>Total Price: ${total}</p>
           <button className="btn btn-sm">Small</button>
        </div>
    );
};

export default MyBookings;