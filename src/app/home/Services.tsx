"use client";
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Consultant from "../../../public/consultant.webp";
import Ecommerce from "../../../public/ecommerce.webp";
import AppDevelopment from "../../../public/appdev.jpg";
import Graphic from "../../../public/Graphic.jpg";
import Development from "../../../public/development.jpg";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import "./Providing.css";

const Providing = () => {
  return (
    <section id="providing">
      <div className="bg-[#00194d] h-screen text-white">
        <div className="ml-[2rem] mr-[2rem] pt-[1rem] lg:ml-[5rem] lg:mr-[5rem] lg:pt-[2.5rem]">
          <p className="text-center font-semibold text-[30px] lg:text-[35px]">Services</p>
          <div className="pt-[3rem] lg:pt-[4rem] flex items-center justify-center">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="bg-black rounded-[10px]">
                  <Image src={Development} alt="image" />
                  <h1 className="text-[25px] font-medium absolute bottom-0 mb-5 ml-3 text-left">Web Development</h1>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-black rounded-[10px]">
                  <Image src={Consultant} alt="image" />
                  <h1 className="text-[25px] font-medium absolute bottom-0 mb-5 ml-3">Consultant</h1>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-black rounded-[10px]">
                  <Image src={Ecommerce} alt="image" />
                  <h1 className="text-[25px] font-medium absolute bottom-0 mb-5 ml-3 w-[10rem] text-left">Ecommerce Shop</h1>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-black rounded-[10px]">
                  <Image src={AppDevelopment} alt="image" />
                  <h1 className="text-[25px] font-medium absolute bottom-0 mb-5 ml-3 text-left">App Development</h1>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-black rounded-[10px]">
                  <Image src={Graphic} alt="image" />
                  <h1 className="text-[25px] font-medium absolute bottom-0 mb-5 ml-3 text-left">Graphics & Design</h1>
                </div>
              </SwiperSlide>
              
            </Swiper>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Providing;


