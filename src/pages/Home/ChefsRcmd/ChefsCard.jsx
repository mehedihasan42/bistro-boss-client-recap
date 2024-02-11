import React from 'react';

const ChefsCard = ({item}) => {
    const {name,recipe,image,price} = item
    return (
        <div className="card card-compact w-80 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body text-center">
    <h2 className="card-title mx-auto font-semibold">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions justify-center">
      <button className="btn btn-outline border-[#BB8506] text-[#BB8506] border-b-4">Add To Cart</button>
    </div>
  </div>
</div>
    );
};

export default ChefsCard;