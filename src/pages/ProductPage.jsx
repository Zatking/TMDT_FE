import { Link, useSearchParams, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Product from "../components/Product";
import Navigation from "../components/Navigation";
// import Cart from "./pages/Cart";

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams] = useSearchParams();
  const { cate, brand, detail } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await fetch("https://node-tmdt.vercel.app/api/get-product");
        const data = await res.json();
        setProducts(data.products);
      } catch (error) {
        setError(error);
        console.log("error: ", error);
      }
    };
    fetchProducts();
    setLoading(false);
    console.log("cate: ", cate);
  }, []);

  return (
    <div className="pt-5 px-20 grid grid-cols-4">
      <div className="col-span-1">
        <Navigation />
      </div>
      <div className="col-span-3">
        <Product page="product" cate={cate} brand={brand} detail={detail} />
      </div>
    </div>
  );
}
