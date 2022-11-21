import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

import { Pagination,Navigation, Keyboard } from "swiper";


export default function SliderImg() {
  return (  
    <>
    <Swiper 
     slidesPerView={1}
      spaceBetween={30}
      keyboard={{
       enabled: true,
    }}
      pagination={{
       clickable: true,
    }}
      navigation={true}
      modules={[Keyboard, Pagination, Navigation]}
      className="mySwiper"
  >
        <SwiperSlide><img src={"/img/fondo1.jpg"} alt="fondo1"/></SwiperSlide>
        <SwiperSlide><img src={"/img/fondo2.jpg"} alt="fondo2"/></SwiperSlide>
        <SwiperSlide><img src={"/img/fondo3.jpg"} alt="fondo3"/></SwiperSlide>
        <SwiperSlide><img src={"/img/fondo4.jpg"} alt="fondo4"/></SwiperSlide>
      </Swiper>
    </>
  );
}
