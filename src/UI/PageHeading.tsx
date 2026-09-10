import React from "react";

type PageHeadingProps = {
  text: string;
  width?: any;
};

const PageHeading: React.FC<PageHeadingProps> = ({ text, width }) => {
  return (
    <h1
      className="  pb-1
      
          text-[40px]
          
          md:text-[50px]
          leading-12
          md:leading-16
          font-[175]
          font-awesome
          w-full
          text-center
          inline-block
          text-transparent
          bg-clip-text
        "
      style={{
        backgroundImage:
          "linear-gradient(135deg, var(--st-text-secondary) 50%, var(--st-text-muted) 33.64%, var(--st-text-primary) 33.64%)",
      }}
    >
      {text}
    </h1>
  );
};

export default PageHeading;
