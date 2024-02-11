import React from 'react';
import imageBG from '../../../assets/home/featured.jpg'
import './ourMenu.css'

const OurMenu = () => {
    return (
        <div className='paralux bg-cover my-2' style={{backgroundImage:`url(${imageBG})`}}>
           <div className='bg-black bg-opacity-50 w-full  py-4'>
           <div className='w-96 mx-auto text-center'>
           <p className='text-[#D99904] text-sm font-semibold'>---Check it out---</p>
            <div className="divider bg-white h-0.5"></div>
           <h2 className='text-white font-semibold text-2xl'>FROM OUR MENU</h2>
           <div className="divider bg-white h-0.5"></div>
           </div>
            <div className='flex items-center justify-center py-8 space-x-5'>
                <img src={imageBG} className='w-96' alt="" />
                <div className='text-white w-2/6'>
                    <h2>February 20, 2024</h2>
                    <p>Where can I get some</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, officia ut velit similique molestias accusantium magnam soluta dignissimos! Dignissimos, voluptatibus?</p>
                    <button>Read More</button>
                </div>
            </div>
           </div>
        </div>
    );
};

export default OurMenu;