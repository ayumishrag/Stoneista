"use client";
import React from "react";
import { LocationData } from "@/constant/locations";
import { useRouter } from "next/navigation";
import PrimaryButton from "@/UI/PrimaryButton";
import SecondaryButton from "@/UI/SecondaryButton";
import { usePopup } from "@/components/PopupContext";
import FeatureSection from "@/components/FeatureSection";
import { useTheme } from "@/context/ThemeContext";

interface LocationPageClientProps {
  location: LocationData;
}

const LocationPageClient: React.FC<LocationPageClientProps> = ({
  location,
}) => {
  const router = useRouter();
  const { setOpen, setMode } = usePopup();
  const { theme } = useTheme();

  return (
    <div
      className="min-h-screen relative"
      style={{ backgroundColor: "var(--st-bg-page)" }}
    >
      {/* Hero Section */}
      <div
        className="relative flex flex-col items-center justify-center min-h-126 px-4 md:px-20 py-32 pt-10 overflow-hidden bg-no-repeat bg-center bg-cover"
        style={{
          backgroundImage: `url('${theme === "light" ? "/white-banner.png" : "/banner-bg.svg"}')`,
        }}
      >
        {/* Bottom fade — dissolves hero into page background */}
        <div className="absolute bottom-0 left-0 w-full h-45 pointer-events-none z-10">
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              background:
                "linear-gradient(to bottom, transparent, var(--st-bg-page))",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-16 w-full">
          {/* Title Section */}
          <div className="flex flex-col gap-6 items-center text-center w-full">
            <div className="w-full">
              <h1 className="font-awesome text-[40px] md:text-[50px] leading-12 md:leading-16 pb-1 text-transparent bg-clip-text inline-block w-full text-center banner-heading-gradient">
                {location.displayName}
              </h1>
            </div>
            <p
              className="font-figTree font-normal text-base"
              style={{ color: "var(--st-text-secondary)" }}
            >
              {location.description}
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-10 md:gap-20 pt-0 px-4 md:px-8">
        <div className="flex flex-col w-full items-center md:pt-10 pt-0 gap-20 max-w-7xl mx-auto">
          {/* --- Top: image left (50%), text right (50%) --- */}
          <div className="w-full flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-10 items-stretch">
            {/* Image left */}
            <div className="w-full md:w-[50%] h-50 md:h-75 lg:h-100 shrink-0 rounded-xs overflow-hidden">
              <img
                src={location.section1Image}
                alt={`${location.displayName} marble work`}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Text right */}
            <div className="relative flex-1 flex flex-col justify-center w-full md:w-[50%]">
              <p
                className="font-figTree font-normal text-sm md:text-lg lg:text-xl leading-relaxed lg:leading-8 tracking-tight whitespace-pre-line"
                style={{ color: "var(--st-text-secondary)" }}
              >
                {location.section1Text}
              </p>
            </div>
          </div>

          {/* --- Middle: large image with border, text centered below --- */}
          <div className="w-full flex flex-col items-center gap-6 md:gap-8 lg:gap-10">
            <div className="w-full mx-auto flex flex-col items-center justify-center">
              <div
                className="rounded-xs w-full h-60 md:h-100 lg:h-135 xl:h-160 flex items-center justify-center overflow-hidden"
                style={{ border: "1px solid var(--st-border)" }}
              >
                <img
                  src={location.section2Image}
                  alt={`${location.displayName} marble restoration`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Text below — centered */}
            <div className="w-full max-w-full md:max-w-175 lg:max-w-235 mx-auto">
              <p
                className="font-figTree font-normal text-sm md:text-lg lg:text-xl leading-relaxed lg:leading-8 tracking-tight text-center whitespace-pre-line"
                style={{ color: "var(--st-text-secondary)" }}
              >
                {location.section2Text}
              </p>
            </div>
          </div>

          {/* --- Third: text left (50%), image right (50%) --- */}
          <div className="w-full flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-10 items-stretch">
            {/* Text left */}
            <div className="flex-1 flex flex-col justify-center w-full md:w-[50%] md:order-1 order-2">
              <p
                className="font-figTree font-normal text-sm md:text-lg lg:text-xl leading-relaxed lg:leading-8 tracking-tight whitespace-pre-line"
                style={{ color: "var(--st-text-secondary)" }}
              >
                {location.section3Text}
              </p>
            </div>
            {/* Image right */}
            <div className="w-full md:w-[50%] h-50 md:h-75 lg:h-100 shrink-0 md:order-2 order-1 rounded-xs overflow-hidden">
              <img
                src={location.section3Image}
                alt={`${location.displayName} marble finishing`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <FeatureSection />
    </div>
  );
};

export default LocationPageClient;
