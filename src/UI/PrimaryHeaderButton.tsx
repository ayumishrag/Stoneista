"use client";
import React from "react";

type PrimaryButtonProps = {
  text: string;
  onClick: () => void;
};

const PrimaryHeaderButton: React.FC<PrimaryButtonProps> = ({
  text,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="text-xs font-extrabold bg-(--st-btn-bg) px-4 h-10
    border border-solid
    [border-image-source:linear-gradient(90deg,#F8AC75_0%,#926545_100%)]
    [border-image-slice:1] text-(--st-btn-text) cursor-pointer"
    >
      {text.toUpperCase()}
    </button>
  );
};

export default PrimaryHeaderButton;
