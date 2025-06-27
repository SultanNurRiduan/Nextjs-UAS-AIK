import React from 'react'

const Hero = () => {
  return (
    <div
        className="rounded-2xl max-w-3xl mx-auto px-4 py-6 space-y-6"
        style={{
          backgroundImage: 'url("/images/background.jpeg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className=" px-4 py-6 md:px-10 lg:px-16 rounded-xl shadow-md text-white max-w-5xl mx-auto">
          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-4 text-center">
            🕌 Belajar Sholat & Wudhu Bersama Muhammadiyah
          </h1>
          <p className="text-base md:text-lg leading-relaxed text-justify">
            Selamat datang di ruang belajar ibadah digital{" "}
            <span className="font-semibold">Muhammadiyah</span>! Platform ini
            dirancang khusus untuk membimbingmu memahami dan mempraktikkan{" "}
            <span className="font-medium ">wudhu</span> dan{" "}
            <span className="font-medium ">sholat</span> secara benar, sesuai
            tuntunan Rasulullah ﷺ dan manhaj tarjih Muhammadiyah.
          </p>
        </div>
      </div>
  )
}

export default Hero