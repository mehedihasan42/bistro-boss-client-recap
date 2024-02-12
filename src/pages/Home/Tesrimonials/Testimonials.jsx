import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/shared/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Testimonials = () => {

    const [testo,setTesto] = useState([])
    useEffect(()=>{
        fetch("reviews.json")
        .then(res=>res.json())
        .then(data=>setTesto(data))
    },[])

   
    
      
    return (
        <div className='my-6'>
            <SectionTitle subHeading="---What Our Clients Say---" heading="TESTIMONIALS"/>
           <div>
               <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
           {
                testo.map(data=>
                    <SwiperSlide key={data._id}>
                        <div className='w-4/6 mx-auto text-center my-2'>
                        <Rating className='max-w-36 mx-auto'
    //   style={{ maxWidth: 180 }}
      value={data.rating}
      readOnly
    />
                            <p>{data.details}</p>
                            <h2 className='text-2xl text-[#CD9003] font-semibold'>{data.name}</h2>
                        </div>
                    </SwiperSlide>
                    )
                }
                </Swiper>
           </div>
        </div>
    );
};

export default Testimonials;