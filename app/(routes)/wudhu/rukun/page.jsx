"use client";

import React from "react";
import RukunWudhu from "@/constants/rukunwudhu";
import ButtonBottom from "@/components/elements/ButtonBottom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Rukun = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
      {RukunWudhu.map((item) => {
        const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

        return (
          <motion.div
            key={item.id}
            ref={ref}
            variants={fadeUpVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="border-b border-blue-500 pb-4"
          >
            <h2 className="text-xl font-bold mb-2">{item.judul}</h2>

            <div className="space-y-2">
              {item.deskripsi.map((teks, index) => (
                <p key={index} className="text-gray-700 whitespace-pre-line">
                  {teks}
                </p>
              ))}
            </div>
          </motion.div>
        );
      })}

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

export default Rukun;
