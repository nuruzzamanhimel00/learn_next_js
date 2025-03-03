'use client'
import React from "react";
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import Image from "next/image";
export default function SlickCarosol() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  };

  return (
    <>
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <Image
              src="/image_1.jpg"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
          <div>
            <Image
              src="/image_2.jpg"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
          <div>
            <Image
              src="/image_3.jpeg"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
          <div>
            <Image
              src="/image_1.jpg"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
        </Slider>
      </div>
    </>
  );
}
