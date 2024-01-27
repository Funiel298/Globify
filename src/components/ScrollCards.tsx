import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { Navigation, Pagination  } from 'swiper/modules';

export default function ScrollCards(){
    return(
        <div className="flex flex-row ">
            <Swiper
                pagination={{
                dynamicBullets: true,
                }}
                navigation={
                    true
                }
                modules={[Pagination, Navigation]}
                className="w-full"
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
            </Swiper>
        </div>
    )
}