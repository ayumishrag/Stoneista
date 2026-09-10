"use client";
import Image from "next/image";
import React from "react";
import { useTheme } from "@/context/ThemeContext";

const HeroBanner = () => {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <div className="relative bg-[url('/bg2.png')] bg-cover bg-center w-105 h-60 flex flex-col items-center justify-center md:w-full md:h-100 mt-20 py-0">
      {/* Overlay — lighter in light mode so the dark bg image shows through, giving logo contrast */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: isLight ? "#1a1008" : "var(--st-bg-page)",
          opacity: isLight ? 0.55 : 0.84,
        }}
      />
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-6">
        <Image
          src="/logo_new.svg"
          alt="Logo"
          width={260}
          height={48}
          className="object-contain mb-6"
          style={
            isLight
              ? {
                  filter:
                    "drop-shadow(0 2px 8px rgba(0,0,0,0.8)) brightness(1.3)",
                }
              : undefined
          }
        />
      </div>
    </div>
  );
};

export default HeroBanner;
