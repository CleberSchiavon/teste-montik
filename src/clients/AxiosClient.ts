import axios, { Method } from "axios";

export const ErrorHandling = (error: unknown) => {
  const errorMessage =
    error instanceof Error ? error.message : "An unknown error occurred";
  return errorMessage;
};

export type HttpMethod = Method;
export interface ApiResponse<T> {
  data: T;
  message: string;
}

const API_URL = import.meta.env.VITE_API_URL;

export const HttpClient = axios.create({ baseURL: API_URL });
