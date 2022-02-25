import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
export default function Product(props) {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch("http://localhost:3001/product/" + id).then((res) => {
      res.json().then((data) => {
        console.log(data);
        setProduct(data[0]);
      });
    });
  }, [id]);
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full">
        <div className="grid grid-cols-2 justify-center ">
          <div className="flex justify-center items-center">
            <img
              src={product.photoURL}
              alt="productImg"
              className="max-w-[350px] max-h-[450px] shadow-tnc-lg border-4 border-white"
            />
          </div>
          <div className="flex flex-col items-start justify-start mt-4 ">
            <h1 className="text-2xl font-family-titan-one my-4">
              {product.title}
            </h1>
            <p>{product.description}</p>
            <p>
              Quantity:{" "}
              <input
                type="number"
                className="w-[40px] border-[1px] text-center border-gray-500 rounded"
                min={1}
                defaultValue={1}
              />
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-200">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-xl font-family-titan-one my-4">
            ABOUT THE DESIGN
          </h1>
          <div className="w-full">
            <div className  ="flex justify-around items-start">
              <div className="">
                <h1 className="text-lg font-bold my-4">
                  {product.title}
                </h1>
                <p>{product.longDescription}</p>
              </div>
              <img
                src={product.photoURL}
                alt="productImg"
                className="max-w-[150px] max-h-[250px] shadow-tnc border-2 border-white"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
