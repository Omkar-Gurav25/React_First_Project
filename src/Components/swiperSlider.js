import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation"

// import required modules
import { Autoplay, Navigation } from "swiper";

const swiperSlider = () => {
  return (
    <div className='pb-4'>
    <div className='px-3 pt-3 bg-light'>
        <div className="swiper-con container">
            <Swiper
                slidesPerView={3}
                spaceBetween={10}
                slidesPerGroup={3}
                loop={true}
                // loopFillGroupWithBlank={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true
                }}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
            >

                <SwiperSlide>
                    <div className='images'>
                        <img src="./images/5.png" class="d-block w-100" alt="..." />
                        <h2 className=' py-1'>1000</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='images'>
                        <img src="./images/5.png" class="d-block w-100" alt="..." />
                        <h2 className=' py-1'>2000</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='images'>
                        <img src="./images/5.png" class="d-block w-100" alt="..." />
                        <h2 className=' py-1'>3000</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='images'>
                        <img src="./images/5.png" class="d-block w-100" alt="..." />
                        <h2 className=' py-1'>4000</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='images'>
                        <img src="./images/5.png" class="d-block w-100" alt="..." />
                        <h2 className=' py-1'>5000</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='images'>
                        <img src="./images/5.png" class="d-block w-100" alt="..." />
                        <h2 className=' py-1'>6000</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='images'>
                        <img src="./images/5.png" class="d-block w-100" alt="..." />
                        <h2 className=' py-1'>7000</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='images'>
                        <img src="./images/5.png" class="d-block w-100" alt="..." />
                        <h2 className=' py-1'>8000</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='images'>
                        <img src="./images/5.png" class="d-block w-100" alt="..." />
                        <h2 className=' py-1'>9000</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='images'>
                        <img src="./images/5.png" class="d-block w-100" alt="..." />
                        <h2 className=' py-1'>10000</h2>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
</div>

  );
};

export default swiperSlider;
