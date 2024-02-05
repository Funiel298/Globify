'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel,Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/bundle';

export default function VerticalScroll({sources, sign, SetState}: any){

    

    return(
        <div className=' w-[35%]  left-[66%] p-3 pr-0 h-full overflow-hidden '>
            <Swiper
                modules={[Scrollbar, Mousewheel]}
                mousewheel
                scrollbar={{
                    draggable: true,
                    dragSize: 100
                }}
                direction={'vertical'}
                slidesPerView={4}
                
                spaceBetween={20}
                className='h-screen'
                
            >
                {sources.map((s : any)=>(
                    <SwiperSlide key={s.image}>
                        <div  className='bg-white border-b-2 pb-4 flex flex-row'>
                            <div className='p-0 w-1/2 relative group overflow-hidden' onClick={()=>SetState(s?.id-1)}>
                                <img src={s.image} alt="" className="group-hover:scale-110 duration-300 ease-in-out transition-transform " />
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


