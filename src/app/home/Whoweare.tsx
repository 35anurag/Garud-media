import Image from "next/image";
import React from "react";
import Creative from "../../../public/creative.png";
import Graph from "../../../public/graph.png";
import Consulting from "../../../public/consulting.png";

const Whoweare = () => {
  return (
    <div className="h-auto py-[3rem] lg:min-h-screen lg:px-[5rem] px-[2rem] w-full">
      <div className="flex flex-col items-center mb-4">
        <h1 className="text-center font-semibold text-[30px] lg:text-[35px]">
          Who We Are?
        </h1>
        <p className="text-[14px] opacity-80">
          Transforming brands into unforgettable stories.
        </p>
      </div>
      <div className="flex flex-col gap-8 my-[2rem]">
        <div className="flex flex-col items-center justify-center gap-2 lg:gap-0">
          <h2 className="text-[20px] lg:text-[25px] font-semibold text-blue-500 text-left">
            Creative through Media
          </h2>
          <div className="flex lg:flex-row flex-col justify-center gap-4 items-center">
            <Image className="w-[13rem]" src={Creative} alt="Creative" />
            <p className="text-[16px] lg:text-[15px] opacity-90 lg:max-w-[30rem] text-justify">
              GARUD MEDIA is known for its strong dedication to consumer-focused
              storytelling in media strategy consulting. We understand that
              today&apos;s consumers are not passive observers but active
              contributors to brand stories. Our strategy is based on the idea
              that understanding consumer responses isn&apos;t about making
              assumptions, it&apos;s about adapting to changing consumer behavior
              and creating authentic strategies that connect deeply.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 lg:gap-0">
          <h2 className="text-[20px] lg:text-[25px] font-semibold text-blue-500 text-left">
            Driving Business Success Through Strategic Media Excellence
          </h2>
          <div className="flex lg:flex-row flex-col justify-center gap-4 items-center">
            <Image className="w-[13rem] mb-[2rem] " src={Graph} alt="Graph" />
            <p className="text-[16px] lg:text-[15px] opacity-90 lg:max-w-[30rem] text-justify">
              At GARUD MEDIA, we&apos;re committed to delivering real business
              results for your brand, focusing on measurable outcomes aligned
              with your goals. With a deep understanding of consumer channels,
              we optimize your presence to connect effectively. Our modern
              planning and buying approach leverages innovative techniques for
              maximum impact. Grounded in robust analytics, we derive actionable
              insights to continuously refine our strategies. We go beyond
              impressions, ensuring your brand remains relevant and drives
              meaningful results.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 lg:gap-0">
          <h2 className="text-[20px] lg:text-[25px] font-semibold text-blue-500 text-left">
            Human Centric Strategy: Crafting Culturally Rich Narratives for
            Lasting Impact
          </h2>
          <div className="flex lg:flex-row flex-col justify-center gap-4 items-center">
            <Image className="w-[13rem]" src={Creative} alt="Creative" />

            <p className="text-[16px] lg:text-[15px] opacity-90 lg:max-w-[30rem] text-justify">
              Our approach centers on human connection, creating culturally rich
              strategies that resonate deeply. We tailor our strategies to
              diverse cultures and individuals, fostering strong connections.
              Our humility and empathy drive us to adapt to change and
              understand consumer needs. We focus on personalized messages over
              generic ones, creating unique brand experiences. By listening and
              understanding, we uncover opportunities for engagement and growth,
              ensuring lasting relevance.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 lg:gap-0">
          <h2 className="text-[20px] lg:text-[25px] font-semibold text-blue-500 text-left">
            Consulting: Where Brains Meet Relevance
          </h2>
          <div className="flex lg:flex-row flex-col justify-center gap-4 items-center">
            <Image className="w-[13rem]" src={Consulting} alt="Creative" />
            <p className="text-[16px] lg:text-[15px] opacity-90 lg:max-w-[30rem] text-justify">
              Our consulting approach is all about sharp brains tuned into the
              evolving consumer landscape. We ensure your brand stands out and
              stays relevant by immersing ourselves in emerging cultural trends.
              Our team of seasoned experts offers actionable ideas and a robust
              strategic roadmap for sustainable brand relevance and growth.
              Whether you&apos;re a startup or an established brand, we&apos;re
              your secret weapon for making a real impact in the market.
            </p>
          </div>
        </div>

        <button className="hover:bg-[#1c1e49] bg-blue-500/70 p-2 rounded-[10px] font-medium w-[6rem] text-center text-white">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Whoweare;
