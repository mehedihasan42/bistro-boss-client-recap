import React from 'react';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import slide1 from '../../../assets/home/01.jpg'
import slide2 from '../../../assets/home/02.jpg'
import slide3 from '../../../assets/home/03.png'
import slide4 from '../../../assets/home/04.jpg'
import slide5 from '../../../assets/home/05.png'
import slide6 from '../../../assets/home/06.png'

const Banner = () => {

    const [sliderRef] = useKeenSlider(
        {
          loop: true,
        },
        [
          (slider) => {
            let timeout
            let mouseOver = false
            function clearNextTimeout() {
              clearTimeout(timeout)
            }
            function nextTimeout() {
              clearTimeout(timeout)
              if (mouseOver) return
              timeout = setTimeout(() => {
                slider.next()
              }, 2000)
            }
            slider.on("created", () => {
              slider.container.addEventListener("mouseover", () => {
                mouseOver = true
                clearNextTimeout()
              })
              slider.container.addEventListener("mouseout", () => {
                mouseOver = false
                nextTimeout()
              })
              nextTimeout()
            })
            slider.on("dragStarted", clearNextTimeout)
            slider.on("animationEnded", nextTimeout)
            slider.on("updated", nextTimeout)
          },
        ]
      )

    return (
        <>
             <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1">
            <img src={slide1} alt="" />
        </div>
        <div className="keen-slider__slide number-slide2">
        <img src={slide2} alt="" />
        </div>
        <div className="keen-slider__slide number-slide3">
        <img src={slide3} alt="" />
        </div>
        <div className="keen-slider__slide number-slide4">
        <img src={slide4} alt="" />
        </div>
        <div className="keen-slider__slide number-slide5">
             <img src={slide5} alt="" />
             </div>
        <div className="keen-slider__slide number-slide6">
        <img src={slide6} alt="" />
        </div>
      </div>
        </>
    );
};

export default Banner;