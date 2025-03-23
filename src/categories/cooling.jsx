import { Link } from "react-router-dom";

export function Cooling() {
  return (
    <ul className="text-lg pr-20">
      <li>
        <Link
          to="/ProductPage/Cooling"
          className="font-bold text-xl text-[#ff0000] mb-3 px-3 hover:bg-transparent py-0"
        >
          Cooling
        </Link>
      </li>
      <li>
        <Link
          to="/ProductPage/Cooling"
          className="cursor-pointer px-3 hover:text-[#ff0000] border-x border-transparent hover:border-[#ff0000] rounded-lg hover:bg-transparent py-0"
        >
          MSI
        </Link>
      </li>
      <li>
        <Link
          to="/ProductPage/Cooling"
          className="cursor-pointer px-3 hover:text-[#ff0000] border-x border-transparent hover:border-[#ff0000] rounded-lg hover:bg-transparent py-0"
        >
          Gigabyte
        </Link>
      </li>
      <li>
        <Link
          to="/ProductPage/Cooling"
          className="cursor-pointer px-3 hover:text-[#ff0000] border-x border-transparent hover:border-[#ff0000] rounded-lg hover:bg-transparent py-0"
        >
          Master
        </Link>
      </li>
      <li>
        <Link
          to="/ProductPage/Cooling"
          className="cursor-pointer px-3 hover:text-[#ff0000] border-x border-transparent hover:border-[#ff0000] rounded-lg hover:bg-transparent py-0"
        >
          ASUS
        </Link>
      </li>
      <li>
        <Link
          to="/ProductPage/Cooling"
          className="cursor-pointer px-3 hover:text-[#ff0000] border-x border-transparent hover:border-[#ff0000] rounded-lg hover:bg-transparent py-0"
        >
          Noctua
        </Link>
      </li>
      <li>
        <Link
          to="/ProductPage/Cooling"
          className="cursor-pointer px-3 hover:text-[#ff0000] border-x border-transparent hover:border-[#ff0000] rounded-lg hover:bg-transparent py-0"
        >
          Corsair
        </Link>
      </li>
    </ul>
  );
}
