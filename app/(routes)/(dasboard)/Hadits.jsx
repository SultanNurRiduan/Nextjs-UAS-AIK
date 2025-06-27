"use client";
import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const Hadits = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
      className="text-center p-6 bg-white rounded-xl shadow-md max-w-2xl mx-auto mt-10"
    >
      <motion.h2
        custom={0}
        variants={fadeInUp}
        className="text-2xl font-semibold text-gray-800 mb-4"
      >
        Mari Mulai Perjalanan Ibadahmu
      </motion.h2>

      <motion.p
        custom={1}
        variants={fadeInUp}
        className="text-lg italic text-gray-600 mb-6"
      >
        “Sholat adalah tiang agama. Barang siapa menegakkannya, maka ia telah
        menegakkan agama.”
        <br />
        <span className="text-sm not-italic text-gray-500">— HR. Baihaqi</span>
      </motion.p>

      <motion.h3
        custom={2}
        variants={fadeInUp}
        className="text-lg font-medium text-gray-700"
      >
        Klik menu di atas dan mulai belajar hari ini. <br />
        <span className="text-blue-500 font-semibold">
          Bersama Muhammadiyah
        </span>
        , menuju ibadah yang lebih berkualitas.
      </motion.h3>
    </motion.div>
  );
};

export default Hadits;
