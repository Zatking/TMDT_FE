import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";

const Header = () => (
  <div className="grid grid-cols-5 h-20 px-20 border border-b-black items-center static">
    <p className="font-bold text-3xl">Oggy</p>
    <div className="col-span-2 text-lg grid grid-cols-4 gap-x-20">
      <p className="flex justify-center border-2 border-transparent hover:border-b-[#e0e0e0] cursor-pointer">
        Home
      </p>
      <p className="flex justify-center border-2 border-transparent hover:border-b-[#e0e0e0] cursor-pointer">
        Contact
      </p>
      <p className="flex justify-center border-2 border-transparent hover:border-b-[#e0e0e0] cursor-pointer">
        About
      </p>
      <p
        className="flex justify-center border-2 border-transparent hover:border-b-[#e0e0e0] cursor-pointer"
        id="signInTxt">
        Sign In
      </p>
    </div>
    <div className="col-span-2 flex justify-end items-center space-x-5">
      <div className="flex">
        <input
          type="text"
          placeholder="What are you looking for?"
          className="px-2 bg-[#e0e0e0] h-10 w-52 items-center rounded-l-lg"
        />
        <div className="w-10 h-10 flex justify-center items-center text-xl bg-[#e0e0e0] rounded-r-lg">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
      </div>
      <FontAwesomeIcon icon={faHeart} className="text-xl" />
      <FontAwesomeIcon icon={faCartShopping} className="text-xl" />
      <div id="userProfile" className="text-xl">
        <FontAwesomeIcon icon={faUser} />
      </div>
    </div>
  </div>
);

export default Header;
