import React from 'react';
import Slider from "react-slick";

const OurCustomer = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 0,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="p-5">
            <h2 className="text-center text-warning text-uppercase pb-5"> Our Customer</h2>
            <Slider {...settings}>

                <div className="single-box px-4">
                    <div className="img-area">
                        <img src="./images/5.png" alt="..." className='w-100 h-100' />
                    </div>
                    <div className="img-text">
                        <h2>Person One</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla unde natus harum similique totam architecto consequatur explicabo illum non ipsum cumque nesciunt enim eaque quisquam, labore est ipsa itaque. Eveniet?</p>
                    </div>
                </div>

                <div className="single-box px-4">
                    <div className="img-area">
                        <img src="./images/4.png" alt="..." className='w-100 h-100' />
                    </div>
                    <div className="img-text">
                        <h2>Person Two</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla unde natus harum similique totam architecto consequatur explicabo illum non ipsum cumque nesciunt enim eaque quisquam, labore est ipsa itaque. Eveniet?</p>
                    </div>
                </div>

                <div className="single-box px-4">
                    <div className="img-area">
                        <img src="./images/3.png" alt="..." className='w-100 h-100' />
                    </div>
                    <div className="img-text">
                        <h2>Person Three</h2>
                        <p>Lorem Nulla unde natus harum similique totam architecto consequatur explicabo illum non ipsum cumque nesciunt enim eaque quisquam, labore est ipsa itaque. Eveniet?</p>
                    </div>
                </div>

                <div className="single-box px-4">
                    <div className="img-area">
                        <img src="./images/5.png" alt="..." className='w-100 h-100' />
                    </div>
                    <div className="img-text">
                        <h2>Person Four</h2>
                        <p>Lorem ipsum dolor sit amet, architecto consequatur explicabo illum non ipsum cumque nesciunt enim eaque quisquam, labore est ipsa itaque. Eveniet?</p>
                    </div>
                </div>

                <div className="single-box px-4">
                    <div className="img-area">
                        <img src="./images/4.png" alt="..." className='w-100 h-100' />
                    </div>
                    <div className="img-text">
                        <h2>Person Five</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. architecto consequatur explicabo illum non ipsum cumque nesciunt enim eaque quisquam, labore est ipsa itaque. Eveniet?</p>
                    </div>
                </div>

                <div className="single-box px-4">
                    <div className="img-area">
                        <img src="./images/3.png" alt="..." className='w-100 h-100' />
                    </div>
                    <div className="img-text">
                        <h2>Person Six</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla unde natus itaque. Eveniet?</p>
                    </div>
                </div>

            </Slider>
        </div>
    );

};

export default OurCustomer;
