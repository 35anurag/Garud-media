import React from "react";
//Grid and Dot Background

const Workingprocess = () => {
  return (
    <div className="min-h-screen py-2 pr-[2rem] pl-[2rem] flex flex-col items-center w-full lg:py-4 lg:pl-[5rem] lg:pr-[5rem]">
      <h1 className="mt-[2rem] text-center font-semibold text-[30px] lg:text-[35px]">
        Our Working Process
      </h1>
      <div className="my-[2rem] relative flex flex-col items-center gap-5">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 justify-between">
          <div className="text-center max-w-[10rem] lg:max-w-[15rem] flex flex-col gap-2">
            <h2 className="text-[14px] lg:text-[16px] font-medium text-blue-500">
              Collect Requirements
            </h2>
            <p className="text-[12px] lg:text-[14px]">
              Changing your ideas into process for development. Our team will
              collect required materials to process further development.
            </p>
          </div>

          <div className="text-center max-w-[10rem] lg:max-w-[15rem] flex flex-col gap-2">
            <h2 className="text-[14px] lg:text-[16px] font-medium text-blue-500">
              Wireframing
            </h2>
            <p className="text-[12px] lg:text-[14px]">
              Our team starts creating a visual guide that outlines the
              structure and layout of a website or application, typically
              focusing on the arrangement of elements and functionality.
            </p>
          </div>

          <div className="text-center max-w-[10rem] lg:max-w-[15rem] flex flex-col gap-2">
            <h2 className="text-[14px] lg:text-[16px] font-medium text-blue-500">
              Design and Development
            </h2>
            <p className="text-[12px] lg:text-[14px]">
              Crafting and implementing the visual and functional aspects of the
              website's "working process" field, ensuring it aligns with user
              needs and business objectives.
            </p>
          </div>

          <div className="text-center max-w-[10rem] lg:max-w-[15rem] flex flex-col gap-2">
            <h2 className="text-[14px] lg:text-[16px] font-medium text-blue-500">Testing</h2>
            <p className="text-[12px] lg:text-[14px]">
              Testing ensures the functionality and quality of the website's,
              identifying and resolving any issues before deployment.
            </p>
          </div>

          <div className="text-center max-w-[10rem] lg:max-w-[15rem] flex flex-col gap-2">
            <h2 className="text-[14px] lg:text-[16px] font-medium text-blue-500">
              Project Delivering
            </h2>
            <p className="text-[12px] lg:text-[14px]">
              Then, We starts finalizing and deploying the project, ensuring it
              meets all requirements and is ready for use.
            </p>
          </div>

          <div className="text-center max-w-[10rem] lg:max-w-[15rem] flex flex-col gap-2">
            <h2 className="text-[14px] lg:text-[16px] font-medium text-blue-500">
              Consulting
            </h2>
            <p className="text-[12px] lg:text-[14px]">
              We provide expert guidance on operating business using website and
              improving on development of your business.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workingprocess;
