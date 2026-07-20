import FeatureHeading from "@/UI/FeatureHeading";
import Image from "next/image";
import React from "react";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center space-y-3  ">
      {/* Icon */}
      <Image src={icon} alt={title} width={30} height={30} />

      {/* Title */}
      {/* <h3 className="text-xl font-light tracking-wide text-white">{title}</h3> */}
      <FeatureHeading text={title} />

      {/* Description */}
      {/* <p className="text-sm text-gray-300 max-w-[250px] leading-relaxed">
        {description}
      </p> */}
      <div className="w-full  "> 
       <p className="figTree  text-sm md:text-base font-normal text-[#7F7F7F] text-center font-figTree">{description}</p>
       </div>
    </div>
  );
};

export default FeatureCard;
