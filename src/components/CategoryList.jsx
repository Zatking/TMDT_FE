import React from "react";
import { Intel, AMD } from "../categories/cpu";
import Mainboard from "../categories/mainboard";

export default function CategoryList(cate) {
  return (
    <div
      tabIndex={0}
      className={`dropdown-content menu w-[75vw] grid grid-cols-3 bg-[#fff] rounded-2xl p-5 border-2 border-black`}>
      <Intel />
      <AMD />
      <Mainboard></Mainboard>
    </div>
  );
}
