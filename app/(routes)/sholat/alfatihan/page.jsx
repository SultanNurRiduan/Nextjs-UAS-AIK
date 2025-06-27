"use client";

import React from "react";
import AlFatihah from "@/constants/alfatihah";
import NextButton from "@/components/elements/NextButton";

const AlFatihahPage = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
      <div className="pb-4">
        {AlFatihah.map((item) => (
          <div key={item.id} className="space-y-2 rounded-xl">
            <h2 className="text-xl font-semibold mb-2">{item.judul}</h2>

            {/* Jika deskripsi adalah string */}
            {typeof item.deskripsi === "string" && (
              <p className="text-gray-700 dark:text-gray-300 border-b border-blue-500 pb-4">
                {item.deskripsi}
              </p>
            )}

            {/* Jika deskripsi adalah array of string */}
            {Array.isArray(item.deskripsi) &&
              typeof item.deskripsi[0] === "string" && (
                <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 border-b border-blue-500 pb-4">
                  {item.deskripsi.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              )}

            {/* Jika deskripsi adalah array of object (ayat atau dalil) */}
            {Array.isArray(item.deskripsi) &&
              typeof item.deskripsi[0] === "object" && (
                <ul className="space-y-4 mt-4">
                  {item.deskripsi.map((obj, index) => (
                    <li
                      key={index}
                      className="bg-blue-100 dark:bg-blue-900 p-4 rounded-md shadow-sm"
                    >
                      {obj.arab && (
                        <p className="font-arabic text-xl text-right mb-2 text-gray-900 dark:text-gray-100">
                          {obj.arab}
                        </p>
                      )}
                      {obj.arti && (
                        <p className="italic text-gray-800 dark:text-gray-300 mb-1">
                          "{obj.arti}"
                        </p>
                      )}
                      {obj.sumber && (
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {obj.sumber}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
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

export default AlFatihahPage;
