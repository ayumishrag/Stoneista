"use client";
import React from "react";

type PrimaryButtonProps = {
  text: string;
  onClick: () => void;
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="text-xs font-extrabold bg-(--st-btn-bg) px-6 h-12
    border border-solid
    [border-image-source:linear-gradient(90deg,#F8AC75_0%,#926545_100%)]
    [border-image-slice:1] text-(--st-btn-text) cursor-pointer"
    >
      {text.toUpperCase()}
    </button>
  );
};

export default PrimaryButton;
