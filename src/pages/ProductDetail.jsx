import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfAlt,
  faStar as faStarEmpty,
  faCartShopping,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function ProductDetail() {
  const rating = 4.7;
  const stars = [];

  const ProductSimilar = [
    {
      id: "M280CS3030-250-RB",
      name: "PNY XLR8 CS3030 250GB M.2 3D TLC NVMe PCI-Express",
      price: 48.91,
      image:
        "https://res.cloudinary.com/dql6vzqri/image/upload/v1736438798/PC/uh0ek6tythjikphciix4.jpg",
      rate: 4.5,
    },
    {
      id: "M280CS3030-500-RB",
      name: "PNY XLR8 CS3030 500GB M.2 3D TLC NVMe PCI-Express",
      price: 72.12,
      image:
        "https://res.cloudinary.com/dql6vzqri/image/upload/v1736438799/PC/tcs9y214q6bbbmptjylf.jpg",
      rate: 4,
    },
    {
      id: "M280CS3030-1TB-RB",
      name: "PNY XLR8 CS3030 1TB M.2 3D TLC NVMe PCI-Express",
      price: 121.88,
      image:
        "https://res.cloudinary.com/dql6vzqri/image/upload/v1736438800/PC/vtdp03sqxbchyyzguelg.jpg",
      rate: 5,
    },
  ];

  const toVND = (amount) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(amount * 25000);
  };

  const Rate = (rating) => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      const decimal = rating - i + 1;

      if (decimal >= 0.75) {
        stars.push(
          <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-400" />
        );
      } else if (decimal >= 0.25) {
        stars.push(
          <FontAwesomeIcon
            key={i}
            icon={faStarHalfAlt}
            className="text-yellow-400"
          />
        );
      } else {
        stars.push(
          <FontAwesomeIcon
            key={i}
            icon={faStarEmpty}
            className="text-gray-300"
          />
        );
      }
    }
    return stars;
  };

  return (
    <div className="w-full bg-slate-100 h-fit flex justify-center">
      <div>
        <div className="grid grid-cols-3 mx-20 my-5 bg-white w-[90%] p-4 rounded-lg">
          <div className="border-r border-[#a2a2a2] flex justify-center items-center">
            <img
              src={
                "https://res.cloudinary.com/dql6vzqri/image/upload/v1736438796/PC/korlnm3h0sbrq5u11pre.jpg"
              }
              alt=""
            />
          </div>
          <div className="col-span-2 px-10">
            <h1 className="font-bold text-4xl mb-2">
              Gigabyte SSD M.2 512GB 2280 PCIe x2 NVMe
            </h1>
            <p></p>
            <p className="flex items-center text-[#ffd700] mb-6">
              {stars}
              <span className="ml-2 text-xl text-[#000]">
                {Rate(rating)} {rating}
              </span>
            </p>
            <p
              id="price"
              className="text-4xl text-[#ff0000] font-semibold mb-10"
            >
              {toVND(75.99)}
            </p>
            <div className="grid grid-cols-2 gap-5">
              <button className="w-full text-center py-2 border-4 border-[#ff0000] bg-[#ff0000] hover:bg-transparent text-[#fff] hover:text-[#ff0000] font-semibold text-xl rounded-xl">
                Mua ngay
                <br />
                <p className="text-sm font-normal mt-1">
                  Giao tận nơi hoặc nhận tại cửa hàng
                </p>
              </button>
              <Link
                to="/cart"
                className="w-full text-center py-2 border-4 border-[#ff0000] bg-[#ff0000] hover:bg-transparent text-[#fff] hover:text-[#ff0000] font-semibold text-xl rounded-xl"
              >
                <FontAwesomeIcon icon={faCartShopping} className="mr-2" />
                Add to cart
              </Link>
            </div>
            <p className="text-xl font-bold my-2 mt-6">
              - Nhà sản xuất: {"Gigabyte"}
            </p>
            <div className="my-2">
              <span className="text-xl font-bold">- Loại:</span>
              <span className="text-xl"> {"Hard Drives"}</span>
            </div>
            <div className="my-2">
              <span className="text-xl font-bold">- Mã sản phẩm:</span>
              <span className="text-xl"> {"GP-GSM2NE8512GNTD"}</span>
            </div>
            <div className="my-2">
              <span className="text-xl font-bold">- Bảo hành:</span>
              <span className="text-xl"> {"36 tháng"}</span>
            </div>
            <div className="my-4 w-full border rounded-lg">
              <p className="w-full p-3 text-2xl text-black font-bold bg-slate-300">
                Khuyễn mãi
              </p>
              <p className="text-xl font-bold p-3 py-6">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  style={{ color: "#0fd737", marginRight: "10px" }}
                />
                {"Giảm ngay " + toVND(500000 / 25000) + " khi mua hàng online"}
              </p>
            </div>
          </div>
        </div>
        <div className=" w-[90%] mx-20 rounded-lg grid grid-cols-4 ">
          <div className="bg-white p-4 mr-2 col-span-3">
            <p className="text-2xl font-bold my-4">Thông tin sản phẩm</p>
            <div className="">
              <span className="text-xl font-bold">Mô tả</span>
              <span className="text-xl">
                {"Bộ nhớ SSD M.2 2280 PCIe x2 NVMe 512GB"}
              </span>
            </div>
          </div>
          <div className="bg-white p-4 ml-2 col-span-1">
            <p className="text-2xl font-bold my-4"> Sản phẩm tương tự</p>
            <div className="">
              {ProductSimilar.map((product) => (
                <div key={product.id} className="">
                  <div className="grid grid-cols-12 h-fit items-center gap-4 ">
                    <div className="col-span-3">
                      <img src={product.image} alt="" className="w-fit h-fit" />
                    </div>
                    <div className="col-span-9 ">
                      <p className="font-bold">{product.name}</p>
                      <p className="font-bold text-red-500">
                        {toVND(product.price)}
                      </p>
                      <p className="flex items-center text-[#ffd700] mb-6">
                        {Rate(product.rate)}
                        <span className="ml-2 text-xl text-[#000]">
                          {product.rate}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className=" w-[90%] mx-20 rounded-lg bg-white p-4 h-fit my-4">
          <p className="text-2xl font-bold my-4">
            Đánh giá & nhận xét sản phẩm{" "}
            {"Gigabyte SSD M.2 512GB 2280 PCIe x2 NVMe"}
          </p>
          <div className="grid justify-center w-full gap-0 grid-cols-3">
            <div className="mr-10 col-span-1 row-span-1">
              <p className="text-4xl text-center text-red-500">0/5</p>
              <p className="text-center my-2 text-[#ffd700]">{Rate(0)}</p>
              <p className="text-center">
                <span className="font-bold">0</span> đánh giá & nhận xét
              </p>
            </div>
            <div className="col-span-2 row-span-1 h-full flex flex-col gap-y-2">
              <div className="w-full grid grid-cols-6  items-center h-4">
                <div className="col-span-1 text-right">
                  5{" "}
                  <span className="mx-2">
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-300"
                    />
                  </span>
                </div>
                <span className="col-span-4 bg-slate-200 rounded-lg h-3"></span>
                <span className="col-span-1 ml-4">0 đánh giá</span>
              </div>

              <div className="w-full grid grid-cols-6  items-center h-4">
                <div className="col-span-1 text-right">
                  4{" "}
                  <span className="mx-2">
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-300"
                    />
                  </span>
                </div>
                <span className="col-span-4 bg-slate-200 rounded-lg h-3"></span>
                <span className="col-span-1 ml-4">0 đánh giá</span>
              </div>

              <div className="w-full grid grid-cols-6  items-center h-4">
                <div className="col-span-1 text-right">
                  3{" "}
                  <span className="mx-2">
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-300"
                    />
                  </span>
                </div>
                <span className="col-span-4 bg-slate-200 rounded-lg h-3"></span>
                <span className="col-span-1 ml-4">0 đánh giá</span>
              </div>
              <div className="w-full grid grid-cols-6  items-center h-4">
                <div className="col-span-1 text-right">
                  2{" "}
                  <span className="mx-2">
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-300"
                    />
                  </span>
                </div>
                <span className="col-span-4 bg-slate-200 rounded-lg h-3"></span>
                <span className="col-span-1 ml-4">0 đánh giá</span>
              </div>
              <div className="w-full grid grid-cols-6  items-center h-4">
                <div className="col-span-1 text-right">
                  1{" "}
                  <span className="mx-2">
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-300"
                    />
                  </span>
                </div>
                <span className="col-span-4 bg-slate-200 rounded-lg h-3"></span>
                <span className="col-span-1 ml-4">0 đánh giá</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
