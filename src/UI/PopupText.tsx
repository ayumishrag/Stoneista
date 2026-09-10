import React from "react";

type PageHeadingProps = {
  text: string;
  width?: any;
};

const PopupText: React.FC<PageHeadingProps> = ({ text, width }) => {
  return (
    <h1
      className="
          text-[15px]
          md:text-[18px]
          font-awesome
          w-full
          text-center
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

export default PopupText;
