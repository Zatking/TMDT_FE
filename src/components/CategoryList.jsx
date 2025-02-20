import React from "react";
import { Intel, AMD } from "../categories/cpu";
import { VgaNvidia, VgaIntel, VgaAMD } from "../categories/vga";
import Mainboard from "../categories/mainboard";
import { PsuByWattage, PsuByQuality } from "../categories/psu";

export default function CategoryList(props) {
  return (
    <div
      tabIndex={0}
      className={`dropdown-content menu w-[75vw] grid grid-cols-3 bg-[#fff] rounded-2xl p-5 border-2 border-black z-[100]`}>
      {props.cate == "cpu" ? (
        <>
          <Intel />
          <AMD />
          <Mainboard />
        </>
      ) : props.cate == "gpu" ? (
        <>
          <VgaNvidia />
          <VgaIntel />
          <VgaAMD />
          <PsuByWattage />
          <PsuByQuality />
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
