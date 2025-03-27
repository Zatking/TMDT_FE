import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHeart as regularHeart,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import {
  faHeart as solidHeart,
  faRobot,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const Header = () => {
  const [cartList, setCartList] = useState([]);
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [productSearch, setProductSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    setCartList(cartData);
  }, []);

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
    <div className="grid grid-cols-5 h-20 px-20 border border-b-black items-center static bg-[#fff]">
      <p className="font-bold text-3xl text-[#ff0000]">Oggy</p>
      <div className="col-span-3 text-lg grid grid-cols-5 gap-x-20">
        <Link
          to="/"
          className={`flex ${
            location.pathname == "/" ? "text-[#ff0000] font-bold" : ""
          } hover:text-[#ff0000] justify-center border-2 border-transparent hover:border-b-[#ff0000] cursor-pointer`}
        >
          Home
        </Link>
        <Link
          to="/news"
          className={`flex ${
            location.pathname == "/news" ? "text-[#ff0000] font-bold" : ""
          } hover:text-[#ff0000] justify-center border-2 border-transparent hover:border-b-[#ff0000] cursor-pointer`}
        >
          News
        </Link>
        <Link
          to="/contact"
          className={`flex ${
            location.pathname == "/contact" ? "text-[#ff0000] font-bold" : ""
          } hover:text-[#ff0000] justify-center border-2 border-transparent hover:border-b-[#ff0000] cursor-pointer`}
        >
          Contact
        </Link>
        {/* <Link
          to="/ChatBot"
          className={`flex ${
            location.pathname == "/ChatBot" ? "text-[#ff0000] font-bold" : ""
          } hover:text-[#ff0000] justify-center border-2 border-transparent hover:border-b-[#ff0000] cursor-pointer`}
          id="signInTxt">
          ChatBot
        </Link> */}
        <Link
          to="/login"
          className={`flex ${
            location.pathname == "/login" ? "text-[#ff0000] font-bold" : ""
          } hover:text-[#ff0000] justify-center border-2 border-transparent hover:border-b-[#ff0000] cursor-pointer`}
          id="signInTxt"
        >
          Sign In
        </Link>
      </div>
      <div className="col-span-1 flex justify-end items-center space-x-5">
        <Link to="/ChatBot">
          <FontAwesomeIcon
            icon={faRobot}
            className={`${
              location.pathname == "/ChatBot" ? "text-[#ff0000]" : ""
            } text-xl mt-1 hover:text-[#ff0000]`}
          />
        </Link>
        <div
          className="flex"
          onClick={() => document.getElementById("my_modal_2").showModal()}>
          <input
            type="text"
            placeholder="What are you looking for?"
            className="px-2 bg-[#f5f5f5] h-10 w-52 items-center rounded-l-lg outline-none"
          />
          <div className="w-10 h-10 flex justify-center items-center text-xl bg-[#f5f5f5] rounded-r-lg">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
        </div>
        <dialog id="my_modal_2" className="modal">
          <div className="modal-box">
            <div className="flex w-full">
              <input
                type="text"
                placeholder="What are you looking for?"
                onChange={(e) => setProductSearch(e.target.value)}
                className="px-2 bg-[#f5f5f5] h-10 w-full items-center rounded-l-lg outline-none"
              />
              <div className="w-20 h-10 flex justify-center items-center text-xl bg-[#f5f5f5] rounded-r-lg">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </div>
            </div>
            <div className="">
              {productSearch ? (
                products
                  .filter((product) => product.ProName.includes(productSearch))
                  .map((product) => (
                    <Link
                      to={"/productDetail/" + product._id}
                      className="p-5 rounded-lg overflow-hidden shadow-lg flex h-20"
                      key={product._id}>
                      <img src={product.Images[0]} alt="" />
                      <div className="">
                        <p className="font-bold line-clamp-1">
                          {product.ProName}
                        </p>
                        <p>{toVND(product.Price)}</p>
                      </div>
                    </Link>
                  ))
              ) : (
                <p className="text-[#ff0000]">Type in something</p>
              )}
            </div>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
        <FontAwesomeIcon
          id="heartIcon"
          icon={regularHeart}
          className="text-xl text-[#ff0000]"
        />
        <Link to="/cart" className="relative">
          <FontAwesomeIcon
            icon={faCartShopping}
            className={`${
              location.pathname == "/cart" ? "text-[#ff0000]" : ""
            } text-xl mt-1 hover:text-[#ff0000]`}
          />
          <div className="absolute -top-2 -right-2 rounded-full bg-[#ff0000] border-2 border-[#fff] w-5 h-5 flex items-center justify-center text-[#fff] text-xs">
            {cartList ? cartList.length : 0}
          </div>
        </Link>
        <div id="userProfile" className="text-xl hover:text-[#ff0000]">
          <FontAwesomeIcon icon={faUser} />
        </div>
      </div>
    </div>
  );
};

export default Header;
