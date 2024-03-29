import React from "react";

const TeamDetail = () => {
  return (
    <div className="h-screen">
      <div className="ml-[5rem] mr-[5rem] flex flex-row gap-[5rem] justify-center items-center py-[3rem]">
        <div className="w-[30rem] h-[30rem] border-2 shadow-xl shadow-slate-300 rounded-lg flex flex-col items-center pt-5 gap-4">
          <p>Image</p>
          <p className="m-5 opacity-80">Ram P. Dhungana is the founder and the CEO of Napkin Paper Industry. He is a young and motivated 
            entrepreneur who conceptualized., with an aim to address the gaps
            in the card domain in Nepal. Mr. Dhungana also co-founded Danphe with the objective of bringing a 
            revolution in the Healthcare industry with Technology and Innovation. He brings a broad knowledge 
            of Information Technology, automation, and system engineering. Besides, he is also serving as the 
            chairman of ASK Foundation Nepal, which is a not-for-profit organization that provides medical care 
            to underprivileged people in rural communities through Health camps and Telemedicine services. 
            He was awarded the Innovative IT award by NAST in 2005 for designing the first electronic voting 
            machine.</p>
        </div>
        <div className="w-[30rem] h-[30rem] border-2 shadow-xl shadow-slate-300 rounded-lg flex flex-col items-center pt-5 gap-4">
          <p>Image</p>
          <p>Description</p>
        </div>
      </div>
    </div>
  );
};

export default TeamDetail;
