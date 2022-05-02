import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import ProductCard2 from "../Components/Product/ProductCard2";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function CartPage() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState();
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const Token = localStorage.getItem("token");
  const [user, setUser] = useState();

  useEffect(() => {
    if (Token) {
      fetch("http://localhost:3001/auth/" + Token).then((data) => {
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
    fetch("http://localhost:3001/cart/products/" + userId).then((response) => {
      response.json().then((data) => {
        if (response.status === 200) {
          setProducts(data);
          console.log(data)
          let total = 0;
          for (const product of data) total += Number(product.price*product.quantity);
          setTotalPrice(total);
        }
      });
    });
  }, [userId]);
  async function handlePostOrders(e){
    async function handleCreateOrder(quantity,id) {
      const rawData = await fetch(
        "http://localhost:3001/order/create/" + userId + "/" + id,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ qty: quantity }),
        }
      );
      if (rawData.status !== 200) {
        alert("Some Error Occured!");
        return;
      } else {
        return;
      }
    }
    async function removeFromCart(id){
      const rawData = await fetch(
        "http://localhost:3001/cart/product/" + userId + "/" + id,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          }
        }
      );
      if (rawData.status !== 200) {
        alert("Some Error Occured!");
      } else {
        return;
      }
      return rawData;
    }
    for(const product of products){
      await handleCreateOrder(product.quantity,product.id)
      await removeFromCart(product.id)
    }
    navigate("/orders")
  }
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
                      <h1 className="text-xl font-bold mb-4">
                        Quantity: {product.quantity}
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
                {products.map((product, index) => {
                  return (
                    <p className="font-semibold my-4">
                      Price for item {index + 1} : {product.price*product.quantity}
                    </p>
                  );
                })}
                <div className="bg-gray-200 min-w-full min-h-[2px]"></div>
                <p className="font-semibold my-10 text-xl">
                  Total Price: ₹ {totalPrice}
                </p>
                <div className="bg-gray-200 min-w-full min-h-[2px]"></div>
              </div>
              <button onClick={handlePostOrders} className="filter m-2 ml-0 bg-[#3F82B5] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Place Order(s)
              </button>
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
