'use client'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import firstImage from '../images/mainPage/ptushkin_norway.jpg'
import secondImage from '../images/mainPage/norway_4k.jpg'



// import required modules
import { Scrollbar } from 'swiper/modules';
import { link } from 'fs';

export default function VerticalScroll({sources, sign, SetState}: any){
    let arr = [
        {
            link : 'https://www.youtube.com/embed/bAGhXcYc0o4',
            name : 'Geography Now! NORWAY',
            description : 'Ahhh the land of the ....never ending and / or never rising sun.',
            image: firstImage,
        },
        {
            link : 'https://www.youtube.com/embed/CxwJrzEdw1U',
            name : 'Norway 4K - Scenic Relaxation Film with Calming Music',
            description : `Norway is one of the most scenic countries in the world. Enjoy this 4K relaxation film across the Norway's most beautiful regions. From the endless Fjords to the stunning Lofoten Islands, Norway's landscapes have so much to offer. `,
            image: secondImage
          },
        {
            link : 'https://www.youtube.com/embed/zyZAMR56mXY',
            name : 'Норвегия. Богатая и очень красивая. Большой Выпуск.',
            description : 'Съемка, монтаж и все остальное : ВСЕ САМ.',
            image: '../images/mainPage/geographynow_norway.jpg'
            
        },
        {
            link : 'https://www.youtube.com/embed/c3suauAz0zQ',
            name : 'nordic home office ~ chill lofi beats',
            description : 'Cozy Nordic is an independent little channel, with the aim of creating cozy little moments for everyone to enjoy, whether you need to calm down or concentrate. The music and animations are made by myself, as I personally think that it creates a more whole experience. ',
            image: '../images/mainPage/geographynow_norway.jpg'
        },
    ]
    
    sources == null ? sources = arr : null

    return(
        <div className='absolute w-[35%] top-1/2 bg-[#212427] left-[66%] p-5 h-1/2  '>
            <Swiper
                scrollbar={{
                    draggable: true,
                    dragSize: 100
                }}
                navigation={true}
                direction={'vertical'}
                slidesPerView={1.5}
                mousewheel={true}
                spaceBetween={20}
                modules={[Scrollbar, Navigation, Mousewheel]}
                className="h-[99%] "
            >
                {sources.map((s : any)=>(
                    <SwiperSlide>
                        <div key={s.image} className='border-b-2 pb-5 border-white flex h-full flex-row'>
                            <div className='p-0 w-1/2 relative group overflow-hidden' onClick={()=>SetState(s?.id-1)}>
                                <img src={s.image} alt={s.sign} className="group-hover:scale-110 duration-300 ease-in-out transition-transform " />
                                <a href={s.link} className="absolute bottom-0  right-0 p-3 bg-white text-sm font-medium text-[#212427] transition-all duration-300 ease-in-out transform group-hover:bg-[#212427] group-hover:text-white">
                                    {sign}
                                </a>
                            </div>



                            <div className='flex flex-col p-5 text-start items-start text-white w-1/2 justify-around'>
                                <h1 className='text-lg font-semibold'>{s?.name}</h1>
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


