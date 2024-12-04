import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { ProductContextType } from "../types/contexts/ProductContext";

export const useProduct = (): ProductContextType => {
    const context = useContext(ProductContext);
  
    if (!context) {
      throw new Error("useProduct precisa ser utilizado com um ProductProvider");
    }
  
    return context;
  };