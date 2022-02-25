import PosterCard from "./ProductCard";
import { useEffect, useState } from "react";
export default function Dashboard(props) {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3001/product').then((res)=>{
      res.json().then((data)=>{
        console.log(data)
        setProductList(data)
      })
    })
  }, []);
  return (
    <div className=" mx-8 grid grid-cols-5 justify-between items-center ">
      {productList.map((product) => {
        return <PosterCard product={product}></PosterCard>;
      })}
    </div>
  );
}
