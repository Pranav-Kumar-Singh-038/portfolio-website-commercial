import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Particle } from './Particle';
// Import Swiper default styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default function App() {
    const swiperRef = useRef(null);

    const handleChangeTransition = (transition) => {
        if (swiperRef.current) {
            swiperRef.current.swiper.setTransition(transition);
        }
    };

    return (
        <div className="relative w-screen h-screen">
            <Particle></Particle>
            <Swiper
                ref={swiperRef}
                className="w-full h-full"
                dir="rtl"
                grabCursor={true}
                navigation={{
                    nextEl: '.custom-swiper-button-prev',
                    prevEl: '.custom-swiper-button-next',
                }}
                autoplay={{
                    delay: '3000',
                    disableOnInteraction: false
                }}
                loop={true}
                modules={[Autoplay, Navigation, Pagination]}
            >
                <SwiperSlide className='flex relative'>
                    <img src="https://res.cloudinary.com/dgp2hrhld/image/upload/v1712573522/image1_sgsc4h.jpg" alt="slide1" className='object-cover h-full w-full' />
                    <div className='flex flex-col absolute right-28 bottom-28 right-10 z-10 text-white text-2xl'>
                        <div className=''>
                            <img className='w-full h-full' src='quote1.png' alt="quote1" />
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='flex relative'>
                    <img src="https://res.cloudinary.com/dgp2hrhld/image/upload/v1712573557/image2_pnwohu.jpg" alt='slide2' className='object-cover h-full w-full' />
                    <div className='flex flex-col absolute top-28 right-36 z-10 text-white text-2xl'>
                        <div className="">
                            <img className='w-6/12 h-5/12' src='quote2.png' alt="quote1" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='flex justify-center relative'>
                    <img src="https://res.cloudinary.com/dgp2hrhld/image/upload/v1712573559/image3_igus4e.jpg" alt='slide3' className='object-cover h-full w-full' />
                    <div className='flex flex-col absolute top-16 right-20 left-0 z-10 text-white text-2xl'>
                        <div className=''>
                            <img className='w-5/12 h-5/12' src='quote3.png' alt="quote1" />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className="absolute z-50 top-1/2 right-8">
                <button onClick={() => {
                    handleChangeTransition(1500);
                }}
                    className="custom-swiper-button-next bg-gray-400 opacity-40 hover:opacity-100 hover:bg-black rounded-full w-8 h-8 flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentcolor" className="w-6 h-6 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>
            <div className="absolute z-50 top-1/2 left-8">
                <button onClick={() => {
                    handleChangeTransition(1500);
                }}
                    className="custom-swiper-button-prev bg-gray-400 opacity-40 hover:opacity-100 hover:bg-black rounded-full w-8 h-8 flex justify-center items-center pr-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-6 h-6 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                </button>
            </div>
        </div>
    );
}
