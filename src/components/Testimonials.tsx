import React from "react";
import { TESTIMONIALS_DATA } from "@/constant/testimonials";
import TestimonySlider from "./TestimonySlider";
import PageHeading from "@/UI/PageHeading";
import PageName from "@/UI/PageName";

const Testimonials = () => {
  return (
    <div id="testimonials" className="w-full pt-20 px-4 md:px-20 mt-20">
      <div className="w-full flex flex-col justify-center items-center mb-20">
        <PageName text="TESTIMONIALS" />
        <div className="w-92 md:w-lg   mt-5 ">
          <PageHeading text={"Trusted by Gurgaon's"} />
          <PageHeading text={"Most Prestigious Homes"} />
        </div>
      </div>
      <div className="md:px-52 rounded-2xl ">
        <TestimonySlider>
          {TESTIMONIALS_DATA.map((item, index) => {
            return (
              <div key={index} className="rounded overflow-hidden ">
                <img className="" key={index} src={item.imagePath} alt={""} />
                <div className="flex flex-col justify-between items-start h-30 md:h-[12.8rem] w-90 p-4 md:p-6 relative -top-32 left-4 md:-top-56 md:left-6 rounded bg-(--st-bg-header) backdrop-blur-[56px]">
                  <div className="">
                    <h2 className="font-awesome font-extralight!important text-[18px] text-(--st-text-primary) md:text-2xl">
                      {item.quote}
                    </h2>
                  </div>
                  <div className="text-start">
                    <h1 className="text-xs md:text-sm font-semibold text-transparent bg-clip-text banner-heading-gradient">
                      {item.author.toUpperCase()}
                    </h1>
                  </div>
                </div>
              </div>
            );
          })}
        </TestimonySlider>
      </div>
    </div>
  );
};

export default Testimonials;
