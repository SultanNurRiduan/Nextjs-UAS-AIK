"use client";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: "easeOut" },
        },
      }}
      className="rounded-2xl max-w-3xl mx-auto px-4 py-6 space-y-6"
      style={{
        backgroundImage: 'url("/images/background.jpeg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { delay: 0.2, duration: 0.8, ease: "easeOut" },
          },
        }}
        className="px-4 py-6 md:px-10 lg:px-16 rounded-xl shadow-md text-white max-w-5xl mx-auto bg-black/10"
      >
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { delay: 0.4, duration: 0.6, ease: "easeOut" },
            },
          }}
          className="font-bold text-2xl md:text-3xl lg:text-4xl mb-4 text-center"
        >
          🕌 Belajar Sholat & Wudhu Bersama Muhammadiyah
        </motion.h1>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { delay: 0.6, duration: 0.8, ease: "easeOut" },
            },
          }}
          className="text-base md:text-lg leading-relaxed text-justify"
        >
          Selamat datang di ruang belajar ibadah digital{" "}
          <span className="font-semibold">Muhammadiyah</span>! Platform ini
          dirancang khusus untuk membimbingmu memahami dan mempraktikkan{" "}
          <span className="font-medium">wudhu</span> dan{" "}
          <span className="font-medium">sholat</span> secara benar, sesuai
          tuntunan Rasulullah ﷺ dan manhaj tarjih Muhammadiyah.
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
