import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
export default function ProductCard2(props) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [userId, setUserId] = useState();

  const [product, setProduct] = useState({});
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
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  const [quantity, setQuantity] = useState(params.quantity || 1);
  function handleChangeQuantity(e) {
    setQuantity(e.target.value);
  }
  async function handleCreateOrder(e) {
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
    if (rawData.status != 200) {
      alert("Some Error Occured!");
    } else {
      navigate("/orders");
    }
  }
  useEffect(() => {
    fetch("http://localhost:3001/product/" + id).then((res) => {
      res.json().then((data) => {
        console.log(data);
        setProduct(data[0]);
      });
    });
  }, [id]);
  return (
    <div className="grid grid-cols-3">
      <div className="bg-white flex col-span-2 mx-10 my-10 p-8">
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
          <p>
            Quantity:{" "}
            <input
              type="number"
              className="w-[40px] border-[1px] text-center border-gray-500 rounded"
              min={1}
              defaultValue={quantity}
              onChange={handleChangeQuantity}
            />
          </p>
        </div>
      </div>
      <div className="col-span-1 flex flex-col">
        <div className="min-h-[300px] bg-white flex flex-col my-10 p-4 mx-10">
          <h1 className="text-[#8E8E8E] text-xl  font-bold mb-2">
            Price Details
          </h1>
          <div className="bg-gray-200 min-w-full min-h-[2px]"></div>
          <p className="font-semibold my-10">
            Price for this item: {quantity * product.price}
          </p>
          <div className="bg-gray-200 min-w-full min-h-[2px]"></div>
          <p className="font-semibold my-10 text-xl">
            Total Price: ₹ {quantity * product.price}
          </p>
          <div className="bg-gray-200 min-w-full min-h-[2px]"></div>
        </div>
        <button
          onClick={handleCreateOrder}
          className="filter m-2 ml-0 bg-[#3F82B5] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Place Order
        </button>
      </div>
    </div>
  );
}
