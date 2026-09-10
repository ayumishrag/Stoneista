"use client";
import Image from "next/image";
import React from "react";
import PageHeading2 from "@/UI/PageHeading2";

const VisionSection = () => {
  return (
    <div
      className="w-full flex flex-col items-center justify-center py-20 px-4 md:px-20 mb-10 md:-mb-132.5"
      style={{ backgroundColor: "var(--st-bg-page)" }}
    >
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

      <div className="w-full md:w-225 max-w-5xl rounded-2xl px-6 md:px-7 flex flex-col md:flex-row items-center gap-4 md:gap-6">
        <div
          className="flex-1 text-[15px] md:text-lg leading-relaxed mt-10 md:mt-20 rounded-3xl w-97 h-60.75 md:w-210 md:h-130.5 p-4 md:pt-12.5 md:p-0 border"
          style={{
            color: "var(--st-text-primary)",
            backgroundColor: "var(--st-bg-card)",
            borderColor: "var(--st-border)",
          }}
        >
          <div className="md:pl-10 md:pt-12.5">
            <p className="text-[11px] sm:mt-3.75 md:text-[24px] leading-3.5 md:leading-8">
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
              className="flex justify-center items-center w-full py-0 border border-solid 
              [border-image-source:linear-gradient(90deg,rgba(128,128,128,0)_0%,rgba(128,128,128,0.36)_50%,rgba(128,128,128,0)_100%)]
              [border-image-slice:1] mt-8.75 md:mt-11"
            ></div>
            <div className="pt-5 md:pt-12.5 pb-0">
              <p
                className="font-semibold text-[11px] md:text-xl"
                style={{ color: "var(--st-text-muted)" }}
              >
                Sumit Rana
              </p>
              <p
                className="text-[11px] text-sm md:text-xl"
                style={{ color: "var(--st-text-muted)" }}
              >
                CEO & Founder, Stoneista
              </p>

              <a href="#" className="inline-block md:mt-3 ">
                <Image
                  src="/icons/linkedin.svg"
                  alt="LinkedIn"
                  width={22}
                  height={22}
                  className="w-2.75 h-2.75 md:w-5.5 md:h-5.5 vision-linkedin-icon"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Dark theme founder image */}
      <Image
        src="/media/ranaImage.png"
        alt="Founder"
        width={350}
        height={450}
        className="w-43.5 h-64.25 relative left-26.5 -top-60 md:relative md:left-57.75 md:-top-154.25 md:h-139.5 md:w-94.25 -mt-12.5 md:mt-0 vision-founder-dark"
      />
      {/* Light theme founder image */}
      <div className="vision-founder-light w-43.5 h-64.25 relative left-26.5 -top-60 md:relative md:left-57.75 md:-top-154.25 md:h-139.5 md:w-94.25 -mt-12.5 md:mt-0">
        <Image
          src="/media/ranabro.png"
          alt="Founder"
          width={350}
          height={450}
          className="w-full h-full object-cover object-top"
        />
        <div className="vision-founder-light-fade" />
      </div>
    </div>
  );
};

export default VisionSection;
