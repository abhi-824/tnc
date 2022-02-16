import PosterCard from "./ProductCard";
import { useEffect, useState } from "react";
export default function Dashboard(props) {
  const [productList, setProductList] = useState([]);
  useEffect(() => {}, []);
  return (
    <div className="">
      {productList.map((product) => {
        return <PosterCard product={product}></PosterCard>;
      })}
    </div>
  );
}
