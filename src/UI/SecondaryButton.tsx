"use client";
import React from "react";

type SecondaryButtonProps = {
  text: string;
  onClick: () => void;
};

const SecondaryButton: React.FC<SecondaryButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="text-xs font-extrabold bg-(--st-bg-page) px-6 h-12
    border border-solid
    [border-image-source:linear-gradient(90deg,#C2C2C2_0%,#585858_100%)]
    [border-image-slice:1] text-(--st-text-primary) cursor-pointer"
    >
      {text.toUpperCase()}
    </button>
  );
};

export default SecondaryButton;
