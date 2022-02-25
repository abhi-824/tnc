import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Dashboard from "./Components/Dashboard/Dashboard";
import Product from "./Components/Product/Product";
import Banner from "./assets/banner.png";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <React.Fragment>
              <div className="">
                <Navbar></Navbar>
                <img src={Banner} alt="Banner" />
                <div className="flex justify-between items-center">
                  <div className="mx-8 my-4">
                    <h1 className="text-2xl font-family-titan-one">Posters</h1>
                  </div>
                  <div className="buttons">
                    <button className="bg-[#3E83B5] text-white font-family-titan-one px-4 py-2 rounded mx-2">
                      Filter
                    </button>
                    <button className="bg-[#3E83B5] text-white font-family-titan-one px-4 py-2 rounded mx-2 mr-8">
                      Sort
                    </button>
                  </div>
                </div>
                <Dashboard></Dashboard>
              </div>
            </React.Fragment>
          }
        ></Route>
        <Route
          path="/search/:id"
          element={
            <React.Fragment>
              <Navbar></Navbar>
              <div className="flex justify-between items-center">
                <div className="mx-8 my-4">
                  <h1 className="text-2xl font-family-titan-one">Posters</h1>
                </div>
                <div className="buttons">
                  <div className="filter"></div>
                  <div className="sort"></div>
                </div>
              </div>
              <Dashboard></Dashboard>
            </React.Fragment>
          }
        ></Route>
        <Route
          path="/product/:id"
          element={
            <React.Fragment>
              <Navbar></Navbar>
              <Product></Product>
            </React.Fragment>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
