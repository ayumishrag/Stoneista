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
          "linear-gradient(135deg, var(--st-text-secondary) 25%, var(--st-text-muted) 43.31%, var(--st-text-primary) 78.64%)",
      }}
    >
      {text}
    </h1>
  );
};

export default PageHeading;
