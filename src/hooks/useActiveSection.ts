import { ActiveSectionContext } from "@/context/active-section-context";
import { useContext } from "react";

export const useActiveSection = () => {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      "useActiveSection must be used inside ActiveSectionContextProvider"
    );
  }

  return context;
};
