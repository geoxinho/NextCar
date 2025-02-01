import React from "react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import car1 from "../assets/car1.jpeg";
import car2 from "../assets/car2.jpeg";
import car3 from "../assets/car3.jpeg";
import car4 from "../assets/car4.jpeg";
import car5 from "../assets/car5.jpeg";
import car6 from "../assets/car6.jpeg";
import car7 from "../assets/car7.jpeg";
import car8 from "../assets/car8.jpeg";

function Carousel() {
  return (
    <div className="mt-10 md:mx-20 rounded-sm">
      <div className="">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper "
        >
          <SwiperSlide>
            <img src={car1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={car2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={car3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={car4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={car5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={car6} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={car7} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={car8} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Carousel;
