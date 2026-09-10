"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import PopupText from "../UI/PopupText";

type MiniPopupProps = {
  isOpen: boolean;
  onClose: () => void;
};

const MiniPopup = ({ isOpen, onClose }: MiniPopupProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed right-5 bottom-20 p-6 rounded-xl shadow-xl w-64 z-50 mb-17.5 mr-5 border"
          style={{
            backgroundColor: "var(--st-bg-card)",
            borderColor: "var(--st-border)",
          }}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <div className="flex flex-col gap-5 mt-2">
            <a
              href="https://wa.me/919891899199"
              target="_blank"
              className="flex items-center gap-3 transition"
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "rgb(74 222 128)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--st-text-primary)")
              }
              style={{ color: "var(--st-text-primary)" }}
            >
              <img src="/wt2.png" className="w-6 mini-popup-icon" />
              <span>
                <PopupText text="Connect on Whatsapp" />
              </span>
            </a>
            <a
              href="tel:+919891899199"
              className="flex items-center gap-3 transition border-t border-b py-3.5"
              style={{
                borderColor: "var(--st-border)",
                color: "var(--st-text-primary)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "rgb(96 165 250)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--st-text-primary)")
              }
            >
              <img src="/ph2.svg" className="w-6 mini-popup-icon" />
              <span>
                <PopupText text="Call" />
              </span>
            </a>
            <a
              href="mailto:sales@stoneista.com"
              className="flex items-center gap-3 transition"
              style={{ color: "var(--st-text-primary)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "rgb(251 146 60)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--st-text-primary)")
              }
            >
              <img src="/mail.svg" className="w-6 mini-popup-icon" />
              <span>
                <PopupText text="Email" />
              </span>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MiniPopup;
