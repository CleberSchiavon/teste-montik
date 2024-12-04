import { createContext, useContext, useState } from "react";
import { Product, Variant } from "../types/Product";

interface SelectedProduct {
  product: Product | null;
  selectedVariant: Variant | null;
}

interface ProductContextType {
  selectedProduct: SelectedProduct;
  setSelectedProduct: React.Dispatch<React.SetStateAction<SelectedProduct>>;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

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

export const useProduct = (): ProductContextType => {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error("useProduct precisa ser utilizado com um ProductProvider");
  }

  return context;
};