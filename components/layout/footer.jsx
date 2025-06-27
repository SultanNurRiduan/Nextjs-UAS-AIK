import React from "react";
import Link from "next/link";
import AppLogo from "../elements/AppLogo";
import NAVBAR_LINKS from "@/constants/navbar";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="text-white"
      style={{
        backgroundImage: "url('/background.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className=" py-10 px-5">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-6">
          {/* Logo */}
          <div>
            <AppLogo />
            <p className="mt-3 text-sm">
              Belajar Wudhu & Sholat sesuai sunnah bersama Muhammadiyah.
            </p>
          </div>

          {/* Navigation 1: Beranda */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Navigasi</h4>
            <ul className="space-y-1 text-sm ">
              {NAVBAR_LINKS.filter((item) => !item.SubWudhu).map(
                (item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.pathname}
                      className="hover:underline hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Navigation 2: Cara Wudhu */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Cara Wudhu</h4>
            <ul className="space-y-1 text-sm">
              {NAVBAR_LINKS.find(
                (item) => item.label === "Cara Wudhu"
              )?.SubWudhu.map((sub, idx) => (
                <li key={idx}>
                  <Link
                    href={sub.pathname}
                    className="hover:underline hover:text-white"
                  >
                    {sub.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation 3: Cara Sholat */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Cara Sholat</h4>
            <ul className="space-y-1 text-sm">
              {NAVBAR_LINKS.find(
                (item) => item.label === "Cara Sholat"
              )?.SubWudhu.map((sub, idx) => (
                <li key={idx}>
                  <Link
                    href={sub.pathname}
                    className="hover:underline hover:text-white"
                  >
                    {sub.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2">Sosial Media</h4>
            <Link href="https://facebook.com" target="_blank">
              <div className="flex transition-transform duration-300 hover:scale-105 pb-2">
                <FaFacebook className="text-blue-600 text-2xl " />
                <h5>Facebook</h5>
              </div>
            </Link>

            <Link href="https://www.instagram.com/peri_tolol_" target="_blank">
              <div className="flex transition-transform duration-300 hover:scale-105">
                <FaInstagram className="text-pink-600 text-2xl hover:text-pink-400 transition" />
                <h5>Instagram</h5>
              </div>
            </Link>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-10 text-center text-sm border-t border-black pt-4">
          © {new Date().getFullYear()} BelajarWudhuSholat. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
