"use client";

import React from "react";
import { motion } from "framer-motion";
import TasyahudAkhir from "@/constants/tasyahud";
import ButtonBottom from "@/components/elements/ButtonBottom";

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

const Tasyahud = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
      <div className="pb-4">
        {TasyahudAkhir.map((item, i) => (
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
              <motion.img
                src={item.gambar}
                alt={item.judul}
                className="items-center w-2xs h-auto mb-3 rounded-lg shadow mx-auto"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              />
            )}

            {/* Judul */}
            <h2 className="text-xl font-semibold mb-2">{item.judul}</h2>

            {/* Deskripsi & Doa */}
            {item.deskripsi.map((bagian, index) => {
              if (bagian.teks) {
                return (
                  <motion.p
                    key={index}
                    className="text-gray-700 dark:text-gray-300 border-b border-blue-500 pb-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.2, duration: 0.6 }}
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    {bagian.teks}
                  </motion.p>
                );
              }

              return (
                <motion.div
                  key={index}
                  className="bg-blue-100 dark:bg-blue-900 p-4 rounded-md shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.2, duration: 0.6 }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  {bagian.arab && (
                    <p className="font-arabic text-xl text-right mb-2 text-gray-900 dark:text-gray-100">
                      {bagian.arab}
                    </p>
                  )}
                  {bagian.latin && (
                    <p className="italic text-gray-800 dark:text-gray-300 mb-1">
                      "{bagian.latin}"
                    </p>
                  )}
                  {bagian.arti && (
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {bagian.arti}
                    </p>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <ButtonBottom />
      </motion.div>
    </div>
  );
};

export default Tasyahud;
