"use client";
import HeaderLink from "@/UI/HeaderLink";
import PrimaryHeaderButton from "@/UI/PrimaryHeaderButton";
import Link from "next/link";
import { useState } from "react";
import { usePopup } from "@/components/PopupContext";

const HEADER_LINKS_DATA = [
  { text: "About Us", href: "/about-us" },
  { text: "Services", href: "/services" },
  { text: "Locations", href: "/locations" },
  { text: "Gallery", href: "/gallery" },
  { text: "Testimonials", href: "/testimonials" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { setOpen } = usePopup();
  const { mode, setMode } = usePopup();

  return (
    <>
      <header
        className="w-screen fixed top-0 px-4 h-20 py-3
        md:px-20 md:py-4
        bg-[#00000082] backdrop-blur-[56px] text-sttext flex flex-row justify-between items-center border border-solid
        [border-image-source:linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.36)_50%,rgba(255,255,255,0)_100%)]
        [border-image-slice:1] z-50
        "
      >
        {/* LEFT — Logo */}
        <div className="flex-1">
          <Link href={"/"}>
            <img src="/logo.svg" alt="Logo" className="h-6 w-auto" />
          </Link>
        </div>

        {/* MIDDLE — Nav Links (hidden on mobile, visible on md+) */}
        <div className="hidden md:flex flex-3">
          <nav className="w-full flex flex-row justify-center items-center gap-3 ">
            {HEADER_LINKS_DATA.map((item, index) => (
              <HeaderLink key={index} text={item.text} href={item.href} />
            ))}
          </nav>
        </div>

        {/* RIGHT — Button (hidden on mobile, visible on md+) */}
        <div className="md:flex md:flex-1 justify-end">
          <PrimaryHeaderButton
            onClick={() => {
              setMode("service");
              setOpen(true);
            }}
            text={"book service"}
          />
        </div>

        {/* MOBILE MENU ICON */}
        <div className="flex pl-4 md:hidden">
          <button onClick={() => setIsOpen((prev) => !prev)}>
            <img src="/icons/menu.svg" alt="menu" className="h-8 w-8" />
          </button>
        </div>
      </header>
      {isOpen && (
        <div
          className="w-screen fixed top-20 left-0 bg-[#000000e0] backdrop-blur-xl flex flex-col items-center gap-6 py-8 md:hidden z-40
        border-b border-solid
        [border-image-source:linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.36)_50%,rgba(255,255,255,0)_100%)]
        [border-image-slice:1]
        "
        >
          {HEADER_LINKS_DATA.map((item, index) => (
            <HeaderLink
              key={index}
              text={item.text}
              href={item.href}
              onClick={() => {
                console.log("onClick");
                setIsOpen(false);
              }}
            />
          ))}
        </div>
      )}
    </>
  );
}
