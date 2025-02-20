import React from "react";
import Header from "../components/Header";
import Detail from "../components/Detail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfAlt,
  faStar as faStarEmpty,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

export default function ProductDetail() {
  const rating = 4.7;
  const stars = [];

  const toVND = (amount) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(amount);
  };

  for (let i = 1; i <= 5; i++) {
    const decimal = rating - i + 1;

    if (decimal >= 0.75) {
      stars.push(
        <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-400" />
      );
    } else if (decimal >= 0.25) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={faStarHalfAlt}
          className="text-yellow-400"
        />
      );
    } else {
      stars.push(
        <FontAwesomeIcon key={i} icon={faStarEmpty} className="text-gray-300" />
      );
    }
  }
  return (
    <div>
      <Header />
      {/* <Detail /> */}
      <div className="grid grid-cols-3 m-20">
        <div className="border-r border-[#000]">
          <img
            src="https://product.hstatic.net/200000420363/product/cd1fe821-7737-4bb6-b1ed-f93b7650fbd9_c7b610cb65c44070b6b40644caf618fa_master.png"
            alt=""
          />
        </div>
        <div className="col-span-2 px-10">
          <h1 className="font-bold text-4xl mb-2">Product title</h1>
          <p className="flex items-center text-[#ffd700] mb-6">
            {/* 0.0 */}
            {/* <FontAwesomeIcon icon={faStar} className="ml-2" /> */}
            {stars}
            <span className="ml-2 text-xl text-[#000]">{rating}</span>
          </p>
          <p id="price" className="text-4xl text-[#ff0000] font-semibold mb-10">
            {toVND(100000)}
          </p>
          <div className="grid grid-cols-2 gap-5">
            <button className="w-full text-center py-2 border-4 border-[#ff0000] bg-[#ff0000] hover:bg-transparent text-[#fff] hover:text-[#ff0000] font-semibold text-xl rounded-xl">
              Mua ngay
              <br />
              <p className="text-sm font-normal mt-1">
                Giao tận nơi hoặc nhận tại cửa hàng
              </p>
            </button>
            <button className="w-full text-center py-2 border-4 border-[#ff0000] bg-[#ff0000] hover:bg-transparent text-[#fff] hover:text-[#ff0000] font-semibold text-xl rounded-xl">
              <FontAwesomeIcon icon={faCartShopping} className="mr-2" />
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
