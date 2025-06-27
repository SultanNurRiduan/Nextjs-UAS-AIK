import React from "react";
import AppLogo from "../elements/AppLogo";
import Image from "next/image";

const Header = () => {
  return (
    <header className="w-full relative hidden md:block">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/background.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay gelap */}
        <div className="w-full h-full bg-black opacity-10" />
      </div>

      {/* Konten Header */}
      <div className="md:max-w-6xl md:mx-auto flex justify-between items-center h-full relative z-10 px-6">
        <AppLogo />
        <div className="flex items-center gap-4 text-white">
          <div>
            <h2 className="font-bold text-2xl shadow-2xl">
              Dedy Susanto
            </h2>
            <p>Tugas UAS Al-Islam dan Kemuhammadiyahan</p>
          </div>
          <Image
            src="/bapak.png"
            width={130}
            height={130}
            alt="muhaimin-picture"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
