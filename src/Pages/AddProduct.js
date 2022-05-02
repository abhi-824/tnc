import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Product from "../Components/Product/Product";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export default function AddProductPage() {
  const navigate = useNavigate();
  const [URL, setURL] = useState();
  const [Title, setTitle] = useState();
  const [Desc, setDesc] = useState();
  const [FDesc, setFDesc] = useState();
  const [Price, setPrice] = useState(120);
  const Token = localStorage.getItem("token");
  const [user, setUser] = useState();
  useEffect(() => {
    if (Token) {
      fetch("http://localhost:3001/auth/" + Token).then((data) => {
        data.json().then((data) => {
          setUser(data.data.response);
        });
      });
    }
  }, [Token]);
  const handleClick = (e) => {
    e.preventDefault();
    const data = {
      photoURL: URL,
      title: Title,
      description: Desc,
      price: Price,
      FDesc,
      userId:user.id
    };
    console.log(data);
    try {
      fetch("http://localhost:3001/product", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) =>
        res.json().then((data) => {
          console.log("Product Sent");
          if (res.status === 200) {
            navigate("/products");
          }
        })
      );
    } catch (error) {
      console.log("Error");
    }
  };
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        {user ? (
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
        ) : (
          <div>
            <button className="filter m-2 ml-0 bg-[#3F82B5] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              <Link to="/login">Login</Link>
            </button>
            <button className="filter m-2 ml-0 bg-[#3F82B5] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              <Link to="/register">Register</Link>
            </button>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}
