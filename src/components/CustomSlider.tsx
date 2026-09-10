"use client";
import React, { useState, useEffect, ReactNode } from "react";
import "./custom.slider.css";

interface CustomCarouselProps {
  children: ReactNode[];
}

const CustomCarousel: React.FC<CustomCarouselProps> = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [slideDone, setSlideDone] = useState<boolean>(true);
  const [timeID, setTimeID] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (slideDone) {
      setSlideDone(false);
      const timeout = setTimeout(() => {
        slideNext();
        setSlideDone(true);
      }, 5000);
      setTimeID(timeout);
    }

    return () => {
      if (timeID) clearTimeout(timeID);
    };
  }, [slideDone]);

  const slideNext = () => {
    setActiveIndex((val) => (val >= children.length - 1 ? 0 : val + 1));
  };

  const slidePrev = () => {
    setActiveIndex((val) => (val <= 0 ? children.length - 1 : val - 1));
  };

  const AutoPlayStop = () => {
    if (timeID) {
      clearTimeout(timeID);
      setSlideDone(false);
    }
  };

  const AutoPlayStart = () => {
    if (!slideDone) setSlideDone(true);
  };

  return (
    <div
      className="container__slider pb-10"
      onMouseEnter={AutoPlayStop}
      onMouseLeave={AutoPlayStart}
    >
      {children.map((item, index) => (
        <div
          className="slider__item"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          key={index}
        >
          {item}
        </div>
      ))}

      <div className="container__slider__links">
        {children.map((_, index) => (
          <button
            key={index}
            className={
              activeIndex === index
                ? "container__slider__links-small container__slider__links-small-active"
                : "container__slider__links-small"
            }
            onClick={(e) => {
              e.preventDefault();
              setActiveIndex(index);
            }}
          ></button>
        ))}
      </div>

      {/* <button
        className="slider__btn-next"
        onClick={(e) => {
          e.preventDefault();
          slideNext();
        }}
      >
        <img src="/icons/next.svg" alt=">" className="h-4 w-4 mr-6" />
      </button> */}
      <button
        onClick={(e) => {
          e.preventDefault();
          slideNext();
        }}
        className="absolute right-4 cursor-pointer flex items-center justify-center p-3 rounded-full border transition"
        style={{ borderColor: "var(--st-border)" }}
      >
        <img
          src="/icons/next.svg"
          alt="next"
          className="h-5 w-5 slider-nav-icon"
        />
      </button>

      <button
        onClick={(e) => {
          e.preventDefault();
          slidePrev();
        }}
        className="absolute left-4 cursor-pointer flex items-center justify-center p-3 rounded-full border transition"
        style={{ borderColor: "var(--st-border)" }}
      >
        <img
          src="/icons/prev.svg"
          alt="prev"
          className="h-5 w-5 slider-nav-icon"
        />
      </button>

      {/* <button
        className="slider__btn-prev"
        onClick={(e) => {
          e.preventDefault();
          slidePrev();
        }}
      >
        <img src="/icons/prev.svg" alt="<" className="h-4 w-4 ml-6" />
      </button> */}
    </div>
  );
};

export default CustomCarousel;
