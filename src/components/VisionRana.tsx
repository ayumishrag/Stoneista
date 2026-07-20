"use client";
import Image from "next/image";
import React from "react";
import PageHeading2 from "@/UI/PageHeading2";

const VisionSection = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-20 px-4 md:px-20 mb-10 md:mb-[-530px] bg-[#0A0A0A]">
      <Image
        src="/app-icon.svg"
        alt="vision icon"
        width={40}
        height={40}
        className="mb-4"
      />

      <div className="w-full md:w-lg text-center">
        <PageHeading2 text="The Vision That Built Stoneista" />
      </div>

      <div className="w-full md:w-[900px] max-w-5xl rounded-2xl px-6 md:px-7 flex flex-col md:flex-row items-center gap-4 md:gap-6">
        <div className="flex-1 text-[#FFFFFF] text-[15px] md:text-lg leading-relaxed mt-10 md:mt-20 border border-[#2E2E2E] bg-black rounded-3xl w-[388px] h-[242.3px] md:w-[840px] md:h-[522px] p-4 pt-8 md:pt-4 md:p-0">
          <div className="md:pl-10 md:pt-[50px]">
            <p className="text-[11px] sm:mt-[15px] md:text-[24px] leading-3.5 md:leading-8">
              At Stoneista, excellence is not an act,
              <br /> it is our identity.
              <br />
              Every project, big or small, receives the same
              <br />
              precision and respect.
              <br />
              We promise luxury-grade results, honest
              <br />
              service and complete customer satisfaction.
            </p>
            <div
              className="flex justify-center items-center  w-full py-0 border border-solid 
              [border-image-source:linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.36)_50%,rgba(255,255,255,0)_100%)]
              [border-image-slice:1] mt-[35px] md:mt-11"
            ></div>
            <div className="pt-5 md:pt-[50px] pb-0">
              <p className="text-[#AFAFAF] font-semibold text-[11px] md:text-xl">
                Sumit Rana
              </p>
              <p className="text-[#AFAFAF] text-[11px] text-sm md:text-xl">
                CEO & Founder, Stoneista
              </p>

              <a href="#" className="inline-block md:mt-3 ">
                <Image
                  src="/icons/linkedin.svg"
                  alt="LinkedIn"
                  width={22}
                  height={22}
                  className="w-[11px] h-[11px] md:w-[22px] md:h-[22px]"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <Image
        src="/media/ranaImage.png"
        alt="Founder"
        width={350}
        height={450}
        className="w-[174px] h-[257px] relative left-[106px] -top-60 md:relative md:left-[231px] md:top-[-617px] md:h-[558px] md:w-[377px] mt-[-50px] md:mt-0"
      />
    </div>
  );
};

export default VisionSection;
