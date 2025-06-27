"use client";

import React from "react";
import { motion } from "framer-motion";
import Salam from "@/constants/salam";
import ButtonBottom from "@/components/elements/ButtonBottom";

// Animasi muncul dari bawah
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

const SalamPage = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
      <div className="pb-4">
        {Salam.map((item, i) => (
          <motion.div
            key={item.id}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInVariant}
            className="rounded-xl space-y-2"
          >
            {/* Gambar jika ada */}
            {item.gambar && (
              <img
                src={item.gambar}
                alt={item.judul}
                className="items-center w-2xs h-auto mb-3 rounded-lg shadow mx-auto"
              />
            )}

            {/* Judul */}
            <h2 className="text-xl font-semibold mb-2">{item.judul}</h2>

            {/* Deskripsi */}
            {item.deskripsi.map((item, index) => {
              if (item.teks) {
                return (
                  <p
                    key={index}
                    className="text-gray-700 dark:text-gray-300 border-b border-blue-500 pb-2"
                  >
                    {item.teks}
                  </p>
                );
              }

              if (item.subjudul) {
                return (
                  <div key={index} className="pt-2">
                    <p className="font-semibold text-base text-gray-800 dark:text-gray-200">
                      {item.subjudul}
                    </p>
                    <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-md shadow-sm mt-2">
                      {item.arab && (
                        <p className="font-arabic text-xl text-right mb-2 text-gray-900 dark:text-gray-100">
                          {item.arab}
                        </p>
                      )}
                      {item.latin && (
                        <p className="italic text-gray-800 dark:text-gray-300 mb-1">
                          "{item.latin}"
                        </p>
                      )}
                      {item.arti && (
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {item.arti}
                        </p>
                      )}
                    </div>
                  </div>
                );
              }

              return null;
            })}
          </motion.div>
        ))}
      </div>

      {/* Tombol bawah */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { delay: 0.3, duration: 0.5 },
          },
        }}
      >
        <ButtonBottom />
      </motion.div>
    </div>
  );
};

export default SalamPage;
