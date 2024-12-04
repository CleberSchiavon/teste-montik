import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import HomeProduct from "./pages/Home.tsx";
import Checkout from "./pages/Checkout.tsx";
import { ProductProvider } from "./contexts/ProductContext.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <ProductProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeProduct />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  </ProductProvider>
);
