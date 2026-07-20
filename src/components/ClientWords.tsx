import React from "react";
import { BLOGS_DATA } from "@/constant/blogs";
import BlogCard from "./BlogCard";
import Marquee from "react-fast-marquee";
import PageHeading from "@/UI/PageHeading";
import PageName from "@/UI/PageName";
import { CLIENT_DATA } from "@/constant/client";
import ClientCard from "./ClientCard";

const ClientWords = () => {
  return (
    <div className="w-full py-20 -mt-[275px] md:-mt-[50px] bg-black">
      <div className="w-full flex flex-col justify-center items-center mb-20">
        <PageName text="CLIENT WORDS" />
        <PageHeading text="What our prestigious clients" />
        <PageHeading text="Say about us" />
      </div>
      <div className="w-full">
        <div className="hidden md:flex flex-row justify-center items-center  ">
          {/* <Marquee gradient={true} gradientColor={"#000000"} gradientWidth={88} pauseOnHover={true}> */}
          <div className="overflow-hidden w-full max-w-4xl md:w-[900px] rounded-2xl ">
            {" "}
            {/* shows only 2 cards */}
            <Marquee
              speed={50}
              pauseOnHover={true}
              gradient={true}
              gradientWidth={80}
              gradientColor="#000000"
            >
              {CLIENT_DATA.map((item, index) => {
                return (
                  <ClientCard
                    key={index}
                    image={item.imagePath}
                    name={item.name}
                    description={item.description}
                    designationText={item.designationText}
                    buttonText={"Read More"}
                  />
                );
              })}
            </Marquee>
          </div>
        </div>

        {/* <div className="md:hidden flex-col gap-4">
          {CLIENT_DATA.map((item, index) => {
            return (
              <ClientCard
                  key={index}
                  image={item.imagePath}
                  name={item.name}
                  description={item.description}
                  designationText={item.designationText}
                  buttonText={'Read More'}

                />
            );
          })}
        </div> */}
        <div className="md:hidden w-full overflow-hidden">
          <Marquee
            speed={40}
            pauseOnHover={true}
            gradient={true}
            gradientColor="#000000"
            gradientWidth={60}
          >
            {CLIENT_DATA.map((item, index) => (
              <div className="w-[330px] mx-4">
                <ClientCard
                  key={index}
                  image={item.imagePath}
                  name={item.name}
                  description={item.description}
                  designationText={item.designationText}
                  buttonText={"Read More"}
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default ClientWords;
