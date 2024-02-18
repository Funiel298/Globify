'use client'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';



// import required modules
import { Scrollbar } from 'swiper/modules';
import ImageCard from './ImageCard';

export default function VerticalScroll({sources, sign}: any){
    let arr = [
        {
            link : 'https://www.youtube.com/embed/c3suauAz0zQ',
            name : 'nordic home office ~ chill lofi beats',
            description : 'Cozy Nordic is an independent little channel, with the aim of creating cozy little moments for everyone to enjoy, whether you need to calm down or concentrate. The music and animations are made by myself, as I personally think that it creates a more whole experience. ',
            image: 'https://i3.ytimg.com/vi/c3suauAz0zQ/maxresdefault.jpg'
        },
        {
            link : 'https://www.youtube.com/embed/zyZAMR56mXY',
            name : 'Норвегия. Богатая и очень красивая. Большой Выпуск.',
            description : 'Съемка, монтаж и все остальное : ВСЕ САМ.',
            image: 'https://i3.ytimg.com/vi/zyZAMR56mXY/maxresdefault.jpg'
            
        },
        {
            link : 'https://www.youtube.com/embed/bAGhXcYc0o4',
            name : 'Geography Now! NORWAY',
            description : 'Ahhh the land of the ....never ending and / or never rising sun.',
            image: 'https://i3.ytimg.com/vi/bAGhXcYc0o4/maxresdefault.jpg',
        },
        {
            link : 'https://www.youtube.com/embed/CxwJrzEdw1U',
            name : 'Norway 4K - Scenic Relaxation Film with Calming Music',
            description : `Norway is one of the most scenic countries in the world. Enjoy this 4K relaxation film across the Norway's most beautiful regions. From the endless Fjords to the stunning Lofoten Islands, Norway's landscapes have so much to offer. `,
            image: 'https://i3.ytimg.com/vi/CxwJrzEdw1U/maxresdefault.jpg'
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
                direction={'vertical'}
                slidesPerView={1.5}
                mousewheel={true}
                spaceBetween={20}
                modules={[Scrollbar, Mousewheel]}
                className="h-[99%] "
            >
                {sources.map((s : any)=>(
                    <SwiperSlide>
                        <ImageCard s={s} sign={sign} position={'row'} func={()=>window.open(s.link)} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}


