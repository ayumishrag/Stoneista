import React from "react";
import FeatureCard from "./FeatureCard";

const FeatureSection = () => {
  const features = [
    {
      icon: "/featureIcon/pen-tool-03.svg",
      title: "Craftsmanship",
     description: ["Precision, detail,",  "and artistry", <br key="2" />,"in every polish."],
      
    },
    {
      icon: "/featureIcon/elements.svg",
      title: "Luxury",
      description:[
        "A discreet, premium service tailored ",<br key="2" />,"for ultra-luxury homes."],
    },
    {
      icon: "/featureIcon/elements1.svg",
      title: "Preservation",
      description: ["Protecting the beauty of marble ",<br key="2" />,"to stand the test of time."],
    },
  ];

  return (
    <div className="w-full py-16  md:px-20 pt-20    mt-5 md:mt-30">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12  ">
        {features.map((item, index) => (
          <FeatureCard
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
