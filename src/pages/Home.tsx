import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import ProductCard from "../components/Card";
import { useProduct } from "../contexts/ProductContext";
import { getProduct } from "../api/services/ProductService";
import { Product } from "../types/Product";

type ProductIDRequest = 1 | 2;

const HomeProduct: React.FC = () => {
  const [productRequestedID, setProductRequestedID] =
    useState<ProductIDRequest>(1);
  const { selectedProduct, setSelectedProduct } = useProduct();

  const handleChangeProduct = (productID: ProductIDRequest) => {
    setProductRequestedID(productID);
  };

  useEffect(() => {
    getProduct(productRequestedID).then((response: Product) => {
      setSelectedProduct({
        product: response,
        selectedVariant: null,
      });
    });
  }, [setSelectedProduct, productRequestedID]);

  return (
    <Layout>
      <div className="flex flex-col items-center mb-4">
        <h2 className="text-2xl font-bold mb-4">Selecione um Produto</h2>
        <h2 className="text-md font-bold mb-4">ID do Produto selecionado atualmente: {productRequestedID}</h2>
        <div className="flex space-x-4 mb-4">
          <button
            onClick={() => handleChangeProduct(1)}
            className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition duration-300"
          >
            Produto 1
          </button>
          <button
            onClick={() => handleChangeProduct(2)}
            className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition duration-300"
          >
            Produto 2
          </button>
        </div>
      </div>

      {selectedProduct.product ? (
        <ProductCard product={selectedProduct.product} />
      ) : (
        <div className="flex justify-center items-center h-full">
          <p className="text-white text-xl">
            Carregando produto, por favor aguarde...
          </p>
        </div>
      )}
    </Layout>
  );
};

export default HomeProduct;
