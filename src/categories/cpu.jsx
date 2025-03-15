import { Link } from "react-router-dom";

export function Intel() {
  return (
    <ul className="text-lg pr-20">
      <li>
        <Link
          to="/ProductPage/CPU/Intel"
          className="font-bold text-xl text-[#ff0000] px-3 py-0 mb-2 hover:bg-transparent">
          CPU Intel
        </Link>
      </li>
      <li>
        <Link
          to="/ProductPage/CPU/Intel/Xeon"
          className="cursor-pointer px-3 py-0 hover:text-[#ff0000] border-x border-transparent hover:border-[#ff0000] rounded-lg hover:bg-transparent">
          Xeon
        </Link>
      </li>
      <li>
        <Link
          to="/ProductPage/CPU/Intel/i3"
          className="cursor-pointer px-3 py-0 hover:text-[#ff0000] border-x border-transparent hover:border-[#ff0000] rounded-lg hover:bg-transparent">
          i3
        </Link>
      </li>
      <li>
        <Link
          to="/ProductPage/CPU/Intel/i5"
          className="cursor-pointer px-3 py-0 hover:text-[#ff0000] border-x border-transparent hover:border-[#ff0000] rounded-lg hover:bg-transparent">
          i5
        </Link>
      </li>
      <li>
        <Link
          to="/ProductPage/CPU/Intel/i7"
          className="cursor-pointer px-3 py-0 hover:text-[#ff0000] border-x border-transparent hover:border-[#ff0000] rounded-lg hover:bg-transparent">
          i7
        </Link>
      </li>
      <li>
        <Link
          to="/ProductPage/CPU/Intel/i9"
          className="cursor-pointer px-3 py-0 hover:text-[#ff0000] border-x border-transparent hover:border-[#ff0000] rounded-lg hover:bg-transparent">
          i9
        </Link>
      </li>
      <li>
        <Link
          to="/ProductPage/CPU/Intel/Ultra"
          className="cursor-pointer px-3 py-0 hover:text-[#ff0000] border-x border-transparent hover:border-[#ff0000] rounded-lg hover:bg-transparent">
          Core Ultra
        </Link>
      </li>
    </ul>
  );
}

export function AMD() {
  return (
    <ul className="text-lg pr-20">
      <li>
        <Link
          to="/ProductPage/CPU/AMD"
          className="font-bold text-xl text-[#ff0000] px-3 mb-3 hover:bg-transparent py-0">
          CPU AMD
        </Link>
      </li>
      <li>
        <Link
          to="/ProductPage/CPU/AMD/Ryzen 3"
          className="cursor-pointer px-3 hover:text-[#ff0000] border-x border-transparent hover:border-[#ff0000] rounded-lg hover:bg-transparent py-0">
          Ryzen 3
        </Link>
      </li>
      <li>
        <Link
          to="/ProductPage/CPU/AMD/Ryzen 5"
          className="cursor-pointer px-3 hover:text-[#ff0000] border-x border-transparent hover:border-[#ff0000] rounded-lg hover:bg-transparent py-0">
          Ryzen 5
        </Link>
      </li>
      <li>
        <Link
          to="/ProductPage/CPU/AMD/Ryzen 7"
          className="cursor-pointer px-3 hover:text-[#ff0000] border-x border-transparent hover:border-[#ff0000] rounded-lg hover:bg-transparent py-0">
          Ryzen 7
        </Link>
      </li>
      <li>
        <Link
          to="/ProductPage/CPU/AMD/Ryzen 9"
          className="cursor-pointer px-3 hover:text-[#ff0000] border-x border-transparent hover:border-[#ff0000] rounded-lg hover:bg-transparent py-0">
          Ryzen 9
        </Link>
      </li>
      <li>
        <Link
          to="/ProductPage/CPU/AMD/Threadripper"
          className="cursor-pointer px-3 hover:text-[#ff0000] border-x border-transparent hover:border-[#ff0000] rounded-lg hover:bg-transparent py-0">
          Threadripper
        </Link>
      </li>
    </ul>
  );
}
