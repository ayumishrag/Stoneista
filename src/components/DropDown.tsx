"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type CustomDropdownProps = {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
};

export default function CustomDropdown({
  label,
  value,
  onChange,
  options,
}: CustomDropdownProps) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Dropdown Box */}
      <div
        onClick={() => setOpen(!open)}
        className="w-full text-[16px] bg-transparent border-b py-1 cursor-pointer flex justify-between items-center"
        style={{
          borderColor: "var(--st-border)",
        }}
      >
        <span
          style={{
            color: !value ? "var(--st-text-muted)" : "var(--st-text-secondary)",
          }}
        >
          {value === "" ? "Select Locality" : value}
        </span>

        {/* Arrow Icon */}
        <motion.img
          src="/downarrow.svg"
          className="w-4 opacity-80"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 right-0 border rounded-lg mt-2 shadow-xl z-50"
            style={{
              backgroundColor: "var(--st-bg-card-secondary)",
              borderColor: "var(--st-border)",
            }}
          >
            {options.map((opt) => (
              <li
                key={opt}
                onClick={() => {
                  onChange(opt);
                  setOpen(false);
                }}
                className="px-4 py-2 cursor-pointer text-sm transition-colors duration-200"
                style={{
                  color: "var(--st-text-primary)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "rgba(255, 255, 255, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                {opt}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
