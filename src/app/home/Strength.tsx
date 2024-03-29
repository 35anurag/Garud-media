import React from "react";
import Employee from "../../../public/employee.jpg";
import Client from "../../../public/clients.jpg";
import Image from "next/image";

const Strength = () => {
  return (
    <div className="h-100% bg-[#00194d] ">
      <div className="ml-[5rem] mr-[5rem] py-[3rem] h-full">
        <div className="text-white flex flex-col justify-center">
          <h1 className="text-[50px] font-semibold">Our Strength</h1>
          <p className="w-[36rem] font-medium text-[15px]">
            We are deeply integrated within Nepal's leading napkin industry,
            fostering digital connections with the majority of Class A napkin
            manufacturers and related institutions.
          </p>
        </div>

        <div className="pt-[2rem] flex flex-col ">
          <div className="flex flex-row">
            <div className="w-[16rem] h-[16rem] bg-[#00df9a] text-white flex flex-col items-center justify-center gap-1">
              <p className="text-[25px] font-bold">Our Vision</p>
              <p className="text-[15px] font-medium text-center">
                "Provide quality products to the customers"
              </p>
            </div>
            <div className="w-[16rem] h-[16rem] bg-black flex items-center justify-center">
              <p className="absolute text-white text-[25px] font-medium">
                "30+ Employees"
              </p>
              {/* <p className="absolute text-white text-[25px] font-medium text-center pt-[2rem]">"25+ En"</p> */}
              <Image
                src={Employee}
                alt="Employee image"
                className="h-[16rem] opacity-20"
              />
            </div>
            <div className="w-[16rem] h-[16rem] bg-[#5e1d01] flex justify-center items-center">
              <p className="text-white text-[25px] font-medium text-center">
                "Experienced since 12 years"
              </p>
            </div>
            <div className="w-[16rem] h-[16rem] bg-[#0c182f] text-white flex flex-col items-center justify-center gap-1">
              <p className="text-[25px] font-bold">Our Presence</p>
              <p className="text-[15px] font-medium text-center">
                Company Name
              </p>
            </div>
          </div>

          <div className="flex flex-row">
            <div className="w-[16rem] h-[16rem] bg-[#00537d] flex items-center">
              <p className="text-[25px] text-white font-bold text-center">"50+ products Manufacture"</p>
            </div>
            <div className="w-[16rem] h-[16rem] bg-white flex items-center">
                <p className="text-[25px] text-center font-bold">"Manufacturer and Distributor"</p>
            </div>
            <div className="w-[16rem] h-[16rem] bg-black flex items-center justify-center">
              <p className="absolute text-white text-[25px] font-medium">
                "152+ Clients"
              </p>
              <Image
                src={Client}
                alt="Client image"
                className="h-[16rem] opacity-20"
              />
            </div>

          </div>
          <div className="flex flex-row">
            <div className="w-[16rem] h-[16rem] bg-[#253741] flex items-center">
              <p className="text-[23px] text-white font-bold text-center">"Napkin Provider to Nepal's Government"</p>
            </div>
            <div className="w-[16rem] h-[16rem] bg-[#246852] flex items-center">
              <p className="text-white text-[25px] font-bold text-center">
                "Sustainable products"
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Strength;
