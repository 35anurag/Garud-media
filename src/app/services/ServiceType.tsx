import React from "react";
import Consultant from "../../../public/consultant.webp";
import Ecommerce from "../../../public/ecommerce.webp";
import AppDevelopment from "../../../public/appdev.jpg";
import Graphic from "../../../public/Graphic.jpg";
import Development from "../../../public/development.jpg";
import Image from "next/image";

const ServiceType = () => {
  return (
    <div className="pt-[6rem]">
      <div className="px-[2rem] py-[3rem] lg:px-[10rem] lg:py-[3rem]">
        <div className="flex flex-col gap-[7rem] items-center justify-center">

          <div className="flex flex-row items-center justify-between gap-5 lg:gap-[4rem] w-full ">
            <div>
              <Image
                className="w-[80rem] lg:w-[20rem] h-auto rounded-xl"
                src={Development}
                alt="Web development"
              />
            </div>
            <div className="flex flex-col gap-1 items-left justify-center">
              <p className="text-sm lg:text-[18px] font-medium text-[#01248c]">Development</p>
              <h1 className="text-[20px] lg:text-[25px] font-bold">Web development</h1>
              <p className="text-xs lg:text-[14px] lg:max-w-[40rem]">
                In todays digital era, websites play a crucial role, serving as
                hubs for information and business operations. At Garud Media, we
                offer a wide range of web solutions, including static and
                dynamic websites, e-commerce platforms, news portals, content
                management systems (CMS), and various web-based analytics
                systems.
              </p>
              <div className="text-xs lg:text-[14px] lg:max-w-[40rem]">
                Techstack: React js, Javascript, Next js, Typescript, MYSQL,
                MongoDB, Node js, Upstash
              </div>
            </div>
          </div>

          <div className="flex flex-row items-center justify-between gap-5 lg:gap-[4rem] w-full ">
            <div className="flex flex-col gap-1 items-left justify-center">
              <p className="text-sm lg:text-[18px] font-medium text-[#01248c]">Development</p>
              <h1 className="text-[20px] lg:text-[25px] font-bold">Mobile development</h1>
              <p className="text-xs lg:text-[14px] lg:max-w-[40rem]">
              At Garud Media, we offer a comprehensive range of services, starting from studying 
              business requirements and designing interfaces to transforming solutions into digital, 
              portable platforms through Android and iOS apps. Our goal is to expand further by 
              exploring other potential business opportunities. We primarily utilize React Native 
              to develop mobile applications, incorporating the latest technologies to ensure the 
              highest quality standards are maintained.
              </p>
              <div className="text-xs lg:text-[14px] lg:max-w-[40rem]">
                Techstack: React Native, Realm, Redux, iOS, Android
              </div>
            </div>
            <div>
              <Image
                className="w-[80rem] lg:w-[20rem] h-auto rounded-xl"
                src={AppDevelopment}
                alt="AppDevelopment"
              />
            </div>
          </div>

          <div className="flex flex-row items-center justify-between gap-5 lg:gap-[4rem] w-full ">
          <div>
              <Image
                className="w-[80rem] lg:w-[20rem] h-auto rounded-xl"
                src={Consultant}
                alt="Consultant"
              />
            </div>
            <div className="flex flex-col gap-1 items-left justify-center">
              <p className="text-sm lg:text-[18px] font-medium text-[#01248c]">Consultant</p>
              <h1 className="text-[20px] lg:text-[25px] font-bold">Consulting Client</h1>
              <p className="text-xs lg:text-[14px] lg:max-w-[40rem]">
              After project completion, Garud Media offers post-project consulting services to 
              ensure clients continue benefiting from implemented solutions. This includes 
              performance evaluations, ongoing maintenance and support, training for client teams, 
              and strategic planning for future enhancements. Additionally, Garud Media keeps clients 
              updated on relevant technology trends to maintain their competitive edge.
              </p>
              {/* <div className="text-xs">
                Techstack: React js,Javascript, Next js, Typescript, MYSQL,
                MongoDB, Node js, Upstash
              </div> */}
            </div>
            
          </div>

          <div className="flex flex-row items-center justify-between gap-5 lg:gap-[4rem] w-full ">
            <div className="flex flex-col gap-1 items-left justify-center">
              <p className="text-sm lg:text-[18px] font-medium text-[#01248c]">Commerce</p>
              <h1 className="text-[20px] lg:text-[25px] font-bold">Ecommerce Shop</h1>
              <p className="text-xs lg:text-[14px] lg:max-w-[40rem]">
              Garud Media specializes in developing e-commerce websites, offering a range of services 
              tailored to meet the specific needs of online businesses. From initial concept and design 
              to platform development and deployment, we provide comprehensive solutions to create 
              engaging and user-friendly online stores. Our services include customizing e-commerce 
              platforms, integrating secure payment gateways, optimizing for mobile responsiveness, and 
              implementing robust inventory management systems.
              </p>
              <div className="text-xs lg:text-[14px] lg:max-w-[40rem]">
                Techstack: React js, React Native, Next js, MYSQL, iOS
                MongoDB, Node js, Upstash
              </div>
            </div>
            <div>
              <Image
                className="w-[80rem] lg:w-[20rem] h-auto rounded-xl"
                src={Ecommerce}
                alt="Ecommerce"
              />
            </div>
          </div>

          <div className="flex flex-row items-center justify-between gap-5 lg:gap-[4rem] w-full ">
          <div>
              <Image
                className="w-[80rem] lg:w-[20rem] h-auto rounded-xl"
                src={Graphic}
                alt="Graphic"
              />
            </div>
            <div className="flex flex-col gap-1 items-left justify-center">
              <p className="text-sm lg:text-[18px] font-medium text-[#01248c]">Design</p>
              <h1 className="text-[20px] lg:text-[25px] font-bold">Graphics and Design</h1>
              <p className="text-xs lg:text-[14px] lg:max-w-[40rem]">
              In the software development process, wireframes and designs play a crucial role.
              At Garud Media, our team works closely with clients to understand their systems 
              and business flow. If needed, our designers then translate this understanding 
              into digital platforms using the latest technologies, ensuring that the final product 
              is visually appealing.
              </p>
              <div className="text-xs lg:text-[14px] lg:max-w-[40rem]">
                Techstack: Figma, Photoshop, Adobe XD, Canva, Adobe Illustrator
              </div>
            </div>
            
          </div>

        </div>
      </div>
    </div>
  );
};

export default ServiceType;
