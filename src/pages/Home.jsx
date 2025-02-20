import React from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Category from "../components/CategoryList";
import ProductList from "../components/ProductList";

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <div className="grid grid-cols-4 px-20">
        <div className="col-span-1 border border-transparent border-r-[#000]">
          <Navigation />
        </div>
        <div className="col-span-3 h-full flex items-center pl-10">
          <div className="rounded-xl overflow-hidden">
            <img
              src="https://promotions.newegg.com/intel/24-1244/1920x360@2x.jpg"
              alt=""
              className=""
            />
          </div>
        </div>
      </div>
      <ProductList subTitle="This Month" title="Best Selling Products" />
    </div>
  );
}
