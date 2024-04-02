import React from "react";

const Team = () => {
  return (
    <div className="min-h-screen pt-[6rem]">
      <div className="px-[5rem] py-[3rem]">
        <div className="flex flex-col gap-5 items-center justify-center">
          <div className="flex flex-col items-center gap-2">
            <p className="text-[18px] font-bold text-[#01248c]">Our Team</p>
            <h1 className="text-[30px] font-bold">Meet Our Team</h1>
            <p className="text-center text-sm opacity-75">
              Our skilled team comprises creative individuals with technical
              expertise, strategic thinkers who innovate, and developers who
              drive advancements.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-[2rem] ">
            <div className="border-2 rounded p-4 pt-[4rem] flex flex-col gap-2 items-left shadow-lg">
              {/* <p>image</p> */}
              <p className="font-medium text-sm">Prajwol Kafle </p>
              <p className=" font-medium text-sm opacity-70">
                CEO / Co-Founder
              </p>
              <p className="text-xs">social media links</p>
            </div>

            <div className="border-2 rounded p-4 pt-[4rem] flex flex-col gap-2 items-left shadow-lg">
              {/* <p>image</p> */}
              <p className="font-medium text-sm">Rudranath</p>
              <p className=" font-medium text-sm opacity-70">
                Co-Founder / Consultant
              </p>
              <p className="text-xs">social media links</p>
            </div>

            <div className="border-2 rounded p-4 pt-[4rem] flex flex-col gap-2 items-left shadow-lg">
              {/* <p>image</p> */}
              <p className="font-medium text-sm">Anurag Regmi </p>
              <p className=" font-medium text-sm opacity-70">
                Software Developer
              </p>
              <p className="text-xs">social media links</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
