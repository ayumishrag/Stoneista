"use client";
import React from "react";
import { SERVICES_DATA } from "@/constant/services";
import { useParams, useRouter } from "next/navigation";
import PrimaryButton from "@/UI/PrimaryButton";
import SecondaryButton from "@/UI/SecondaryButton";
import { usePopup } from "@/components/PopupContext";
import FeatureSection from "@/components/FeatureSection";
import Testimonials from "@/components/Testimonials";

const ServiceDetailPage = () => {
  const params = useParams();
  const router = useRouter();
  const { setOpen, setMode } = usePopup();
  const slug = params?.slug as string;

  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="w-full pt-20 px-4 md:px-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-white text-2xl mb-4">Service Not Found</h1>
          <button
            onClick={() => router.push("/services")}
            className="text-white underline"
          >
            Go back to Services
          </button>
        </div>
      </div>
    );
  }

  // Extended description for the service detail page
  const extendedDescription =
    (service as any).detailedDescription ||
    service.description ||
    `Stoneista provides expert ${service.text.toLowerCase()} for premium marble surfaces. Our advanced techniques restore the original shine, smoothness, and natural beauty of high-end Italian and imported marble. Our process includes deep cleaning, precision treatment, and final high-gloss finishing, followed by protective sealing for long-lasting results. We understand the standards of luxury living. Our dust-controlled, eco-friendly process is safe for occupied homes and ideal for residences. Contact Stoneista for a free site inspection and customized solutions.`;

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
          {/* Back Button */}
          <button
            onClick={() => router.push("/services")}
            className="flex items-center justify-center gap-2 cursor-pointer hover:text-white group"
          >
            <div className="flex items-center justify-center w-3 h-3 ">
              <img src="/icons/prev.svg" alt="Back" className="w-full h-full" />
            </div>
            <p className="font-figTree font-normal text-[#c5c5c5] hover:text-white text-base">
              Back
            </p>
          </button>

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
                {service.text}
              </h1>
            </div>
            <p className="font-figTree font-normal text-[#c5c5c5] text-base">
              Exclusively for DLF Camellias, Magnolias & Aralias
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-20  pt-0 -mt-16 px-4 md:px-8">
        {/* Description Card */}
        <div className="bg-[#080808] border border-[#2E2E2E] rounded-2xl px-6 md:px-10 py-12 w-full max-w-[800px]">
          <div className="font-figTree font-normal leading-7 text-[#c5c5c5] text-base md:text-xl text-left whitespace-pre-wrap">
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
        <div className="flex flex-col md:flex-row  gap-4 md:items-start items-center">
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
