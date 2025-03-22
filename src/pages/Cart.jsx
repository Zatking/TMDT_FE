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
import Payment from "./Payment";
import SuccessOrder from "./SuccessOrder";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProductsAPI from "../api/product";

const Cart = () => {
  const [pages, setPages] = useState(1);
  const [db, setDb] = useState([]);
  const [counts, setCounts] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    setDb(cartData);
  }, []);

  useEffect(() => {
    setCounts(db.map((item) => item.quantity));
  }, [db]);

  const onClickPage = () => {
    if (pages === 1) {
      if (db.length === 0) {
        alert("Giỏ hàng trống");
        return;
      }
    }

    if (pages === 2) {
      const infor = JSON.parse(localStorage.getItem("infor_buyer"));
      if (!infor) {
        alert("Vui lòng nhập thông tin người mua hàng");
        return;
      }
      if (!infor.phone || infor.phone.length < 10) {
        alert("Số điện thoại không hợp lệ");
        return;
      }
    }

    if (pages < 3) {
      setPages(pages + 1);
    }
  };

  const toVND = (amount) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(amount);
  };

  const handleAdd = (index) => {
    setCounts(
      counts.map((count, i) => (i === index && count < 10 ? count + 1 : count))
    );
    localStorage.setItem("cart", JSON.stringify(db));
  };

  const handleSubtract = (index) => {
    setCounts(
      counts.map((count, i) => (i === index && count > 1 ? count - 1 : count))
    );
    localStorage.setItem("cart", JSON.stringify(db));
  };

  const removeItem = (index) => {
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    const newCart = cartData.filter((item, i) => i !== index);
    localStorage.setItem("cart", JSON.stringify(newCart));
    setDb(newCart);
    if (db.length == 0) {
      navigate("/");
    }
    window.location.reload();
  };

  const orderProduct = async () => {
    console.log("Ordering");

    if (pages !== 3) return;

    const infor = JSON.parse(localStorage.getItem("infor_buyer"));
    if (!infor || !infor.name || !infor.phone || !infor.address) {
      alert("Vui lòng nhập đầy đủ thông tin người mua!");
      return;
    }

    if (db.length === 0 || counts.length === 0) {
      alert("Giỏ hàng trống!");
      return;
    }

    try {
      const totalPrice = db.reduce(
        (total, item, index) => total + item?.Price * counts[index],
        0
      );

      const res = await ProductsAPI.orderProduct(
        db.map((item) => item._id),
        counts,
        totalPrice,
        infor.name,
        infor.phone,
        infor.address,
        infor.gender,
        infor.note
      );
      console.log("res", res);
      if (res.message === "success") {
        localStorage.removeItem("cart");
        localStorage.removeItem("infor_buyer");
        setPages(4);
      } else {
        alert("Đặt hàng không thành công. Vui lòng thử lại!");
      }
    } catch (error) {
      console.error("Lỗi khi đặt hàng:", error);
      alert("Đã xảy ra lỗi. Vui lòng thử lại sau!");
    }
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
          <div className="p-4 border-b">
            {db.map((item, index) => {
              return (
                <div
                  key={item._id}
                  className="grid grid-cols-12 gap-0 m-2 my-10"
                >
                  <img
                    src={item.Images[0]}
                    className="col-span-2 h-24 w-full object-cover border rounded-md"
                  />
                  <p className="col-span-6 mx-2 text-xl font-bold">
                    {item?.ProName}
                  </p>
                  <div className="col-span-2  justify-end">
                    <p className="text-red-500 font-bold text-xl text-right">
                      {toVND(item?.Price * counts[index])}
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
                    className="col-span-2 h-fit p-4 bg-red-500 m-2 rounded-md"
                    onClick={() => removeItem(index)}
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
        {pages === 3 && <Payment />}
        {pages === 4 && <SuccessOrder />}
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
                db.reduce(
                  (total, item, index) => total + item?.Price * counts[index],
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
            className="w-full my-2 rounded-lg p-4 text-2xl text-white bg-red-500 font-serif"
            onClick={() => {
              onClickPage();
              orderProduct();
            }}
          >
            Đặt hàng ngay
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
