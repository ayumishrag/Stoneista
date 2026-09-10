import React from "react";
import BlogCard from "./BlogCard";
import Marquee from "react-fast-marquee";
import PageHeading from "@/UI/PageHeading";
import PageName from "@/UI/PageName";
import { getPayload } from "payload";
import config from "@payload-config";

async function getBlogs() {
  try {
    const payload = await getPayload({ config });
    const data = await payload.find({
      collection: "posts",
      depth: 1,
    });
    return Array.isArray(data.docs) ? data.docs : [];
  } catch (error) {
    console.error("Failed to fetch blogs:", error);
    return [];
  }
}

const Blogs = async () => {
  const blogs = await getBlogs();

  if (!blogs || blogs.length === 0) {
    return null;
  }

  return (
    <div className="w-full py-20">
      <div className="w-full flex flex-col justify-center items-center mb-20">
        <PageName text="BLOGS" />
        <PageHeading text="Our Expertise in words" />
      </div>

      <div className="w-full">
        {/* DESKTOP */}
        <div className="hidden md:flex flex-row justify-center items-center">
          <Marquee gradient={true} gradientColor={"#000000"} gradientWidth={88}>
            {blogs.map((item: any, index: number) => (
              <BlogCard
                key={index}
                image={item.featuredImage?.url || "/blog.svg"}
                quote={item.heading || item.title || ""}
                slug={item.slug}
                buttonText={"READ NOW"}
              />
            ))}
          </Marquee>
        </div>

        {/* MOBILE */}
        <div className="md:hidden flex flex-col gap-4">
          {blogs.map((item: any, index: number) => (
            <BlogCard
              key={index}
              image={item.featuredImage?.url || "/blog.svg"}
              quote={item.excerpt || item.title || ""}
              slug={item.slug}
              buttonText={"READ NOW"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
