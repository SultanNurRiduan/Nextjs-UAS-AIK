"use client";


import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaChevronDown } from "react-icons/fa";
import NAVBAR_LINKS from "@/constants/navbar";
import Image from "next/image";
import HamburgerButton from "@/components/elements/HamburgerButton";
import MobileMenu from "./MobileMenu";

const useClientPathname = () => {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? pathname : null;
};

const Navbar = () => {
  const pathname = useClientPathname();
  const [isOpen, setIsOpen] = useState(false);
  const isActive = (path) => pathname && path === pathname;

  return (
    <>
      <nav
        className={`
          w-full top-0 z-[9999] shadow-md font-bold
          backdrop-blur-md
          bg-white/90
          md:bg-white
          bg-[url('/background.jpeg')]
          md:bg-none
          bg-cover bg-center bg-no-repeat
        `}
      >
        <div className="flex items-center justify-between md:justify-evenly px-10 py-4">
          {/* Logo mobile */}
          <div className="md:hidden flex">
            <Image
              src="/Logo.png"
              width={80}
              height={80}
              alt="logo"
            />
          </div>

          {/* Hamburger Button */}
          <div className="md:hidden">
            <HamburgerButton
              isOpen={isOpen}
              toggleMenu={() => setIsOpen(!isOpen)}
            />
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-6 z-50">
            {NAVBAR_LINKS.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  href={item.pathname ?? "#"}
                  className={`flex items-center gap-1 text-base transition duration-200 hover:text-blue-500 cursor-pointer ${
                    isActive(item.pathname)
                      ? "text-blue-500 font-semibold"
                      : "text-gray-800"
                  }`}
                >
                  {item.label}
                  {item.SubWudhu && (
                    <FaChevronDown className="text-sm mt-[1px] transition-transform duration-300 group-hover:rotate-180 group-hover:scale-110" />
                  )}
                </Link>

                {item.SubWudhu && (
                  <div
                    className="absolute left-0 mt-2 w-60 bg-white shadow-lg rounded-md p-2 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 origin-top z-50"
                    role="menu"
                    aria-label={`Submenu ${item.label}`}
                  >
                    {item.SubWudhu.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.pathname}
                        className={`block px-4 py-2 rounded-md text-sm hover:bg-blue-100 transition cursor-pointer ${
                          isActive(sub.pathname)
                            ? "text-blue-600 font-semibold"
                            : "text-gray-700"
                        }`}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Menu */}
        <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </nav>
    </>
  );
};

export default Navbar;
