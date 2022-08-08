import { useParams, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
export default function Product(props) {
  const navigate = useNavigate();
  const [userId, setUserId] = useState();
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const Token = localStorage.getItem("token");
  const [user, setUser] = useState();

  useEffect(() => {
    if (Token) {
      fetch("https://api-abhinyas.herokuapp.com/auth/" + Token).then((data) => {
        data.json().then((data) => {
          console.log(data);
          setUser(data.data.response);
          setUserId(data.data.response.id);
        });
      });
    }
  }, [Token]);
  function handleChangeQuantity(e)  {
    setQuantity(e.target.value);
  }
  useEffect(() => {
    fetch("https://api-abhinyas.herokuapp.com/product/" + id).then((res) => {
      res.json().then((data) => {
        console.log(data);
        setProduct(data[0]);
      });
    });
  }, [id]);
  function handleAddToCart() {
    if (!userId) navigate("/login");
    console.log({ id, quantity });
    fetch(
      "https://api-abhinyas.herokuapp.com/cart/user/" + userId + "/" + id,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ quantity: Number(quantity) }),
      }
    ).then((data) => {
      data.json().then((res) => {
        console.log(res);
        if (data.status === 200) {
          navigate("/cart");
        } else {
          alert("Some Error Occured");
          navigate("/cart");
        }
      });
    });
  }
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
            <p className="font-bold text-xl">Rs. {product.price}</p>
            <p>{product.description}</p>
            <p>
              Quantity:{" "}
              <input
                type="number"
                className="w-[40px] border-[1px] text-center border-gray-500 rounded"
                min={1}
                defaultValue={1}
                onChange={handleChangeQuantity}
              />
            </p>
            <div className="buttons flex">
              <Link
                to={"/order/create/" + product.id + "?quantity=" + quantity}
              >
                <button className="filter m-2 ml-0 bg-[#3F82B5] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Buy Now
                </button>
              </Link>
              <button
                onClick={handleAddToCart}
                className="sort m-2 bg-[#607585] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-200 mt-10">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-xl font-family-titan-one my-4 mt-8">
            ABOUT THE DESIGN
          </h1>
          <div className="w-full my-10">
            <div className="flex justify-around items-start">
              <div className="">
                <h1 className="text-lg font-bold my-4">{product.title}</h1>
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
