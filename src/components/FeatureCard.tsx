import FeatureHeading from "@/UI/FeatureHeading";
import Image from "next/image";
import React from "react";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center space-y-3">
      {/* Icon */}
      <div
        className="icon-gradient-wrapper"
        style={
          {
            width: 30,
            height: 30,
            "--icon-mask": `url(${icon})`,
          } as React.CSSProperties
        }
      >
        <Image
          src={icon}
          alt={title}
          width={30}
          height={30}
          className="service-card-icon"
        />
      </div>

      {/* Title */}
      <FeatureHeading text={title} />

      {/* Description */}
      <div className="w-full">
        <p
          className="figTree text-sm md:text-base font-normal text-center font-figTree"
          style={{ color: "var(--st-text-secondary)" }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
