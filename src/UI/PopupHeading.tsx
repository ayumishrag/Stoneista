import Popup from "@/components/Popup";
import React from "react";

type PageHeadingProps = {
  text: string;
  width?: any;
};

const PopupHeading: React.FC<PageHeadingProps> = ({ text, width }) => {
  return (
    <h1
      className="
          text-[40px]
          md:text-[30px]
          leading-12
          md:leading-16
          font-[175]
          font-awesome
          w-full
          inline-block
          text-transparent
          bg-clip-text
          page-heading-2-gradient
        "
    >
      {text}
    </h1>
  );
};

export default PopupHeading;
