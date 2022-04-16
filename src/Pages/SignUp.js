import React from "react";
import Navbar from "../Components/Navbar/Navbar";
export default function RegisterPage() {
    return (
        <React.Fragment>
            <Navbar></Navbar>
            <div className="bg-gray-100 min-h-screen flex items-center justify-center">
                <div className="bg-white min-h-[500px] min-w-[550px] max-w-[500px]">
                    <div className="flex flex-col items-center justify-center text-center">
                        <h1 className="text-2xl font-family-titan-one text-center my-4">Register</h1>
                        <form action="" className="flex flex-col items-center justify-center">
                        <input type="file" name="photo" id="" placeholder="Photo "className="text-center my-2" />
                        <input type="email" name="" id="" placeholder="email here" className="my-2 text-center border-2 border-gray-200 rounded" />
                        <input type="password" name="" id="" placeholder="password here🙈" className="my-2 text-center border-2 border-gray-200 rounded" />
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
