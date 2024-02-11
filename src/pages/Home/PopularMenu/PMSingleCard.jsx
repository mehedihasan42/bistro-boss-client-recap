import React from 'react';

const PMSingleCard = ({item}) => {
    const {name,recipe,image,price} = item
    return (
        <div className='flex'>
            <img src={image} className='h-16 rounded-tl-lg rounded-br-lg' alt="" />
            <div>
                <h2 className='italic'>{name}</h2>
                <p className='text-[#737373] text-xs w-96'>{recipe}</p>
            </div>
            <p className='text-[#BB8506]'>${price}</p>
        </div>
    );
};

export default PMSingleCard;