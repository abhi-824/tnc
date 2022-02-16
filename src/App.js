import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Dashboard from "./Components/Dashboard/Dashboard";
import Product from "./Components/Product/Product";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <React.Fragment>
              <Navbar></Navbar>
              <img src="" alt="Banner" />
              <div className="flex justify-between items-center">
                <h1>Posters</h1>
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
          path="/search/:id"
          element={
            <React.Fragment>
              <Navbar></Navbar>
              <div className="flex justify-between items-center">
                <h1>Posters</h1>
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
          path="/search/:id"
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
