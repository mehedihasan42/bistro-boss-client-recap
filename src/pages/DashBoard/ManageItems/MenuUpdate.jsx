import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import useAxiosSecure from '../../../components/hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const MenuUpdate = () => {
    const item = useLoaderData()
    const {name,recipe,image,price} = item
   
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content">
        
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
               <img src={image} alt="" />
              </div>
              <div className="form-control">
                <input type="text" defaultValue={name} className="input input-bordered" required />
              </div>
              <div className="form-control">
              <textarea defaultValue={recipe} className="textarea textarea-bordered textarea-lg w-full text-sm max-w-xs"></textarea>
              </div>
              <div className="form-control">
                <input type="text" defaultValue={price} className="input input-bordered" required />
              </div>            
              <div className="form-control mt-6">
                <button className="btn bg-[#D1A054] text-white">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default MenuUpdate;