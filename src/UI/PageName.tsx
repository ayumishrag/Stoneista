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
          bg-[linear-gradient(135deg,#F5E7DC_25%,#C5AB9D_50.79%,#8A624C_78.64%)]
          font-semibold
           
          tracking-[0.07em]
          "
    >
      {text}
    </h1>
  );
};

export default PageName;
