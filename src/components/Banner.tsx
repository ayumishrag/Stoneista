"use client";
import PrimaryButton from "@/UI/PrimaryButton";
import SecondaryButton from "@/UI/SecondaryButton";
import React from "react";
import LogoMarquee from "./LogoMarquee";
import { usePopup } from "@/components/PopupContext";
import { useTheme } from "@/context/ThemeContext";

const Banner = () => {
  const { setOpen } = usePopup();
  const { mode, setMode } = usePopup();
  const { theme } = useTheme();

  return (
    <div
      id="banner"
      className="min-h-[calc(100vh-80px)] w-full bg-no-repeat bg-center bg-cover flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url('${theme === "light" ? "/white-banner.png" : "/banner-bg.svg"}')`,
      }}
    >
      <div className="w-screen md:w-lg flex flex-col  justify-center items-center   ">
        <div className="flex-1 mb-10 flex items-center justify-center">
          <div className="h-12 w-12 flex items-center justify-center">
            <img
              src={
                theme === "light"
                  ? "/bg-white-icon-cropped.svg"
                  : "/app-icon.svg"
              }
              alt="Logo"
              className="h-12 w-12"
            />
          </div>
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
                banner-heading-gradient
              "
            >
              {"Where Marble Meets Perfection"}
            </h1>
          </div>

          <div>
            <p
              className="figTree mt-8 text-sm md:text-base font-normal text-center font-figTree"
              style={{ color: "var(--st-text-secondary)" }}
            >{`Expanding in-house all design skills is costly and inflexible,
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
        className="flex flex-row justify-center items-center relative top-24"
        style={{ backgroundColor: "var(--st-bg-page)" }}
      >
        <LogoMarquee />
      </div>
    </div>
  );
};

export default Banner;
