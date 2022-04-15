import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { useEffect, useState } from "react";
export default function UserOrders() {
  const userId = 3;
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/user/orders/" + userId).then((response) => {
      response.json().then((data) => {
        setOrders(data);
      });
    });
  }, []);
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <div className="bg-gray-100 min-h-screen ">
        <div className="grid grid-cols-1 items-start">
          <div className="">
            {orders.map((product) => {
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
                    <p>Quantity: {product.quantity}</p>
                    <p>Order Placed on : {product.date.substring(0, 10)} </p>
                    <p>
                      Delivery Status:
                      {product.isDelivered ? " Delivered" : " Yet to deliver!"}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
