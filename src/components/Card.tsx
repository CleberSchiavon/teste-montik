import React, { useState } from "react";
import { Product } from "../types/Product";
import { moneyFormatter } from "../utils/NumberFormatters";
import { useProduct } from "../contexts/ProductContext";
import VariantSelect from "./VariantSelect";

interface IProductCard {
  product: Product;
}

const ProductCard: React.FC<IProductCard> = ({ product }) => {
  const { selectedProduct, setSelectedProduct } = useProduct();
  const { selectedVariant } = selectedProduct;
  const { image_url, title, options, values, variants } = product;
  const [canBuy, setCanBuy] = useState<boolean>(false);

  const handleVariantSelection = (selectedValues: string[]) => {
    const variant = variants.find((v) =>
      v.values.every((value, index) => value === selectedValues[index])
    );

    setSelectedProduct({
      product: product,
      selectedVariant: variant || null,
    });
    setCanBuy(variant ? variant.inventory_quantity > 0 : false);
  };

  return (
    <div className="flex w-3/4 h-[35rem] rounded-xl overflow-hidden shadow-lg bg-white">
      <img
        className="w-1/2 h-full object-cover"
        src={image_url}
        alt={title}
        loading="lazy"
      />
      <div className="p-4 w-1/2 flex flex-col justify-between">
        <div className="flex flex-col gap-2">
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
        <button
          className={`w-full bg-purple-600 text-white font-bold py-2 px-4 rounded hover:bg-purple-700 transition duration-300 ${
            !canBuy ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={!canBuy}
          onClick={() => {
            if (canBuy && selectedVariant) {
              console.log("Produto Selecionado", {product, selectedVariant}); // TODO(cleberschiavon): adicionar redirect aqui
            }
          }}
        >
          Comprar
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
