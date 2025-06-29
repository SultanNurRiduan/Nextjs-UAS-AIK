"use client";

import React from "react";
import Link from "next/link";

const CartSubMenu = () => {
  return (
    <>
      <h1 className="font-bold text-center text-2xl pt-5">
        Langsung mulai Blajar
        <span
          className="inline-block text-3xl"
          style={{
            animation: "shake 0.6s infinite",
            display: "inline-block",
          }}
        >
          🙌
        </span>
      </h1>
      <div className="flex justify-center gap-5 md:gap-30 p-5 flex-wrap">
        {/* Kartu Sholat */}
        <Link
          href="/sholat/rukun"
          className="group"
          style={{ perspective: "1000px" }}
        >
          <div
            className="w-40 h-56 md:w-52 md:h-64 relative transition-transform duration-700 group-hover:rotate-y-180"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Sisi Depan */}
            <div
              className="absolute w-full h-full rounded-xl overflow-hidden shadow-lg bg-cover bg-blue-300 bg-center text-white text-shadow-black font-bold text-xl flex items-end p-4"
              style={{
                backgroundImage: 'url("/images/sholat1.png")',
                backfaceVisibility: "hidden",
              }}
            >
              🕌 Sholat
            </div>

            {/* Sisi Belakang */}
            <div
              className="absolute w-full h-full bg-blue-300 rounded-xl shadow-lg p-4 flex items-center justify-center text-blue-700 font-semibold text-center"
              style={{
                transform: "rotateY(180deg)",
                backfaceVisibility: "hidden",
              }}
            >
              Pelajari semua rukun dan tata cara sholat sesuai tuntunan Nabi ﷺ.
            </div>
          </div>
        </Link>

        {/* Kartu Wudhu */}
        <Link
          href="/wudhu/rukun"
          className="group"
          style={{ perspective: "1000px" }}
        >
          <div
            className="w-40 h-56 md:w-52 md:h-64 relative transition-transform duration-700 group-hover:rotate-y-180"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Sisi Depan */}
            <div
              className="absolute w-full h-full rounded-xl overflow-hidden shadow-lg bg-cover bg-blue-300 bg-center text-white text-shadow-black font-bold text-xl flex items-end p-4"
              style={{
                backgroundImage: 'url("/images/membasuh-tangan.png")',
                backfaceVisibility: "hidden",
              }}
            >
              💧 Wudhu
            </div>

            {/* Sisi Belakang */}
            <div
              className="absolute w-full h-full bg-blue-300 rounded-xl shadow-lg p-4 flex items-center justify-center text-blue-700 font-semibold text-center"
              style={{
                transform: "rotateY(180deg)",
                backfaceVisibility: "hidden",
              }}
            >
              Panduan lengkap wudhu yang benar sesuai manhaj tarjih
              Muhammadiyah.
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default CartSubMenu;
