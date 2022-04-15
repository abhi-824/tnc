import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import ProductCard2 from "../Components/Product/ProductCard2";
import { useEffect, useState } from "react";
export default function CartPage() {
  const userId = 3;
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/cart/products/" + userId).then((response) => {
      response.json().then((data) => {
        setProducts(data);
      });
    });
  }, []);
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <div className="bg-gray-100 min-h-screen ">
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

          <div className="col-span-1 flex flex-col">
            <div className="min-h-[300px] bg-white flex flex-col my-10 p-4 mx-10">
              <h1 className="text-[#8E8E8E] text-xl  font-bold mb-2">
                Price Details
              </h1>
              <div className="bg-gray-200 min-w-full min-h-[2px]"></div>
              <p className="font-semibold my-10">Price for this item:</p>
              <div className="bg-gray-200 min-w-full min-h-[2px]"></div>
              <p className="font-semibold my-10 text-xl">Total Price: ₹</p>
              <div className="bg-gray-200 min-w-full min-h-[2px]"></div>
            </div>
            <button className="filter m-2 ml-0 bg-[#3F82B5] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
