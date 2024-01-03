'use client'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';


// import required modules
import { Scrollbar } from 'swiper/modules';
import { link } from 'fs';

export default function VerticalScroll({sources, sign}: any){

    

    return(
        <div className='absolute w-[40%]  left-[60%] p-5 h-screen  '>
            <Swiper
                scrollbar={{
                    hide: true,
                }}
                navigation={true}
                direction={'vertical'}
                slidesPerView={3}
                mousewheel={true}
                spaceBetween={20}
                modules={[Scrollbar, Navigation, Mousewheel]}
                className="h-[99%] "
            >
                {sources.map((s : any)=>(
                    <SwiperSlide>
                        <div className='bg-white w-full h-full flex flex-row'>
                        <div className='p-0 w-1/2 relative group'>
                            <img src={s.image} alt="" className="group-hover:opacity-75 transition-all duration-300 ease-in-out transform" />
                            <a href={s.link}>
                                <button className="absolute bottom-0  right-0 p-3 bg-white text-xs font-medium text-black transition-all duration-300 ease-in-out transform group-hover:bg-black group-hover:text-white">
                                {sign}
                                </button>
                            </a>
                        </div>



                            <div className='flex flex-col p-5 text-start items-center w-1/2 justify-around'>
                                <h1 className='text-xl font-semibold'>{s?.name}</h1>
                                <h3 className='text-xs font-normal'>
                                    {s?.description?.length > 70 ? s?.description?.substring(0,70)+ '...' : s?.description}
                                </h3>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}


