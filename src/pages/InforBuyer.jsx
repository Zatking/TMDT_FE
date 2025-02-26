import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const InforBuyer = () => {
  const [types, setType] = useState("at_shop");
  const [error, setError] = useState("");
  const [infor, setInfor] = useState({
    name: "",
    phone: "",
    address: "",
    gender: "male",
    note: "",
  });

  useEffect(() => {
    setInfor((prevInfor) => ({
      ...prevInfor,
      address: types === "at_shop" ? "at_shop" : prevInfor.address,
    }));
  }, [types]);

  useEffect(() => {
    localStorage.setItem("infor_buyer", JSON.stringify(infor));
    setTimeout(() => {
      localStorage.removeItem("infor_buyer");
    }, 1800000);
  }, [infor]);

  useEffect(() => {
    const item = localStorage.getItem("infor_buyer");
    if (item) {
      const infor = JSON.parse(item);
      if (infor.name == " ") {
        setError("Vui lòng nhập họ tên");
      }
      if (infor.phone == " ") {
        setError("Vui lòng nhập số điện thoại");
      }
      if (infor.address == " " || infor.address == "at_home") {
        setError("Vui lòng nhập địa chỉ");
      }
      return;
    }
  }, []);

  return (
    <div className="p-4">
      <p className="text-xl font-bold">Thông tin khách hàng</p>
      <div className="flex items-center space-x-4 mt-4">
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="gender"
            value="male"
            checked={infor.gender === "male"}
            onChange={(e) => setInfor({ ...infor, gender: e.target.value })}
            className="w-5 h-5"
          />
          <span>Nam</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="gender"
            value="female"
            checked={infor.gender === "female"}
            onChange={(e) => setInfor({ ...infor, gender: e.target.value })}
            className="w-5 h-5"
          />
          <span>Nữ</span>
        </label>
      </div>
      <div className="mt-2 grid grid-cols-2">
        <div className="my-5 pr-2 relative flex items-center ">
          <input
            type="text"
            className="bg-[#fff] bg-opacity-60 w-full outline-none px-3 py-2 peer shadow-sm shadow-[#ff0000] rounded-lg"
            placeholder="Họ và tên"
            value={infor.name}
            onChange={(e) => setInfor({ ...infor, name: e.target.value })}
          />
          <span
            id="name"
            className="text-black absolute peer-focus:-translate-y-5 transition-all duration-500 ease-linear rounded-t-lg px-1 ml-2 bg-[#fff]"
          >
            Nhập họ tên
          </span>
        </div>
        <div className="my-5 pl-2 relative flex items-center ">
          <input
            className="bg-[#fff] bg-opacity-60 w-full outline-none px-3 py-2 peer shadow-sm shadow-[#ff0000] rounded-lg"
            type="text"
            placeholder="Nhập số điện thoại"
            value={infor.phone}
            onChange={(e) => setInfor({ ...infor, phone: e.target.value })}
          />
          <span
            id="sdt"
            className="text-black absolute peer-focus:-translate-y-5 transition-all duration-500 ease-linear rounded-t-lg px-1 ml-2 bg-[#fff]"
          >
            Nhập số điện thoại
          </span>
        </div>
      </div>
      <p className="text-xl font-bold">Chọn cách nhận hàng</p>
      <div className="flex items-center space-x-4 mt-4">
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="type"
            value="at_shop"
            checked={types === "at_shop"}
            onChange={(e) => setType(e.target.value)}
            className="w-5 h-5"
          />
          <span>Nhận hàng tại shop</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="type"
            value="at_home"
            checked={types === "at_home"}
            onChange={(e) => setType(e.target.value)}
            className="w-5 h-5"
          />
          <span>Giao hàng tận nơi</span>
        </label>
      </div>
      {types === "at_home" && (
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="my-5 relative flex items-center"
          >
            <input
              className="bg-[#fff] bg-opacity-60 w-full outline-none px-3 py-2 peer shadow-sm shadow-[#ff0000] rounded-lg"
              type="text"
              onChange={(e) => setInfor({ ...infor, address: e.target.value })}
            />
            <span
              id="address"
              className="text-black absolute peer-focus:-translate-y-5 transition-all duration-500 ease-linear rounded-t-lg px-1 ml-2 bg-[#fff]"
            >
              Địa chỉ
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="my-5 mt-3 relative flex items-center"
          >
            <input
              className="bg-[#fff] bg-opacity-60 w-full outline-none px-3 py-2 peer shadow-sm shadow-[#ff0000] rounded-lg"
              type="text"
              placeholder="Ghi chú"
              value={infor.note}
              onChange={(e) => setInfor({ ...infor, note: e.target.value })}
            />
            <span
              id="note"
              className="text-black absolute peer-focus:-translate-y-5 transition-all duration-500 ease-linear rounded-t-lg px-1 ml-2 bg-[#fff]"
            >
              Ghi chú
            </span>
          </motion.div>
        </div>
      )}
      <p className="text-xl font-bold my-4">Dịch vụ giao hàng</p>
      <div className="mt-3 flex justify-between w-full ">
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="transport"
            value="female"
            className="w-5 h-5"
            checked={true}
            onChange={() => {}}
          />
          <span>Miễn phí vận chuyển (Giao hàng tiêu chuẩn)</span>
        </label>
        <span className="font-bold">0đ</span>
      </div>
    </div>
  );
};

export default InforBuyer;
