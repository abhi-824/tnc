import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Product from "../Components/Product/Product";
export default function Home({ product }) {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Product></Product>
    </React.Fragment>
  );
}
