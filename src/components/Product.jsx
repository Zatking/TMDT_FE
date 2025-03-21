import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Cart from "../pages/Cart";

export default function Product(props) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const apiUrl = import.meta.env.VITE_API_URL;
  // const [cartProduct, setCartProduct] = useState({});
  const [cartList, setCartList] = useState(new Array());

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     setLoading(true);
  //     try {
  //       const res = await fetch(apiUrl + "/get-product");
  //       const data = await res.json();
  //       setProducts(data.products);
  //     } catch (error) {
  //       setError(error);
  //       console.log("error: ", error);
  //     }
  //   };
  //   fetchProducts();
  //   setLoading(false);
  // }, []);

  useEffect(() => {
    setCartList(localStorage.getItem("cartList"));
    console.log("list: " + cartList);
  }, []);

  useEffect(() => {
    localStorage.setItem("cartList", cartList);
  }, [cartList]);

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
  }, []);

  const toVND = (amount) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(amount);
  };

  return (
    <div>
      <div
        className={`w-full grid ${
          props.page == "home" ? "grid-cols-4" : "grid-cols-3"
        } gap-5`}>
        {products
          .slice(0, props.page == "home" ? 8 : -1)
          .filter(
            (product) =>
              (props.cate ? product.Category.CateName == props.cate : true) &&
              (props.brand ? product.Brand.BrandName == props.brand : true) &&
              product.ProName.includes(props.detail ? props.detail : "")
          )
          // .slice(0)
          .map((product) => (
            <Link
              to={"/productDetail/" + product._id}
              className="p-5 rounded-lg overflow-hidden shadow-lg group"
              key={product._id}>
              <div
                id="proImg"
                className={`w-full h-[19vw] relative rounded-md overflow-hidden`}>
                <img src={product.Images[0]} alt="" />
                <Link
                  onClick={() => {
                    setCartList([...cartList, product]);
                    localStorage.setItem("cartList", cartList);
                    console.log(cartList);
                  }}
                  className="group-hover:right-0 absolute transition-all duration-500 ease-in-out right-[-150px] bg-[#ff0000] text-[#fff] py-2 px-5 bottom-0 cursor-pointer bg-opacity-75 hover:bg-opacity-100 rounded-tl-lg">
                  <FontAwesomeIcon icon={faCartShopping} />
                  Add to cart
                </Link>
              </div>
              <div className="grid grid-cols-4 py-1 items-center">
                <h1 className="col-span-3 font-bold text-lg line-clamp-2">
                  {product.ProName}
                </h1>
                <p className="text-end text-[#ffd700]">
                  {product.Rate / 2}
                  <FontAwesomeIcon icon={faStar} className="ml-1" />
                </p>
              </div>
              <p className="text-lg text-[#ff0000]">{toVND(product.Price)}</p>
            </Link>
          ))}
      </div>
    </div>
  );
}
