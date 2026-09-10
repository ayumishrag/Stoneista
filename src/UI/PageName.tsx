import React from "react";

type PageNameProps = {
  text: string;
  width?: any;
};

const PageName: React.FC<PageNameProps> = ({ text, width }) => {
  return (
    <h1
      className="text-[15px]
          figTree
          inline-block
          text-transparent
          bg-clip-text
          page-name-gradient
          font-semibold
          tracking-[0.07em]
          "
    >
      {text}
    </h1>
  );
};

export default PageName;
