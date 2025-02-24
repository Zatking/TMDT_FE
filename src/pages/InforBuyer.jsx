import { useState } from "react";
import { motion } from "framer-motion";

const InforBuyer = () => {
  const [type, setType] = useState("at_shop");
  return (
    <div className="p-4">
      <p className="text-xl font-bold">Thông tin khách hàng</p>
      <div className="flex items-center space-x-4 mt-4">
        <label className="flex items-center space-x-2">
          <input type="radio" name="gender" value="male" className="w-5 h-5" />
          <span>Nam</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="gender"
            value="female"
            className="w-5 h-5"
          />
          <span>Nữ</span>
        </label>
      </div>
      <div className="mt-2 grid grid-cols-2">
        <div className="my-5 pr-2 relative flex items-center ">
          <input className="bg-[#fff] bg-opacity-60 w-full outline-none px-3 py-2 peer shadow-sm shadow-[#ff0000] rounded-lg" />
          <span
            id="name"
            className="text-black absolute peer-focus:-translate-y-5 transition-all duration-500 ease-linear rounded-t-lg px-1 ml-2 bg-[#fff]"
          >
            Nhập họ tên
          </span>
        </div>
        <div className="my-5 pl-2 relative flex items-center ">
          <input className="bg-[#fff] bg-opacity-60 w-full outline-none px-3 py-2 peer shadow-sm shadow-[#ff0000] rounded-lg" />
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
            checked={type === "at_shop"}
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
            checked={type === "at_home"}
            onChange={(e) => setType(e.target.value)}
            className="w-5 h-5"
          />
          <span>Giao hàng tận nơi</span>
        </label>
      </div>
      {type === "at_home" && (
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="my-5 relative flex items-center"
          >
            <input className="bg-[#fff] bg-opacity-60 w-full outline-none px-3 py-2 peer shadow-sm shadow-[#ff0000] rounded-lg" />
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
            <input className="bg-[#fff] bg-opacity-60 w-full outline-none px-3 py-2 peer shadow-sm shadow-[#ff0000] rounded-lg" />
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
