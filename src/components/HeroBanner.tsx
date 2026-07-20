"use client";
import Image from "next/image";
import React from "react";

const HeroBanner = () => {
  return (
    <div className="relative bg-[url('/bg2.png')] bg-cover bg-center  w-[420px] h-60   flex flex-col items-center justify-center md:w-full md:h-[400px] mt-20 py-0">
      <div className="absolute inset-0 bg-[#000000D6]" />
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-6">
        <Image
          src="/logo_new.svg"
          alt="Logo"
          width={260}
          height={260}
          className="object-contain mb-6"
        />
      </div>
    </div>
  );
};

export default HeroBanner;
