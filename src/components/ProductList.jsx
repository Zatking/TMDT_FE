import React from "react";
import Product from "./Product";

export default function ProductList(props) {
  return (
    <div className="w-full px-20 mt-20">
      <p className="border-l-8 border-[#ff0000] px-5 text-lg text-[#ff0000] font-bold">
        {props.subTitle}
      </p>
      <div className="flex justify-between items-center">
        <p className="text-3xl font-semibold mt-3 mb-10 text-[#000]">
          {props.title}
        </p>
        <button className="bg-[#ff0000] hover:bg-[#fff] border-2 border-[#ff0000] py-3 px-5 rounded-lg text-[#fff] hover:text-[#ff0000] font-bold">
          View All  
        </button>
      </div>
      <div className="grid grid-cols-4 gap-x-5">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}
