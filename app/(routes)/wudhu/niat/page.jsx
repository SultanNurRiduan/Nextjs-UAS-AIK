"use client";

import React from "react";
import NiatWudhu from "@/constants/niatwudhu";
import ButtonBottom from "@/components/elements/ButtonBottom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const NiatWudhuPage = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
      <div className="pb-4">
        {NiatWudhu.map((item) => {
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
              <h2 className="text-xl font-semibold mb-2">{item.judul}</h2>

              {/* Deskripsi: array of string */}
              {Array.isArray(item.deskripsi) && (
                <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 border-b border-blue-500">
                  {item.deskripsi.map((desc, index) => (
                    <li key={index}>{desc}</li>
                  ))}
                </ul>
              )}

              {/* Bacaan: Arab, Latin, Arti */}
              {item.bacaan && (
                <motion.div
                  className="bg-blue-100 dark:bg-blue-900 p-4 mt-4 rounded-md shadow-sm"
                  variants={fadeUpVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                >
                  <p className="font-arabic text-xl text-right mb-2 text-gray-900 dark:text-gray-100">
                    {item.bacaan.arab}
                  </p>
                  <p className="italic text-gray-800 dark:text-gray-300 mb-1">
                    {item.bacaan.latin}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {item.bacaan.arti}
                  </p>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Button bawah */}
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

export default NiatWudhuPage;
