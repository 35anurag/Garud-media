"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Manufacture from "../../../public/Manufacturing.jpg";
import Ecommerce from "../../../public/fintech.jpg";
import Retailer from "../../../public/retail.jpg";
import Distributor from "../../../public/distributor.jpg";
import Development from "../../../public/development.jpg";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import "./Providing.css";

const Providing = () => {
  return (
    <section id="providing">
      <div className="bg-[#00194d] h-screen mt-1 text-white">
        <div className="ml-[5rem] mr-[5rem] pt-[2.5rem]">
          <p className="text-center font-semibold text-[35px]">
            Our Providings
          </p>

          <div className="pt-[4rem] flex items-center justify-center">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
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
                  <Image src={Manufacture} alt="image" />
                  <h1 className="text-[25px] font-medium absolute bottom-0 mb-5 ml-3">Manufacturer</h1>
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
                  <Image src={Retailer} alt="image" />
                  <h1 className="text-[25px] font-medium absolute bottom-0 mb-5 ml-3">Retailer</h1>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-black rounded-[10px]">
                  <Image src={Distributor} alt="image" />
                  <h1 className="text-[25px] font-medium absolute bottom-0 mb-5 ml-3">Distributor</h1>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-black rounded-[10px]">
                  <Image src={Development} alt="image" />
                  <h1 className="text-[25px] font-medium absolute bottom-0 mb-5 ml-3 text-left">Web Development</h1>
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
