import React from 'react';
import OrderCard from '../OrderCard/OrderCard';

const OrderTab = ({items}) => {
   
    return (
       <div className='grid md:grid-cols-3 space-y-3'>
        {
            items.map(item=><OrderCard key={item._id} item={item}></OrderCard>)
        }
       </div>
    );
};

export default OrderTab;