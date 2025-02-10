import React from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Category from "../components/CategoryList";

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <div className="grid grid-cols-4 px-20">
        <div className="col-span-1 border-2 border-transparent border-r-[#000]">
          <Navigation />
        </div>
        <div className="col-span-3"></div>
      </div>
      {/* <Category className="absolute top-0 left-0"></Category> */}
    </div>
  );
}
