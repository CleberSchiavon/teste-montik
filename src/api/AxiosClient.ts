import axios, { Method } from "axios";

export const ErrorHandling = (error: unknown) => {
  const errorMessage =
    error instanceof Error ? error.message : "An unknown error occurred";
  return errorMessage;
};

export type HttpMethod = Method;

const PRODUCT_API_URL = import.meta.env.VITE_PRODUCT_API_URL;

export const ProductClient = axios.create({ baseURL: PRODUCT_API_URL });

export const BuyProductClient = axios.create({baseURL: "/buy-api"})
