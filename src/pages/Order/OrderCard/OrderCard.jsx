import React from 'react';

const OrderCard = ({item}) => {
    
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure><img src={item.image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{item.name}</h2>
          <p>{item.price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    );
};

export default OrderCard;