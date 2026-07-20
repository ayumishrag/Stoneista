"use client";
import React, { useState, useEffect } from "react";
import PrimaryButton from "@/UI/PrimaryButton";
import SecondaryButton from "@/UI/SecondaryButton";
import PageHeading from "@/UI/PageHeading";
import PageName from "@/UI/PageName";
import ServiceCard from "./ServiceCard";
import { SERVICES_DATA } from "@/constant/services";
import { usePopup } from "@/components/PopupContext";
import { motion, AnimatePresence } from "framer-motion";

const Services = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState("right");
  const { setOpen } = usePopup();
  const { mode, setMode } = usePopup();

  // Use only first 9 services for home page
  const homePageServices = SERVICES_DATA.slice(0, 9);
  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(homePageServices.length / itemsPerSlide);

  // Go to next (infinite)
  const next = () => {
    setDirection("right");
    setCurrent((prev) =>
      prev + itemsPerSlide >= homePageServices.length ? 0 : prev + itemsPerSlide
    );
  };

  // Go to previous (infinite)
  const prev = () => {
    setDirection("left");
    setCurrent((prev) =>
      prev === 0 ? (totalSlides - 1) * itemsPerSlide : prev - itemsPerSlide
    );
  };

  //   // Autoplay every 3s
  //   useEffect(() => {
  //     const slider = setInterval(() => {
  //       next();
  //     }, 3000);

  //     return () => clearInterval(slider);
  //   }, []);

  const visibleCards = homePageServices.slice(current, current + itemsPerSlide);

  return (
    <div id="services" className="w-full pt-20 px-4 md:px-20">
      {/* Heading */}
      <div className="w-full flex flex-col justify-center items-center mb-20">
        <PageName text="SERVICES" />
        <div className="w-60 md:w-96">
          <PageHeading text="Tailored Marble  " />
          <PageHeading text=" Care Solutions" />
        </div>
      </div>

      {/* Slider Wrapper */}
      <div className="relative w-full flex items-center justify-center">
        {/* LEFT ARROW */}
        <button
          onClick={prev}
          className="absolute left-0 cursor-pointer md:-left-3 flex items-center justify-center md:p-3 p-2.5 rounded-full border border-[#2A2A2A]  transition"
        >
          <img
            src="/icons/prev.svg"
            alt="prev"
            className="md:h-5 md:w-5 h-3 w-3  "
          />
        </button>

        {/* Cards
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full px-10 transition-all duration-500">
          {visibleCards.map((item, index) => (
            <ServiceCard
              key={item.id}
              icon={item.icon}
              title={item.text}
              description={item.description}
            />
          ))}
        </div> */}
        <div className="overflow-hidden w-full px-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ x: direction === "right" ? 1272 : -1272, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction === "right" ? -1272 : 1272, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {visibleCards.map((item) => (
                <ServiceCard
                  key={item.id ?? item.text}
                  icon={item.icon}
                  title={item.text}
                  description={item.description}
                  slug={item.slug}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* RIGHT ARROW */}
        <button
          onClick={next}
          className="absolute right-0 cursor-pointer md:-right-3 flex items-center justify-center md:p-3 p-2.5 rounded-full border border-[#2A2A2A]     transition"
        >
          <img
            src="/icons/next.svg"
            alt="next"
            className="md:h-5 md:w-5 h-3 w-3   "
          />
        </button>
      </div>

      {/* CTA Buttons */}
      <div className="flex-1 flex flex-row justify-center gap-8 mt-20 ">
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
  );
};

export default Services;
