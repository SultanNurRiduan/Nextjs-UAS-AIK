"use client";

import React from "react";
import MembacaSholawat from "@/constants/sholawat";
import NextButton from "@/components/elements/NextButton";

const Sholawt = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
      <div className="pb-4">
        {MembacaSholawat.map((item) => (
          <div key={item.id} className="rounded-xl space-y-2">
            {item.gambar && (
              <img
                src={item.gambar}
                alt={item.judul}
                className="items-center w-auto h-auto mb-3 rounded-lg shadow mx-auto"
              />
            )}

            <h2 className="text-xl font-semibold mb-2">{item.judul}</h2>

            {item.deskripsi.map((item, index) => {
              if (item.teks) {
                return (
                  <p
                    key={index}
                    className="text-gray-700 dark:text-gray-300 border-b border-blue-500 pb-2"
                  >
                    {item.teks}
                  </p>
                );
              }

              return (
                <div
                  key={index}
                  className="bg-blue-100 dark:bg-blue-900 p-4 rounded-md shadow-sm"
                >
                  {item.arab && (
                    <p className="font-arabic text-xl text-right mb-2 text-gray-900 dark:text-gray-100">
                      {item.arab}
                    </p>
                  )}
                  {item.latin && (
                    <p className="italic text-gray-800 dark:text-gray-300 mb-1">
                      "{item.latin}"
                    </p>
                  )}
                  {item.arti && (
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {item.arti}
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

export default Sholawt;
