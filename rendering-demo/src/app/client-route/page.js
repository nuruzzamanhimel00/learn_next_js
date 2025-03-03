"use client"
// import {serverSideFunction} from "../../utils/serverSideFunction"

import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";


export default function ClientRoutePage() {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false
      };
    console.log('Client Route component')
    // const result = serverSideFunction()
    return (
        <>
        <div className="server-route-page">ClientRoutePage Route</div>
        <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src='/image_1.jpg' />
        </div>
        <div>
          <img src='/image_2.jpg'/>
        </div>
        <div>
          <img src='/image_3.jpeg' />
        </div>
        <div>
          <img src='/image_1.jpg' />
        </div>
      </Slider>
    </div>
        </>
    )
}