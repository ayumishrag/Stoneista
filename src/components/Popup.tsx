// "use client";
// import { useState } from "react";
// import { sendWelcomeEmail } from "../components/action";
// import { usePopup } from "@/components/PopupContext";
// import MiniPopup from "@/components/MiniPopup";
// import CustomDropdown from "./DropDown";
// import { TESTIMONIALS_DATA2 } from "@/constant/testimonials";

// export default function Popup() {
//   const { open, setOpen } = usePopup();
//   const [openMini, setOpenMini] = useState(false);

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [locality, setLocality] = useState("");
//   const [status, setStatus] = useState("");
//   const [submit, setSubmit] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const body = `
//       <h2>New Callback Request</h2>
//       <p><strong>Name:</strong> ${name}</p>
//       <p><strong>Email:</strong> ${email}</p>
//       <p><strong>Phone:</strong> ${phone}</p>
//       <p><strong>Locality:</strong> ${locality}</p>
//     `;

//     try {
//       const response = await sendWelcomeEmail(
//         body,
//         "New Callback Request",
//         // "sales@stoneista.com"
//         "harshverma74049@gmail.com"
//       );

//       if (response.ok) {
//         setSubmit(true);
//         setName("");
//         setEmail("");
//         setPhone("");
//         setLocality("");
//       } else setStatus("Failed ");
//     } catch (err) {
//       setStatus("Error ❌");
//     }
//   };

//   return (
//     <>
//       {/* Floating button */}
//       <button
//         onClick={() => setOpenMini((prev) => !prev)}
//         className="fixed bottom-10 right-10 z-9999 flex items-center justify-center h-20 w-20 rounded-full  shadow-xl border border-white/40 bg-black
//         overflow-hidden transition-all duration-700 ease-out"
//       >
//         <div
//           className={`
//             flex items-center h-full min-w-40 transition-transform duration-500 ease-in-out cursor-pointer
//             ${openMini ? "-translate-x-10" : "translate-x-10"}
//           `}
//         >
//           <div className="h-20 w-20 flex justify-center items-center">
//             <img src="/app-icon.svg" alt="Logo" className="h-8 w-8 shrink-0" />
//           </div>

//           <div className="h-20 w-20 flex justify-center items-center">
//             <img src="/cross1.png" alt="Logo" className="h-8 w-8 shrink-0" />
//           </div>
//         </div>
//       </button>

//       <MiniPopup isOpen={openMini} onClose={() => setOpenMini(false)} />

//       {/* MAIN POPUP */}
//       {open && (
//         <div
//           className="
//             fixed inset-0
//             bg-black/40
//             z-[9999]
//             flex justify-center items-center
//             p-0
//              md:p-4
//           "
//           onClick={() => setOpen(false)}
//         >
//           {/* CARD WRAPPER */}
//           <div
//             className="
//               w-full max-w-[700px]
//               bg-[#3C2517]
//               flex flex-col md:flex-row
//               gap-1
//               items-center md:items-start
//               rounded-xl
//               p-0

//             "
//             // style={{
//             //   backgroundImage: "url('/testimonials/testimony1.svg')",
//             //   backgroundSize: "cover",
//             // }}
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* FORM - MOBILE FIRST */}
//             {!submit ? (
//               <div
//                 className="
//                 order-1 md:order-2
//                 w-full sm:w-[350px] md:w-[380px]
//                 bg-[#050505]
//                 text-white
//                 shadow-2xl
//                 rounded-base
//                 py-6 px-4
//                 border border-white/20
//                 mt-3 mr-3 mb-2
//               "
//               >
//                 {/* Close Button */}
//                 <button
//                   onClick={() => setOpen(false)}
//                   className=" ml-[350px] md:ml-[281px] text-3xl text-white/70 hover:text-white  "
//                 >
//                   &times;
//                 </button>

//                 {/* Title */}
//                 <p className="text-2xl font-awesome font-semibold mb-6">
//                   Bring Back the Shine to Your Home.
//                 </p>

//                 {/* FORM */}

//                 <form onSubmit={handleSubmit} className="space-y-4 ">
//                   <div>
//                     <label className="block text-xs uppercase text-gray-400">
//                       Name
//                     </label>
//                     <input
//                       className="w-full bg-transparent border-b border-white/20 pb-2"
//                       value={name}
//                       onChange={(e) => setName(e.target.value)}
//                       required
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-xs uppercase text-gray-400">
//                       Email
//                     </label>
//                     <input
//                       type="email"
//                       className="w-full bg-transparent border-b border-white/20 pb-2"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       required
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-xs uppercase text-gray-400">
//                       Phone
//                     </label>
//                     <input
//                       maxLength={10}
//                       className="w-full bg-transparent border-b border-white/20 pb-2"
//                       value={phone}
//                       onChange={(e) => setPhone(e.target.value)}
//                       required
//                     />
//                   </div>

