export default function Mainboard() {
  return (
    <ul className="text-lg">
      <li className="font-bold text-xl mb-3 px-3">Mainboard</li>
      <li className="cursor-pointer px-3 hover:bg-[#e0e0e0] rounded-lg">ATX</li>
      <li className="cursor-pointer px-3 hover:bg-[#e0e0e0] rounded-lg">
        Micro ATX
      </li>
      <li className="cursor-pointer px-3 hover:bg-[#e0e0e0] rounded-lg">
        Mini ITX
      </li>
      <li className="cursor-pointer px-3 hover:bg-[#e0e0e0] rounded-lg">
        Intel LGA 1200
      </li>
      <li className="cursor-pointer px-3 hover:bg-[#e0e0e0] rounded-lg">
        Intel LGA 1700
      </li>
      <li className="cursor-pointer px-3 hover:bg-[#e0e0e0] rounded-lg">
        Intel LGA 1851
      </li>
      <li className="cursor-pointer px-3 hover:bg-[#e0e0e0] rounded-lg">
        AMD AM4
      </li>
      <li className="cursor-pointer px-3 hover:bg-[#e0e0e0] rounded-lg">
        AMD AM5
      </li>
    </ul>
  );
}
