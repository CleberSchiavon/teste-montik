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
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const buyProduct = async (payload: BuyProductPayload) => {
  try {
    const response = await BuyProductClient.post("", [payload]);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
