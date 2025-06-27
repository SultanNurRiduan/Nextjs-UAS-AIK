"use client";

import React from "react";
import { motion } from "framer-motion";
import Rukuk from "@/constants/rukuk";
import ButtonBottom from "@/components/elements/ButtonBottom";

// Animasi reusable
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

const RukukPage = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
      <div className="pb-4">
        {Rukuk.map((item, i) => (
          <motion.div
            key={item.id}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInVariant}
            className="space-y-2 rounded-xl"
          >
            {/* Gambar jika ada */}
            {item.gambar && (
              <img
                src={item.gambar}
                alt={item.judul}
                className="items-center w-2xs h-auto mb-3 rounded-lg shadow mx-auto"
              />
            )}

            <h2 className="text-xl font-semibold mb-2">{item.judul}</h2>

            {/* Deskripsi string */}
            {typeof item.deskripsi === "string" && (
              <p className="text-gray-700 dark:text-gray-300 border-b border-blue-500 pb-4">
                {item.deskripsi}
              </p>
            )}

            {/* Deskripsi array of objects */}
            {Array.isArray(item.deskripsi) &&
              typeof item.deskripsi[0] === "object" && (
                <ul className="space-y-4 mt-4">
                  {item.deskripsi.map((bacaan, index) => (
                    <li
                      key={index}
                      className="bg-blue-100 dark:bg-blue-900 p-4 rounded-md shadow-sm"
                    >
                      {bacaan.arab && (
                        <p className="font-arabic text-xl text-right mb-2 text-gray-900 dark:text-gray-100">
                          {bacaan.arab}
                        </p>
                      )}
                      {bacaan.latin && (
                        <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">
                          <strong>Latin:</strong> {bacaan.latin}
                        </p>
                      )}
                      {bacaan.arti && (
                        <p className="italic text-gray-800 dark:text-gray-300">
                          "{bacaan.arti}"
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              )}
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
            transition: { delay: 0.3, duration: 0.6 },
          },
        }}
      >
        <ButtonBottom />
      </motion.div>
    </div>
  );
};

export default RukukPage;
