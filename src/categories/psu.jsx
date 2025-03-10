import { Link } from "react-router-dom";

export function PsuByQuality() {
  return (
    <ul className="text-lg pr-20">
      <li>
        <Link
          to="/ProductPage/PSU"
          className="font-bold text-xl text-[#ff0000] mb-3 px-3">
          PSU
        </Link>
      </li>
      <li>
        <Link
          to="/ProductPage/PSU/Bronze"
          className="cursor-pointer px-3 hover:text-[#ff0000] border-x border-transparent hover:border-[#ff0000] rounded-lg">
          Bronze
        </Link>
      </li>
      <li>
        <Link
          to="/ProductPage/PSU/Gold"
          className="cursor-pointer px-3 hover:text-[#ff0000] border-x border-transparent hover:border-[#ff0000] rounded-lg">
          Gold
        </Link>
      </li>
      <li>
        <Link
          to="/ProductPage/PSU/Platium"
          className="cursor-pointer px-3 hover:text-[#ff0000] border-x border-transparent hover:border-[#ff0000] rounded-lg">
          Platium
        </Link>
      </li>
      <li>
        <Link
          to="/ProductPage/PSU/Titanium"
          className="cursor-pointer px-3 hover:text-[#ff0000] border-x border-transparent hover:border-[#ff0000] rounded-lg">
          Titanium
        </Link>
      </li>
    </ul>
  );
}
