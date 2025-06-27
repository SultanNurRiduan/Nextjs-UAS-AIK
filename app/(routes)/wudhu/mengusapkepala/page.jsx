"use client";

import React from "react";
import MengusapKepalaData from "@/constants/mengusapkepala";
import ButtonBottom from "@/components/elements/ButtonBottom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const MembasuhKepala = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
      <div className="pb-4">
        {MengusapKepalaData.map((item) => {
          const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

          return (
            <motion.div
              key={item.id}
              ref={ref}
              variants={fadeUpVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="space-y-2 rounded-xl"
            >
              {/* Gambar jika ada */}
              {item.gambar && (
                <motion.img
                  src={item.gambar}
                  alt={item.judul}
                  className="items-center w-full max-w-xs h-auto mb-3 rounded-lg shadow mx-auto"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5 }}
                />
              )}

              <h2 className="text-xl font-semibold mb-2">{item.judul}</h2>

              {/* Deskripsi sebagai list */}
              {Array.isArray(item.deskripsi) && (
                <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 border-b border-blue-500">
                  {item.deskripsi.map((desc, index) => (
                    <li key={index}>{desc}</li>
                  ))}
                </ul>
              )}

              {/* Dalil jika ada */}
              {item.dalil && (
                <motion.div
                  className="bg-blue-100 dark:bg-blue-900 p-4 mt-4 rounded-md shadow-sm"
                  variants={fadeUpVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                >
                  {item.dalil.arab && (
                    <p className="font-arabic text-xl text-right mb-2 text-gray-900 dark:text-gray-100">
                      {item.dalil.arab}
                    </p>
                  )}
                  {item.dalil.latin && (
                    <p className="italic text-gray-800 dark:text-gray-300 mb-1">
                      {item.dalil.latin}
                    </p>
                  )}
                  {item.dalil.arti && (
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                      "{item.dalil.arti}"
                    </p>
                  )}
                  {item.dalil.sumber && (
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {item.dalil.sumber}
                    </p>
                  )}
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Tombol bawah dengan animasi juga */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <ButtonBottom />
      </motion.div>
    </div>
  );
};

export default MembasuhKepala;
