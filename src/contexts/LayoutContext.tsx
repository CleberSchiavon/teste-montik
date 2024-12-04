import { createContext, useContext, useState } from "react";
type SuccessModal = {
  open: boolean;
  redirect_url: string;
};
interface LayoutContextType {
  successModal: SuccessModal;
  setSuccessModal: React.Dispatch<React.SetStateAction<SuccessModal>>;
}
const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

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

export const useLayout = (): LayoutContextType => {
  const context = useContext(LayoutContext);

  if (!context) {
    throw new Error("useLayout precisa ser utilizado com um LayoutProvider");
  }

  return context;
};
