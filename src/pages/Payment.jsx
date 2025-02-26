import { useEffect } from "react";

const Payment = () => {
  const item = localStorage.getItem("infor_buyer");
  const data = JSON.parse(item);

  useEffect(() => {
    if (item) {
      const infor = JSON.parse(item);
      console.log(infor.name);
    }
  }, []);

  return (
    <div className="flex justify-center ">
      <div className="w-[95%]">
        <p className="text-black font-bold text-2xl">Thông tin đặt hàng</p>
        <div className="my-4 flex justify-between w-3/4">
          <p className="text-black text-left">• Khách hàng:</p>
          <p className="text-left text-red-500">{data.name}</p>
        </div>
        <div className="my-4 flex justify-between w-3/4">
          <p className="text-black text-left">• Số điện thoại:</p>
          <p className="text-left text-red-500">{data.phone}</p>
        </div>
        <div className="my-4 flex justify-between w-3/4">
          <p className="text-black text-left">• Địa chỉ:</p>
          <p className="text-left text-red-500">{data.address}</p>
        </div>
        <div className="my-4 flex justify-between w-3/4">
          <p className="text-black text-left">• Phí vận chuyển:</p>
          <p className="text-left text-red-500">Miễn phí</p>
        </div>
      </div>
    </div>
  );
};

export default Payment;
