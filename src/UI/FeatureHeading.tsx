import React from "react";

type PageHeadingProps = {
  text: string;
  width?: any;
};

const PageHeading: React.FC<PageHeadingProps> = ({ text, width }) => {
  return (
    <h1
      className="
          text-[32px]
          md:text-[32px]
           text-[#C5C5C5]
          leading-12
          md:leading-16
          font-[175]
          font-awesome
          w-full
          text-center
          inline-block
          text-transparent
          bg-clip-text
          bg-[linear-gradient(135deg,#FFFFFF_25%,#9C9C9C_43.31%,#D7D7D7_78.64%)]
        "
    >
      {text}
    </h1>
  );
};

export default PageHeading;
