import React from "react";

const Features = () => {
  return (
    <div className="h-100%">
      <div className="ml-[5rem] mr-[5rem] py-[3rem] flex flex-col gap-4 justify-between">
        <div className="flex flex-col items-center">
          <h1 className="text-[35px] font-bold">Our Features</h1>
          <p className="text-[15px] font-medium">
            Experience the power of our features
          </p>
        </div>

        <div className="mt-[2rem] flex flex-row items-center justify-center gap-7">
          <div className="w-[15rem] h-[10rem] p-3 border border-[#00194d] flex flex-col gap-3 rounded-lg">
            <h1 className="text-[20px] font-bold text-[#00194d]">Mission</h1>
            <p className="text-[13px] font-medium w-[15rem] opacity-80">
              Our mission is to elevate everyday moments by producing
              high-quality napkin paper solutions that marry convenience,
              sustainability, and innovation.
            </p>
          </div>

          <div className="w-[17rem] h-[10rem] p-3 border border-[#00194d] flex flex-col gap-3 rounded-lg">
            <h1 className="text-[20px] font-bold text-[#00194d]">Values</h1>
            <p className="text-[13px] font-medium w-[16rem] opacity-80">
            Committed to eco-friendly practices and responsible sourcing, we
              prioritize sustainability in every aspect of our napkin paper
              production.
            </p>
          </div>

          <div className="w-[15rem] h-[10rem] p-3 border border-[#00194d] flex flex-col gap-3 rounded-lg">
            <h1 className="text-[20px] font-bold text-[#00194d]">Vision</h1>
            <p className="text-[13px] font-medium w-[15rem] opacity-80">
            Becoming the benchmark for eco-conscious excellence and customer
              satisfaction in the industry all over Nepal.
            </p>
          </div>

          <div className="w-[16rem] h-[10rem] p-3 border border-[#00194d] flex flex-col gap-3 rounded-lg">
            <h1 className="text-[20px] font-bold text-[#00194d]">Goals</h1>
            <p className="text-[13px] font-medium w-[15rem] opacity-80">
            Achieve industry recognition for top-tier quality and innovation,
              setting new standards in napkin paper production.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Features;
