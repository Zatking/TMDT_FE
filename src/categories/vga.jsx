import { Link } from "react-router-dom";

export function VgaIntel() {
  return (
    <ul className="text-lg pr-20">
      <Link
        to="/ProductPage/VGA/Intel"
        className="font-bold text-xl text-[#ff0000] px-3 mb-3"
      >
        VGA Intel
      </Link>
      <li className="cursor-pointer px-3 hover:text-[#ff0000] border-x border-transparent hover:border-[#ff0000] rounded-lg">
        ARC A380
      </li>
      <li className="cursor-pointer px-3 hover:text-[#ff0000] border-x border-transparent hover:border-[#ff0000] rounded-lg">
        ARC A580
      </li>
      <li className="cursor-pointer px-3 hover:text-[#ff0000] border-x border-transparent hover:border-[#ff0000] rounded-lg">
        ARC B570
      </li>
      <li className="cursor-pointer px-3 hover:text-[#ff0000] border-x border-transparent hover:border-[#ff0000] rounded-lg">
        ARC B580
      </li>
    </ul>
  );
}

export function VgaAMD() {
  return (
    <ul className="text-lg pr-20">
      <Link
        to="/ProductPage/VGA/AMD"
        className="font-bold text-xl text-[#ff0000] px-3 mb-3"
      >
        VGA AMD
      </Link>
      <li className="cursor-pointer px-3 hover:text-[#ff0000] border-x border-transparent hover:border-[#ff0000] rounded-lg">
        Radeon 500 series
      </li>
      <li className="cursor-pointer px-3 hover:text-[#ff0000] border-x border-transparent hover:border-[#ff0000] rounded-lg">
        Radeon 600 series
      </li>
      <li className="cursor-pointer px-3 hover:text-[#ff0000] border-x border-transparent hover:border-[#ff0000] rounded-lg">
        Radeon HD 6000 series
      </li>
      <li className="cursor-pointer px-3 hover:text-[#ff0000] border-x border-transparent hover:border-[#ff0000] rounded-lg">
        Radeon HD 7000 series
      </li>
      <li className="cursor-pointer px-3 hover:text-[#ff0000] border-x border-transparent hover:border-[#ff0000] rounded-lg">
        Radeon RX 5000 series
      </li>
      <li className="cursor-pointer px-3 hover:text-[#ff0000] border-x border-transparent hover:border-[#ff0000] rounded-lg">
        Radeon RX 6000 series
      </li>
      <li className="cursor-pointer px-3 hover:text-[#ff0000] border-x border-transparent hover:border-[#ff0000] rounded-lg">
        Radeon RX 7000 series
      </li>
      <li className="cursor-pointer px-3 hover:text-[#ff0000] border-x border-transparent hover:border-[#ff0000] rounded-lg">
        Radeon RX 9000 series
      </li>
    </ul>
  );
}

export function VgaNvidia() {
  return (
    <ul className="text-lg pr-20">
      <Link
        to="/ProductPage/VGA"
        className="font-bold text-xl text-[#ff0000] px-3 mb-3"
      >
        VGA Nvidia
      </Link>
      <li className="cursor-pointer px-3 hover:text-[#ff0000] border-x border-transparent hover:border-[#ff0000] rounded-lg">
        RTX 1000 series
      </li>
      <li className="cursor-pointer px-3 hover:text-[#ff0000] border-x border-transparent hover:border-[#ff0000] rounded-lg">
        RTX 1600 series
      </li>
      <li className="cursor-pointer px-3 hover:text-[#ff0000] border-x border-transparent hover:border-[#ff0000] rounded-lg">
        RTX 2000 series
      </li>
      <li className="cursor-pointer px-3 hover:text-[#ff0000] border-x border-transparent hover:border-[#ff0000] rounded-lg">
        RTX 3000 series
      </li>
      <li className="cursor-pointer px-3 hover:text-[#ff0000] border-x border-transparent hover:border-[#ff0000] rounded-lg">
        RTX 4000 series
      </li>
      <li className="cursor-pointer px-3 hover:text-[#ff0000] border-x border-transparent hover:border-[#ff0000] rounded-lg">
        RTX 5000 series
      </li>
    </ul>
  );
}
