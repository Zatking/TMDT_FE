import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHeart as regularHeart,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";

const Header = () => (
  <div className="grid grid-cols-5 h-20 px-20 border border-b-black items-center static">
    <p className="font-bold text-3xl text-[#ff0000]">Oggy</p>
    <div className="col-span-2 text-lg grid grid-cols-4 gap-x-20">
      <p className="flex hover:text-[#ff0000] justify-center border-2 border-transparent hover:border-b-[#ff0000] cursor-pointer">
        Home
      </p>
      <p className="flex hover:text-[#ff0000] justify-center border-2 border-transparent hover:border-b-[#ff0000] cursor-pointer">
        News
      </p>
      <p className="flex hover:text-[#ff0000] justify-center border-2 border-transparent hover:border-b-[#ff0000] cursor-pointer">
        About
      </p>
      <p
        className="flex hover:text-[#ff0000] justify-center border-2 border-transparent hover:border-b-[#ff0000] cursor-pointer"
        id="signInTxt">
        Sign In
      </p>
    </div>
    <div className="col-span-2 flex justify-end items-center space-x-5">
      <div className="flex">
        <input
          type="text"
          placeholder="What are you looking for?"
          className="px-2 bg-[#f5f5f5] h-10 w-52 items-center rounded-l-lg"
        />
        <div className="w-10 h-10 flex justify-center items-center text-xl bg-[#f5f5f5] rounded-r-lg">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
      </div>
      <FontAwesomeIcon
        id="heartIcon"
        icon={regularHeart}
        className="text-xl text-[#ff0000]"
      />
      <FontAwesomeIcon
        icon={faCartShopping}
        className="text-xl hover:text-[#ff0000]"
      />
      <div id="userProfile" className="text-xl hover:text-[#ff0000]">
        <FontAwesomeIcon icon={faUser} />
      </div>
    </div>
  </div>
);

export default Header;
