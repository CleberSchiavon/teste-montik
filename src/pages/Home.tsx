import React, { useEffect } from "react";
import Layout from "../components/Layout";
import ProductCard from "../components/Card";
import { HttpClient } from "../clients/AxiosClient";
import { useProduct } from "../contexts/ProductContext";

const HomeProduct: React.FC = () => {
  const { selectedProduct, setSelectedProduct } = useProduct();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await HttpClient.get("/teste-prod-1.json");
        setSelectedProduct({ product: response.data, selectedVariant: null });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [setSelectedProduct]);

  return (
    <Layout>
      {selectedProduct.product ? (
        <ProductCard product={selectedProduct.product} />
      ) : (
        <div className="flex justify-center items-center h-full">
          <p className="text-white text-2xl">
            Carregando produto, por favor aguarde....
          </p>
        </div>
      )}
    </Layout>
  );
};

export default HomeProduct;
