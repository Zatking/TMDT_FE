import React from "react";
import { Intel, AMD } from "../categories/cpu";
import {
  Storage,
  StorageCorsair,
  StorageKingston,
  StorageSamSung,
  StorageMSI,
} from "../categories/storage";
import { Ram } from "../categories/ram";
import { Case } from "../categories/case";
import { VgaNvidia, VgaIntel, VgaAMD } from "../categories/vga";
import Mainboard from "../categories/mainboard";
import { PsuByQuality } from "../categories/psu";
import PropTypes from "prop-types";
import { Cooling } from "../categories/cooling";
CategoryList.propTypes = {
  cate: PropTypes.string,
};

export default function CategoryList(props) {
  return (
    <div
      tabIndex={0}
      className={`dropdown-content menu w-[75vw] grid grid-cols-3 bg-[#fff] rounded-2xl p-5 border-2 border-black z-[100]`}
    >
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
          <PsuByQuality />
        </>
      ) : props.cate == "storage" ? (
        <>
          <Storage />
          <StorageCorsair />
          <StorageKingston />
          <StorageSamSung />
          <StorageMSI />
          <Ram />
        </>
      ) : (
        <>
          <Case />
          <Cooling />
        </>
      )}
    </div>
  );
}
