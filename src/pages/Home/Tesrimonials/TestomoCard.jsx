import React from 'react';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

const TestomoCard = ({data}) => {
    const {name,details,rating} = data
    const [sliderRef] = useKeenSlider({
        loop: true,
      })
    return (
        <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1">
            {name}
        </div>
      </div>
    );
};

export default TestomoCard;