"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

type HeaderLinkProps = {
  text: string;
  href: string;
  onClick?: () => void;
};

const HeaderLink: React.FC<HeaderLinkProps> = ({ text, href, onClick }) => {
  const router = useRouter();
  const pathname = usePathname();

  const scrollToSection = (target: string = "banner") => {
    let id = "banner";

    switch (target) {
      case "About Us":
        id = "aboutUs";
        break;
      case "Services":
        id = "services";
        break;
      case "Gallery":
        id = "gallery";
        break;
      case "Testimonials":
        id = "testimonials";
        break;
      default:
        id = "banner";
        break;
    }

    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleClick = () => {
    if (onClick) onClick();

    // Services and Locations: Always navigate to their pages
    if (text === "Services" || text === "Locations") {
      router.push(href);
      return;
    }

    // About Us, Gallery and Testimonials: Always go to home page first, then scroll to section
    if (text === "About Us" || text === "Gallery" || text === "Testimonials") {
      if (pathname === "/") {
        // Already on home page, just scroll
        scrollToSection(text);
      } else {
        // Navigate to home page, then scroll after page loads
        router.push("/");
        const checkAndScroll = () => {
          if (window.location.pathname === "/") {
            scrollToSection(text);
          } else {
            setTimeout(checkAndScroll, 50);
          }
        };
        setTimeout(checkAndScroll, 100);
      }
      return;
    }

    // Default: if on home page, scroll; otherwise navigate
    if (pathname === "/") {
      scrollToSection(text);
    } else {
      router.push(href);
    }
  };

  return (
    <button
      className="mx-4 text-xs font-extrabold cursor-pointer py-4 header-link"
      style={{ color: "var(--st-text-primary)" }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = "var(--st-accent-start)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = "var(--st-text-primary)";
      }}
      onClick={handleClick}
    >
      {text.toUpperCase()}
    </button>
  );
};

export default HeaderLink;
