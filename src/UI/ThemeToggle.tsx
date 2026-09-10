"use client";

import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const prefersReducedMotion = useReducedMotion();
  const dur = prefersReducedMotion ? 0 : 0.4;
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="cursor-pointer focus-visible:outline-none group"
      style={{ background: "none", border: "none", padding: 0 }}
    >
      {/* Outer track */}
      <div
        style={{
          position: "relative",
          width: 64,
          height: 30,
          borderRadius: 999,
          padding: "3px",
          background: isDark
            ? "linear-gradient(135deg, #1a1208 0%, #2e1f0a 50%, #1a1208 100%)"
            : "linear-gradient(135deg, #e8d5bb 0%, #f5ece0 50%, #e8d5bb 100%)",
          boxShadow: isDark
            ? "0 0 0 1px rgba(248,172,117,0.25), 0 2px 12px rgba(0,0,0,0.6), inset 0 1px 0 rgba(248,172,117,0.08)"
            : "0 0 0 1px rgba(146,101,69,0.3), 0 2px 12px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.8)",
          transition: `background ${dur}s ease, box-shadow ${dur}s ease`,
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Subtle inner glow line at top */}
        <div
          style={{
            position: "absolute",
            top: 3,
            left: 8,
            right: 8,
            height: 1,
            borderRadius: 1,
            background: isDark
              ? "linear-gradient(90deg, transparent, rgba(248,172,117,0.15), transparent)"
              : "linear-gradient(90deg, transparent, rgba(255,255,255,0.9), transparent)",
            pointerEvents: "none",
          }}
        />

        {/* Track icons — sun left, moon right */}
        <div
          style={{
            position: "absolute",
            left: 8,
            opacity: isDark ? 0.25 : 0,
            transition: `opacity ${dur}s ease`,
            display: "flex",
          }}
        >
          <SunTrackIcon isDark={isDark} />
        </div>
        <div
          style={{
            position: "absolute",
            right: 8,
            opacity: isDark ? 0.35 : 0,
            transition: `opacity ${dur}s ease`,
            display: "flex",
          }}
        >
          <MoonTrackIcon isDark={isDark} />
        </div>

        {/* Golden knob */}
        <motion.div
          animate={{ x: isDark ? 34 : 0 }}
          transition={{ type: "spring", stiffness: 420, damping: 32 }}
          style={{
            width: 24,
            height: 24,
            borderRadius: "50%",
            flexShrink: 0,
            position: "relative",
            background: isDark
              ? "linear-gradient(145deg, #c87941 0%, #f8ac75 45%, #e08840 100%)"
              : "linear-gradient(145deg, #926545 0%, #d4894f 45%, #7a5235 100%)",
            boxShadow: isDark
              ? "0 2px 8px rgba(0,0,0,0.5), 0 0 0 1px rgba(248,172,117,0.4), inset 0 1px 0 rgba(255,220,180,0.4)"
              : "0 2px 8px rgba(0,0,0,0.2), 0 0 0 1px rgba(146,101,69,0.3), inset 0 1px 0 rgba(255,220,180,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          {/* Sheen line on knob */}
          <div
            style={{
              position: "absolute",
              top: 3,
              left: 4,
              right: 4,
              height: 1,
              borderRadius: 1,
              background: "rgba(255,235,200,0.5)",
              pointerEvents: "none",
            }}
          />

          <AnimatePresence mode="wait" initial={false}>
            {isDark ? (
              <motion.div
                key="moon"
                initial={{ opacity: 0, rotate: -30, scale: 0.7 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 30, scale: 0.7 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.25 }}
              >
                <MoonIcon />
              </motion.div>
            ) : (
              <motion.div
                key="sun"
                initial={{ opacity: 0, rotate: 30, scale: 0.7 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: -30, scale: 0.7 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.25 }}
              >
                <SunIcon />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </button>
  );
};

const SunIcon = () => (
  <svg
    width={11}
    height={11}
    viewBox="0 0 24 24"
    fill="none"
    stroke="rgba(255,235,200,0.9)"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="4" />
    <line x1="12" y1="2" x2="12" y2="5" />
    <line x1="12" y1="19" x2="12" y2="22" />
    <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" />
    <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
    <line x1="2" y1="12" x2="5" y2="12" />
    <line x1="19" y1="12" x2="22" y2="12" />
    <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" />
    <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" />
  </svg>
);

const MoonIcon = () => (
  <svg
    width={11}
    height={11}
    viewBox="0 0 24 24"
    fill="rgba(255,235,200,0.9)"
    stroke="none"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
  </svg>
);

const SunTrackIcon = ({ isDark }: { isDark: boolean }) => (
  <svg
    width={10}
    height={10}
    viewBox="0 0 24 24"
    fill="none"
    stroke={isDark ? "#f8ac75" : "#926545"}
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="4" />
    <line x1="12" y1="2" x2="12" y2="5" />
    <line x1="12" y1="19" x2="12" y2="22" />
    <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" />
    <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
    <line x1="2" y1="12" x2="5" y2="12" />
    <line x1="19" y1="12" x2="22" y2="12" />
    <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" />
    <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" />
  </svg>
);

const MoonTrackIcon = ({ isDark }: { isDark: boolean }) => (
  <svg
    width={10}
    height={10}
    viewBox="0 0 24 24"
    fill={isDark ? "#f8ac75" : "#926545"}
    stroke="none"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
  </svg>
);

export default ThemeToggle;
