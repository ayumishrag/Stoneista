"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CustomDropdown({ label, value, onChange, options }) {
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Select Locality");
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative " ref={dropdownRef}>
      {/* Label */}
      {/* <label className="block text-xs uppercase text-gray-400 mb-1">
        {label}
      </label> */}

      {/* Dropdown Box */}
      <div
        onClick={() => setOpen(!open)}
        className=" 
          w-full 
          text-[16px]
          bg-transparent 
          border-b border-white/20 
          py-1
          text-gray-400 
          cursor-pointer
          flex justify-between items-center  
        "
      >
        <span className={!value ? "text-[#7A7A7A]" : "text-[#C5C5C5]"}>
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
            className="
              absolute 
              left-0 
              right-0 
              bg-[#111] 
              border border-white/10 
              rounded-lg 
              mt-2 
              shadow-xl 
              z-50 
            "
          >
            {options.map((opt) => (
              <li
                key={opt}
                onClick={() => {
                  onChange(opt);
                  setOpen(false);
                }}
                className="
                  px-4 py-2 
                  text-white
                  hover:bg-white/10 
                  cursor-pointer 
                  text-sm
                "
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