//                   <CustomDropdown
//                     label="Locality"
//                     value={locality}
//                     onChange={setLocality}
//                     options={[
//                       "DLF The Camellias",
//                       "DLF The Aralias",
//                       "DLF The Magnolias",
//                     ]}
//                   />

//                   <button
//                     type="submit"
//                     className="text-xs font-extrabold bg-stbuttonbg px-6 h-12 border border-solid
//                     [border-image-source:linear-gradient(90deg,#F8AC75_0%,#926545_100%)]
//                     [border-image-slice:1]
//                     text-white cursor-pointer"
//                   >
//                     Request a Callback
//                   </button>
//                 </form>

//                 {/* {status && <p className="mt-4">{status}</p>} */}
//               </div>
//             ) : (
//               <div
//                 className="
//     order-1 md:order-2
//     w-full sm:w-[350px] md:w-[380px]
//     bg-[#050505]
//     text-white
//     shadow-2xl
//     rounded-base
//     py-6 px-4
//     border border-white/20
//     mt-3 mr-3 mb-2
//     flex flex-col items-center justify-center
//     text-center bg

//     relative
//   "
//               >
//                 <h2 className="text-2xl font-awesome font-semibold mb-4">
//                   Thank you!
//                 </h2>
//                 <p className="text-lg opacity-80">Thanks for choosing us ✨</p>
//               </div>
//             )}

//             {/* IMAGE / TESTIMONIAL BLOCK */}
//             <div
//               className="
//                 order-2 md:order-1
//                 flex flex-wrap justify-center md:justify-start
//                 gap-4
//                 w-full  md:w-auto   md:pt-67
//                  bg-[url('/formImage.svg')] bg-contain h-full
//               "
//             >
//               {TESTIMONIALS_DATA2.map((item, index) => (
//                 <div key={index} className="rounded p-3   ">
//                   <div className="  h-[10.8rem] md:w-[18.5rem] bg-[#00000080] p-6 rounded border border-white/80 backdrop-blur-lg">
//                     <h1 className="font-awesome text-xl">{item.quote}</h1>

//                     <p className="text-xs font-semibold text-gray-300 mt-4">
//                       {item.author}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

"use client";
import { useState, useEffect } from "react";
import { sendWelcomeEmail } from "../components/action";
import { usePopup } from "@/components/PopupContext";
import { useTheme } from "@/context/ThemeContext";
import MiniPopup from "@/components/MiniPopup";
import CustomDropdown from "./DropDown";
import { TESTIMONIALS_DATA2 } from "@/constant/testimonials";

import PopupHeading from "@/UI/PopupHeading";

