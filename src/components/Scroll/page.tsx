'use client'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';


// import required modules
import { Scrollbar } from 'swiper/modules';

export default function Scroll(){

    let linkSources = [
        'https://www.youtube.com/embed/CxwJrzEdw1U',
        'https://www.youtube.com/embed/bAGhXcYc0o4',
        'https://www.youtube.com/embed/zyZAMR56mXY',
        'https://www.youtube.com/embed/c3suauAz0zQ',
    ]

    return(
        <div className='absolute w-1/3 top-[10vw] left-2/3 p-5'>
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
                className="h-[40vw]"
            >
                {linkSources.map((link)=>(
                    <SwiperSlide><iframe className='w-full h-full object-cover'  src={link} title="Norway 4K - Scenic Relaxation Film with Calming Music" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe></SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}


