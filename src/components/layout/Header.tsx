import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white shadow-md rounded-full py-2 px-6 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src="/Logo.png" alt="RentConnect" className="w-20 h-10" />
      </div>
      
      {/* Navigation */}
      <nav className="hidden md:flex space-x-6 text-gray-600 text-sm">
        <a href="#" className="hover:text-gray-900">Về RentConnect</a>
        <a href="#" className="hover:text-gray-900">Trở thành chủ xe</a>
        <Link to="car-list" className="hover:text-gray-900">Danh sách xe</Link>
        <a href="#" className="hover:text-gray-900">Chuyến đi của tôi</a>
      </nav>
      
      {/* Icons + Avatar */}
      <div className="flex items-center space-x-4 relative" ref={dropdownRef}>
        <button className="p-2 text-gray-600 hover:text-gray-900">
          <i className="far fa-bell"></i>
        </button>
        <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-300">
          <img
            src="/Profile.jpg"
            alt="User Avatar"
            className="w-full h-full object-cover cursor-pointer"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          />
        </div>
        {dropdownOpen && (
          <div
            className="
              origin-top-right 
              absolute 
              right-0 
              top-full 
              mt-2 
              w-40 
              rounded-md 
              shadow-lg 
              bg-white 
              ring-1 
              ring-black 
              ring-opacity-5
            "
          >
            <div className="py-1">
              <Link
                to="/profile"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => setDropdownOpen(false)}
              >
                Profile
              </Link>
              <button
                onClick={() => {
                  console.log("Logout clicked");
                  // Thêm hàm xử lý logout tại đây
                }}
                className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;