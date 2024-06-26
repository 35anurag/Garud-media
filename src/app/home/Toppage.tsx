"use client";
import React from "react";
import { TypewriterEffect } from "../components/ui/typewriter-effect";
import Link from "next/link";
// import Homepage from "../../../public/videos/Homepage.mp4"
const Toppage = () => {
  const words = [
    {
      text: "Bridging",
    },
    {
      text: "Software",
    },
    {
      text: "and",
    },
    {
      text: "Consulting",
    },
    {
      text: "Brilliance",
    },
    {
      text: "with",
    },
    {
      text: "Garud Media.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="py-[5rem] lg:py-[3rem] h-auto lg:min-h-screen bg-[#0c101a] overflow-hidden">
      <div className="mx-[2rem] lg:ml-[5rem] lg:mr-[5rem] text-white relative">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-[2rem]">
          <div className="flex flex-col items-center justify-center w-full mt-[6rem] gap-5 lg:gap-7">
            <p className="font-bold text-[15px] text-blue-500/70 mb-[7px] lg:-mb-[16px]">
              Design Your Future
            </p>

            <TypewriterEffect words={words} />

            <p className="text-sm text-center font-medium opacity-70">
              Where Software and Consulting Converge for Success. Experience the
              Power of Integration
            </p>

            <Link
              href="/ourwork"
              className="bg-[#1c1e49] hover:bg-blue-500/70 p-3 rounded-[20px] font-semibold w-[10rem] text-center"
            >
              View our works
            </Link>
          </div>
          <video className="w-[35rem] mt-[6rem]" src="/videos/Homepage.mp4" autoPlay muted loop />
        </div>
      </div>
    </div>
  );
};

export default Toppage;
