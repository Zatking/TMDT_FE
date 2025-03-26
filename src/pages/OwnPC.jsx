import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRotateRight,
  faTrash,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useNavigate } from "react-router-dom";
const OwnPC = () => {
  const [componentsPC, setComponentsPC] = useState([]);
  const [cateName, setCatName] = useState("");
  const [products, setProducts] = useState([]);
  const [Brand, setBrand] = useState("All");
  const apiUrl = import.meta.env.VITE_API_URL;
  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_AI_KEY);
  const router = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(apiUrl + "/get-product");
        const data = await res.json();
        setProducts(data.products);
      } catch (error) {
        console.log("error: ", error);
      }
    };
    fetchProducts();
    console.log(products);
  }, []);

  const Advisory = async () => {
    try {
      const name = componentsPC.map((item) => item.Name).join(", ");
      if (!name) {
        alert("Chưa chọn linh kiện nào!");
        return;
      }

      const prompt = `Bạn check xem các phần của bộ PC này có phù hợp tương thích với nhau hay không nhé! Danh sách linh kiện: ${name}`;

      if (!genAI) {
        console.error("genAI chưa được khởi tạo!");
        return;
      }

      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const response = await model.generateContent([prompt]);

      const result =
        response?.response?.candidates?.[0]?.content?.parts?.[0]?.text || "";

      localStorage.setItem("advisory", result);
      router("/ChatBot");
    } catch (error) {
      console.error("Lỗi:", error);
    }
  };

  const toVND = (price) => {
    return price.toLocaleString("it-IT", {
      style: "currency",
      currency: "VND",
    });
  };

  return (
    <div className="w-full bg-white">
      {cateName && (
        <div className=" z-50 bg-opacity-75 w-full h-[91vh] bg-[#414141] flex justify-center items-center absolute">
          <div className="w-3/4 max-h-[70%] bg-white rounded-lg p-4">
            <div className="flex justify-between items-center h-fit border-b pb-4">
              <p className="text-black font-bold text-xl">{cateName}</p>
              <FontAwesomeIcon
                icon={faXmark}
                style={{ fontSize: 30, color: "black" }}
                onClick={() => setCatName("")}
              />
            </div>
            <div className="py-2">
              <span className="text-black font-bold text-lg">
                Chọn thương hiệu:
              </span>
              <button
                className={`text-xl text-black ml-2 ${
                  Brand == "All" && "text-red-500"
                }`}
                onClick={() => setBrand("All")}
              >
                All
              </button>
              {Object.keys(
                products
                  .filter((item) => item.Category.CateName === cateName)
                  .reduce((acc, item) => {
                    acc[item.Brand.BrandName] =
                      (acc[item.Brand.BrandName] || 0) + 1;
                    return acc;
                  }, {})
              ).map((brand, index) => (
                <button
                  className={`text-xl text-black ml-2 ${
                    brand == Brand && "text-red-500"
                  }`}
                  key={index}
                  onClick={() => setBrand(brand)}
                >
                  {brand}
                </button>
              ))}
              <form className="w-full mt-5 mx-auto">
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block outline-none w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black "
                    placeholder="Search"
                    required
                  />
                  <button
                    type="submit"
                    className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
            <div className="mt-3 h-64 grid grid-cols-5 gap-2 overflow-y-auto">
              {products
                .filter(
                  (item) =>
                    item.Category.CateName === cateName &&
                    (Brand === "All" || item.Brand.BrandName === Brand)
                )
                .map((item) => (
                  <div key={item._id} className="p-2 border rounded">
                    <img src={item.Images[0]} className=" w-44 h-44" />
                    <div>
                      <p className="text-black font-bold line-clamp-2">
                        {item.ProName}
                      </p>
                      <span className="text-red-500">{toVND(item.Price)}</span>
                      <div className="flex justify-between items-center">
                        <Link
                          to={"/productDetail/" + item._id}
                          className="text-blue-500"
                        >
                          Chi tiết
                        </Link>
                        <button
                          className="px-2 py-1 bg-red-500 h-fit w-fit rounded-lg text-white"
                          onClick={() => {
                            setComponentsPC((prev) => {
                              const existingIndex = prev.findIndex(
                                (item) => item.id === cateName
                              );

                              if (existingIndex !== -1) {
                                const updatedComponents = [...prev];
                                updatedComponents[existingIndex] = {
                                  id: cateName,
                                  Image: item.Images[0],
                                  Name: item.ProName,
                                  Price: item.Price,
                                };
                                return updatedComponents;
                              } else {
                                return [
                                  ...prev,
                                  {
                                    id: cateName,
                                    Image: item.Images[0],
                                    Name: item.ProName,
                                    Price: item.Price,
                                  },
                                ];
                              }
                            });
                            setCatName("");
                          }}
                        >
                          Chọn
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
      <div className="border shadown p-2 pt-4 pl-5">
        <p className="text-2xl text-black">Build PC</p>
        <p className="text-slate-500">
          Chọn các linh kiện máy tính bạn cần để xây dựng cấu hình máy
        </p>
      </div>
      <div className="my-2 pl-4">
        <button
          className="text-blue-500 px-2"
          onClick={() => setComponentsPC([])}
        >
          <FontAwesomeIcon icon={faRotateRight} style={{ color: "#008efa" }} />{" "}
          Reload
        </button>
      </div>

      <div className="w-full p-4 grid grid-cols-2 gap-2 border border-slate-300 bg-white  shadow-lg">
        {componentsPC.some((item) => item.id === "CPU") ? (
          <div>
            {componentsPC
              .filter((item) => item.id === "CPU")
              .map((item) => (
                <div
                  key={item.id}
                  className="bg-slate-200 z-1 p-2 grid grid-cols-4 h-40 relative"
                >
                  <img src={item.Image} className="w-32 h-32" />
                  <p className="text-xl col-span-2 text-slate-600 line-clamp-2">
                    {item.Name}
                  </p>
                  <div>
                    <p className="text-red-500 font-bold text-xl text-right">
                      {toVND(item.Price)}
                    </p>
                    <div className="absolute bottom-3 right-2 flex items-center space-x-3">
                      <button
                        onClick={() =>
                          setComponentsPC((prev) =>
                            prev.filter((c) => c.id !== "CPU")
                          )
                        }
                        className="bg-red-500 px-2 rounded-lg"
                      >
                        <FontAwesomeIcon
                          icon={faTrash}
                          style={{ color: "#fff" }}
                        />
                      </button>
                      <button
                        onClick={() => setCatName("Mainboard")}
                        className="text-blue-500"
                      >
                        Change {">"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <div className="w-full grid grid-cols-4 items-center bg-slate-200 p-2 rounded-lg">
            <div className="col-span-3 flex items-center">
              <img
                className=" w-20 h-20"
                src="https://buildpc.gearvn.com/static/media/CPU.9ce6ac22d169469adf67.png"
              />
              <span className="ml-2 font-bold text-black">CPU</span>
            </div>
            <div className="flex justify-end">
              <button
                className="bg-red-500 h-fit w-fit p-2 px-6 rounded-lg text-white"
                onClick={() => setCatName("CPU")}
              >
                Chọn
              </button>
            </div>
          </div>
        )}

        {componentsPC.some((item) => item.id === "Mainboard") ? (
          <div>
            {componentsPC
              .filter((item) => item.id === "Mainboard")
              .map((item) => (
                <div
                  key={item.id}
                  className="bg-slate-200 z-1 p-2 grid grid-cols-4 h-40 relative"
                >
                  <img src={item.Image} className="w-32 h-32" />
                  <p className="text-xl col-span-2 text-slate-600 line-clamp-2">
                    {item.Name}
                  </p>
                  <div>
                    <p className="text-red-500 font-bold text-xl text-right">
                      {toVND(item.Price)}
                    </p>
                    <div className="absolute bottom-3 right-2 flex items-center space-x-3">
                      <button
                        onClick={() =>
                          setComponentsPC((prev) =>
                            prev.filter((c) => c.id !== "Mainboard")
                          )
                        }
                        className="bg-red-500 px-2 rounded-lg"
                      >
                        <FontAwesomeIcon
                          icon={faTrash}
                          style={{ color: "#fff" }}
                        />
                      </button>
                      <button
                        onClick={() => setCatName("Mainboard")}
                        className="text-blue-500"
                      >
                        Change {">"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <div className="w-full grid grid-cols-4 items-center bg-slate-200 p-2 rounded-lg">
            <div className="col-span-3 flex items-center">
              <img
                className="w-20 h-20"
                src="https://buildpc.gearvn.com/static/media/Main.90df6990ad7b6e029d39.png"
              />
              <span className="ml-2 font-bold text-black">Mainboard</span>
            </div>
            <div className="flex justify-end">
              <button
                className="bg-red-500 h-fit w-fit p-2 px-6 rounded-lg text-white"
                onClick={() => setCatName("Mainboard")}
              >
                Chọn
              </button>
            </div>
          </div>
        )}

        {componentsPC.some((item) => item.id === "VGA") ? (
          <div>
            {componentsPC
              .filter((item) => item.id === "VGA")
              .map((item) => (
                <div
                  key={item.id}
                  className="bg-slate-200 z-1 p-2 grid grid-cols-4 h-40 relative"
                >
                  <img src={item.Image} className="w-32 h-32" />
                  <p className="text-xl col-span-2 text-slate-600 line-clamp-2">
                    {item.Name}
                  </p>
                  <div>
                    <p className="text-red-500 font-bold text-xl text-right">
                      {toVND(item.Price)}
                    </p>
                    <div className="absolute bottom-3 right-2 flex items-center space-x-3">
                      <button
                        onClick={() =>
                          setComponentsPC((prev) =>
                            prev.filter((c) => c.id !== "VGA")
                          )
                        }
                        className="bg-red-500 px-2 rounded-lg"
                      >
                        <FontAwesomeIcon
                          icon={faTrash}
                          style={{ color: "#fff" }}
                        />
                      </button>
                      <button
                        onClick={() => setCatName("VGA")}
                        className="text-blue-500"
                      >
                        Change {">"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <div className="w-full grid grid-cols-4 items-center bg-slate-200 p-2 rounded-lg">
            <div className="col-span-3 flex items-center">
              <img
                className=" w-20 h-20"
                src="https://buildpc.gearvn.com/static/media/VGA.1f5313095849b98ab0e2.png"
              />
              <span className="ml-2 font-bold text-black">Card màn hình</span>
            </div>
            <div className="flex justify-end">
              <button
                className="bg-red-500 h-fit w-fit p-2 px-6 rounded-lg text-white"
                onClick={() => setCatName("VGA")}
              >
                Chọn
              </button>
            </div>
          </div>
        )}

        {componentsPC.some((item) => item.id === "RAM") ? (
          <div>
            {componentsPC
              .filter((item) => item.id === "RAM")
              .map((item) => (
                <div
                  key={item.id}
                  className="bg-slate-200 z-1 p-2 grid grid-cols-4 h-40 relative"
                >
                  <img src={item.Image} className="w-32 h-32" />
                  <p className="text-xl col-span-2 text-slate-600 line-clamp-2">
                    {item.Name}
                  </p>
                  <div>
                    <p className="text-red-500 font-bold text-xl text-right">
                      {toVND(item.Price)}
                    </p>
                    <div className="absolute bottom-3 right-2 flex items-center space-x-3">
                      <button
                        onClick={() =>
                          setComponentsPC((prev) =>
                            prev.filter((c) => c.id !== "RAM")
                          )
                        }
                        className="bg-red-500 px-2 rounded-lg"
                      >
                        <FontAwesomeIcon
                          icon={faTrash}
                          style={{ color: "#fff" }}
                        />
                      </button>
                      <button
                        onClick={() => setCatName("RAM")}
                        className="text-blue-500"
                      >
                        Change {">"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <div className="w-full grid grid-cols-4 items-center bg-slate-200 p-2 rounded-lg">
            <div className="col-span-3 flex items-center">
              <img
                className=" w-20 h-20"
                src="https://buildpc.gearvn.com/static/media/RAM.aa0d36866c3d79265cd9.png"
              />
              <span className="ml-2 font-bold text-black">RAM</span>
            </div>
            <div className="flex justify-end">
              <button
                className="bg-red-500 h-fit w-fit p-2 px-6 rounded-lg text-white"
                onClick={() => setCatName("RAM")}
              >
                Chọn
              </button>
            </div>
          </div>
        )}

        {componentsPC.some((item) => item.id === "Storage") ? (
          <div>
            {componentsPC
              .filter((item) => item.id === "Storage")
              .map((item) => (
                <div
                  key={item.id}
                  className="bg-slate-200 z-1 p-2 grid grid-cols-4 h-40 relative"
                >
                  <img src={item.Image} className="w-32 h-32" />
                  <p className="text-xl col-span-2 text-slate-600 line-clamp-2">
                    {item.Name}
                  </p>
                  <div>
                    <p className="text-red-500 font-bold text-xl text-right">
                      {toVND(item.Price)}
                    </p>
                    <div className="absolute bottom-3 right-2 flex items-center space-x-3">
                      <button
                        onClick={() =>
                          setComponentsPC((prev) =>
                            prev.filter((c) => c.id !== "Storage")
                          )
                        }
                        className="bg-red-500 px-2 rounded-lg"
                      >
                        <FontAwesomeIcon
                          icon={faTrash}
                          style={{ color: "#fff" }}
                        />
                      </button>
                      <button
                        onClick={() => setCatName("Storage")}
                        className="text-blue-500"
                      >
                        Change {">"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <div className="w-full grid grid-cols-4 items-center bg-slate-200 p-2 rounded-lg">
            <div className="col-span-3 flex items-center">
              <img
                className=" w-20 h-20"
                src="https://buildpc.gearvn.com/static/media/SSD.7f8d50f5a0e02ad1f36e.png"
              />
              <span className="ml-2 font-bold text-black">Ổ cứng SSD</span>
            </div>
            <div className="flex justify-end">
              <button
                className="bg-red-500 h-fit w-fit p-2 px-6 rounded-lg text-white"
                onClick={() => setCatName("Storage")}
              >
                Chọn
              </button>
            </div>
          </div>
        )}

        {componentsPC.some((item) => item.id === "Case") ? (
          <div>
            {componentsPC
              .filter((item) => item.id === "Case")
              .map((item) => (
                <div
                  key={item.id}
                  className="bg-slate-200 z-1 p-2 grid grid-cols-4 h-40 relative"
                >
                  <img src={item.Image} className="w-32 h-32" />
                  <p className="text-xl col-span-2 text-slate-600 line-clamp-2">
                    {item.Name}
                  </p>
                  <div>
                    <p className="text-red-500 font-bold text-xl text-right">
                      {toVND(item.Price)}
                    </p>
                    <div className="absolute bottom-3 right-2 flex items-center space-x-3">
                      <button
                        onClick={() =>
                          setComponentsPC((prev) =>
                            prev.filter((c) => c.id !== "Case")
                          )
                        }
                        className="bg-red-500 px-2 rounded-lg"
                      >
                        <FontAwesomeIcon
                          icon={faTrash}
                          style={{ color: "#fff" }}
                        />
                      </button>
                      <button
                        onClick={() => setCatName("Case")}
                        className="text-blue-500"
                      >
                        Change {">"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <div className="w-full grid grid-cols-4 items-center bg-slate-200 p-2 rounded-lg">
            <div className="col-span-3 flex items-center">
              <img
                className=" w-20 h-20"
                src="https://buildpc.gearvn.com/static/media/Case.3fd61efef0de0fdbecb5.png"
              />
              <span className="ml-2 font-bold text-black">Case máy tính</span>
            </div>
            <div className="flex justify-end">
              <button
                className="bg-red-500 h-fit w-fit p-2 px-6 rounded-lg text-white"
                onClick={() => setCatName("Case")}
              >
                Chọn
              </button>
            </div>
          </div>
        )}

        {componentsPC.some((item) => item.id === "PSU") ? (
          <div>
            {componentsPC
              .filter((item) => item.id === "PSU")
              .map((item) => (
                <div
                  key={item.id}
                  className="bg-slate-200 z-1 p-2 grid grid-cols-4 h-40 relative"
                >
                  <img src={item.Image} className="w-32 h-32" />
                  <p className="text-xl col-span-2 text-slate-600 line-clamp-2">
                    {item.Name}
                  </p>
                  <div>
                    <p className="text-red-500 font-bold text-xl text-right">
                      {toVND(item.Price)}
                    </p>
                    <div className="absolute bottom-3 right-2 flex items-center space-x-3">
                      <button
                        onClick={() =>
                          setComponentsPC((prev) =>
                            prev.filter((c) => c.id !== "PSU")
                          )
                        }
                        className="bg-red-500 px-2 rounded-lg"
                      >
                        <FontAwesomeIcon
                          icon={faTrash}
                          style={{ color: "#fff" }}
                        />
                      </button>
                      <button
                        onClick={() => setCatName("PSU")}
                        className="text-blue-500"
                      >
                        Change {">"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <div className="w-full grid grid-cols-4 items-center bg-slate-200 p-2 rounded-lg">
            <div className="col-span-3 flex items-center">
              <img
                className=" w-20 h-20"
                src="https://buildpc.gearvn.com/static/media/Nguon.75b7ba0309279f7248ba.png"
              />
              <span className="ml-2 font-bold text-black">Nguồn máy tính</span>
            </div>
            <div className="flex justify-end">
              <button
                className="bg-red-500 h-fit w-fit p-2 px-6 rounded-lg text-white"
                onClick={() => setCatName("PSU")}
              >
                Chọn
              </button>
            </div>
          </div>
        )}

        {componentsPC.some((item) => item.id === "Cooling") ? (
          <div>
            {componentsPC
              .filter((item) => item.id === "Cooling")
              .map((item) => (
                <div
                  key={item.id}
                  className="bg-slate-200 z-1 p-2 grid grid-cols-4 h-40 relative"
                >
                  <img src={item.Image} className="w-32 h-32" />
                  <p className="text-xl col-span-2 text-slate-600 line-clamp-2">
                    {item.Name}
                  </p>
                  <div>
                    <p className="text-red-500 font-bold text-xl text-right">
                      {toVND(item.Price)}
                    </p>
                    <div className="absolute bottom-3 right-2 flex items-center space-x-3">
                      <button
                        onClick={() =>
                          setComponentsPC((prev) =>
                            prev.filter((c) => c.id !== "Cooling")
                          )
                        }
                        className="bg-red-500 px-2 rounded-lg"
                      >
                        <FontAwesomeIcon
                          icon={faTrash}
                          style={{ color: "#fff" }}
                        />
                      </button>
                      <button
                        onClick={() => setCatName("Cooling")}
                        className="text-blue-500"
                      >
                        Change {">"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <div className="w-full grid grid-cols-4 items-center bg-slate-200 p-2 rounded-lg">
            <div className="col-span-3 flex items-center">
              <img
                className=" w-20 h-20"
                src="https://buildpc.gearvn.com/static/media/Cooling.b19737aa96d276934a00.png"
              />
              <span className="ml-2 font-bold text-black">Tản nhiệt CPU</span>
            </div>
            <div className="flex justify-end">
              <button
                className="bg-red-500 h-fit w-fit p-2 px-6 rounded-lg text-white"
                onClick={() => setCatName("Cooling")}
              >
                Chọn
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="bg-slate-200 p-2 px-6 flex justify-between items-center">
        <p className="text-xl text-red-500 font-bold">
          Tạm tính:{" "}
          {toVND(componentsPC.reduce((total, item) => total + item.Price, 0))}
        </p>
        <div className="">
          <button
            onClick={Advisory}
            className="text-white bg-green-500 p-3  rounded-lg"
          >
            Tư vấn
          </button>
          <button className="text-white bg-red-500 p-3 ml-2 rounded-lg">
            Thanh toán
          </button>
        </div>
      </div>
    </div>
  );
};

export default OwnPC;
