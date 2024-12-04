import React, { useState } from "react";
import { toast } from "react-toastify";
import LoadingSpinner from "../assets/loading.svg";
import { Product } from "../types/Product";
import { moneyFormatter } from "../utils/NumberFormatters";
import { buyProduct } from "../api/services/ProductService";
import { openSuccessModal } from "../utils/Layout";
import { useProduct } from "../hooks/useProductContext";
import { useLayout } from "../hooks/useLayoutContext";
import VariantSelect from "./VariantSelect";

interface IProductCard {
  product: Product;
}

const ProductCard: React.FC<IProductCard> = ({ product }) => {
  const { selectedProduct, setSelectedProduct } = useProduct();
  const { setSuccessModal } = useLayout();
  const { selectedVariant, product: selectedProductData } = selectedProduct;
  const { image_url, title, options, values, variants } = product;
  const [canBuy, setCanBuy] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const handleBuyProduct = async () => {
    if (selectedVariant && selectedProductData) {
      try {
        setLoading(true);
        const { redirect_url } = await buyProduct({
          variant_id: Number(selectedVariant.id),
          product_id: selectedProductData.id,
          quantity: 1,
          values: selectedVariant.values,
        });
        openSuccessModal();
        setSuccessModal({
          open: true,
          redirect_url: redirect_url,
        });
      } catch (error) {
        console.error("Erro ao comprar o produto:", error);
        setSuccessModal({
          open: false,
          redirect_url: "",
        });
      } finally {
        setLoading(false);
      }
    }
  };
  const handleVariantSelection = (selectedValues: string[]) => {
    const variant = variants.find((v) =>
      v.values.every((value, index) => value === selectedValues[index])
    );

    setSelectedProduct({
      product: product,
      selectedVariant: variant || null,
    });

    if (variant) {
      if (variant.inventory_quantity > 0) {
        setCanBuy(true);
      } else {
        setCanBuy(false);
        toast.error("Produto indisponível. Selecione outra variante.", {
          autoClose: 1500,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } else {
      setCanBuy(false);
    }
  };

  return (
    <div className="flex md:flex-row flex-col w-3/4 md:p-0 p-4 h-[35rem] rounded-xl md:overflow-hidden overflow-auto shadow-lg bg-white">
      <img
        className="md:w-2/4 w-full h-full object-cover"
        src={image_url}
        alt={title}
        loading="lazy"
      />
      <div className="p-4 w-full flex flex-col justify-between">
        <div className="flex flex-col md:justify-normal justify-center md:mb-0 mb-4 gap-2">
          <h1 className="text-black font-semibold text-3xl mb-2">{title}</h1>
          {selectedVariant && (
            <p className="text-lg font-bold text-green-500">
              {moneyFormatter({
                currency: product.currency,
                price: Number(selectedVariant?.price),
              })}
            </p>
          )}
          {selectedVariant && !canBuy && (
            <p className="text-red-500 font-bold text-lg">
              Produto indisponível
            </p>
          )}
          <VariantSelect
            options={options}
            values={values}
            onSelect={handleVariantSelection}
          />
        </div>
        {!loading ? (
          <button
            className={`w-full bg-purple-600 text-white font-bold py-2 px-4 rounded hover:bg-purple-700 transition duration-300 ${
              !canBuy ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={!canBuy || loading}
            onClick={async () => {
              if (canBuy && selectedVariant) {
                await handleBuyProduct();
              }
            }}
          >
            Comprar
          </button>
        ) : (
          <div className="flex justify-center pt-4">
            <img src={LoadingSpinner} className="animate-spin w-6 h-6" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
