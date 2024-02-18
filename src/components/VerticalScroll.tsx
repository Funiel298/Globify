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

export default function VerticalScroll({index, sign}: any){
    let arr = [
        [
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
        ],
        
        [
            {
                link : 'https://youtu.be/9FPU4F-Ajh8?si=T-oH7niJC-tnOERc',
                name : 'Is Finland Really The Happiest Country In The World?',
                description : 'Finland has been declared the happiest country in the world for the second year in a row. On Wednesday, the United Nations released its annual World Happiness Report and confirmed the Nordic country as the reigning champion of joy.',
                image: 'https://i.ytimg.com/vi/9FPU4F-Ajh8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB0dw9YSiZQMX_k1xEYFdurnx57rg'
            },
            {
                link : 'https://youtu.be/nCUEu0zWSmk?si=Rb-_2fIBaA7N9EZk',
                name : 'How Finland Became the World`s Happiest Country',
                description : 'Enter promo code HOSER for 83% off & 3 extra months for FREE!',
                image: 'https://i.ytimg.com/vi/nCUEu0zWSmk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBtjSV-3AS9Pp6ko2FW736lSF7Wtw'
                
            },
            {
                link : 'https://youtu.be/QENXg0r_5so?si=27mp29sUxGqKDHQs',
                name : 'FINLAND EXPLAINED',
                description : 'FINLAND SLANDER! FEATURING WOW_MAO!!! Learn the TRUTH about Europe`s most redneck, glizzy-guzzling, gibberish speaking country - everything IMPORTANT you NEED to know about Scandinavia`s crazy neighbour, in 5 minutes starting NOW!!!',
                image: 'https://i.ytimg.com/vi/QENXg0r_5so/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAcf7qsXY4gbcuEFFurEZnhJvCrEA',
            },
            {
                link : 'https://youtu.be/DxxZOsfsIUM?si=-fe1DzUBCBdQamRU',
                name : 'Geography Now! Finland',
                description : `Seriously though. Do those squats bro.`,
                image: 'https://i.ytimg.com/vi/DxxZOsfsIUM/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBNjcClhMw1I8HLVoWYp37g3GB68A'
              },
        ],

        [
            {
                link : 'https://www.youtube.com/embed/c3suauAz0zQ',
                name : 'Iceland 4K - Scenic Relaxation Film with Calming Music',
                description : 'Iceland is one of the most scenic countries in the world. Enjoy this 4K relaxation film across the Iceland`s most beautiful regions. From endless waterfalls to the vibrant volcanic terrain, Iceland`s landscapes have so much to offer. ',
                image: 'https://i.ytimg.com/vi/Pbzn79TSRO0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA0vnVpUz0dYTZH-kHKAmAcLmDfIQ'
            },
            {
                link : 'https://youtu.be/AVHozwCteL4?si=JI2juimg8Q7Yf5HU',
                name : 'Iceland - The Land of Fire and Ice - In 4K',
                description : 'Filmed on the Red Dragon in 6K with all drone shots captured with the Red Scarlet in 4K.For business and stock footage enquiries contact us here: devinsupertramp@gmail.com',
                image: 'https://i.ytimg.com/vi/AVHozwCteL4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAj_ig4FgdhzgVivP-pDDscK_E5ng'
                
            },
            {
                link : 'https://youtu.be/wb84vvYSPEU?si=zKza4J1QW7tWQFg6',
                name : 'Исландия на автомобиле. Большой выпуск.',
                description : 'Это первое из четырех видео об Исландии.',
                image: 'https://i.ytimg.com/vi/wb84vvYSPEU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC65jjdmQYuvPEdKaSrpH6Elu7GlA',
            },
            {
                link : 'https://youtu.be/qjYI9YlzJ8Q?si=2sUi-4lllvPJYoL4',
                name : 'Iceland in 3 Minutes',
                description : `Thank you Skillshare for sponsoring this video! I'm happy to share that the first 1000 people to use the link will get a free trial of Skillshare`,
                image: 'https://i.ytimg.com/vi/qjYI9YlzJ8Q/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDGI7qWuIkiJEAHd9KUty5SMJWIOQ'
              },
        ]
    ]
    


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
                {arr[index].map((s : any)=>(
                    <SwiperSlide>
                        <ImageCard s={s} sign={sign} position={'row'} func={()=>window.open(s.link)} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}


