import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function CreatedProductPage() {
  const [userId, setUserId] = useState();
  const [products, setProducts] = useState([]);
  const Token = localStorage.getItem("token");
  const [user, setUser] = useState();

  useEffect(() => {
    if (Token) {
      fetch("https://api-abhinyas.herokuapp.com/auth/" + Token).then((data) => {
        data.json().then((data) => {
          console.log(data);
          setUser(data.data.response);
          setUserId(data.data.response.id);
        });
      });
    }
  }, [Token]);
  useEffect(() => {
    console.log(userId);
    fetch("https://api-abhinyas.herokuapp.com/view/myproducts/" + userId).then((response) => {
      response.json().then((data) => {  
        if (response.status === 200) {
          setProducts(data);
          console.log(data)
        }
      });
    });
  }, [userId]);
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <div className="bg-gray-100 min-h-screen ">
        {user ? (
          <div className="grid grid-cols-3 items-start">
            <div className="col-span-2">
              {products.map((product) => {
                return (
                  <div className="bg-white flex mx-10 my-10 p-8">
                    <div className="p-4">
                      <img
                        src={product.photoURL}
                        alt="productImg"
                        className="max-w-[150px] max-h-[450px] shadow-tnc-lg border-4 border-white"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start">
                      <h1 className="text-2xl font-family-titan-one my-4">
                        {product.title}
                      </h1>
                      <p>{product.description}</p>
                      <h1 className="text-xl font-bold mb-4">
                        Rs. {product.price}(Inclusive of GST)
                      </h1>
                    </div>
                  </div>
                );
              })}
            </div>
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
