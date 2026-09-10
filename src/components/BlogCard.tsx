"use client";
import SecondaryButton from "@/UI/SecondaryButton";
import React from "react";
import Link from "next/link";

type BlogCardProps = {
  image: string;
  quote: string;
  slug: string;
  buttonText?: string;
};

const BlogCard: React.FC<BlogCardProps> = ({
  image,
  quote,
  slug,
  buttonText = "READ NOW",
}) => {
  return (
    <div className="max-w-xl mx-4 mb-4 border border-(--st-border) p-4 bg-(--st-bg-card) text-(--st-text-primary) bg-[url('/blog-bg.svg')] bg-no-repeat bg-position-[bottom_right] h-100">
      <div className="overflow-hidden">
        <img
          src={image}
          alt="testimonial"
          className="w-full h-50  object-cover"
        />
      </div>

      <p className="font-awesome text-[18px] md:text-2xl font-[175]">{quote}</p>

      <div className="mt-6">
        <Link href={`/blogs/${slug}`}>
          <SecondaryButton
            text={buttonText}
            onClick={() => {
              console.log(quote);
            }}
          />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
