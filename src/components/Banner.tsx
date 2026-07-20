"use client";
import PrimaryButton from "@/UI/PrimaryButton";
import SecondaryButton from "@/UI/SecondaryButton";
import React from "react";
import LogoMarquee from "./LogoMarquee";
import { usePopup } from "@/components/PopupContext";

const Banner = () => {
  const { setOpen } = usePopup();
  const { mode, setMode } = usePopup();

  return (
    <div
      id="banner"
      className="min-h-[calc(100vh-80px)] w-full bg-no-repeat bg-center bg-cover   flex flex-col justify-center items-center"
      style={{ backgroundImage: "url('/banner-bg.svg')" }}
    >
      <div className="w-screen md:w-lg flex flex-col  justify-center items-center   ">
        <div className="flex-1  mb-10">
          <img src="/app-icon.svg" alt="Logo" className="h-12 w-12" />
        </div>
        <div className="flex-2 my-10 mx-4 w-screen px-4 md:px-0 md:w-lg ">
          <div className="flex justify-center items-center md:px-14">
            <h1
              className="
                text-5xl
                md:text-6xl
                w-80 md:w-96
                leading-14
                font-awesome
                text-center
                inline-block
                text-transparent
                bg-clip-text
                [background-image:linear-gradient(135deg,_#FFFFFF_25%,_#9C9C9C_43.31%,_#D7D7D7_78.64%)]
              "
            >
              {"Where Marble Meets Perfection"}
            </h1>
          </div>

          <div>
            <p className="figTree mt-8 text-sm md:text-base font-normal text-[#7F7F7F] text-center font-figTree">{`Expanding in-house all design skills is costly and inflexible,
            complicating the search for multi-skilled talent and increasing
            overhead.`}</p>
          </div>
        </div>
        <div className="flex-1 flex flex-row justify-center gap-8">
          <PrimaryButton
            text="book service"
            onClick={() => {
              setMode("service");
              setOpen(true);
            }}
          />
          <SecondaryButton
            text="Download brochure"
            onClick={() => {
              setMode("brochure");
              setOpen(true);
            }}
          />
        </div>
      </div>
      <div
        className="flex flex-row justify-center items-center relative top-24
      sm: bg-stblack  
      "
      >
        <LogoMarquee />
      </div>
    </div>
  );
};

export default Banner;
