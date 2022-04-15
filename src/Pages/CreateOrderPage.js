import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import ProductCard2 from "../Components/Product/ProductCard2";
export default function CreateOrderPage({ product }) {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <div className="bg-gray-100 min-h-screen">
        <ProductCard2></ProductCard2>
      </div>
    </React.Fragment>
  );
}
