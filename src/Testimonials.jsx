import React from "react";
import profilePhoto from "./assets/pfp2.svg";
import liIcon from "./assets/Twitter.svg";
import testimonialsPattern from "./assets/Bg_Pattern.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Navigation } from "swiper";

export function Testimonials() {
  return (
    <>
      <img
        src={testimonialsPattern}
        alt="A nice pattern in the background"
        className="absolute right-40 bottom-[-1890px] z-[-1] h-full w-[1120px]"
      />
      <div className="mt-[279px] mx-40">
        <Swiper
          spaceBetween={20}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className=" mx-[280px] border-[1px] border-color[#DADADA] rounded-[4px] w-[800px] h-[460px]">
              <div className="h-[148px] flex items-center justify-between bg-white py-[40px]">
                <img
                  src={profilePhoto}
                  alt="a student profile"
                  className="pl-8 w-[100px] h-[70px] object-cover rounded-full overflow-hidden"
                />
                <div className="mr-[350px]">
                  <p className="font-medium">Irene Pereya</p>
                  <p className="font-light">Interaction Design Fellow '19</p>
                </div>
                <img src={liIcon} alt="LinkedIn icon" className="pr-[63px]" />
              </div>
              <div className="h-[310px] px-[120px] py-[56px] bg-[#fbfbfb]">
                <p className="text-[26px] font-light">
                  This Fellowship was a turning point in my career. I wouldn’t
                  be where I am today without the financial support and
                  experienced offered through the program.{" "}
                </p>
                <p className="pt-6 font-light">
                  Education · B.A. Visual Design
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" mx-[280px] border-[1px] border-color[#DADADA] rounded-[4px] w-[800px] h-[460px]">
              <div className="h-[148px] flex items-center justify-between bg-white py-[40px]">
                <img
                  src={profilePhoto}
                  alt="a student profile"
                  className="pl-8 w-[100px] h-[70px] object-cover rounded-full overflow-hidden"
                />
                <div className="mr-[350px]">
                  <p className="font-medium">Irene Pereya</p>
                  <p className="font-light">Interaction Design Fellow '19</p>
                </div>
                <img src={liIcon} alt="LinkedIn icon" className="pr-[63px]" />
              </div>
              <div className="h-[310px] px-[120px] py-[56px] bg-[#fbfbfb]">
                <p className="text-[26px] font-light">
                  This Fellowship was a turning point in my career. I wouldn’t
                  be where I am today without the financial support and
                  experienced offered through the program.{" "}
                </p>
                <p className="pt-6 font-light">
                  Education · B.A. Visual Design
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" mx-[280px] border-[1px] border-color[#DADADA] rounded-[4px] w-[800px] h-[460px]">
              <div className="h-[148px] flex items-center justify-between bg-white py-[40px]">
                <img
                  src={profilePhoto}
                  alt="a student profile"
                  className="pl-8 w-[100px] h-[70px] object-cover rounded-full overflow-hidden"
                />
                <div className="mr-[350px]">
                  <p className="font-medium">Irene Pereya</p>
                  <p className="font-light">Interaction Design Fellow '19</p>
                </div>
                <img src={liIcon} alt="LinkedIn icon" className="pr-[63px]" />
              </div>
              <div className="h-[310px] px-[120px] py-[56px] bg-[#fbfbfb]">
                <p className="text-[26px] font-light">
                  This Fellowship was a turning point in my career. I wouldn’t
                  be where I am today without the financial support and
                  experienced offered through the program.{" "}
                </p>
                <p className="pt-6 font-light">
                  Education · B.A. Visual Design
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
