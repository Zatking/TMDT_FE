import Category from "./CategoryList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <ul className="pr-14 py-5 border-1 border-r-blacks">
      <li className="flex justify-between hover:text-[#ff0000] cursor-pointer py-2 px-3 rounded-lg items-center">
        <Link to="/OwnPC">Build your own PC</Link>
      </li>

      <div className="dropdown dropdown-hover dropdown-right w-full">
        <li
          tabIndex={0}
          role="button"
          className="flex justify-between hover:text-[#ff0000] cursor-pointer py-2 px-3 rounded-lg items-center"
        >
          <p>Processor, Mainboard</p>
          <FontAwesomeIcon icon={faChevronRight} />
        </li>
        <Category cate="cpu" />
      </div>
      <div className="dropdown dropdown-hover dropdown-right w-full">
        <li className="flex justify-between hover:text-[#ff0000] cursor-pointer py-2 px-3 rounded-lg items-center">
          <p>Graphic Card, Power Supply</p>
          <FontAwesomeIcon icon={faChevronRight} />
        </li>
        <Category cate="gpu" />
      </div>
      <div className="dropdown dropdown-hover dropdown-right w-full">
        <li className="flex justify-between hover:text-[#ff0000] cursor-pointer py-2 px-3 rounded-lg items-center">
          <p>Storage, Ram</p>
          <FontAwesomeIcon icon={faChevronRight} />
        </li>
        <Category cate="storage" />
      </div>
      <div className="dropdown dropdown-hover dropdown-right w-full">
        <li className="flex justify-between hover:text-[#ff0000] cursor-pointer py-2 px-3 rounded-lg items-center">
          <p>Case & Cooling</p>
          <FontAwesomeIcon icon={faChevronRight} />
        </li>
        <Category cate="case" />
      </div>
      <li className="flex justify-between hover:text-[#ff0000] cursor-pointer py-2 px-3 rounded-lg items-center">
        <p>Services</p>
      </li>
    </ul>
  );
};

export default Navigation;
