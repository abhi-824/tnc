export default function ProductCard({ product }) {
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center">
        <img src={product.imgLink} alt="productImg" />
        <p>{product.title}</p>
        <p>Rs.{product.price}</p>
      </div>
    </div>
  );
}
