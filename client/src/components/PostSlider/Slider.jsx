import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Keyboard, Pagination, Navigation } from 'swiper/modules';

export default function Slider({ images }) {
    return (
        <>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            keyboard={{
              enabled: true,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Keyboard, Pagination, Navigation]}
            className="w-full h-[350px]"
          >
            {
                images.map((image, key) => (
                    <SwiperSlide className=' w-[100%]' key={key}>
                        <img src={import.meta.env.VITE_API_BASE_URL + image}
                        className=' w-full h-full object-cover' alt="" />
                    </SwiperSlide>
                ))
            }
          </Swiper>
        </>
      );
        
}
