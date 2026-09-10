import React from "react";
import CustomSlider from "./CustomSlider";
import PageHeading from "@/UI/PageHeading";
import PageName from "@/UI/PageName";
import { GALLERY_IMAGES } from "@/constant/galleryImages";

const Gallery = () => {
  return (
    <div id="gallery" className="w-full pt-20 px-4 md:px-20">
      <div className="w-full flex flex-col justify-center items-center mb-20">
        <PageName text="GALLERY" />
        <PageHeading text="Our Best Work" />
      </div>
      <div className="px-4 md:px-52">
        <CustomSlider>
          {GALLERY_IMAGES.map((image, index) => {
            return (
              <div key={index}>
                <img
                  key={index}
                  src={image.imgURL}
                  alt={image.imgAlt}
                  width={936}
                  height={621}
                  className="h-full w-full mb-4"
                />
                <div className="flex flex-row justify-center items-center px-3">
                  <h1 className="text-sm font-semibold text-transparent bg-clip-text banner-heading-gradient">
                    {image.imageLabel.toUpperCase()}
                  </h1>
                </div>
              </div>
            );
          })}
        </CustomSlider>
      </div>
    </div>
  );
};

export default Gallery;
