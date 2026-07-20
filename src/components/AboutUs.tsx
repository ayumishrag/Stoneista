import PageHeading from "@/UI/PageHeading";
import PageName from "@/UI/PageName";
import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div id="aboutUs" className="w-full pt-20 px-4 md:px-20">
      <div className="w-full flex flex-col justify-center items-center mb-20">
        <PageName text="ABOUT US" />
        <PageHeading text="Our Story" />
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-4 md:gap-5">
        <div className="md:flex-1 w-full h-60 md:h-[400px] aspect-video md:aspect-4/3 rounded relative overflow-hidden">
          <Image
            src="/ourStory.svg"
            alt="Hero Background"
            fill
            className="object-contain"
          />
        </div>
        <div className="md:flex-1 text-2xl text-[#C5C5C5] p-4 md:p-4 pt-5 md:pt-0">
          <p className="text-[16px] md:text-2xl md:leading-8 font-normal">
            At Stoneista, we specialize in bringing unparalleled marble
            restoration and polishing services exclusively to the most
            prestigious addresses. Our expertise is reserved for the elite
            residents of DLF The Camellias, The Aralias, and The Magnolias
            ensuring that your luxurious home receives the highest standard of
            care and sophistication.
            <br />
            <br></br> Because your home deserves nothing less than the
            extraordinary.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
