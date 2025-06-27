"use client";

import React from "react";
import ItidalData from "@/constants/itidal";
import NextButton from "@/components/elements/NextButton";

const Itidal = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
    
      {ItidalData.map((item) => (
        <div key={item.id} className="pb-4">
          {/* Jika ada gambar */}
          {item.gambar && (
            <img
              src={item.gambar}
              alt={item.judul}
              className="items-center w-2xs h-auto mb-3 rounded-lg shadow mx-auto"
            />
          )}

          {/* Judul */}
          <h2 className="text-xl font-semibold mb-2">{item.judul}</h2>

          {/* Jika deskripsi berupa string */}
          {typeof item.deskripsi === "string" && (
            <p className="text-gray-700 dark:text-gray-300 border-b border-blue-500 pb-2">
              {item.deskripsi}
            </p>
          )}

          {/* Jika deskripsi berupa array of objek */}
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
                    {dalil.latin && (
                      <p className="italic text-gray-800 dark:text-gray-300 mb-1">
                        {dalil.latin}
                      </p>
                    )}
                    {dalil.arti && (
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {dalil.arti}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            )}
        </div>
      ))}
      <div className="flex justify-end mt-8">
        <NextButton/>
      </div>
    </div>
  );
};

export default Itidal;
