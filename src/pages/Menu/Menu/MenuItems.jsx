import React from 'react';
import MenuCard from '../../../components/shared/MenuCard/MenuCard';
import { Link } from 'react-router-dom';

const MenuItems = ({items}) => {

    return (
       <div className='w-full mx-auto'>
         <div className='grid lg:grid-cols-2 space-y-2'>
            {
                items.map(item=><MenuCard key={item._id} item={item}></MenuCard>)
            }
        </div>
       <Link to='/order'><button  className=''>ORDER YOUR FAVOURITE FOOD</button></Link>
       </div>
    );
};

export default MenuItems;