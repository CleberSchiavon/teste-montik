import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import HomeProduct from "./pages/Home.tsx";
import { ProductProvider } from "./contexts/ProductContext.tsx";
import "./index.css";
import { LayoutProvider } from "./contexts/LayoutContext.tsx";

createRoot(document.getElementById("root")!).render(
  <ProductProvider>
    <LayoutProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeProduct />} />
      </Routes>
    </BrowserRouter>
    </LayoutProvider>
  </ProductProvider>
);
