export default function Mainboard() {
  return (
    <ul className="text-lg pr-20">
      <li className="font-bold text-xl text-[#ff0000] mb-3 px-3">Mainboard</li>
      <li className="cursor-pointer px-3 hover:text-[#ff0000] border-x border-transparent hover:border-[#ff0000] rounded-lg">
        ATX
      </li>
      <li className="cursor-pointer px-3 hover:text-[#ff0000] border-x border-transparent hover:border-[#ff0000] rounded-lg">
        Micro ATX
      </li>
      <li className="cursor-pointer px-3 hover:text-[#ff0000] border-x border-transparent hover:border-[#ff0000] rounded-lg">
        Mini ITX
      </li>
      <li className="cursor-pointer px-3 hover:text-[#ff0000] border-x border-transparent hover:border-[#ff0000] rounded-lg">
        Intel LGA 1200
      </li>
      <li className="cursor-pointer px-3 hover:text-[#ff0000] border-x border-transparent hover:border-[#ff0000] rounded-lg">
        Intel LGA 1700
      </li>
      <li className="cursor-pointer px-3 hover:text-[#ff0000] border-x border-transparent hover:border-[#ff0000] rounded-lg">
        Intel LGA 1851
      </li>
      <li className="cursor-pointer px-3 hover:text-[#ff0000] border-x border-transparent hover:border-[#ff0000] rounded-lg">
        AMD AM4
      </li>
      <li className="cursor-pointer px-3 hover:text-[#ff0000] border-x border-transparent hover:border-[#ff0000] rounded-lg">
        AMD AM5
      </li>
    </ul>
  );
}
