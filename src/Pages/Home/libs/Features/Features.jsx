import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import feature1 from "../../../../assets/home/slide1.jpg";
import feature2 from "../../../../assets/home/slide2.jpg";
import feature3 from "../../../../assets/home/slide3.jpg";
import feature4 from "../../../../assets/home/slide4.jpg";
import feature5 from "../../../../assets/home/slide5.jpg";

const Features = () => {
  return (
    <div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="w-full" src={feature1} alt="" />
          <h2 className="font-cinzel text-3xl -mt-16 text-center text-white">Salads</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={feature2} alt="" />
          <h2 className="font-cinzel text-3xl -mt-16 text-center text-white">pizzas</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={feature3} alt="" />
          <h2 className="font-cinzel text-3xl -mt-16 text-center text-white">Soups</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={feature4} alt="" />
          <h2 className="font-cinzel text-3xl -mt-16 text-center text-white">desserts</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={feature5} alt="" />
          <h2 className="font-cinzel text-3xl -mt-16 text-center text-white">Salads</h2>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Features;
