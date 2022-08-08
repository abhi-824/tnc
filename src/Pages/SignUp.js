import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
export default function RegisterPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState(1);
  const [password, setPassword] = useState();
  const [number, setNumber] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      password,
      email,
      mobile: number,
      address: {},
    };
    fetch("https://api-abhinyas.herokuapp.com/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json)
      .then((data) => {
        console.log(data);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        // navigate('/login')
      });
  };
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="bg-white min-h-[500px] min-w-[550px] max-w-[500px]">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-2xl font-family-titan-one text-center my-4">
              Register
            </h1>
            <form
              action=""
              className="flex flex-col items-center justify-center"
              onSubmit={handleSubmit}
            >
              <input
                type="email"
                name=""
                id=""
                placeholder="email here"
                className="my-2 text-center border-2 border-gray-200 rounded"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="number"
                name=""
                id=""
                placeholder="number here"
                className="my-2 text-center border-2 border-gray-200 rounded"
                onChange={(e) => setNumber(e.target.value)}
                required
              />
              <input
                type="password"
                name=""
                id=""
                placeholder="password here🙈"
                className="my-2 text-center border-2 border-gray-200 rounded"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button className="filter m-2 ml-0 bg-[#77a4c6] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
