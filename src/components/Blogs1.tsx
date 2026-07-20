import React from "react";
import BlogCard from "./BlogCard";
import Marquee from "react-fast-marquee";
import PageHeading from "@/UI/PageHeading";
import PageName from "@/UI/PageName";

async function getBlogs() {
  try {
    const res = await fetch("http://localhost:3000/api/posts?depth=1", {
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("Failed to fetch blogs:", res.status);
      return [];
    }

    const data = await res.json();
    return Array.isArray(data.docs) ? data.docs : [];
  } catch (error) {
    console.error("Fetch failed:", error);
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
