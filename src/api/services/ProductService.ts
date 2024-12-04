import { toast } from "react-toastify";
import { BuyProductClient, ProductClient } from "../AxiosClient";

export type BuyProductPayload = {
  product_id: number;
  variant_id: number;
  quantity: number;
  values: string[];
};

export const getProduct = async (productRequestID: number) => {
  try {
    const response = await ProductClient.get(
      `/teste-prod-${productRequestID}.json`
    );
    toast.success("Produto carregado com sucesso", {
      autoClose: 2000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    toast.error("Erro ao carregar produto", {
      autoClose: 2000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  }
};

export const buyProduct = async (payload: BuyProductPayload) => {
  try {
    const response = await BuyProductClient.post("", [payload]);
    toast.success("Produto comprado com sucesso", {
      autoClose: 2000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
    return response.data;
  } catch (error) {
    toast.error("Erro ao comprar produto", {
      autoClose: 2000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
    return error;
  }
};
