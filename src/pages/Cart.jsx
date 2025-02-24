import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSuitcase,
  faAddressCard,
  faCreditCard,
  faCheckToSlot,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import InforBuyer from "./InforBuyer";

const Cart = () => {
  const [pages, setPages] = useState(1);
  const [dbfake, setDbfake] = useState([
    {
      id: "M280CS3030-250-RB",
      name: "PNY XLR8 CS3030 250GB M.2 3D TLC NVMe PCI-Express",
      price: 48.91,
      image:
        "https://res.cloudinary.com/dql6vzqri/image/upload/v1736438798/PC/uh0ek6tythjikphciix4.jpg",
      count: 1,
    },
    {
      id: "M280CS3030-500-RB",
      name: "PNY XLR8 CS3030 500GB M.2 3D TLC NVMe PCI-Express",
      price: 72.12,
      image:
        "https://res.cloudinary.com/dql6vzqri/image/upload/v1736438799/PC/tcs9y214q6bbbmptjylf.jpg",
      count: 1,
    },
    {
      id: "M280CS3030-1TB-RB",
      name: "PNY XLR8 CS3030 1TB M.2 3D TLC NVMe PCI-Express",
      price: 121.88,
      image:
        "https://res.cloudinary.com/dql6vzqri/image/upload/v1736438800/PC/vtdp03sqxbchyyzguelg.jpg",
      count: 1,
    },
  ]);

  const toVND = (amount) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(amount * 25000);
  };

  const [counts, setCounts] = useState(dbfake.map((item) => item.count));

  const handleAdd = (index) => {
    setCounts(
      counts.map((count, i) => (i === index && count < 10 ? count + 1 : count))
    );
  };

  const handleSubtract = (index) => {
    setCounts(
      counts.map((count, i) => (i === index && count > 1 ? count - 1 : count))
    );
  };

  return (
    <div className="w-full bg-slate-100  h-fit flex justify-center">
      <div className="bg-white w-1/2 m-4">
        <div className="bg-red-100 m-2 p-4 flex justify-center rounded-t-lg">
          <div className="w-1/2 grid grid-cols-4 items-center">
            <span
              className="text-center"
              onClick={() => (pages == 2 ? setPages(1) : null)}
            >
              <FontAwesomeIcon
                icon={faSuitcase}
                style={{ fontSize: "25px" }}
                className={`${
                  pages === 1 ? "text-[#ff0000]" : ""
                }  cursor-pointer`}
              />
            </span>
            <span
              className="text-center"
              onClick={() => (pages == 3 ? setPages(2) : null)}
            >
              <FontAwesomeIcon
                icon={faAddressCard}
                style={{ fontSize: "25px" }}
                className={`${
                  pages === 2 ? "text-[#ff0000]" : ""
                } cursor-pointer`}
              />
            </span>
            <span
              className="text-center"
              onClick={() => (pages == 4 ? setPages(3) : null)}
            >
              <FontAwesomeIcon
                icon={faCreditCard}
                style={{ fontSize: "25px" }}
                className={`${pages === 3 ? "text-[#ff0000]" : ""}`}
              />
            </span>
            <span className="text-center">
              <FontAwesomeIcon
                icon={faCheckToSlot}
                style={{ fontSize: "25px" }}
                className={`${pages === 4 ? "text-[#ff0000]" : ""}`}
              />
            </span>
          </div>
        </div>
        {pages === 1 && (
          <div className=" m-4 p-4 border-b">
            {dbfake.map((item, index) => {
              return (
                <div key={item.id} className="grid grid-cols-12 gap-0 m-2">
                  <img
                    src={item.image}
                    className="col-span-2 h-24 w-full object-cover border rounded-md"
                  />
                  <p className="col-span-7 mx-2 text-xl font-bold">
                    {item.name}
                  </p>
                  <div className="col-span-2  justify-end">
                    <p className="text-red-500 font-bold text-xl text-right">
                      {toVND(item.price * counts[index])}
                    </p>
                    <div className="flex justify-end w-full h-fit">
                      <button
                        className={`${
                          counts[index] < 2 ? "text-slate-300" : "text-black"
                        } text-center text-xl  rounded-l-sm w-fit px-4 py-1 h-fit border`}
                        onClick={() => handleSubtract(index)}
                      >
                        -
                      </button>
                      <span className="text-black text-center text-sm py-2 w-fit px-6 h-fit border">
                        {counts[index]}
                      </span>
                      <button
                        className={`${
                          counts[index] > 9 ? "text-slate-300" : "text-black"
                        } text-center text-xl  rounded-l-sm w-fit px-4 py-1 h-fit border`}
                        onClick={() => handleAdd(index)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    className="col-span-1 h-fit p-4 bg-red-500 m-2 rounded-md"
                    onClick={() =>
                      setDbfake(dbfake.filter((item, i) => i !== index))
                    }
                  >
                    <FontAwesomeIcon
                      icon={faTrash}
                      style={{ color: "white" }}
                    />
                  </button>
                </div>
              );
            })}
          </div>
        )}
        {pages === 2 && <InforBuyer />}
        <div
          className={`p-4 border-b grid grid-cols-12  ${
            pages === 4 ? "hidden" : " "
          }`}
        >
          <input
            placeholder="Nhập mã voucher"
            className="border outline-none p-2 rounded-lg col-span-10 "
          />
          <button className=" ml-4 bg-blue-500 text-white px-4 py-2 rounded-lg col-span-2">
            Áp dụng
          </button>
        </div>
        <div className={`p-4 w-full  ${pages === 4 ? "hidden" : " "}`}>
          <div className="flex justify-between">
            <p className="font-bold text-xl ml-1">Phí vận chuyển</p>
            <p className="font-bold text-xl mr-1">Miễn Phí</p>
          </div>
          <div className="flex justify-between mt-2">
            <p className="font-bold text-xl ml-1">Tổng tiền</p>
            <p className="font-bold text-3xl mr-1 text-red-500">
              {toVND(
                dbfake.reduce(
                  (total, item, index) => total + item.price * counts[index],
                  0
                )
              )}
            </p>
          </div>
        </div>
        <div
          className={`w-full px-4 flex justify-center ${
            pages === 4 ? "hidden" : " "
          }`}
        >
          <button
            className="w-full my-2  rounded-lg p-4 text-2xl text-white bg-red-500 font-serif"
            onClick={() => (
              pages === 4 ? setPages(4) : setPages(pages + 1),
              console.log(pages)
            )}
          >
            Đặt hàng ngay
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
