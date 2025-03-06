import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHeart as regularHeart,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import {
  faLocationDot,
  faHouseLaptop,
  faBusinessTime,
} from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <div className="">
      <div className="grid grid-cols-2 h-[20vh] font-bold text-4xl">
        <div className="w-full h-full flex items-center border-[#ff0000] border-b-8">
          <div className="px-20 text-[#ff0000]">
            <h1>Hệ thống cửa hàng Oggy</h1>
            <p className="text-xl font-medium mt-3">
              Hãy đến và trải nghiệm công nghệ hiện đại bậc nhất
            </p>
          </div>
        </div>
        <div className="w-full h-full flex items-center justify-center bg-[#ff0000] text-[#fff] cursor-pointer">
          <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
          <p>Khu vực miền Nam</p>
        </div>
      </div>
      <div className="px-20 py-10">
        <div className="grid grid-cols-2 mt-10">
          <div className="px-10">
            <p className="font-semibold text-lg text-[#ff0000]">
              Showroom Oggy
            </p>
            <h1 className="pb-2 font-bold text-3xl ">Chi nhánh Sư Vạn Hạnh</h1>
            <div className="border-[#ff0000] border-4 w-[20%]"></div>
            <div className="text-lg py-6 font-medium">
              <p>
                <FontAwesomeIcon icon={faHouseLaptop} />
                <span className="ml-2">
                  828 Sư Vạn Hạnh, Phường 12, Quận 10, Hồ Chí Minh
                </span>
              </p>
              <p>
                <FontAwesomeIcon icon={faBusinessTime} />
                <span className="ml-2">8:00 - 21:00 | Thứ 2 - Chủ Nhật</span>
              </p>
            </div>
          </div>
          <div className="p-4 bg-[#ff0000] text-[#fff] rounded-lg">
            <img
              src="https://lh3.googleusercontent.com/p/AF1QipMvsqL33YYJlYBJ_C3ZcLyXRosIYEFvaUAjBsyy=s1360-w1360-h1020"
              alt=""
              className="w-full rounded-md"
            />
            <div className="flex items-center px-4 pt-6 pb-2">
              <FontAwesomeIcon icon={faLocationDot} className="mr-6 text-5xl" />
              <div className="">
                <p className="text-3xl font-bold">828 Sư Vạn Hạnh</p>
                <p className="text-lg font-semibold">
                  Phường 12, Quận 10, Hồ Chí Minh
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 mt-10">
          <div className="p-4 bg-[#ff0000] text-[#fff] rounded-lg">
            <img
              src="https://lh3.googleusercontent.com/p/AF1QipORWiG1R0jQuJorfEh66rpPQS5kVbqjWrJBrASy=s1360-w1360-h1020"
              alt=""
              className="w-full rounded-md"
            />
            <div className="flex items-center px-4 pt-6 pb-2">
              <FontAwesomeIcon icon={faLocationDot} className="mr-6 text-5xl" />
              <div className="">
                <p className="text-3xl font-bold">806 Quốc lộ 22</p>
                <p className="text-lg font-semibold">
                  Ấp Mỹ Hoà 3, Huyện Hóc Môn, Hồ Chí Minh
                </p>
              </div>
            </div>
          </div>
          <div className="px-10">
            <p className="font-semibold text-lg text-[#ff0000]">
              Showroom Oggy
            </p>
            <h1 className="pb-2 font-bold text-3xl ">Chi nhánh Hóc Môn</h1>
            <div className="border-[#ff0000] border-4 w-[20%]"></div>
            <div className="text-lg py-6 font-medium">
              <p>
                <FontAwesomeIcon icon={faHouseLaptop} />
                <span className="ml-2">
                  806 Quốc lộ 22, Ấp Mỹ Hoà 3, Huyện Hóc Môn, Hồ Chí Minh
                </span>
              </p>
              <p>
                <FontAwesomeIcon icon={faBusinessTime} />
                <span className="ml-2">8:00 - 21:00 | Thứ 2 - Chủ Nhật</span>
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 mt-10">
          <div className="px-10">
            <p className="font-semibold text-lg text-[#ff0000]">
              Showroom Oggy
            </p>
            <h1 className="pb-2 font-bold text-3xl ">Chi nhánh Ba Gia</h1>
            <div className="border-[#ff0000] border-4 w-[20%]"></div>
            <div className="text-lg py-6 font-medium">
              <p>
                <FontAwesomeIcon icon={faHouseLaptop} />
                <span className="ml-2">
                  52-70 Ba Gia, Phường 7, Quận Tân Bình, Hồ Chí Minh
                </span>
              </p>
              <p>
                <FontAwesomeIcon icon={faBusinessTime} />
                <span className="ml-2">8:00 - 21:00 | Thứ 2 - Chủ Nhật</span>
              </p>
            </div>
          </div>
          <div className="p-4 bg-[#ff0000] text-[#fff] rounded-lg">
            <img
              src="https://lh3.googleusercontent.com/p/AF1QipMMYs7-e5rVavqMH14OfkRH1xyCR1gDIP-62gc=s1360-w1360-h1020"
              alt=""
              className="w-full rounded-md"
            />
            <div className="flex items-center px-4 pt-6 pb-2">
              <FontAwesomeIcon icon={faLocationDot} className="mr-6 text-5xl" />
              <div className="">
                <p className="text-3xl font-bold">52-70 Ba Gia</p>
                <p className="text-lg font-semibold">
                  Phường 7, Quận Tân Bình, Hồ Chí Minh
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
