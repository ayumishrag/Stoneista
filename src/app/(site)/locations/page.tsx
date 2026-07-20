"use client";
import React from "react";
import { LOCATIONS_DATA } from "@/constant/locations";
import PageName from "@/UI/PageName";
import PageHeading from "@/UI/PageHeading";
import PrimaryButton from "@/UI/PrimaryButton";
import SecondaryButton from "@/UI/SecondaryButton";
import { usePopup } from "@/components/PopupContext";
import { useRouter } from "next/navigation";
import LogoMarquee from "@/components/LogoMarquee";

const Locations = () => {
  const router = useRouter();
  const { setOpen, setMode } = usePopup();

  // Map location names to their brand icons
  const getLocationIcon = (locationName: string) => {
    const iconMap: { [key: string]: string } = {
      "DLF The Camellias": "/brands/camellias.svg",
      "DLF The Aralias": "/brands/aralias.svg",
      "DLF The Magnolias": "/brands/magnolias.svg",
    };
    return iconMap[locationName] || "/brands/camellias.svg";
  };

  return (
    <div className="min-h-screen bg-[#000000] relative">
      {/* Background Banner */}
      <div
        id="banner"
        className="absolute inset-0 min-h-[calc(100vh-80px)] w-full bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: "url('/banner-bg.svg')" }}
      ></div>

      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center pt-20 pb-[230px]">
        <div className="w-full flex flex-col justify-center items-center mb-20">
          <PageName text="LOCATIONS" />
          <div className="w-60 md:w-96">
            <PageHeading text="Premium Marble" />
            <PageHeading text="Care Locations" />
          </div>
        </div>
        {/* Content layer */}

        <div className="w-full flex items-center justify-center px-4">
          <div
            className="backdrop-blur-[28px] border border-[#282828] w-full md:w-[680px]"
            style={{
              background: "#000000B2",
              borderRadius: "8px",
            }}
          >
            <div className="flex flex-col" style={{ gap: "0px" }}>
              {LOCATIONS_DATA.map((item, index) => {
                const isLastItem = index === LOCATIONS_DATA.length - 1;

                const handleCardClick = () => {
                  // Navigate to location detail page
                  if (item.slug) {
                    router.push(`/locations/${item.slug}`);
                  }
                };

                return (
                  <div
                    key={item.id ?? item.name}
                    onClick={handleCardClick}
                    className="flex items-center w-full cursor-pointer hover:bg-[#101010] transition-colors"
                    style={{
                      width: "100%",
                      padding: "16px",
                      gap: "16px",
                      borderBottom: !isLastItem ? "1px solid #282828" : "none",
                    }}
                  >
                    <div
                      className="bg-[#101010] border border-[#2a2a2a] rounded-lg flex items-center justify-center shrink-0 relative"
                      style={{ width: "64px", height: "64px" }}
                    >
                      <img
                        src={getLocationIcon(item.name)}
                        alt={item.displayName}
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                        style={{ width: "28px", height: "28px" }}
                      />
                    </div>
                    <div className="flex flex-1 flex-col min-w-0">
                      <p className="font-awesome text-[16px] text-white leading-normal whitespace-pre-wrap">
                        {item.displayName}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex-1 flex px-4 flex-row justify-center gap-8 mt-20 ">
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

        <div
          className="flex flex-row h-fit justify-center items-center relative top-24
      sm: bg-stblack  
      "
        >
          <LogoMarquee />
        </div>
      </div>
    </div>
  );
};

export default Locations;
