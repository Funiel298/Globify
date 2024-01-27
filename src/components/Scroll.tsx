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
        <div className=' w-[35%]  left-[66%] p-5 h-full  '>
            <Swiper
                scrollbar={{
                    draggable: true,
                    dragSize: 100
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
                        <div key={s.image} className='bg-white flex flex-row'>
                            <div className='p-0 w-1/2 relative group overflow-hidden' onClick={()=>SetState(s?.id-1)}>
                                <img src={`/images/mainPage/${s.image}`} alt="" className="group-hover:scale-110 duration-300 ease-in-out transition-transform " />
                                <a href={s.link} className="absolute bottom-0  right-0 p-3 bg-white text-xs font-medium text-[#212427] transition-all duration-300 ease-in-out transform group-hover:bg-[#212427] group-hover:text-white">
                                    {sign}
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

