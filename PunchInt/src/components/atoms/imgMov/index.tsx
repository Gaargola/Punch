import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper";

export default function SliderImg() {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide><img src={"/img/fondo1.jpg"} alt="fondo1"/></SwiperSlide>
        <SwiperSlide><img src={"/img/fondo2.jpg"} alt="fondo2"/></SwiperSlide>
        <SwiperSlide><img src={"/img/fondo3.jpg"} alt="fondo3"/></SwiperSlide>
        <SwiperSlide><img src={"/img/fondo4.jpg"} alt="fondo4"/></SwiperSlide>
      </Swiper>
    </>
  );
}
