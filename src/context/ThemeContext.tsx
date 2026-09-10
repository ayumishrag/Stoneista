"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("dark");

  // On mount: read stored preference → system preference → default dark
  useEffect(() => {
    try {
      const stored = localStorage.getItem("stoneista-theme");
      if (stored === "light" || stored === "dark") {
        setTheme(stored);
        if (stored === "light") {
          document.documentElement.classList.add("light");
        } else {
          document.documentElement.classList.remove("light");
        }
      } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        // System prefers dark — keep default "dark", ensure no light class
        setTheme("dark");
        document.documentElement.classList.remove("light");
      } else {
        // System prefers light (or no preference leaning light)
        setTheme("light");
        document.documentElement.classList.add("light");
      }
    } catch {
      // Any storage / matchMedia error: silently fall back to dark
      setTheme("dark");
      document.documentElement.classList.remove("light");
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";

      // Persist new preference
      try {
        localStorage.setItem("stoneista-theme", next);
      } catch {
        // Storage errors are swallowed
      }

      // Sync the class on <html>
      if (next === "light") {
        document.documentElement.classList.add("light");
      } else {
        document.documentElement.classList.remove("light");
      }

      return next;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }
  return ctx;
};
