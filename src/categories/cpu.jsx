import { Link } from "react-router-dom";

export function Intel() {
  return (
    <ul className="text-lg pr-20">
      <Link to className="font-bold text-xl text-[#ff0000] px-3 mb-3">CPU Intel</Link>
      <li className="cursor-pointer px-3 hover:text-[#ff0000] border-x border-transparent hover:border-[#ff0000] rounded-lg">
        Tray
      </li>
      <li className="cursor-pointer px-3 hover:text-[#ff0000] border-x border-transparent hover:border-[#ff0000] rounded-lg">
        Xeon
      </li>
      <li className="cursor-pointer px-3 hover:text-[#ff0000] border-x border-transparent hover:border-[#ff0000] rounded-lg">
        9th gen
      </li>
      <li className="cursor-pointer px-3 hover:text-[#ff0000] border-x border-transparent hover:border-[#ff0000] rounded-lg">
        10th, 11th gen
      </li>
      <li className="cursor-pointer px-3 hover:text-[#ff0000] border-x border-transparent hover:border-[#ff0000] rounded-lg">
        12th, 13th, 14th gen
      </li>
      <li className="cursor-pointer px-3 hover:text-[#ff0000] border-x border-transparent hover:border-[#ff0000] rounded-lg">
        Core Ultra
      </li>
    </ul>
  );
}

export function AMD() {
  return (
    <ul className="text-lg pr-20">
      <li className="font-bold text-xl text-[#ff0000] px-3 mb-3">CPU AMD</li>
      <li className="cursor-pointer px-3 hover:text-[#ff0000] border-x border-transparent hover:border-[#ff0000] rounded-lg">
        Tray
      </li>
      <li className="cursor-pointer px-3 hover:text-[#ff0000] border-x border-transparent hover:border-[#ff0000] rounded-lg">
        5000 series
      </li>
      <li className="cursor-pointer px-3 hover:text-[#ff0000] border-x border-transparent hover:border-[#ff0000] rounded-lg">
        7000 series
      </li>
      <li className="cursor-pointer px-3 hover:text-[#ff0000] border-x border-transparent hover:border-[#ff0000] rounded-lg">
        9000 series
      </li>
      <li className="cursor-pointer px-3 hover:text-[#ff0000] border-x border-transparent hover:border-[#ff0000] rounded-lg">
        Threadripper
      </li>
    </ul>
  );
}
