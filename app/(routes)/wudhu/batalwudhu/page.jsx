"use client";

import React from "react";
import PembatalWudhu from "@/constants/pembatalwudhu";
import NextButton from "@/components/elements/NextButton";

const Batal = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
      <div className="pb-4">
        {PembatalWudhu.map((item) => (
          <div key={item.id} className="space-y-2 rounded-xl">
            <h2 className="text-xl font-semibold mb-2">{item.judul}</h2>

            {/* Deskripsi sebagai list */}
            {Array.isArray(item.deskripsi) && (
              <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 border-b border-blue-500">
                {item.deskripsi.map((desc, index) => (
                  <li key={index}>{desc}</li>
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

export default Batal;
