import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Product from "../Components/Product/Product";
export default function AddProductPage() {
    return (
        <React.Fragment>
            <Navbar></Navbar>
            <div className="bg-gray-100 min-h-screen flex items-center justify-center">
                <div className="bg-white min-h-[500px] min-w-[550px] max-w-[500px] flex flex-col justify-center items-center">
                    <h1 className="text-2xl font-family-titan-one text-center my-4">Add Product</h1>
                    <form action="" className="flex flex-col items-center justify-center">
                        <input type="file" name="photo" id="" className="text-center my-2" />
                        <input type="text" name="" id="" placeholder="Title" className="my-2 text-center border-2 border-gray-200 rounded" />
                        <input type="number" name="" min="1" id="" placeholder="Price" defaultValue={120} className="my-2 text-center border-2 border-gray-200 rounded" />
                        <input type="text" name="" id="" placeholder="Description" className="my-2 text-center border-2 border-gray-200 rounded" />
                        <textarea placeholder="Describe a little more..." name="" id="" cols="25" rows="2" className="my-2 text-center border-2 border-gray-200 rounded"></textarea>
                        <button className="filter m-2 ml-0 bg-[#77a4c6] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Add Product
                        </button>
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
}
