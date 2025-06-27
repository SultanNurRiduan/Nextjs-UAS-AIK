"use client";

import React from "react";
import { motion } from "framer-motion";
import DudukDiAntaraDuaSujud from "@/constants/dudukdua";
import ButtonBottom from "@/components/elements/ButtonBottom";

// Animasi reusable
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

const DudukDuaSujud = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
      <div className="pb-4">
        {DudukDiAntaraDuaSujud.map((item, i) => (
          <motion.div
            key={item.id}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariant}
            className="rounded-xl space-y-4"
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

            {/* Deskripsi bisa berupa teks biasa atau doa */}
            {item.deskripsi.map((desc, index) => {
              if (desc.teks) {
                return (
                  <p
                    key={index}
                    className="text-gray-700 dark:text-gray-300 border-b border-blue-500 pb-2"
                  >
                    {desc.teks}
                  </p>
                );
              }

              return (
                <div
                  key={index}
                  className="bg-blue-100 dark:bg-blue-900 p-4 rounded-md shadow-sm"
                >
                  {desc.arab && (
                    <p className="font-arabic text-xl text-right mb-2 text-gray-900 dark:text-gray-100">
                      {desc.arab}
                    </p>
                  )}
                  {desc.latin && (
                    <p className="italic text-gray-800 dark:text-gray-300 mb-1">
                      "{desc.latin}"
                    </p>
                  )}
                  {desc.arti && (
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {desc.arti}
                    </p>
                  )}
                </div>
              );
            })}
          </motion.div>
        ))}
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
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

export default DudukDuaSujud;
