import { Helmet } from "react-helmet-async";
import Navigation from "../components/Navigation";
import ProductList from "../components/ProductList";

export default function Home() {
  return (
    <div className="relative pt-5 bg-white">
      <Helmet>
        <title>Trang Chủ - Bán Đồ Linh Kiện Điện Tử</title>
        <meta
          name="description"
          content="Chuyên bán đồ linh kiện điện tử, VGA, CPU, RAM, Mainboard với giá tốt nhất."
        />
        <meta
          name="keywords"
          content="đồ linh kiện điện tử, VGA, CPU, RAM, Mainboard"
        />
        <meta property="og:title" content="Trang Chủ - Đồ Linh Kiện Điện Tử" />
        <meta
          property="og:description"
          content="Mua linh kiện điện tử chất lượng cao, giá tốt nhất tại cửa hàng chúng tôi."
        />
        <meta
          property="og:image"
          content="https://promotions.newegg.com/intel/24-1244/1920x360@2x.jpg"
        />
      </Helmet>

      <div className="grid grid-cols-4 px-20">
        <div className="col-span-1 border border-transparent border-r-[#000]">
          <Navigation />
        </div>
        <div className="col-span-3 h-full flex items-center pl-10">
          <div className="rounded-xl overflow-hidden">
            <img
              src="https://promotions.newegg.com/intel/24-1244/1920x360@2x.jpg"
              alt="Linh kiện điện tử"
              className=""
            />
          </div>
        </div>
      </div>
      <ProductList />
    </div>
  );
}
