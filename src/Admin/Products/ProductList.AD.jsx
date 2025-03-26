import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faCircleInfo, faBox, faPlus } from "@fortawesome/free-solid-svg-icons";

const ProductListAD = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedPage, setSelectedPage] = useState(1);
  const [cate, setCate] = useState("all");
  const [show, setShow] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://node-tmdt.vercel.app/api/get-product"
        );
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        setError(error);
      }
    };
    fetchProducts();
    setLoading(false);
  }, []);

  const toVND = (amount) => {
    return amount.toLocaleString("it-IT", {
      style: "currency",
      currency: "VND",
    });
  };

  const toggleshow = () => {
    setShow(!show);
  };

  if (loading) {
    return (
      <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
        <span className="ml-6 text-xl text-gray-300">Đang tải dữ liệu...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
        <div className="p-6 bg-red-500/10 border border-red-500 rounded-xl shadow-lg">
          <p className="text-red-400 flex items-center text-lg">
            <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {error}
          </p>
        </div>
      </div>
    );
  }

  const pages = [];
  for (
    let i = 0;
    i <
    Math.ceil(
      products.filter(
        (pro) => cate === "all" || pro.Category?.CateName === cate
      ).length / 6
    );
    i++
  ) {
    pages.push(i + 1);
  }

  const filteredProducts = products.filter(
    (pro) => cate === "all" || pro.Category?.CateName === cate
  );

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-700 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-500/20 rounded-xl">
                <FontAwesomeIcon icon={faBox} className="w-8 h-8 text-blue-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                  Danh sách sản phẩm
                </h2>
                <p className="text-gray-400 mt-1">Quản lý và theo dõi sản phẩm của bạn</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <div className="relative">
                <div
                  onClick={toggleshow}
                  tabIndex={0}
                  role="button"
                  className="px-6 py-3 bg-gray-700/50 text-white rounded-xl font-semibold shadow-lg transition-all duration-300 flex items-center space-x-2 cursor-pointer hover:bg-gray-600/50 border border-gray-600 hover:border-blue-500"
                >
                  <FontAwesomeIcon icon={faBox} className="w-5 h-5 text-blue-400" />
                  <span>Lọc theo danh mục</span>
                  {show && (
                    <ul className="absolute top-full right-0 mt-2 w-64 bg-gray-800 rounded-xl shadow-xl border border-gray-700 py-2 z-50">
                      <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer text-white">
                        <p
                          onClick={() => {
                            setCate("all");
                            setSelectedPage(1);
                            setShow(false);
                          }}
                          className="w-full"
                        >
                          Tất cả sản phẩm
                        </p>
                      </li>
                      {Array.from(
                        new Set(products.map((pro) => pro.Category?.CateName))
                      )
                        .filter((cateName) => cateName)
                        .map((cateName) => (
                          <li
                            key={cateName}
                            className="px-4 py-2 hover:bg-gray-700 cursor-pointer text-white"
                          >
                            <p
                              onClick={() => {
                                setCate(cateName);
                                setSelectedPage(1);
                                setShow(false);
                              }}
                              className="w-full"
                            >
                              {cateName}
                            </p>
                          </li>
                        ))}
                    </ul>
                  )}
                </div>
              </div>
              <Link 
                to="/AD/AddPro"
                className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-semibold shadow-lg transition-all duration-300 flex items-center space-x-2 border border-green-400 hover:border-green-300"
              >
                <FontAwesomeIcon icon={faPlus} className="w-5 h-5" />
                <span>Thêm sản phẩm</span>
              </Link>
              <div className="px-6 py-3 bg-blue-500/20 text-blue-400 rounded-xl text-lg font-semibold shadow-lg border border-blue-500/30">
                {filteredProducts.length} sản phẩm
              </div>
            </div>
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="flex flex-col items-center justify-center min-h-[400px]">
            <svg className="w-24 h-24 text-gray-400 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
            <p className="text-2xl text-gray-400">Không có sản phẩm nào.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts
              .slice((selectedPage - 1) * 6, selectedPage * 6)
              .map((pro) => (
                <div
                  key={pro._id}
                  className="group bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-1 border border-gray-700 hover:border-blue-500 overflow-hidden"
                >
                  <div className="relative h-64">
                    <img
                      src={pro.Images[0]}
                      alt={pro.name}
                      className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                      {pro.ProName}
                    </h3>
                    <div className="space-y-2">
                      <p className="text-gray-400">
                        <span className="font-medium">Giá:</span>{" "}
                        <span className="text-white">{toVND(pro.Price)}</span>
                      </p>
                      <p className="text-gray-400">
                        <span className="font-medium">Còn lại:</span>{" "}
                        <span className="text-white">{pro.RemainQuantity}</span>
                      </p>
                      <p className="text-gray-400">
                        <span className="font-medium">Đã bán:</span>{" "}
                        <span className="text-white">{pro.SoldQuantity}</span>
                      </p>
                    </div>
                    <div className="flex space-x-3 pt-2">
                      <Link
                        to={`/AD/ProDetailAD/${pro._id}`}
                        className="flex-1 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
                      >
                        <FontAwesomeIcon icon={faCircleInfo} className="w-4 h-4" />
                        <span>Chi tiết</span>
                      </Link>
                      <Link
                        to={`/AD/EditPro/${pro._id}`}
                        className="flex-1 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
                      >
                        <FontAwesomeIcon icon={faEdit} className="w-4 h-4" />
                        <span>Sửa</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}

        {pages.length >= 2 && (
          <div className="flex justify-center mt-8">
            <div className="flex space-x-2">
              {pages.map((page) => (
                <button
                  key={page}
                  onClick={() => setSelectedPage(page)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-semibold transition-all duration-300 ${
                    selectedPage === page
                      ? "bg-blue-500 text-white"
                      : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductListAD;
