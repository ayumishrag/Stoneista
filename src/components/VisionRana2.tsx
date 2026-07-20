// "use client";
// import Image from "next/image";
// import PageHeading from "@/UI/PageHeading";
// import React from "react";

// const VisionSection = () => {
//   return (
//     <div className="w-full flex flex-col items-center justify-center py-20 px-4 md:px-20">
//       {/* ICON */}
//       <Image
//         src="/app-icon.svg"
//         alt="icon"
//         width={40}
//         height={40}
//         className="mb-4"
//       />

//       {/* TITLE */}
//       <div className="w-92 md:w-lg ">
//         <PageHeading text="The Vision That Built Stoneista" />
//       </div>

//       {/* MAIN CARD */}
//       <div className="bg w-full max-w-5xl bg-[#050505] rounded-2xl border border-[#292929] px-6   md:px-10   flex flex-col md:flex-row gap-6  ">
//         {/* LEFT: TEXT (WIDER COLUMN) */}
//         <div className="w-[65%] md:w-[60%]">
//           <p className="text-white text-sm md:text-lg leading-relaxed pt-40 pl-40">
//             At Stoneista, excellence is not an act,
//             <br />
//             it is our identity.
//             <br />
//             Every project, big or small, receives the same
//             <br />
//             precision and respect.
//             <br />
//             We promise luxury-grade results, honest
//             <br />
//             service and complete customer satisfaction.
//           </p>

//           <div className="mt-8 pt-4 border-t border-[#333] pl-40">
//             <p className="text-white font-semibold text-sm md:text-base">
//               Sumit Rana
//             </p>
//             <p className="text-[#C5C5C5] text-xs md:text-sm">
//               CEO & Founder, Stoneista
//             </p>

//             <a href="#" className="inline-block mt-3 br">
//               <Image
//                 src="/icons/linkedin.svg"
//                 alt="LinkedIn"
//                 width={20}
//                 height={20}
//               />
//             </a>
//           </div>
//         </div>

//         {/* RIGHT: IMAGE (NARROWER COLUMN) */}
//         <div className="w-[35%] md:w-[40%] flex items-end justify-end">
//           <Image
//             src="/media/ranaImage.png"
//             alt="Founder"
//             width={350}
//             height={450}
//             className="object-contain"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VisionSection;


"use client";
import Image from "next/image";
import PageHeading from "@/UI/PageHeading";
import React from "react";

const VisionSection = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-20 px-4 md:px-20">
      {/* ICON */}
      <Image
        src="/app-icon.svg"
        alt="icon"
        width={40}
        height={40}
        className="mb-4"
      />

      {/* TITLE */}
      <div className="w-92 md:w-lg ">
        <PageHeading text="The Vision That Built Stoneista" />
      </div>

      {/* MAIN CARD */}
      <div className="bg w-full max-w-5xl bg-[#050505] rounded-2xl border border-[#292929] px-6   md:px-10   flex flex-col md:flex-row gap-6  ">
        {/* LEFT: TEXT (WIDER COLUMN) */}
        <div className="br absolute left-[139px] top-[5746] w-[765px]">
          <p className="text-white text-sm md:text-lg leading-relaxed pt-[50px] pl-[73px] ">
            At Stoneista, excellence is not an act,
            <br />
            it is our identity.
            <br />
            Every project, big or small, receives the same
            <br />
            precision and respect.
            <br />
            We promise luxury-grade results, honest
            <br />
            service and complete customer satisfaction.
          </p>

           
            <p className="text-white font-semibold text-sm md:text-base pl-[73px]">
              Sumit Rana
            </p>
            <p className="text-[#C5C5C5] text-xs md:text-sm pl-[73px]">
              CEO & Founder, Stoneista
            </p>

            <a href="#" className="inline-block mt-3 br ">
              <Image
                src="/icons/linkedin.svg"
                alt="LinkedIn"
                width={20}
                height={20}
              />
            </a>
          </div>
         

        {/* RIGHT: IMAGE (NARROWER COLUMN) */}
        <div className="bg w-[35%] md:w-[40%] pr-[609px]flex items-end justify-end ml-[400px] br">
          <Image
            src="/media/ranaImage.png"
            alt="Founder"
            width={350}
            height={450}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default VisionSection;

