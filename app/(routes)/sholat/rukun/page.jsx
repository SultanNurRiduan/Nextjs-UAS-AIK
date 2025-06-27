"use client";

import React from "react";
import { motion } from "framer-motion";
import RukunSholat from "@/constants/rukun";
import ButtonBottom from "@/components/elements/ButtonBottom";

// Variants reusable
const fadeInVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const RukunSholatPage = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
      {RukunSholat.map((item, i) => (
        <motion.div
          key={item.id}
          custom={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInVariant}
          className="border-b border-blue-500 pb-4"
        >
          <h2 className="text-xl font-bold mb-2">{item.nama}</h2>

          {/* Jika deskripsi mengandung Arab & Latin */}
          {typeof item.deskripsi === "string" &&
          item.deskripsi.includes("Arab:") ? (
            <div className="space-y-2">
              <p className="text-gray-700 whitespace-pre-line">
                {
                  item.deskripsi.split("Arab:")[0].trim() // Teks sebelum Arab
                }
              </p>
              <div className="bg-blue-100 p-3 rounded shadow">
                <p className="text-right text-xl font-arabic mb-2">
                  {
                    item.deskripsi.split("Arab:")[1].split("Latin:")[0].trim()
                  }
                </p>
                <p className="italic text-gray-800">
                  {item.deskripsi.split("Latin:")[1]?.trim()}
                </p>
              </div>
            </div>
          ) : (
            <p className="text-gray-700 whitespace-pre-line">
              {item.deskripsi}
            </p>
          )}
        </motion.div>
      ))}

      {/* Tombol Bawah */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { delay: 0.2, duration: 0.5 },
          },
        }}
      >
        <ButtonBottom />
      </motion.div>
    </div>
  );
};

export default RukunSholatPage;
