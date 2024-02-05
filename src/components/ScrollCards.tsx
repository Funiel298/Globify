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
                <div className="swiper-card cursor-pointer group bg-black relative rounded-xl h-[30vw] w-[20vw] overflow-hidden duration-300">
                  <img src={item.main_image} className="object-cover h-full w-full opacity-70 group-hover:opacity-100 duration-300" alt={item.title} />
                  <span className="absolute text-white font-light bottom-4 left-4 text-lg z-10 group-hover:font-medium duration-300">
                    {item.title}
                  </span>
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
          <img className='w-full rounded-xl object-cover h-[70vh]' src={sources[position].main_image} alt="COVER_ IMAGE" />
        </div>


      </div>
    );
}