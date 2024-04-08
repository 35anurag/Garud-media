"use client";
import React from "react";
import Image, {StaticImageData} from "next/image";
import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

interface ContentType {
    title: string;
    image: StaticImageData;
    paragraph: string;
  }

const Whowearecontents = ({ title, image, paragraph }:ContentType) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0,1], [0.5, 1])
  return (
    <div>
      <motion.div
        ref={ref}
        style={{
          scale: scaleProgress,
          opacity: scrollYProgress,
        }}
        className="flex flex-col lg:flex-row items-center justify-center gap-2 lg:gap-[4rem]"
      >
        <Image className="w-[13rem]" src={image} alt="Creative" />

        <div className="flex lg:flex-col flex-col justify-center gap-4 items-center">
          <h2 className="text-[20px] lg:text-[25px] font-semibold text-blue-500 text-left lg:max-w-[30rem]">
            {title}
          </h2>

          <p className="text-[16px] lg:text-[15px] opacity-90 lg:max-w-[30rem] text-justify">
            {paragraph}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Whowearecontents;
