"use client";
import React from "react";
import { motion } from "framer-motion";
import BerdiriBilaMampu from "@/constants/berdiribilamampu";
import NextButton from "@/components/elements/NextButton";
import ButtonBottom from "@/components/elements/ButtonBottom";

// Variants animasi reusable
const fadeInVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Berdiri = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-6 space-y-4">
      {BerdiriBilaMampu.map((item, i) => (
        <motion.div
          key={item.id}
          custom={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInVariant}
          className="border-b border-blue-500 pb-4"
        >
          <h2 className="text-xl font-bold mb-2">{item.judul}</h2>

          {/* Jika ada gambar */}
          {item.gambar && (
            <img
              src={item.gambar}
              alt={item.judul}
              className="items-center w-2xs h-auto mb-3 rounded-lg shadow mx-auto"
            />
          )}

          {/* Jika deskripsi adalah string */}
          {typeof item.deskripsi === "string" && (
            <p className="text-gray-700">{item.deskripsi}</p>
          )}

          {/* Jika deskripsi adalah array of string */}
          {Array.isArray(item.deskripsi) &&
            typeof item.deskripsi[0] === "string" && (
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                {item.deskripsi.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            )}

          {/* Jika deskripsi array berisi objek dalil */}
          {Array.isArray(item.deskripsi) &&
            typeof item.deskripsi[0] === "object" && (
              <div className="space-y-2 mt-4">
                {item.deskripsi.map((dalil, idx) => (
                  <div
                    key={idx}
                    className="bg-blue-100 p-4 rounded-md shadow-md space-y-2"
                  >
                    <p className="text-sm font-semibold text-blue-700">
                      {dalil.tipe}
                    </p>

                    {dalil.arab && (
                      <p className="text-right text-xl leading-relaxed font-arabic text-gray-900">
                        {dalil.arab}
                      </p>
                    )}

                    <p className="italic text-gray-800">{dalil.teks}</p>
                  </div>
                ))}
              </div>
            )}
        </motion.div>
      ))}

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { delay: 0.3, duration: 0.6, ease: "easeOut" },
          },
        }}
      >
        <ButtonBottom />
      </motion.div>
    </div>
  );
};

export default Berdiri;
