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
    <div className="w-full max-w-110 md:w-110 h-150 mx-auto md:mx-4 mb-4 border border-(--st-border) rounded-xl p-4 bg-(--st-bg-card) text-(--st-text-primary)">
      <div
        className="w-full h-45 overflow-hidden rounded-lg bg-center bg-contain"
        style={{
          backgroundImage: `url(${image})`,
          height: "220px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain",
        }}
      ></div>
      <div className="h-48 overflow-y-auto scroll-container ">
        <p className="text-[16px] pt-4">{description}</p>
      </div>
      <div className="bg-linear-to-t from-(--st-bg-card) to-transparent w-full h-10 relative -top-10 z-10 "></div>
      <div className="-mt-10 ">
        <h1 className="font-awesome font-[175] text-2xl py-4">{name}</h1>
        <p className="text-[16px] text-(--st-text-muted)">{designationText}</p>
      </div>
    </div>
  );
};

export default ClientCard;
