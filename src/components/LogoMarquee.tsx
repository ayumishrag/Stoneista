import { SERVED_BRANDS } from "@/constant/brandsServed";
import React from "react";
import Marquee from "react-fast-marquee";

const LogoMarquee = () => {
  return (
    <div
      className="flex flex-col 
      border border-solid
      [border-image-source:linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.36)_50%,rgba(255,255,255,0)_100%)]
      [border-image-slice:1]
    md:border-0
    md:flex-row justify-center items-center w-full md:w-3xl md:h-22   "
    >
      <div className="h-full">
        <img src="/served_best.svg" alt="Server-Best" className="h-full w-49" />
      </div>
      <div
        className="h-full  flex justify-center items-center py-6 w-screen
      md:w-xl  
      md:py-0
      md:border border-solid
      md:[border-image-source:linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.36)_50%,rgba(255,255,255,0)_100%)]
      md:[border-image-slice:1]
      "
      >
        <Marquee
          pauseOnHover={true}
          gradient={true}
          gradientColor={"#000000"}
          gradientWidth={88}
        >
          {SERVED_BRANDS.map((item, index) => {
            return (
              <img
                src={item.imagePath}
                alt={item.name}
                className="h-10 w-full mx-10"
              />
            );
          })}
        </Marquee>
      </div>
    </div>
  );
};

export default LogoMarquee;
