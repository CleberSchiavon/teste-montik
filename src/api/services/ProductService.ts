import { HttpClient } from "../AxiosClient";

export const getProduct = async (productRequestID: number) => {
  try {
    const response = await HttpClient.get(
      `/teste-prod-${productRequestID}.json`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
