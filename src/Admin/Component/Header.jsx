import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBox,
  faUser,
  faSignOutAlt,
  faChartLine,
  faShoppingCart,
  faUsers,
  faCog,
  faList
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const navItems = [
    { icon: faList, label: "Category", path: "/AD/CateList" },
    { icon: faBox, label: "Brand", path: "/AD/BrandList" },
    { icon: faShoppingCart, label: "Orders", path: "/AD/OderList" },
    { icon: faCog, label: "State", path: "/AD/StateList" },
  ];

  return (
    <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white shadow-2xl border-b border-gray-700">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/AD/" className="flex items-center space-x-4 group">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <FontAwesomeIcon icon={faBox} className="h-12 w-12 text-blue-400 relative z-10 transform group-hover:scale-110 transition-transform" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400 bg-clip-text text-transparent tracking-wide">
              OGGY PC Builder
            </span>
          </Link>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-800/50 transition-all duration-300 group"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-500 rounded-full blur-md opacity-30 group-hover:opacity-50 transition-opacity"></div>
                  <div className="h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center shadow-lg relative z-10">
                    <FontAwesomeIcon icon={item.icon} className="h-4 w-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center">
            {/* Profile */}
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-800/50 transition-all duration-300 group"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-500 rounded-full blur-md opacity-30 group-hover:opacity-50 transition-opacity"></div>
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg relative z-10">
                    <FontAwesomeIcon icon={faUser} className="h-5 w-5 text-white" />
                  </div>
                </div>
                <span className="text-base font-medium text-gray-200 group-hover:text-white transition-colors">Admin</span>
              </button>

              {/* Sign Out Button */}
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-gray-800/95 backdrop-blur-sm rounded-xl shadow-2xl border border-gray-700/50 overflow-hidden transform transition-all duration-300"
                onClick={()=>(localStorage.removeItem("Role"),window.location.reload())}>
                  <button className="flex items-center space-x-3 p-4 w-full hover:bg-red-500/10 transition-colors group">
                    <div className="relative">
                      <div className="absolute inset-0 bg-red-500 rounded-full blur-md opacity-30 group-hover:opacity-50 transition-opacity"></div>
                      <div className="h-8 w-8 rounded-full bg-red-500 flex items-center justify-center shadow-lg relative z-10">
                        <FontAwesomeIcon icon={faSignOutAlt} className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <span className="text-base font-medium text-gray-200 group-hover:text-red-400 transition-colors">Sign out</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;