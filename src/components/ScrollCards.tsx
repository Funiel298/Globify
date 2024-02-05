import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/bundle';
import { useState } from 'react';



export default function ScrollCards({sources}:any){

    const [position, setPosition] = useState(0)

    return (
      <div className='w-[90vw] '>
        <Swiper
          spaceBetween={4}
          slidesPerView={4.5}
          scrollbar={{ draggable: true }}
          modules={[ Mousewheel ]}
          mousewheel = {true}
          className='w-full h-auto'
        >
          {sources.map((item:any, index:number) => (
            <SwiperSlide key={item.title+index}>
              <a href="#content" onClick={()=>setPosition(index)}>
                <div className="swiper-card cursor-pointer bg-black relative rounded-xl h-[30vw] w-[20vw] overflow-hidden">
                  <img src={item.main_image} className="object-cover h-full w-full" alt={item.title} />
                  <div className="absolute text-white font-light bottom-4 left-4 text-lg z-10">
                    {item.title}
                  </div>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>

        <div id='content'>
          <h1 className='my-5 font-medium text-xl'>{sources[position].title}</h1>
          <p>
            {sources[position].content}
          </p>
          <img className='w-full rounded-xl object-cover h-[50vh]' src={sources[position].main_image} alt="COVER_ IMAGE" />
        </div>


      </div>
    );
}