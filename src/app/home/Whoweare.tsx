import React from "react";
import Whowearecontents from "../components/Whowearecontents";

interface ContentType {
  id: number;
  title: string;
  video: string;
  paragraph: string;
}

const Content: ContentType[] = [
  {
    id: 1,
    title: "Incorporating Creativity with Digital Media ",
    video: "/videos/Creative.mp4",
    paragraph:
      "GARUD MEDIA is known for its strong dedication to consumer-focused storytelling in media strategy consulting. We understand that today's consumers are not passive observers but active contributors to brand stories. Our strategy is based on the idea that understanding consumer responses isn't about making assumptions, it's about adapting to changing consumer behavior and creating authentic strategies that connect deeply. ",
  },
  {
    id: 2,
    title: "Driving Business Success Through Strategic Media Excellence",
    video: "/videos/Graph.mp4",
    paragraph:
      "At GARUD MEDIA, we're committed to delivering real business results for your brand, focusing on measurable outcomes aligned with your goals. With a deep understanding of consumer channels, we optimize your presence to connect effectively. Our modern planning and buying approach leverages innovative techniques for maximum impact. Grounded in robust analytics, we derive actionable insights to continuously refine our strategies. We go beyond impressions, ensuring your brand remains relevant and drives meaningful results.",
  },
  {
    id: 3,
    title:
      "Human Centric Strategy: Crafting Culturally Rich Narratives for Lasting Impact",
    video: "/videos/Human.mp4",
    paragraph:
      "Our approach centers on human connection, creating culturally rich strategies that resonate deeply. We tailor our strategies to diverse cultures and individuals, fostering strong connections. Our humility and empathy drive us to adapt to change and understand consumer needs. We focus on personalized messages over generic ones, creating unique brand experiences. By listening and understanding, we uncover opportunities for engagement and growth, ensuring lasting relevance.",
  },
  {
    id: 4,
    title: "Consulting: Where Brains Meet Relevance",
    video: "/videos/Consulting.mp4",
    paragraph:
      "Our consulting approach is all about sharp brains tuned into the evolving consumer landscape. We ensure your brand stands out and stays relevant by immersing ourselves in emerging cultural trends. Our team of seasoned experts offers actionable ideas and a robust strategic roadmap for sustainable brand relevance and growth. Whether you're a startup or an established brand, we're your secret weapon for making a real impact in the market.",
  },
];

const Whoweare = () => {
  return (
    <div>
      <div className="relative h-auto py-[3rem] lg:min-h-screen lg:px-[5rem] px-[2rem] w-full overflow-hidden">
        <div className="flex flex-col items-center mb-4">
          <h1 className="text-center font-semibold text-[30px] lg:text-[35px]">
            Who We Are?
          </h1>
          <p className="text-[14px] opacity-80">
            Transforming brands into unforgettable stories.
          </p>
        </div>
        <div className=" flex flex-col gap-[6rem] my-[2rem] ">
          {Content.map((items) => (
            <div
              key={items.id}
              className="flex flex-col justify-center gap-2 lg:gap-[4rem]"
            >
              <Whowearecontents
                id={items.id}
                title={items.title}
                video={items.video}
                paragraph={items.paragraph}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Whoweare;
