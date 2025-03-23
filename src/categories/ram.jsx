import { Link } from "react-router-dom";

export function Ram() {
  return (
    <ul className="text-lg pr-20">
      <li>
        <Link
          to="/ProductPage/RAM"
          className="font-bold text-xl text-[#ff0000] mb-3 px-3 hover:bg-transparent py-0"
        >
          Ram
        </Link>
      </li>
      <li>
        <Link
          to="/ProductPage/RAM"
          className="cursor-pointer px-3 hover:text-[#ff0000] border-x border-transparent hover:border-[#ff0000] rounded-lg hover:bg-transparent py-0"
        >
          8GB
        </Link>
      </li>
      <li>
        <Link
          to="/ProductPage/RAM"
          className="cursor-pointer px-3 hover:text-[#ff0000] border-x border-transparent hover:border-[#ff0000] rounded-lg hover:bg-transparent py-0"
        >
          16GB
        </Link>
      </li>
      <li>
        <Link
          to="/ProductPage/RAM"
          className="cursor-pointer px-3 hover:text-[#ff0000] border-x border-transparent hover:border-[#ff0000] rounded-lg hover:bg-transparent py-0"
        >
          32GB
        </Link>
      </li>
      <li>
        <Link
          to="/ProductPage/RAM"
          className="cursor-pointer px-3 hover:text-[#ff0000] border-x border-transparent hover:border-[#ff0000] rounded-lg hover:bg-transparent py-0"
        >
          64GB
        </Link>
      </li>
    </ul>
  );
}
