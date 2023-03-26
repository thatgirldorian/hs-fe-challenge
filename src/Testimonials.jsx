import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Navigation } from "swiper";

export function Testimonials() {
  return (
    <div className="mt-[279px] mx-40">
      <Swiper
        spaceBetween={20}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="mx-[280px] border-[1px] border-color[#DADADA] rounded-[4px] w-[800px] h-[460px]">
            Irene Pereya
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mx-[280px]  border-[1px] border-color[#DADADA] rounded-[4px] w-[800px] h-[460px]">
            Irene Pereya
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mx-[280px]  border-[1px] border-color[#DADADA] rounded-[4px] w-[800px] h-[460px]">
            Irene Pereya
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
