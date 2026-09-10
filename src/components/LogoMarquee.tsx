import { SERVED_BRANDS } from "@/constant/brandsServed";
import React from "react";
import Marquee from "react-fast-marquee";

const LogoMarquee = () => {
  return (
    <div
      className="flex flex-col 
      border border-solid
      logo-marquee-border
    md:border-0
    md:flex-row justify-center items-center w-full md:w-3xl md:h-22   "
    >
      <div className="h-full">
        <img
          src="/served_best.svg"
          alt="Server-Best"
          className="h-full w-49 served-best-logo"
        />
      </div>
      <div
        className="h-full flex justify-center items-center py-6 w-screen
      md:w-xl  
      md:py-0
      md:border border-solid
      logo-marquee-inner-border
      "
      >
        <Marquee pauseOnHover={true} gradient={false}>
          {SERVED_BRANDS.map((item, index) => {
            return (
              <img
                key={index}
                src={item.imagePath}
                alt={item.name}
                className="h-10 w-full mx-10 brand-logo"
              />
            );
          })}
        </Marquee>
      </div>
    </div>
  );
};

export default LogoMarquee;
