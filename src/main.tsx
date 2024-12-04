import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import HomeProduct from "./pages/Home.tsx";
import { ProductProvider } from "./contexts/ProductContext.tsx";
import { LayoutProvider } from "./contexts/LayoutContext.tsx";

import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import { ToastContainer } from "react-toastify";
createRoot(document.getElementById("root")!).render(
  <>
    <ProductProvider>
      <LayoutProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeProduct />} />
          </Routes>
        </BrowserRouter>
      </LayoutProvider>
    </ProductProvider>
    <ToastContainer />
  </>
);
