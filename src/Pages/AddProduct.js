import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Product from "../Components/Product/Product";
export default function AddProductPage() {
  const [URL, setURL] = useState();
  const [Title, setTitle] = useState();
  const [Desc, setDesc] = useState();
  const [FDesc, setFDesc] = useState();
  const [Price, setPrice] = useState();
  const handleClick = (e) => {
    e.preventDefault();
    const data = {
      URL,
      Title,
      Desc,
      Price,
      FDesc,
    };
    console.log(data);
    try {
      fetch("https://localhost:3001/product", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }).then(
        (res) => {
          console.log("Product Sent");
        },
        function (error) {
          console.log("Error");
        }
      );
    } catch (error) {
      console.log("Error");
    }
  };
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="bg-white min-h-[500px] min-w-[550px] max-w-[500px] flex flex-col justify-center items-center">
          <h1 className="text-2xl font-family-titan-one text-center my-4">
            Add Product
          </h1>
          <form
            action=""
            className="flex flex-col items-center justify-center"
            onSubmit={handleClick}
          >
            {/* <input type="file" name="photo" id="" className="text-center my-2" /> */}
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter URL of image"
              className="my-2 text-center border-2 border-gray-200 rounded"
              onChange={(e) => setURL(e.target.value)}
              required
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Title"
              className="my-2 text-center border-2 border-gray-200 rounded"
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <input
              type="number"
              name=""
              min="1"
              id=""
              placeholder="Price"
              defaultValue={120}
              className="my-2 text-center border-2 border-gray-200 rounded"
              onChange={(e) => setPrice(e.target.value)}
              required
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Description"
              className="my-2 text-center border-2 border-gray-200 rounded"
              onChange={(e) => setDesc(e.target.value)}
              required
            />
            <textarea
              placeholder="Describe a little more..."
              name=""
              id=""
              cols="25"
              rows="2"
              className="my-2 text-center border-2 border-gray-200 rounded"
              onChange={(e) => setFDesc(e.target.value)}
              required
            ></textarea>
            <button
              type="submit"
              className="filter m-2 ml-0 bg-[#77a4c6] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Add Product
            </button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}
