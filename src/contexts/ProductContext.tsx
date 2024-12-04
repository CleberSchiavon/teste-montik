import { createContext, useState } from "react";
import {
  ProductContextType,
  SelectedProduct,
} from "../types/contexts/ProductContext";

// eslint-disable-next-line react-refresh/only-export-components
export const ProductContext = createContext<ProductContextType | undefined>(
  undefined
);

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedProduct, setSelectedProduct] = useState<SelectedProduct>({
    product: null,
    selectedVariant: null,
  });

  return (
    <ProductContext.Provider value={{ selectedProduct, setSelectedProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
