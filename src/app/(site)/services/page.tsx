"use client";
import React from "react";
import { SERVICES_DATA } from "@/constant/services";
import PageName from "@/UI/PageName";
import PageHeading from "@/UI/PageHeading";
import PrimaryButton from "@/UI/PrimaryButton";
import SecondaryButton from "@/UI/SecondaryButton";
import { usePopup } from "@/components/PopupContext";
import { useRouter } from "next/navigation";
import LogoMarquee from "@/components/LogoMarquee";
import { useTheme } from "@/context/ThemeContext";

const Services = () => {
  const router = useRouter();
  const { setOpen, setMode } = usePopup();
  const { theme } = useTheme();

  return (
    <div className="min-h-screen bg-(--st-bg-page) relative">
      <div
        id="banner"
        className="absolute inset-0 min-h-[calc(100vh-80px)] w-full bg-no-repeat bg-center bg-cover"
        style={{
          backgroundImage: `url('${theme === "light" ? "/white-banner.png" : "/banner-bg.svg"}')`,
        }}
      ></div>

      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center pt-20 pb-57.5">
        <div className="w-full flex flex-col justify-center items-center mb-20">
          <PageName text="SERVICES" />
          <div className="w-60 md:w-96">
            <PageHeading text="Tailored Marble  " />
            <PageHeading text=" Care Solutions" />
          </div>
        </div>

        <div className="w-full flex items-center justify-center px-4">
          <div
            className="backdrop-blur-[28px] border border-(--st-border) w-full md:w-170"
            style={{
              minHeight: "480px",
              background: "var(--st-bg-header)",
              borderRadius: "8px",
            }}
          >
            <div
              className="grid grid-cols-1 md:grid-cols-2"
              style={{ gap: "0px" }}
            >
              {SERVICES_DATA.map((item, index) => {
                const totalCards = SERVICES_DATA.length;
                const isLeftColumn = index % 2 === 0;
                const isLastRow = index >= totalCards - (totalCards % 2);

                const handleCardClick = () => {
                  if (item.slug) {
                    router.push(`/services/${item.slug}`);
                  }
                };

                return (
                  <div
                    key={item.id ?? item.text}
                    onClick={handleCardClick}
                    className="flex items-center w-full cursor-pointer hover:bg-(--st-bg-card-secondary) transition-colors"
                    style={{
                      width: "100%",
                      height: "96px",
                      padding: "16px",
                      gap: "16px",
                      borderRight: isLeftColumn
                        ? "1px solid var(--st-border)"
                        : "none",
                      borderBottom: !isLastRow
                        ? "1px solid var(--st-border)"
                        : "none",
                    }}
                  >
                    <div
                      className="bg-(--st-bg-card-secondary) border border-(--st-border) rounded-lg flex items-center justify-center shrink-0 relative"
                      style={{ width: "64px", height: "64px" }}
                    >
                      <div
                        className="icon-gradient-wrapper"
                        style={
                          {
                            width: "28px",
                            height: "28px",
                            "--icon-mask": `url(${item.icon})`,
                          } as React.CSSProperties
                        }
                      >
                        <img
                          src={item.icon}
                          alt={item.text}
                          className="service-card-icon"
                          style={{ width: "28px", height: "28px" }}
                        />
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col min-w-0">
                      <p className="font-awesome text-[16px] text-(--st-text-primary) leading-normal whitespace-pre-wrap">
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex-1 flex px-4 flex-row justify-center gap-8 mt-20">
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

        <div className="flex flex-row h-fit justify-center items-center relative top-24">
          <LogoMarquee />
        </div>
      </div>
    </div>
  );
};

export default Services;
