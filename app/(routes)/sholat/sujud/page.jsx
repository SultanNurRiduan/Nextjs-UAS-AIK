"use client";

import React from "react";
import SujudContent from "@/constants/sujud";
import NextButton from "@/components/elements/NextButton";

const Sujud = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
      <div className="pb-4">
        {SujudContent.map((item) => (
          <div key={item.id} className=" rounded-xl space-y-2">
            {item.gambar && (
              <img
                src={item.gambar}
                alt={item.judul}
                className="items-center w-auto h-auto mb-3 rounded-lg shadow mx-auto"
              />
            )}

            <h2 className="text-xl font-semibold mb-2">{item.judul}</h2>

            {Array.isArray(item.deskripsi) &&
              item.deskripsi.map((doa, index) => (
                <div
                  key={index}
                  className="bg-blue-100 dark:bg-blue-900 p-4 rounded-md shadow-sm"
                >
                  {doa.arab && (
                    <p className="font-arabic text-xl text-right mb-2 text-gray-900 dark:text-gray-100">
                      {doa.arab}
                    </p>
                  )}
                  {doa.latin && (
                    <p className="italic text-gray-800 dark:text-gray-300 mb-1">
                      "{doa.latin}"
                    </p>
                  )}
                  {doa.arti && (
                    <p className="text-sm text-gray-600 dark:text-gray-400">{doa.arti}</p>
                  )}
                </div>
              ))}
          </div>
        ))}
      </div>
      <div className="flex justify-end mt-8">
        <NextButton/>
      </div>
    </div>
  );
};

export default Sujud;
