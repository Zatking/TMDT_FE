import React from "react";
import Header from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function ProductDetail() {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-3 m-20">
        <div className="border-r border-[#000]">
          <img
            src="https://product.hstatic.net/200000420363/product/cd1fe821-7737-4bb6-b1ed-f93b7650fbd9_c7b610cb65c44070b6b40644caf618fa_master.png"
            alt=""
          />
        </div>
        <div className="col-span-2 px-10">
          <h1 className="font-bold text-4xl">Product title</h1>
          <p className="text-lg text-[#ffd700]">
            0.0
            <FontAwesomeIcon icon={faStar} className="ml-2" />
          </p>
          <p id="price" className="text-4xl text-[#ff0000] font-semibold">
            $100
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
