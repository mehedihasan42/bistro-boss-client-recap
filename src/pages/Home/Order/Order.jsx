import React from 'react';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import SectionTitle from '../../../components/shared/SectionTitle/SectionTitle';
import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'

const Order = () => {
    const [sliderRef] = useKeenSlider({
        loop: true,
        mode: "free",
        slides: {
          perView: 3,
          spacing: 15,
        },
      })
    return (
        <div className='my-12'>
            <SectionTitle heading="ORDER ONLINE" subHeading="---From 11:00am to 10:00pm---"/>
            <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide number-slide1">
        <img src={slide1} alt="" />
        <p className='-mt-12 text-white font-semibold text-2xl'>Salad</p>
      </div>
      <div className="keen-slider__slide number-slide2">
      <img src={slide2} alt="" />
      <p  className='-mt-12 text-white font-semibold text-2xl'>Pizza</p>
      </div>
      <div className="keen-slider__slide number-slide3">
      <img src={slide3} alt="" />
      <p  className='-mt-12 text-white font-semibold text-2xl'>Soup</p>
      </div>
      <div className="keen-slider__slide number-slide4">
      <img src={slide4} alt="" />
      <p  className='-mt-12 text-white font-semibold text-2xl'>Dessert</p>
      </div>
      <div className="keen-slider__slide number-slide5">
      <img src={slide5} alt="" />
      <p  className='-mt-12 text-white font-semibold text-2xl'>Sahi Salad</p>
      </div>
    </div>
        </div>
    );
};

export default Order;