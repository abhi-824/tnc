import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function UserOrders() {
  const [userId, setUserId] = useState();
  const [orders, setOrders] = useState([]);
  const Token = localStorage.getItem("token");
  const [user, setUser] = useState();

  useEffect(() => {
    if (Token) {
      fetch("https://api-abhinyas.herokuapp.com/auth/" + Token).then((rdata) => {
        rdata.json().then((data) => {
          if(rdata.status===200){
            console.log(data);
            setUser(data.data.response);
            setUserId(data.data.response.id);
          }
        });
      });
    }
  }, [Token]);
  useEffect(() => {
    fetch("https://api-abhinyas.herokuapp.com/user/orders/" + userId).then((response) => {
      response.json().then((data) => {
        console.log(data)
        if(response.status===200) 
        setOrders(data);
      });
    });
  }, [userId]);
  useEffect(()=>{
    console.log(orders)
  },[orders])
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <div className="bg-gray-100 min-h-screen ">
        {user ? (
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
                        {product.isDelivered
                          ? " Delivered"
                          : " Yet to deliver!"}
                      </p>
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
