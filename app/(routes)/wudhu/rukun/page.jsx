"use client";

import React from "react";
import RukunWudhu from "@/constants/rukunwudhu";
import NextButton from "@/components/elements/NextButton";

const Rukun = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
      {RukunWudhu.map((item) => (
        <div key={item.id} className="border-b border-blue-500 pb-4">
          <h2 className="text-xl font-bold mb-2">{item.judul}</h2>

          <div className="space-y-2">
            {item.deskripsi.map((teks, index) => (
              <p key={index} className="text-gray-700 whitespace-pre-line">
                {teks}
              </p>
            ))}
          </div>
        </div>
      ))}
      <div className="flex justify-end mt-8">
        <NextButton/>
      </div>
    </div>
  );
};

export default Rukun;
