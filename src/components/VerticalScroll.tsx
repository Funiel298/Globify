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

export default function VerticalScroll({sources, sign, SetState}: any){

    

    return(
        <div className='absolute w-1/3  left-[66vw] top-1/2 p-5 h-1/2 bg-[#0F0F0F] '>
            <h1 className='text-white font-semibold text-xl'>Useful videos</h1>
            <Swiper
                scrollbar={{
                    draggable: true,
                    dragSize: 100
                }}
                navigation={true}
                direction={'vertical'}
                slidesPerView={2}
                mousewheel={true}
                spaceBetween={10}
                modules={[Scrollbar, Navigation, Mousewheel]}
            >
                {sources.map((s : any)=>(
                    <SwiperSlide>
                        <div className='bg-white w-full  flex flex-row'>
                            <div className='p-0 w-1/2 relative group overflow-hidden' onClick={()=>SetState(s?.id-1)}>
                                <img src={s.image} alt="" className="group-hover:scale-110 duration-300 ease-in-out transition-transform " />
                                <a href={s.link}>
                                    <button className="absolute bottom-0  right-0 p-3  text-xs font-medium text-white transition-all duration-300 ease-in-out transform group-hover:bg-black group-hover:text-white">
                                    {sign}
                                    </button>
                                </a>
                            </div>



                            <div className='flex flex-col p-5 text-start items-start w-1/2 justify-around'>
                                <h1 className='text-xl font-semibold'>{s?.name}</h1>
                                <h3 className='text-xs font-normal'>
                                    {s?.description?.length > 110 ? s?.description?.substring(0,110)+ '...' : s?.description}
                                </h3>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}


