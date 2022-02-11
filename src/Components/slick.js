// import React from 'react';
import React, { Component } from "react";
import Slider from "react-slick";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

const Slick = () => {

    const setting = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1024,
              setting: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              setting: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              setting: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
    return (
        <div className="p-5">
            <h2> Single Item</h2>
            <Slider {...setting}>
                <div className='images px-4'>
                    <img src="./images/5.png" class="d-block w-100" alt="..." />
                    <h2 className=' py-1'>1000</h2>
                </div>
                <div className='images px-4'>
                    <img src="./images/5.png" class="d-block w-100" alt="..." />
                    <h2 className=' py-1'>2000</h2>
                </div>
                <div className='images px-4'>
                    <img src="./images/5.png" class="d-block w-100" alt="..." />
                    <h2 className=' py-1'>3000</h2>
                </div>
                <div className='images px-4'>
                    <img src="./images/5.png" class="d-block w-100" alt="..." />
                    <h2 className=' py-1'>4000</h2>
                </div>
                <div className='images px-4'>
                    <img src="./images/5.png" class="d-block w-100" alt="..." />
                    <h2 className=' py-1'>5000</h2>
                </div>
                <div className='images px-4'>
                    <img src="./images/5.png" class="d-block w-100" alt="..." />
                    <h2 className=' py-1'>6000</h2>
                </div>
                <div className='images px-4'>
                    <img src="./images/5.png" class="d-block w-100" alt="..." />
                    <h2 className=' py-1'>7000</h2>
                </div>
                <div className='images px-4'>
                    <img src="./images/5.png" class="d-block w-100" alt="..." />
                    <h2 className=' py-1'>8000</h2>
                </div>
                <div className='images px-4'>
                    <img src="./images/5.png" class="d-block w-100" alt="..." />
                    <h2 className=' py-1'>9000</h2>
                </div>
            </Slider>
        </div>
    );
};

export default Slick;