export default function Popup() {
  const { open, setOpen, mode } = usePopup();
  const { theme } = useTheme();
  const [openMini, setOpenMini] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [locality, setLocality] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const downloadBrochure = () => {
    const link = document.createElement("a");
    link.href = "/pdf/Brochure.pdf";
    link.download = "Stoneista_Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Reset state when popup opens
  useEffect(() => {
    if (open) {
      setSubmitted(false);
      setName("");
      setEmail("");
      setPhone("");
      setLocality("");
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const body = `
      <h2>New Callback Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Locality:</strong> ${locality}</p>
    `;

    try {
      const response = await sendWelcomeEmail(
        body,
        "New Callback Request",
        "sales@stoneista.com",
      );

      if (response.ok) {
        setSubmitted(true);
        if (mode === "brochure") {
          downloadBrochure();
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpenMini((prev) => !prev)}
        className="
    fixed bottom-10 right-10 z-9999
    h-20 w-20 rounded-full
    bg-(--st-bg-page) border border-white/40
    shadow-xl
    overflow-hidden
    transition-all duration-500 
  "
      >
        <div
          className={`
      flex items-center h-full w-40
      transition-transform duration-500 ease-in-out
      ${openMini ? "-translate-x-20" : "translate-x-0"}
    `}
        >
          {/* Logo */}
          <div className="h-20 w-20 flex items-center justify-center shrink-0 relative">
            <img
              src="/app-icon.svg"
              alt="Logo"
              className="popup-logo-dark h-8 w-8"
            />
            <img
              src="/app-icon-light.svg"
              alt="Logo"
              className="popup-logo-light h-8 w-8 absolute"
            />
          </div>

          {/* Cross */}
          <div className="h-20 w-20 flex items-center justify-center shrink-0">
            <img
              src="/cross1.png"
              alt="Close"
              className="h-6 w-6 popup-cross-icon"
            />
          </div>
        </div>
      </button>

      <MiniPopup isOpen={openMini} onClose={() => setOpenMini(false)} />

      {/* MAIN POPUP */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-9999 flex items-center justify-center p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-175 bg-(--st-btn-bg) flex flex-col md:flex-row rounded-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* FORM SIDE */}
            <div
              className=" 
                relative
                order-1 md:order-2
                w-full sm:w-87.5 md:w-95
                bg-(--st-bg-card)
                text-(--st-text-primary)
                shadow-2xl
                rounded-base
                py-6 px-4
                border border-(--st-border)
                mt-3 mr-3 mb-2
              "
            >
              {/* Close Button */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-3xl text-(--st-text-muted) hover:text-(--st-text-primary) z-20 cursor-pointer"
              >
                &times;
              </button>

              {/* FORM CONTENT */}
              <p
                className="text-2xl font-awesome
          w-full
          inline-block
          text-transparent
          bg-clip-text
          page-heading-2-gradient pb-8 pt-8 "
              >
                Bring Back the <br /> Shine to Your Home.
              </p>

              <form
                onSubmit={handleSubmit}
                className="space-y-6 text-(--st-text-secondary)"
              >
                <div>
                  <input
                    className="w-full bg-transparent border-b border-(--st-border) pb-2"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <input
                    type="email"
                    className="w-full bg-transparent border-b border-(--st-border) pb-2"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <input
                    maxLength={10}
                    className="w-full bg-transparent border-b border-(--st-border) pb-2"
                    placeholder="+91 Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>

                <CustomDropdown
                  label="Locality"
                  value={locality}
                  onChange={setLocality}
                  options={[
                    "DLF The Camellias",
                    "DLF The Aralias",
                    "DLF The Magnolias",
                  ]}
                />

                <button
                  type="submit"
                  className=" mt-5 mb-8 text-xs font-extrabold bg-(--st-btn-bg) text-(--st-btn-text) px-6 h-12 border
                  [border-image-source:linear-gradient(90deg,#F8AC75_0%,#926545_100%)]
                  [border-image-slice:1] cursor-pointer"
                >
                  {mode === "service"
                    ? "Request a Callback"
                    : "Download Brochure"}
                </button>
              </form>

              {/* THANK YOU OVERLAY */}
              {submitted && (
                <div
                  className="
                    absolute inset-0
                    bg-(--st-bg-card)
                    flex flex-col justify-center
                    rounded-base
                    z-10  
                  "
                >
                  {mode === "service" ? (
                    <>
                      <h2 className="ml-10 font-awesome text-[30px] font-semibold mb-2">
                        We appreciate your interest in Stoneista.
                        <br />
                      </h2>

                      <p className="ml-10 font-figTree text-base opacity-80">
                        Our team will connect with you shortly to assist
                        further.
                      </p>
                    </>
                  ) : (
                    <>
                      <h2 className="ml-10 font-awesome text-[30px] font-semibold mb-2">
                        Thanks for downloading!
                      </h2>

                      <p
                        className="ml-10 font-figTree text-base mt-2 opacity-80 cursor-pointer"
                        onClick={downloadBrochure}
                      >
                        If download hasn't started,
                        <span className="underline">Click Here</span>
                      </p>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* TESTIMONIALS SIDE */}
            <div
              className="
                order-2 md:order-1
                flex flex-wrap justify-center md:justify-start
                gap-4
                w-full md:w-auto
                bg-[url('/formImage.svg')]
                bg-contain bg-no-repeat rounded-xl
              "
            >
              {TESTIMONIALS_DATA2.map((item, index) => (
                <div key={index} className="p-3">
                  <div className="md:mt-80 h-[10.8rem] md:w-74 bg-(--st-bg-header) p-6 rounded border border-(--st-border) backdrop-blur-lg">
                    <h1 className="font-awesome text-xl text-(--st-text-primary)">
                      {item.quote}
                    </h1>
                    <p className="text-xs font-semibold text-(--st-text-secondary) mt-4">
                      {item.author}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
