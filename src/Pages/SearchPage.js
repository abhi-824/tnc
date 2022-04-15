import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Dashboard from "../Components/Dashboard/Dashboard";
export default function Home({ product }) {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <div className="flex justify-between items-center">
        <div className="mx-8 my-4">
          <h1 className="text-2xl font-family-titan-one">Posters</h1>
        </div>
        <div className="buttons"></div>
      </div>
      <Dashboard></Dashboard>
    </React.Fragment>
  );
}
