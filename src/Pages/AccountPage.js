import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function AccountPage() {
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
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        {user ? (
          <div className="bg-white min-h-[500px] min-w-[550px] max-w-[500px]">
            <div className="flex flex-col items-center justify-center text-center">
              <img src={user.photoURL} alt="" className="mt-8 max-h-[150px]" />
              <input
                type="email"
                name=""
                id=""
                defaultValue={user.emailId}
                className=" my-4 text-center border-2 border-gray-200 rounded"
              />
              <input
                type="text"
                name=""
                id=""
                defaultValue={user.mobile}
                className="my-4 text-center border-2 border-gray-200 rounded"
              />
              <button className="filter m-2 ml-0 bg-[#3F82B5] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Update Changes
              </button>
              <Link to="/orders">
                <button className="filter m-2 ml-0 bg-[#77a4c6] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  View Your Orders
                </button>
              </Link>
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
