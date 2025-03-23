import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

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
      <div className="bg-gradient-to-bl to-[#75e093] from-[#eeeeee] h-full flex items-center justify-center">
        <span className="font-extrabold text-black text-4xl text-center">
          Loading...
        </span>
      </div>
    );
  }
  if (error) {
    return (
      <div className="text-center w-full text-4xl translate-y-1/2 h-full font-extrabold">
        {error}
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

  return (
    <div className="lg:bg-[#e7e7e7] h-full  bg-[#e7e7e7]">
      <div className="w-full  to-[#e7e7e7] from-30% h-full from-[#ffffff]  p-4">
        <h1 className="text-4xl text-[#16233B] mb-4 w-full text-center font-bold">
          Danh sách sản phẩm
        </h1>
        <div className="flex justify-between px-2 my-4">
          <div
            onClick={toggleshow}
            tabIndex={0}
            role="button"
            className="font-semibold flex items-center bg-[#4BA771] hover:bg-[#fff] text-[#eaf9e7] hover:text-[#173b16] border-2 border-[#4BA771] outline-none px-4 py-2 rounded-lg"
          >
            Sort by category
            {show && (
              <ul
                tabIndex={0}
                className="dropdown-content menu absolute top-20 bg-[#fff] rounded-box z-[1] w-52 p-2 shadow-inner shadow-[#fff]  "
              >
                <li className="flex items-center text-[#16233B] text-lg">
                  <p
                    onClick={() => {
                      setCate("all");
                      setSelectedPage(1);
                      setShow(false);
                    }}
                    className="w-full hover:bg-[#2E4F4F] hover:text-[#eaf9e7] bg-[#fff] active:font-bold border-2 border-transparent active:border-[#4ca771]"
                  >
                    All services
                  </p>
                </li>
                {Array.from(
                  new Set(products.map((pro) => pro.Category?.CateName))
                )
                  .filter((cateName) => cateName)
                  .map((cateName) => (
                    <li
                      key={cateName}
                      className="flex items-center text-[#16233B] text-lg"
                    >
                      <p
                        onClick={() => {
                          setCate(cateName);
                          setSelectedPage(1);
                          setShow(false);
                        }}
                        className="w-full hover:bg-[#2E4F4F] hover:text-[#eaf9e7] bg-[#fff] active:font-bold border-2 border-transparent active:border-[#4ca771]"
                      >
                        {cateName}
                      </p>
                    </li>
                  ))}
              </ul>
            )}
          </div>

          <Link className="p-3 bg-green-600 text-white border border-green-600 rounded-lg hover:bg-white hover:text-green-800" to="/AD/AddPro">
            Create Product
          </Link>
        </div>
        <div className="grid mx-2 grid-cols-1 lg:grid-cols-2 gap-4">
          {products
            .filter((pro) => cate === "all" || pro.Category?.CateName === cate)
            .map((pro, index) => {
              while (
                index >= selectedPage * 6 - 6 &&
                index < selectedPage * 6
              ) {
                return (
                  <div
                    key={pro._id}
                    className=" w-full h-fit rounded-lg grid grid-cols-2 p-4 bg-[#fff] text-[#16233B]"
                  >
                    <img
                      src={pro.Images[0]}
                      alt={pro.name}
                      className="h-72 object-cover"
                    />
                    <div>
                      <h2 className="text-2xl font-semibold line-clamp-2">
                        {pro.ProName}
                      </h2>
                      <p className="text-xl line-clamp-2 my-2 font-bold">
                        Giá Tiền:{" "}
                        <span className=" font-normal">{toVND(pro.Price)}</span>
                      </p>
                      <p className="text-xl line-clamp-2 my-2 font-bold">
                        Số lượng còn lại:{" "}
                        <span className=" font-normal">
                          {pro.RemainQuantity}
                        </span>
                      </p>
                      <p className="text-xl line-clamp-2 my-2 font-bold">
                        Số lượng đã bán:{" "}
                        <span className=" font-normal">{pro.SoldQuantity}</span>
                      </p>
                      <div className="col-span-4 grid  gap-2">
                        <Link
                          to={`/ProDetailAD/${pro._id}`}
                          className="bg-[#eb2e2e] hover:bg-[#fff] flex justify-center text-[#fff] hover:text-[#000000] border-2 border-[#eb2e2e] lg:px-4 px-2 lg:ml-0 ml-[1.6rem] lg:w-full w-fit py-2 rounded-lg  items-center"
                        >
                          <FontAwesomeIcon
                            className="mr-2"
                            icon={faCircleInfo}
                          />
                          Detail
                        </Link>
                        <button
                          // onClick={() => handleDeleteVoucher(voucher._id)}
                          className="bg-[#2f414f] hover:bg-[#fff] flex justify-center text-[#eaf9e7] hover:text-[#16233B] border-2 border-[#2F4F4F] lg:px-4 px-2 lg:ml-0 ml-[1.6rem] lg:w-full w-fit py-2 rounded-lg  items-center"
                        >
                          <FontAwesomeIcon icon={faEdit} className="mr-2" />
                          Edit
                        </button>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
        </div>
        {pages.length >= 2 && (
          <div className="w-full flex justify-center mt-4">
            <div className="lg:w-1/3 w-[60%] flex justify-between">
              {pages.map((page) => {
                if (selectedPage === 1 || selectedPage === pages.length) {
                  while (selectedPage >= page - 2 && selectedPage <= page + 2) {
                    return (
                      <p
                        key={page}
                        className={`rounded-full w-10 h-10 text-xl font-semibold flex justify-center items-center border-4 border-[#213a57] cursor-pointer ${
                          selectedPage === page
                            ? "bg-[#213a57] hover:bg-[#213a57] text-[#fff] hover:text-[#fff] cursor-pointer"
                            : "bg-[#fff] hover:bg-[#213a57] text-[#213a57] hover:text-[#fff] cursor-pointer"
                        } `}
                        onClick={() => {
                          setSelectedPage(page);
                        }}
                      >
                        {page}
                      </p>
                    );
                  }
                } else {
                  while (selectedPage >= page - 1 && selectedPage <= page + 1) {
                    return (
                      <p
                        key={page}
                        className={`rounded-full w-10 h-10 text-xl font-semibold flex justify-center items-center border-4 border-[#213a57] cursor-pointer ${
                          selectedPage === page
                            ? "bg-[#213a57] hover:bg-[#213a57] text-[#fff] hover:text-[#fff] cursor-pointer"
                            : "bg-[#fff] hover:bg-[#213a57] text-[#213a57] hover:text-[#fff] cursor-pointer"
                        } `}
                        onClick={() => {
                          setSelectedPage(page);
                        }}
                      >
                        {page}
                      </p>
                    );
                  }
                }
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductListAD;
