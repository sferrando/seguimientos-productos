import { ProductList } from "./components/ProductList.jsx";
import { ProductDetails } from "./components/ProductDetails.jsx";
import { Routes, Route } from "react-router-dom";

export function App() {
  return (
    <>
      <Routes>
        <Route path="/seguimientos-productos/" element={<ProductList />} />
        <Route path="/seguimientos-productos/products/:ProductId" element={<ProductDetails />} />
      </Routes>
   </>
  );
}

export default App;
