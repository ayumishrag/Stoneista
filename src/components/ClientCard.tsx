"use client";
import SecondaryButton from "@/UI/SecondaryButton";
import React from "react";

type ClientCardProps = {
  image: string;
  name: string;
  description: string;
  designationText: string;
  buttonText?: string;
};

const ClientCard: React.FC<ClientCardProps> = ({
  image,
  name,
  description,
  designationText,
  buttonText = "READ NOW",
}) => {
  return (
    <div className="w-full max-w-[440px] md:w-[440px] h-[600px] mx-auto md:mx-4 mb-4 border border-[#2E2E2E] rounded-xl p-4 bg-black text-white">
      <div
        className="w-full  h-[180px] overflow-hidden rounded-lg bg-center bg-contain  "
        style={{
          backgroundImage: `url(${image})`,
          height: "220px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain",
          // width: "100%",
        }}
      >
        {/* <img
          src={image}
          alt="testimonial"
          className="w-full h-full object-contain"
        /> */}
      </div>
      <div className="h-48 overflow-y-auto scroll-container ">
        <p className="text-[16px] pt-4">{description}</p>
      </div>
      <div className="bg-linear-to-t from-black to-transparent w-full h-10 relative -top-10 z-10 "></div>
      <div className="-mt-10 ">
        <h1 className="font-awesome font-[175] text-2xl py-4">{name}</h1>
        <p className="text-[16px] text-white opacity-50">{designationText}</p>
      </div>
    </div>
  );
};

export default ClientCard;
