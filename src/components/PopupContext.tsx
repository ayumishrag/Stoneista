"use client";

import { createContext, useContext, useState } from "react";
type PopupMode = "service" | "brochure";

type PopupContextType = {
  open: boolean;
  setOpen: (value: boolean) => void;
  mode: PopupMode;
  setMode: (value: PopupMode) => void;
};

const PopupContext = createContext<PopupContextType | null>(null);

export const PopupProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<PopupMode>("service");

  return (
    <PopupContext.Provider value={{ open, setOpen, mode, setMode }}>
      {children}
    </PopupContext.Provider>
  );
};

export const usePopup = () => {
  const ctx = useContext(PopupContext);
  if (!ctx) {
    throw new Error("usePopup must be used inside PopupProvider");
  }
  return ctx;
};
