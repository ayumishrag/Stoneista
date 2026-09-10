"use client";
import PrimaryButton from "@/UI/PrimaryButton";
import SecondaryButton from "@/UI/SecondaryButton";
import { usePopup } from "@/components/PopupContext";

export default function Footer() {
  const { setOpen } = usePopup();
  const { mode, setMode } = usePopup();
  return (
    <footer
      className="w-full p-4 md:p-6"
      style={{
        backgroundColor: "var(--st-bg-page)",
        color: "var(--st-text-primary)",
      }}
    >
      <div
        className="flex flex-col justify-center items-center rounded-xl border px-4 py-10 md:px-20 md:py-20 footer-bg-card bg-bottom bg-no-repeat"
        style={{
          backgroundColor: "var(--st-bg-card-secondary)",
          borderColor: "var(--st-border)",
        }}
      >
        <div className="footer-logo-wrap">
          <img
            src="/footer_logo.svg"
            alt="Logo"
            className="footer-logo w-full h-auto md:h-44 md:w-auto"
          />
        </div>
        <div className="w-full">
          <div className="flex-1 flex flex-row justify-center gap-8 my-14 md:my-20">
            <PrimaryButton
              text="book service"
              onClick={() => {
                setMode("service");
                setOpen(true);
              }}
            />
            <SecondaryButton
              text="Download brochure"
              onClick={() => {
                setMode("brochure");
                setOpen(true);
              }}
            />
          </div>
          <div
            className="flex mb-4 md:mb-0 flex-col-reverse gap-10 md:flex-row items-center justify-between"
            style={{ color: "var(--st-text-primary)" }}
          >
            <div>
              <span className="text-[14px] mb-4">
                {"@2025 Shine Xperts pvt. ltd. All Rights Reserved."}
              </span>
            </div>
            <div className="flex flex-row items-center gap-6">
              <div className="flex items-center gap-2">
                <img
                  src="/icons/phone.svg"
                  alt="phone"
                  className="h-4 w-4 cursor-pointer footer-icon"
                />
                <span className="text-[14px]">{"+91 989 189 9199"}</span>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src="/icons/email.svg"
                  alt="email"
                  className="h-4 w-4 cursor-pointer footer-icon"
                />
                <span className="text-[14px]">{"sales@stoneista.com"}</span>
              </div>
            </div>
            <div className="flex flex-row">
              <span className="text-sm mr-6">
                {"Follow Us On Social Media"}
              </span>
              <div className="flex flex-row gap-6">
                <img
                  src="/icons/linkedin.svg"
                  alt="linkedin"
                  className="h-6 w-6 cursor-pointer footer-icon"
                />
                <a target="_blank" href="https://www.instagram.com/stoneista_/">
                  <img
                    src="/icons/instagram.svg"
                    alt="instagram"
                    className="h-6 w-6 cursor-pointer footer-icon"
                  />
                </a>
                <img
                  src="/icons/facebook.svg"
                  alt="facebook"
                  className="h-6 w-6 cursor-pointer footer-icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
