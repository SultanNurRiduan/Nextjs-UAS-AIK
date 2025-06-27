"use client";

import React from "react";
import { motion } from "framer-motion";
import NiatTakbiratulIkhram from "@/constants/niattakbiratulikhram";
import ButtonBottom from "@/components/elements/ButtonBottom";

// Variabel animasi reusable
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

const NiatSholat = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
      <div className="pb-4">
        {NiatTakbiratulIkhram.map((item, i) => (
          <motion.div
            key={item.id}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInVariant}
            className="space-y-2 rounded-xl"
          >
            {item.gambar && (
              <img
                src={item.gambar}
                alt={item.judul}
                className="items-center w-2x2 h-auto mb-3 rounded-lg shadow mx-auto"
              />
            )}

            <h2 className="text-xl font-semibold mb-2">{item.judul}</h2>

            {/* Deskripsi: string */}
            {typeof item.deskripsi === "string" && (
              <p className="text-gray-700 dark:text-gray-300 border-b border-blue-500">
                {item.deskripsi}
              </p>
            )}

            {/* Deskripsi: array of string */}
            {Array.isArray(item.deskripsi) &&
              typeof item.deskripsi[0] === "string" && (
                <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 border-b border-blue-500">
                  {item.deskripsi.map((desc, index) => (
                    <li key={index}>{desc}</li>
                  ))}
                </ul>
              )}

            {/* Deskripsi: array of object (dalil) */}
            {Array.isArray(item.deskripsi) &&
              typeof item.deskripsi[0] === "object" && (
                <ul className="space-y-4 mt-4">
                  {item.deskripsi.map((dalil, index) => (
                    <li
                      key={index}
                      className="bg-blue-100 dark:bg-blue-900 p-4 rounded-md shadow-sm"
                    >
                      {dalil.arab && (
                        <p className="font-arabic text-xl text-right mb-2 text-gray-900 dark:text-gray-100">
                          {dalil.arab}
                        </p>
                      )}
                      {dalil.arti && (
                        <p className="italic text-gray-800 dark:text-gray-300 mb-1">
                          "{dalil.arti}"
                        </p>
                      )}
                      {dalil.sumber && (
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {dalil.sumber}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              )}
          </motion.div>
        ))}
      </div>

      {/* Tombol bawah juga dianimasikan */}
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

export default NiatSholat;
