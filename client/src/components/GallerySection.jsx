import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';



// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const images = [
    "../images/360_F_230277502_lVnQnE39sAc3PDf6NqjU9Ei3eNQoreYS.jpg",
    "../images/f97f2ba0ff69111a4750c17e627f9be5.jpg",
    "../images/Chefchaouen-Morocco-1.jpg",
    "../images/Volubilis.jpg",
    "../images/4828057a5f944066e00c4dd6b51dac28.jpg",
    "../images/P1027281-1-1024x719.jpg"
]

export default function GallerySection() {
    return (
        <div className=''>
            <h1 className="text-4xl font-medium mx-10 mt-10">
                Our Gallery
            </h1>
            <p className=" mx-10 text-gray-500">Discover Morocco's Beauty Through Our Lens</p>
            <div className="my-2 mx-10">
                <span className="inline-block w-40 h-1 bg-[#d67940] rounded-full"></span>
                <span className="inline-block w-3 h-1 ml-1 bg-[#d67940] rounded-full"></span>
                <span className="inline-block w-1 h-1 ml-1 bg-[#d67940] rounded-full"></span>
            </div>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                loop={true} // Enable infinite looping
                modules={[EffectCoverflow, Pagination]}
                className=" py-6 mt-5 h-[400px]"
            >
                {images.map((image, key) => (
                    <SwiperSlide key={key} className='sm:w-[30%] w-[50%]'>
                        <img className='object-cover h-full' src={image} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
