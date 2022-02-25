import { Link } from "react-router-dom";
export default function ProductCard({ product }) {
  return (
    <div className="">
      <Link to={"/product/"+product.id}>
        <div className="flex flex-col items-center justify-center">
          <img
            src={product.photoURL}
            alt="productImg"
            className="max-w-[150px] max-h-[250px] shadow-tnc border-2 border-white"
          />
          <p>{product.title}</p>
          <p>Rs.{product.price}</p>
        </div>
      </Link>
    </div>
  );
}
