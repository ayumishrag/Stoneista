import React from "react";
import { BLOGS_DATA } from "@/constant/blogs";
import BlogCard from "./BlogCard";
import Marquee from "react-fast-marquee";
import PageHeading from "@/UI/PageHeading";
import PageName from "@/UI/PageName";

const Blogs = () => {
  return (
    <div className="w-full py-20">
      <div className="w-full flex flex-col justify-center items-center mb-20">
        <PageName text="BLOGS" />
        <PageHeading text="Our Expertise in words" />
      </div>
      <div className="w-full">
        <div className="hidden md:flex flex-row justify-center items-center">
          <Marquee gradient={true} gradientColor={"#000000"} gradientWidth={88}>
            {BLOGS_DATA.map((item, index) => {
              return (
                <BlogCard
                  key={index}
                  image={item.imagePath}
                  slug={item.slug}
                  quote={item.quote}
                />
              );
            })}
          </Marquee>
        </div>

        <div className="md:hidden flex-col gap-4">
          {BLOGS_DATA.map((item, index) => {
            return (
              <BlogCard key={index} image={item.imagePath} quote={item.quote} slug={item.slug} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
