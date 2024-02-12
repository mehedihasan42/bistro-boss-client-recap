import React from 'react';
import MenuCard from '../../../components/shared/MenuCard/MenuCard';

const MenuItems = ({items}) => {

    return (
       <div className='w-full mx-auto'>
         <div className='grid grid-cols-2'>
            {
                items.map(item=><MenuCard key={item._id} item={item}></MenuCard>)
            }
        </div>
        <button className=''>ORDER YOUR FAVOURITE FOOD</button>
       </div>
    );
};

export default MenuItems;