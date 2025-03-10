import Product from "./Product";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const apiUrl = import.meta.env.VITE_API_URL;
  const { cate } = useParams();

  return (
    <div className="w-full px-20 mt-20 bg-white">
      <p className="border-l-8 border-[#ff0000] px-5 text-lg text-[#ff0000] font-bold">
        This Month
      </p>
      <div className="flex justify-between items-center">
        <p className="text-3xl font-semibold mt-3 mb-10 text-[#000]">
          Best Selling VGA
        </p>
        <button className="bg-[#ff0000] hover:bg-[#fff] border-2 border-[#ff0000] py-3 px-5 rounded-lg text-[#fff] hover:text-[#ff0000] font-bold">
          View All
        </button>
      </div>
      <Product cate={cate} />
    </div>
  );
}
