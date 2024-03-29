"use client"
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./Product.css"
import Image from 'next/image';
import FirstImg from "../../../public/first.jpeg"

const Clients = () => {
  return (
    <div className='ml-[5rem] mr-[5rem] h-100% py-[3rem]'>
        <div className='flex flex-row justify-between items-center'>
        <div className='w-[30rem]'>
            <h1 className='font-bold text-[50px]'>Our Products</h1>
            <p className='text-[16px] font-medium'>We are connected to the these sectors and providing our products since 10 years</p>
        </div>
        {/* <div className='h-[25rem]'>Image</div> */}
        <div className="pt-[4rem] flex items-center justify-center w-[40rem]">
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src={FirstImg} alt=''></Image>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
          </div>
        </div>
    </div>
  )
}

export default Clients