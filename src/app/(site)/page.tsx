import AboutUs from "@/components/AboutUs";
import Banner from "@/components/Banner";
import Blogs from "@/components/Blogs";
import Catalog from "@/components/Catalog";
import ClientWords from "@/components/ClientWords";
import Gallery from "@/components/Gallery";
import Services1 from "@/components/Services1";
import Popup from "@/components/Popup";
import Services from "@/components/Services";

import Testimonials from "@/components/Testimonials";
import Image from "next/image";
import FeatureSection from "@/components/FeatureSection";
import HeroBanner from "@/components/HeroBanner";
import Blogs1 from "@/components/Blogs1";
import VisionSection from "@/components/VisionRana";
import VisionRana2 from "@/components/VisionRana2";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-stblack font-sans">
      <Banner />
      <FeatureSection />
      <Services1 />
      <HeroBanner />
      <Gallery />
      <AboutUs />
      <Testimonials />

      {/* <VisionRana2 /> */}
      <VisionSection />
       
      {/* <Catalog /> */}
      <ClientWords />

      <Blogs1 />
      {/* <Catalog /> */}

      <Popup />
    </div>
  );
}
