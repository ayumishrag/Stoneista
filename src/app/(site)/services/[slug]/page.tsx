"use client";
import React from "react";
import { SERVICES_DATA } from "@/constant/services";
import { useParams, useRouter } from "next/navigation";
import PrimaryButton from "@/UI/PrimaryButton";
import SecondaryButton from "@/UI/SecondaryButton";
import { usePopup } from "@/components/PopupContext";
import FeatureSection from "@/components/FeatureSection";
import { useTheme } from "@/context/ThemeContext";

const ServiceDetailPage = () => {
  const params = useParams();
  const router = useRouter();
  const { setOpen, setMode } = usePopup();
  const { theme } = useTheme();
  const slug = params?.slug as string;

  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div
        className="w-full pt-20 px-4 md:px-20 min-h-screen flex items-center justify-center"
        style={{ backgroundColor: "var(--st-bg-page)" }}
      >
        <div className="text-center">
          <h1
            className="text-2xl mb-4"
            style={{ color: "var(--st-text-primary)" }}
          >
            Service Not Found
          </h1>
          <button
            onClick={() => router.push("/services")}
            className="underline"
            style={{ color: "var(--st-text-primary)" }}
          >
            Go back to Services
          </button>
        </div>
      </div>
    );
  }

  const extendedDescription =
    (service as any).detailedDescription ||
    service.description ||
    `Stoneista provides expert ${service.text.toLowerCase()} for premium marble surfaces. Our advanced techniques restore the original shine, smoothness, and natural beauty of high-end Italian and imported marble. Our process includes deep cleaning, precision treatment, and final high-gloss finishing, followed by protective sealing for long-lasting results. We understand the standards of luxury living. Our dust-controlled, eco-friendly process is safe for occupied homes and ideal for residences. Contact Stoneista for a free site inspection and customized solutions.`;

  return (
    <div
      className="min-h-screen relative"
      style={{ backgroundColor: "var(--st-bg-page)" }}
    >
      {/* Hero Section — uses same banner image as Banner component */}
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
          {/* Back Button */}
          <button
            onClick={() => router.push("/services")}
            className="flex items-center justify-center gap-2 cursor-pointer group"
          >
            <div className="flex items-center justify-center w-3 h-3">
              <img
                src="/icons/prev.svg"
                alt="Back"
                className="w-full h-full service-detail-back-icon"
              />
            </div>
            <p
              className="font-figTree font-normal text-base"
              style={{ color: "var(--st-text-secondary)" }}
            >
              Back
            </p>
          </button>

          {/* Title Section */}
          <div className="flex flex-col gap-6 items-center text-center w-full">
            <div className="w-full">
              <h1 className="font-awesome text-[40px] md:text-[50px] leading-12 md:leading-16 pb-1 text-transparent bg-clip-text inline-block w-full text-center banner-heading-gradient">
                {service.text}
              </h1>
            </div>
            <p
              className="font-figTree font-normal text-base"
              style={{ color: "var(--st-text-secondary)" }}
            >
              Exclusively for DLF Camellias, Magnolias & Aralias
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-20 pt-0 -mt-16 px-4 md:px-8">
        {/* Description Card */}
        <div
          className="rounded-2xl px-6 md:px-10 py-12 w-full max-w-200"
          style={{
            backgroundColor: "var(--st-bg-card-secondary)",
            border: "1px solid var(--st-border)",
          }}
        >
          <div
            className="font-figTree font-normal leading-7 text-base md:text-xl text-left whitespace-pre-wrap"
            style={{ color: "var(--st-text-secondary)" }}
          >
            {extendedDescription
              .split("\n\n")
              .map((paragraph: string, index: number, array: string[]) => (
                <React.Fragment key={index}>
                  <p className="mb-0">{paragraph.trim()}</p>
                  {index < array.length - 1 && <p className="mb-0">&nbsp;</p>}
                </React.Fragment>
              ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-4 md:items-start items-center">
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

      <FeatureSection />
    </div>
  );
};

export default ServiceDetailPage;
