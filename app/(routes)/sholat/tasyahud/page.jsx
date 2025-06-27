"use client";

import React from "react";
import TasyahudAkhir from "@/constants/tasyahud";
import NextButton from "@/components/elements/NextButton";

const Tasyahud = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
      <div className="pb-4">
        {TasyahudAkhir.map((item) => (
          <div key={item.id} className="rounded-xl space-y-2">
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

            {/* Looping deskripsi */}
            {item.deskripsi.map((bagian, index) => {
              // Jika ada teks biasa
              if (bagian.teks) {
                return (
                  <p
                    key={index}
                    className="text-gray-700 dark:text-gray-300 border-b border-blue-500 pb-2"
                  >
                    {bagian.teks}
                  </p>
                );
              }

              // Jika doa: arab, latin, arti
              return (
                <div
                  key={index}
                  className="bg-blue-100 dark:bg-blue-900 p-4 rounded-md shadow-sm"
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
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <div className="flex justify-end mt-8">
        <NextButton/>
      </div>
    </div>
  );
};

export default Tasyahud;
