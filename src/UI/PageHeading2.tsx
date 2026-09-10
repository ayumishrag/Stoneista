import React from "react";

type PageHeadingProps = {
  text: string;
  width?: any;
};

const PageHeading: React.FC<PageHeadingProps> = ({ text, width }) => {
  return (
    <h1
      className="pb-3
          text-[40px]
          md:text-[47px]
          leading-12
          md:leading-16
          font-[175]
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

export default PageHeading;
