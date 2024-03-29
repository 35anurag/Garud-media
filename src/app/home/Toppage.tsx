"use client"
import React from "react";

import "./Toppage.css";
import Heading from "../../../public/Homeimage.jpg"
import Image from "next/image";
import Link from "next/link";

const Toppage = () => {
  return (
    <div className="">
      <section>
        <div className="air air1"></div>
        <div className="air air2"></div>
        <div className="air air3"></div>
        <div className="air air4"></div>
      </section>

      <div className="ml-[5rem] mr-[5rem] absolute top-[10rem] text-white">
        <div className="flex flex-row justify-between gap-5">
          <div className="flex flex-col justify-center gap-5 w-[67rem] items-center">
            <p className="text-[35px] w-[40rem] text-center font-bold mt-[2rem]">
              Manufacture and Online distribution of Napkin paper all over Nepal
            </p>
            <Link href="#providing" className="bg-[#00df9a] p-3 rounded-[20px] font-semibold w-[10rem] text-center">
              Explore More
            </Link>
          </div>
          
          {/* <div>
            <Image src={Heading} alt="industry image" className="w-[70rem] h-auto" />
          </div> */}
        </div>
      </div>
      <p className='w-[50rem] h-[50rem] border border-white border-opacity-60 rounded-full absolute top-0 left-[13rem]'></p>
    </div>
  );
};

export default Toppage;
