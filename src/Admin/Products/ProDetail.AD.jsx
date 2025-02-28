import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faXmark } from "@fortawesome/free-solid-svg-icons";

const DetailProAD = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://node-tmdt.vercel.app/api/get-product`
        );
        const data = await response.json();
        setData(data.products.find((item) => item._id === id));
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, [id]);

  const toVND = (amount) => {
    return amount.toLocaleString("it-IT", {
      style: "currency",
      currency: "VND",
    });
  };

  return (
    <div className="lg:bg-[#fff] h-full flex justify-center bg-[#fff]">
      <div className="w-3/4  to-[#d8ffce] from-30% h-full from-[#ffffff]  p-4">
        <div className="grid grid-cols-12 text-[#16233B]">
          <div className="col-span-11 flex items-center">
            <h1 className="text-4xl mt-4 mb-10 w-full text-left font-bold px-10">
              Chi tiết voucher
            </h1>
          </div>
          <div className="col-span-1 flex items-center ">
            <Link to={"/"}>
              <button className="bg-[#ffffff] hover:bg-[#d14844] w-10 h-10 border-4 border-[#d14844] hover:text-[#ffffff] font-bold rounded-full">
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </Link>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1">
          <div className="p-10">
            <img
              className="rounded-xl w-auto object-cover"
              src={data.Images}
              alt="Voucher"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://redem.io/wp-content/uploads/2020/06/Redem-Error.jpeg";
              }}
            />
          </div>
          <div className="w-full text-[#070c14]">
            <h1 className="text-3xl font-bold mb-2">{data.ProName}</h1>
            <div className="w-full border-b border-[#070c14] mb-10">
              <span className="text-xl text-[#070c14]">GD_{data._id}</span>
              <span className="float-right font-bold text-xl text-[#16233B]">
                Trạng thái:{" "}
                <span className={`font-normal`}>{data.State?.StateName}</span>
              </span>
            </div>
            <div>
              <p className="text-xl my-2 flex justify-between ">
                <span className="font-bold text-[#2F4F4F]">Mức giá: </span>
                <span className=" text-[#070c14]">{data.Price || "N/A"}</span>
              </p>
              <p className="text-xl my-2 flex justify-between ">
                <span className="font-bold text-[#2F4F4F]">
                  Số lượng còn lại:{" "}
                </span>
                <span className=" text-[#070c14]">
                  {data.RemainQuantity || "N/A"}
                </span>
              </p>
              <p className="text-xl my-2 flex justify-between ">
                <span className="font-bold text-[#2F4F4F]">Mô tả: </span>
                <span className=" text-[#070c14]">
                  {data.Description || "N/A"}
                </span>
              </p>
              <p className="text-xl my-2 flex justify-between ">
                <span className="font-bold text-[#2F4F4F]">Loại: </span>
                <span className=" text-[#070c14]">
                  {data.Category?.CateName || "N/A"}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-4 w-full justify-center mt-10">
          <div className="col-span-3 w-[28%]">
            <Link
              to={`/Admin/EditVoucher/${id}`}
              className="bg-[#339d33] hover:bg-[#ddfeda] font-bold text-lg text-[#eaf9e7] hover:text-[#163b18] border-2 border-[#339d33] p-5 rounded-lg flex items-center justify-center w-full"
            >
              <FontAwesomeIcon icon={faEdit} />
              <span className="ml-2">Edit</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProAD;
