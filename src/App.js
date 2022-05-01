import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./Pages/Home";
import SearchPage from "./Pages/SearchPage";
import ProductPage from "./Pages/ProductPage";
import CreateOrderPage from "./Pages/CreateOrderPage";
import Footer from "./Components/Footer.js/Footer";
import CartPage from "./Pages/CartPage";
import UserOrdersPage from "./Pages/UserOrdersPage";
import AccountPage from "./Pages/AccountPage";
import AddProductPage from "./Pages/AddProduct";
import LoginPage from "./Pages/LoginPage,";
import RegisterPage from "./Pages/SignUp";
import CreateProductPage from "./Pages/CreatedProducts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/search/:id" element={<SearchPage />}></Route>
        <Route path="/product/:id" element={<ProductPage />}></Route>
        <Route path="/order/create/:id" element={<CreateOrderPage />}></Route>
        <Route path="/cart" element={<CartPage />} />
        <Route path="/orders" element={<UserOrdersPage />}></Route>
        <Route path="/account" element={<AccountPage />}></Route>
        <Route path="/addproduct" element={<AddProductPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage/>}></Route>
        <Route path="/products" element={<CreateProductPage/>}></Route>

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
