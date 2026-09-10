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
    <div className="w-full py-20 -mt-68.75 md:-mt-12.5 bg-(--st-bg-page)">
      <div className="w-full flex flex-col justify-center items-center mb-20">
        <PageName text="CLIENT WORDS" />
        <PageHeading text="What our prestigious clients" />
        <PageHeading text="Say about us" />
      </div>
      <div className="w-full">
        <div className="hidden md:flex flex-row justify-center items-center  ">
          <div className="overflow-hidden w-full max-w-4xl md:w-225 rounded-2xl ">
            <Marquee speed={50} pauseOnHover={true} gradient={false}>
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

        <div className="md:hidden w-full overflow-hidden">
          <Marquee speed={40} pauseOnHover={true} gradient={false}>
            {CLIENT_DATA.map((item, index) => (
              <div className="w-82.5 mx-4">
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
