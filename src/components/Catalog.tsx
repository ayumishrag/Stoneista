"use client";
import React from "react";
import MaterialCard from "./MaterialCard";
import PrimaryButton from "@/UI/PrimaryButton";
import SecondaryButton from "@/UI/SecondaryButton";
import PageHeading from "@/UI/PageHeading";
import PageName from "@/UI/PageName";

const MATERIAL_DATA = [
  {
    icon: "/Material/material1.svg",
    text: "Italian Marble",
    description: "Elegant, timeless, and known for luxury finishes.",
  },
  {
    icon: "/Material/material2.svg",
    text: "Indian Marble",
    description: "Durable and versatile with unique patterns.",
  },
  {
    icon: "/Material/material3.svg",
    text: "Travertine",
    description: "Classic beauty with natural textures.",
  },
  {
    icon: "/Material/material4.svg",
    text: "Onyx",
    description: "Rare, translucent, and luxurious stone.",
  },
  {
    icon: "/Material/material5.svg",
    text: "Granite",
    description: "Strong and resilient with modern appeal.",
  },
  {
    icon: "/Material/material6.svg",
    text: "Imported Luxury Stones",
    description: "Exclusive stones sourced globally.",
  },
];

const Catalog = () => {
  return (
    <div className="w-full p-4 md:p-20">
      <div className="w-full flex flex-col justify-center items-center mb-10 md:mb-20">
        <div className="">
          <PageHeading text="Because Every" />
          <PageHeading text="Marble Deserves Care" />
        </div>
        <p className="text-center pt-6 w-screen md:w-2xl text-[#C5C5C5]">
          {
            "Premium storytelling copy about how marble is a living stone, needs care to retain its beauty, and reflects the luxury of the home."
          }
        </p>
      </div>
      <div className="w-full">
        <div
          className="text-transparent
          py-4
          md:py-0
          my-10 text-center"
        >
          <PageName text={"Types of Marble We Specialize In:".toUpperCase()} />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {MATERIAL_DATA.map((item, index) => {
            return (
              <div
                key={index}
                className="mb-16 md:mb-0 mt-8 border border-[#3C3C3C]
                transition-all duration-300 hover:scale-[1.02] hover:border-[#444]
                "
              >
                <MaterialCard
                  image={item.icon}
                  title={item.text}
                  description={item.description}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex-1 flex flex-row justify-center gap-8 mt-20">
        <PrimaryButton
          text="book service"
          onClick={() => {
            console.log("Book Service clicked");
          }}
        />
        <SecondaryButton
          text="contact us"
          onClick={() => {
            console.log("Book Service clicked");
          }}
        />
      </div>
    </div>
  );
};

export default Catalog;
