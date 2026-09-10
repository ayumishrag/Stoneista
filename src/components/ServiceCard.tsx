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
      className="flex flex-col items-center text-center rounded-lg border space-y-6 px-4 md:px-6 py-8 md:py-12 cursor-pointer transition-all duration-300"
      style={{
        borderColor: "var(--st-border)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--st-border-hover)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--st-border)";
      }}
      onClick={handleClick}
    >
      <div
        className="w-15 h-15 flex items-center justify-center rounded-md border icon-container"
        style={{
          backgroundColor: "var(--st-bg-card-secondary)",
          borderColor: "var(--st-border)",
        }}
      >
        <div
          className="icon-gradient-wrapper h-6 w-6"
          style={{ "--icon-mask": `url(${icon})` } as React.CSSProperties}
        >
          <img src={icon} alt="Logo" className="h-6 w-6 service-card-icon" />
        </div>
      </div>

      <div>
        <h3
          className="text-[1.2rem] leading-7 md:text-[22px] font-semibold tracking-wide font-awesome"
          style={{ color: "var(--st-text-primary)" }}
        >
          {title}
        </h3>
      </div>
    </div>
  );
};

export default ServiceCard;
