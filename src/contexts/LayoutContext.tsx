import { createContext, useState } from "react";
import { LayoutContextType, SuccessModal } from "../types/contexts/LayoutContext";

// eslint-disable-next-line react-refresh/only-export-components
export const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export const LayoutProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [successModal, setSuccessModal] = useState<SuccessModal>({
    open: false,
    redirect_url: "",
  });

  return (
    <LayoutContext.Provider value={{ successModal, setSuccessModal }}>
      {children}
    </LayoutContext.Provider>
  );
};
