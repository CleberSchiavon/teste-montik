import { useContext } from "react";
import { LayoutContextType } from "../types/contexts/LayoutContext";
import { LayoutContext } from "../contexts/LayoutContext";

export const useLayout = (): LayoutContextType => {
  const context = useContext(LayoutContext);

  if (!context) {
    throw new Error("useLayout precisa ser utilizado com um LayoutProvider");
  }

  return context;
};
