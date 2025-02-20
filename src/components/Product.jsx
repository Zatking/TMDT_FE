import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function Product(props) {
  return (
    <Link
      to="/product"
      className="p-5 rounded-lg overflow-hidden shadow-lg group">
      <div
        id="proImg"
        className={`w-full h-[19vw] relative rounded-md overflow-hidden`}>
        <img
          src="https://product.hstatic.net/200000420363/product/cd1fe821-7737-4bb6-b1ed-f93b7650fbd9_c7b610cb65c44070b6b40644caf618fa_master.png"
          alt=""
        />
        <p className="group-hover:right-0 absolute transition-all duration-500 ease-in-out right-[-150px] bg-[#ff0000] text-[#fff] py-2 px-5 bottom-0 cursor-pointer bg-opacity-75 hover:bg-opacity-100 rounded-tl-lg">
          <FontAwesomeIcon icon={faCartShopping} />
          Add to cart
        </p>
      </div>
      <div className="grid grid-cols-2 py-1 items-center">
        <h1 className="font-bold text-lg">Product</h1>
        <p className="text-end text-[#ffd700]">
          0.0
          <FontAwesomeIcon icon={faStar} className="ml-1" />
        </p>
      </div>
      <p className="text-lg text-[#ff0000]">$100</p>
    </Link>
  );
}
