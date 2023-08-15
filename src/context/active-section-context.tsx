"use client";
import React, { ReactNode, useState, createContext } from "react";

type ActiveSectionContextType = {
  activeSection: string;
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
};
export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

type ActiveSectionContextProviderType = {
  children: ReactNode;
};
export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderType) {
  const [activeSection, setActiveSection] = useState("Home");

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
}
