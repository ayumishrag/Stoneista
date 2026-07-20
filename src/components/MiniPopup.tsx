"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import PopupText from "../UI/PopupText";

const MiniPopup = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed right-5 bottom-20 bg-black text-white p-6 rounded-xl shadow-xl w-64 z-50 border border-stone-700  mb-[70px] mr-5"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <div className="flex flex-col gap-5 mt-2  ">
              <a
                href="https://wa.me/919891899199"
                target="_blank "
                className="flex items-center gap-3 hover:text-green-400 transition"
              >
                <img src="/wt2.png" className="w-6" />
                <span>
                  <PopupText text="Connect on Whatsapp" />
                </span>
              </a>
              <a
                href="tel:+919891899199"
                className="flex items-center gap-3 hover:text-blue-400 transition border-t border-b border-[#282828] py-3.5"
              >
                <img src="/ph2.svg" className="w-6" />
                <span>
                  <PopupText text="Call" />{" "}
                </span>
              </a>
              <a
                href="mailto:sales@stoneista.com"
                className="flex items-center gap-3 hover:text-orange-400 transition"
              >
                <img src="/mail.svg" className="w-6" />
                <span>
                  <PopupText text="Email" />
                </span>
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MiniPopup;
