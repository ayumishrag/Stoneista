"use client";
import React from "react";
import { LocationData } from "@/constant/locations";
import { useRouter } from "next/navigation";
import PrimaryButton from "@/UI/PrimaryButton";
import SecondaryButton from "@/UI/SecondaryButton";
import { usePopup } from "@/components/PopupContext";
import FeatureSection from "@/components/FeatureSection";

interface LocationPageClientProps {
  location: LocationData;
}

const LocationPageClient: React.FC<LocationPageClientProps> = ({
  location,
}) => {
  const router = useRouter();
  const { setOpen, setMode } = usePopup();

  return (
    <div className="min-h-screen bg-black relative">
      {/* Hero Section */}
      <div className="relative backdrop-blur-[28px] bg-black flex flex-col items-center justify-center min-h-[504px] px-4 md:px-20 py-32 pt-10 overflow-hidden">
        {/* Background Image */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[2026px] h-[900px]">
          <div className="absolute inset-0 pointer-events-none">
            <img
              src="/banner-bg.svg"
              alt="Marble texture"
              className="absolute object-cover w-full h-full object-center"
            />
          </div>
          <div className="absolute bottom-0 left-0 w-full h-[180px] pointer-events-none z-10">
            <div
              className="w-full h-full"
              style={{
                backdropFilter: "blur(64px)",
                WebkitBackdropFilter: "blur(64px)",
                maskImage:
                  "linear-gradient(to bottom, transparent 0%, black 70%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, transparent 0%, black 70%)",
              }}
            />
            <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent via-black/80 to-black" />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col hover:text-white items-center gap-16 w-full">
          {/* Title Section */}
          <div className="flex flex-col gap-6 items-center text-center w-full">
            <div className="w-full">
              <h1
                className="font-awesome text-[40px] md:text-[50px] leading-12 md:leading-16 pb-1 text-transparent bg-clip-text inline-block w-full text-center"
                style={{
                  backgroundImage:
                    "linear-gradient(173.69deg, rgba(255, 255, 255, 1) 25%, rgba(156, 156, 156, 1) 64.712%, rgba(215, 215, 215, 1) 78.636%)",
                }}
              >
                {location.displayName}
              </h1>
            </div>
            <p className="font-figTree font-normal text-[#c5c5c5] text-base">
              {location.description}
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-10 md:gap-20 pt-0 px-4 md:px-8">
        {/* Description Card */}
        <div className="flex flex-col w-full items-center md:pt-[40px] pt-[0px]  gap-[80px] max-w-[1280px] mx-auto">
          {/* --- Top: image left (45%), text right (55%) --- */}
          <div className="w-full flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-[40px] items-stretch">
            {/* Image left - 45% */}
            <div className="w-full md:w-[50%] h-[200px] md:h-[300px] lg:h-[400px] flex-shrink-0 rounded-[2px] overflow-hidden">
              <img
                src={location.section1Image}
                alt={`${location.displayName} marble work`}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Text right - 55% */}
            <div className="relative flex-1 flex flex-col justify-center w-full md:w-[50%]">
              <p className="font-figTree font-normal text-[#C5C5C5] text-sm md:text-lg lg:text-xl leading-relaxed md:leading-relaxed lg:leading-[32px] tracking-tight whitespace-pre-line">
                {location.section1Text}
              </p>
            </div>
          </div>

          {/* --- Middle: Large rectangle with border, text centered below --- */}
          <div className="w-full flex flex-col items-center gap-6 md:gap-8 lg:gap-[40px]">
            <div className="w-full mx-auto flex flex-col items-center justify-center">
              <div className="border border-[#3C3C3C] rounded-[2px] w-full h-[240px] md:h-[400px] lg:h-[540px] xl:h-[640px] flex items-center justify-center overflow-hidden">
                <img
                  src={location.section2Image}
                  alt={`${location.displayName} marble restoration`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Text below - centered */}
            <div className="w-full max-w-full md:max-w-[700px] lg:max-w-[940px] mx-auto">
              <p className="font-figTree font-normal text-[#C5C5C5] text-sm md:text-lg lg:text-xl leading-relaxed md:leading-relaxed lg:leading-[32px] tracking-tight text-center whitespace-pre-line">
                {location.section2Text}
              </p>
            </div>
          </div>

          {/* --- Third: text left (55%), image right (45%) --- */}
          <div className="w-full flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-[40px] items-stretch">
            {/* Text area left - 55% */}
            <div className="flex-1 flex flex-col justify-center w-full md:w-[50%] md:order-1 order-2">
              <p className="font-figTree font-normal text-[#C5C5C5] text-sm md:text-lg lg:text-xl leading-relaxed md:leading-relaxed lg:leading-[32px] tracking-tight whitespace-pre-line">
                {location.section3Text}
              </p>
            </div>
            {/* Image right - 45% */}
            <div className="w-full md:w-[50%] h-[200px] md:h-[300px] lg:h-[400px] flex-shrink-0 md:order-2 order-1 rounded-[2px] overflow-hidden">
              <img
                src={location.section3Image}
                alt={`${location.displayName} marble finishing`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
      </div>

      <FeatureSection />
    </div>
  );
};

export default LocationPageClient;
