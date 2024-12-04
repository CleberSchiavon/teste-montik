export interface Image {
  id: number;
  product_id: number;
  position: number;
  alt: string[];
  src: string;
}

export interface Variant {
  id: number;
  product_id: number;
  price: string;
  sku: string | null;
  position: number;
  compare_at_price: string;
  values: string[];
  created_at: string;
  updated_at: string;
  barcode: string | null;
  image_id: number;
  weight: string;
  inventory_quantity: number;
  image_url: string;
}

export interface Product {
  id: number;
  title: string;
  created_at: number;
  updated_at: number;
  options: string[];
  values: string[][];
  variants: Variant[];
  image_url: string;
  images: Image[];
  currency: string;
}
