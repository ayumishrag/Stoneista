"use client";
import Image from "next/image";
import PageHeading from "@/UI/PageHeading";
import React from "react";

const VisionSection = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-20 px-4 md:px-20">
      {/* ICON */}
      <Image
        src="/app-icon.svg"
        alt="icon"
        width={40}
        height={40}
        className="mb-4"
      />

      {/* TITLE */}
      <div className="w-92 md:w-lg ">
        <PageHeading text="The Vision That Built Stoneista" />
      </div>

      {/* MAIN CARD */}
      <div className="bg w-full max-w-5xl bg-(--st-bg-card) rounded-2xl border border-(--st-border) px-6 md:px-10 flex flex-col md:flex-row gap-6">
        {/* LEFT: TEXT (WIDER COLUMN) */}
        <div className="br absolute left-34.75 top-[5746] w-191.25">
          <p className="text-(--st-text-primary) text-sm md:text-lg leading-relaxed pt-12.5 pl-18.25">
            At Stoneista, excellence is not an act,
            <br />
            it is our identity.
            <br />
            Every project, big or small, receives the same
            <br />
            precision and respect.
            <br />
            We promise luxury-grade results, honest
            <br />
            service and complete customer satisfaction.
          </p>

          <p className="text-(--st-text-primary) font-semibold text-sm md:text-base pl-18.25">
            Sumit Rana
          </p>
          <p className="text-(--st-text-secondary) text-xs md:text-sm pl-18.25">
            CEO & Founder, Stoneista
          </p>

          <a href="#" className="inline-block mt-3 br ">
            <Image
              src="/icons/linkedin.svg"
              alt="LinkedIn"
              width={20}
              height={20}
            />
          </a>
        </div>

        {/* RIGHT: IMAGE (NARROWER COLUMN) */}
        <div className="bg w-[35%] md:w-[40%] pr-[609px]flex items-end justify-end ml-100 br">
          <Image
            src="/media/ranaImage.png"
            alt="Founder"
            width={350}
            height={450}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default VisionSection;
