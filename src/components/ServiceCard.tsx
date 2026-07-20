"use client";
import React from "react";
import { useRouter } from "next/navigation";

type ServiceCardProps = {
  icon: string;
  title: string;
  description: string;
  slug?: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  slug,
}) => {
  const router = useRouter();

  const handleClick = () => {
    if (slug) {
      router.push(`/services/${slug}`);
    }
  };

  return (
    <div
      className="flex flex-col items-center text-center rounded-lg border border-[#292929] space-y-6 px-4 md:px-6 py-8 md:py-12 cursor-pointer transition-all duration-300  hover:border-[#444]"
      onClick={handleClick}
    >
      <div className="w-15 h-15 flex items-center justify-center rounded-md bg-[#0E0E0E] border border-[#2A2A2A] shadow-[0_0_72px_4px_#FFC09233]">
        <img src={icon} alt="Logo" className="h-6 w-6" />
      </div>

      <div>
        <h3 className="text-white text-[1.2rem] leading-7 md:text-[22px] font-semibold tracking-wide font-awesome">
          {title}
        </h3>

        {/* <p className="text-[#7F7F7F] text-base max-w-md">{description}</p> */}
      </div>
    </div>
  );
};

export default ServiceCard;
