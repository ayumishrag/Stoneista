"use client";
import React from "react";
import PrimaryButton from "@/UI/PrimaryButton";
import ServiceCard from "./ServiceCard";
import SecondaryButton from "@/UI/SecondaryButton";
import PageHeading from "@/UI/PageHeading";
import PageName from "@/UI/PageName";
import { SERVICES_DATA } from "@/constant/services";
import { usePopup } from "@/components/PopupContext";

const Services = () => {
  const { setOpen } = usePopup();
  const { mode, setMode } = usePopup();
  return (
    <div id="services" className="w-full pt-20 px-4 md:px-20 br">
      <div className="w-full flex flex-col justify-center items-center mb-20 br">
        <PageName text="SERVICES" />
        <div className="w-60 md:w-96 ">
          <PageHeading text="Tailored Marble Care Solutions" />
        </div>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-3 gap-4 br">
        {SERVICES_DATA.map((item, index) => {
          return (
            <div key={index} className="md:p-4">
              <ServiceCard
                icon={item.icon}
                title={item.text}
                description={item.description}
              />
            </div>
          );
        })}
      </div>
      <div className="flex-1 flex flex-row justify-center gap-8 mt-20 bg">
        <PrimaryButton
          text="book service"
          onClick={() => {
            setMode("service");
            setOpen(true);
          }}
        />
        <SecondaryButton
          text="contact us"
          onClick={() => {
            setMode("brochure");
            setOpen(true);
          }}
        />
      </div>
    </div>
  );
};

export default Services;
