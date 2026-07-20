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
          bg-[linear-gradient(135deg,#FFFFFF_50%,#9C9C9C_33.64%,#D7D7D7_33.64%)]
        "
    >
      {text}
    </h1>
  );
};

export default PopupText;
