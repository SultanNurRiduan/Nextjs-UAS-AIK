"use client";

import React from "react";
import MengusapKepalaData from "@/constants/mengusapkepala";
import NextButton from "@/components/elements/NextButton";

const MembasuhKepala = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
      <div className="pb-4">
        {MengusapKepalaData.map((item) => (
          <div key={item.id} className="space-y-2 rounded-xl">
            {/* Gambar jika ada */}
            {item.gambar && (
              <img
                src={item.gambar}
                alt={item.judul}
                className="items-center w-2xs h-auto mb-3 rounded-lg shadow mx-auto"
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
              <div className="bg-blue-100 dark:bg-blue-900 p-4 mt-4 rounded-md shadow-sm">
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
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-end mt-8">
        <NextButton/>
      </div>
    </div>
  );
};

export default MembasuhKepala;
