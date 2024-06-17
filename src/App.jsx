import { useEffect, useState } from "react";
import "./App.css";
import Collection from "./components/Collection";
import ProductPage from "./components/ProductPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
export default function App() {
  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route index element={<Collection collection="bulk-all-purpose-flours" />} />
          <Route path="products/:productHandle" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
