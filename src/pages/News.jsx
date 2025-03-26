import React, { useState } from "react";

const newsArticles = [
  {
    title: "New GPU Released",
    content:
      "The latest GPU from XYZ company offers unprecedented performance and efficiency, making it a must-have for gamers and professionals alike.",
    date: "2023-10-01",
    author: "John Doe",
    imageUrl:
      "https://mona.media/wp-content/uploads/2022/12/chuc-nang-chinh-cua-gpu.png",
  },
  {
    title: "CPU Price Drop",
    content:
      "Major price drop on ABC company's latest CPUs, making high performance more affordable for everyone. This is a great time to upgrade your system.",
    date: "2023-09-25",
    author: "Jane Smith",
    imageUrl: "https://laptop88.vn//media/news/204_1.jpg",
  },
  {
    title: "New Motherboard Features",
    content:
      "The latest motherboards now support faster RAM and more PCIe lanes, providing better performance and expandability for future upgrades.",
    date: "2023-09-20",
    author: "Alice Johnson",
    imageUrl: "https://i.ebayimg.com/images/g/yOEAAOSwG5Zlsizk/s-l400.jpg",
  },
  {
    title: "SSD Prices Drop",
    content:
      "SSD prices have dropped significantly, making it a great time to upgrade your storage.",
    date: "2023-09-15",
    author: "Bob Brown",
    imageUrl:
      "https://kenhtinhoc.vn/wp-content/uploads/2023/10/o-cung-ssd-samsung-990-pro-pcie-gen-4-0-x4-nvme-v-nand-m-2-2280-1tb-mz-v9p1t0bw-6.jpg",
  },
  {
    title: "New RAM Technology",
    content:
      "The latest RAM technology offers faster speeds and better performance for gaming and professional applications.",
    date: "2023-09-10",
    author: "Charlie Davis",
    imageUrl:
      "https://bizweb.dktcdn.net/thumb/grande/100/329/122/products/trident-z-rgb-ddr4-01-11824290-9259-4c56-a542-f6ca5f77df0c-9324d08d-1200-4ea0-97b4-c48e88072f96-afc3b506-a982-4f37-96aa-38fe36ecdcd5.jpg?v=1741142410963",
  },
  {
    title: "Power Supply Units",
    content:
      "New power supply units offer better efficiency and more power for high-end systems.",
    date: "2023-09-05",
    author: "Diana Evans",
    imageUrl: "https://example.com/psu.jpg",
  },
  {
    title: "Cooling Solutions",
    content:
      "The latest cooling solutions provide better thermal management for overclocked systems.",
    date: "2023-09-01",
    author: "Eve Foster",
    imageUrl: "https://example.com/cooling.jpg",
  },
  {
    title: "Case Designs",
    content:
      "New case designs offer better airflow and more space for high-end components.",
    date: "2023-08-25",
    author: "Frank Green",
    imageUrl: "https://example.com/case.jpg",
  },
  {
    title: "Monitor Innovations",
    content:
      "The latest monitors offer higher resolutions and faster refresh rates for a better gaming experience.",
    date: "2023-08-20",
    author: "Grace Harris",
    imageUrl: "https://example.com/monitor.jpg",
  },
  {
    title: "Keyboard and Mouse",
    content:
      "New keyboard and mouse designs offer better ergonomics and more features for gamers.",
    date: "2023-08-15",
    author: "Henry Irving",
    imageUrl: "https://example.com/keyboard-mouse.jpg",
  },
  {
    title: "Networking Gear",
    content:
      "The latest networking gear offers faster speeds and better reliability for online gaming.",
    date: "2023-08-10",
    author: "Ivy Johnson",
    imageUrl: "https://example.com/networking.jpg",
  },
  {
    title: "Audio Equipment",
    content:
      "New audio equipment offers better sound quality and more features for gamers and professionals.",
    date: "2023-08-05",
    author: "Jack King",
    imageUrl: "https://example.com/audio.jpg",
  },
  {
    title: "VR Headsets",
    content:
      "The latest VR headsets offer better resolution and more immersive experiences.",
    date: "2023-08-01",
    author: "Karen Lee",
    imageUrl: "https://example.com/vr.jpg",
  },
  {
    title: "Gaming Chairs",
    content:
      "New gaming chairs offer better ergonomics and more comfort for long gaming sessions.",
    date: "2023-07-25",
    author: "Leo Martin",
    imageUrl: "https://example.com/chair.jpg",
  },
  {
    title: "External Storage",
    content:
      "The latest external storage solutions offer more capacity and faster speeds.",
    date: "2023-07-20",
    author: "Mia Nelson",
    imageUrl: "https://example.com/external-storage.jpg",
  },
];

const ITEMS_PER_PAGE = 5;

export default function News() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(newsArticles.length / ITEMS_PER_PAGE);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const currentArticles = newsArticles.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Latest Tech News</h1>
      {currentArticles.map((article, index) => (
        <div
          key={index}
          className="mb-8 p-6 bg-white rounded-lg shadow-md grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-64 object-cover rounded-lg md:col-span-1"
          />
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold mb-2 text-[#ff0000]">
              {article.title}
            </h2>
            <p className="text-gray-700 mb-4">{article.content}</p>
            <div className="text-gray-500 text-sm">
              <span className="mr-4">{article.date}</span>
              <span className="italic">by {article.author}</span>
            </div>
          </div>
        </div>
      ))}
      <div className="flex justify-center mt-6">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handleClick(index + 1)}
            className={`mx-1 px-3 py-1 rounded border-2 border-[#ff0000] ${
              currentPage === index + 1
                ? "bg-[#ff0000] text-white"
                : "bg-[#fff] text-[#ff0000]"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
