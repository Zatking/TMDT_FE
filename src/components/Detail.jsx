import { useState } from "react";
import background from "../assets/background.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfAlt,
  faStar as faStarEmpty,
} from "@fortawesome/free-solid-svg-icons";
const Detail = () => {
  const rating = 5;
  const stars = [];
  const [count, setCount] = useState(1);

  const add = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const subtract = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const formatUSD = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
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
    <div className="bg-white w-full h-screen p-3 px-14">
      <div className="grid lg:grid-cols-2 grid-cols-1 px-4">
        <div className="bg-gray-100 w-full h-[500px] flex justify-center items-center rounded-sm p-3 py-10">
          <img
            src={background}
            className="max-w-[70%] max-h-auto"
            alt="background"
          />
        </div>
        <div className="p-2 ml-2">
          <p className="text-gray-700 text-sm font-serif">Branch:{"DVTG"}</p>
          <p className="text-gray-700 my-2 text-sm font-serif">
            Model:{"DVTG"}
          </p>
          <p className="text-gray-700 my-2 text-sm font-serif">
            Availability:{"DVTG"}
          </p>
          <h1 className="font-serif text-3xl my-2 text-black">
            {"Super god-tier artifact of Thanh, the ultimate pro of the world!"}
          </h1>

          <div className="flex items-center space-x-1">
            {stars}
            <span className="ml-2 text-gray-700 font-medium">
              {rating.toFixed(1)}
            </span>
          </div>
          <p className="text-gray-700 my-2 text-sm font-serif">
            USD {"of all taxes"}
          </p>
          <p className="text-gray-700 mt-2  text-xl ">{formatUSD(1000)}</p>
          <div className="grid grid-cols-3 my-2 w-[90%]">
            <div className="flex w-full h-fit ">
              <span
                className="text-black text-center text-xl cursor-pointer rounded-l-sm w-fit px-4  h-fit border"
                onClick={subtract}
              >
                -
              </span>
              <span className="text-black text-center text-sm py-1 w-fit px-6 h-fit border">
                {count}
              </span>
              <span
                className="text-black text-center text-xl cursor-pointer rounded-r-sm w-fit px-4 h-fit border"
                onClick={add}
              >
                +
              </span>
            </div>
            <div className="w-full h-full flex justify-center items-center">
              <button className="bg-[#E73C17] text-white text-[11px] w-fit h-fit py-[6px] px-10 font-serif rounded-sm">
                Buy now
              </button>
            </div>
            <div className="w-full h-full flex justify-center items-center">
              <button className="border border-[#E73C17] text-[#E73C17] text-[11px]  w-fit h-fit py-[6px] px-10 font-serif rounded-sm">
                Add to cart
              </button>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
