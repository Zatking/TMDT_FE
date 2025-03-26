import { useState, useEffect } from "react";
const Payment = () => {
  const item = localStorage.getItem("infor_buyer");
  const data = JSON.parse(item);
  const [selectedPayment, setSelectedPayment] = useState("Direct");

  useEffect(() => {
    if (item) {
      const infor = JSON.parse(item);
      console.log(infor.name);
    }
  }, []);

  return (
    <div className="flex justify-center ">
      <div className="w-[95%] ">
        <p className="text-black font-bold text-2xl">Thông tin đặt hàng</p>
        <div className="my-4 pr-6 flex justify-between">
          <p className="text-black  text-left">• Khách hàng:</p>
          <p className="text-right text-red-500">{data.name}</p>
        </div>
        <div className="my-4 pr-6 flex justify-between">
          <p className="text-black text-left">• Số điện thoại:</p>
          <p className="text-left text-red-500">{data.phone}</p>
        </div>
        <div className="my-4 pr-6 flex justify-between">
          <p className="text-black text-left">• Địa chỉ:</p>
          <p className="text-left text-red-500">{data.address}</p>
        </div>
        <div className="my-4 pr-6 flex justify-between">
          <p className="text-black text-left">• Phí vận chuyển:</p>
          <p className="text-left text-red-500">Miễn phí</p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <label className="border p-4 rounded-lg flex justify-between items-center">
            <div>
              <input
                type="radio"
                className="mr-2"
                value="Direct"
                checked={selectedPayment === "Direct"}
                onChange={() => setSelectedPayment("Direct")}
              />
              Thanh toán trực tiếp
            </div>
            <img
              className="w-16 "
              src="https://png.pngtree.com/png-clipart/20240104/original/pngtree-payment-icon-cash-photo-png-image_14016127.png"
            />
          </label>
          <label className="border p-4 rounded-lg flex justify-between items-center">
            <div>
              <input
                type="radio"
                className="mr-2"
                value="VNPay"
                checked={selectedPayment === "VNPay"}
                onChange={() => setSelectedPayment("VNPay")}
              />
              Thanh toán qua VNPay
            </div>
            <img
              className="w-16 "
              src="https://cdn.brandfetch.io/idV02t6WJs/w/820/h/249/theme/dark/logo.png?c=1dxbfHSJFAPEGdCLU4o5B"
            />
          </label>
          <label className="border p-4 rounded-lg flex justify-between items-center">
            <div>
              <input
                type="radio"
                className="mr-2"
                value="Momo"
                checked={selectedPayment === "Momo"}
                onChange={() => setSelectedPayment("Momo")}
              />
              Thanh toán qua Momo
            </div>
            <img
              className="w-10 "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZcQPC-zWVyFOu9J2OGl0j2D220D49D0Z7BQ&s"
            />
          </label>
          <label className="border p-4 rounded-lg flex justify-between items-center">
            <div>
              <input
                type="radio"
                className="mr-2"
                value="ATM"
                checked={selectedPayment === "ATM"}
                onChange={() => setSelectedPayment("ATM")}
              />
              Thanh toán qua Ngân hàng
            </div>
            <img
              className="w-10 "
              src="https://emojigraph.org/media/joypixels/atm-sign_1f3e7.png"
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Payment;
