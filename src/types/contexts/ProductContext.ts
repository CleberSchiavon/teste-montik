import { Product, Variant } from "../Product";

export interface SelectedProduct {
    product: Product | null;
    selectedVariant: Variant | null;
  }
  
  export interface ProductContextType {
    selectedProduct: SelectedProduct;
    setSelectedProduct: React.Dispatch<React.SetStateAction<SelectedProduct>>;
  }
  