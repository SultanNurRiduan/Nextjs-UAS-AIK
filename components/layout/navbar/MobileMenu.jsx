"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaChevronDown } from "react-icons/fa";
import NAVBAR_LINKS from "@/constants/navbar";
import AppLogo from "@/components/elements/AppLogo";

const MobileMenu = ({ isOpen, onClose }) => {
  const [showDropdown, setShowDropdown] = useState(null);
  const menuRef = useRef(null);
  const pathname = usePathname();

  const toggleDropdown = (i) => {
    setShowDropdown(showDropdown === i ? null : i);
  };

  const isActive = (path) => pathname === path;

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  return (
    
    <div
      ref={menuRef}
      className={`fixed top-0 right-0 h-130 w-68 bg-white rounded-2xl shadow-lg md:hidden z-50 transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300`}
    >
      
      <div className="p-6 overflow-y-auto h-full space-y-4">
        {NAVBAR_LINKS.map((item, i) => (
          <div key={i}>
            {!item.SubWudhu ? (
              <Link
                href={item.pathname}
                onClick={onClose}
                className={`block py-2 text-sm uppercase transition ${
                  isActive(item.pathname)
                    ? "text-blue-600 font-semibold"
                    : "text-gray-800 hover:text-blue-600"
                }`}
              >
                {item.label}
              </Link>
            ) : (
              <>
                <button
                  onClick={() => toggleDropdown(i)}
                  className="w-full flex items-center justify-between text-gray-800 uppercase text-sm"
                >
                  {item.label}
                  <FaChevronDown
                    className={`transition-transform ${
                      showDropdown === i ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>
                {showDropdown === i && (
                  <div className="mt-2 ml-2 flex flex-col space-y-1">
                    {item.SubWudhu.map((subItem, j) => (
                      <Link
                        key={j}
                        href={subItem.pathname}
                        onClick={onClose}
                        className={`text-xs uppercase px-1 py-1 rounded-md transition ${
                          isActive(subItem.pathname)
                            ? "text-blue-600 font-semibold"
                            : "text-gray-700 hover:text-blue-600"
                        }`}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
