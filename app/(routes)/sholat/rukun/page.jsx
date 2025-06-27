"use client";
import React from "react";
import RukunSholat from "@/constants/rukun"; 
import NextButton from "@/components/elements/NextButton";

const RukunSholatPage = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
      {RukunSholat.map((item) => (
        <div key={item.id} className="border-b border-blue-500 pb-4">
          <h2 className="text-xl font-bold mb-2">{item.nama}</h2>

          {/* Jika deskripsi mengandung kata "Arab:" dan "Latin:" */}
          {typeof item.deskripsi === "string" &&
          item.deskripsi.includes("Arab:") ? (
            <div className="space-y-2">
              <p className="text-gray-700 whitespace-pre-line">
                {
                  item.deskripsi
                    .split("Arab:")[0]
                    .trim() /* deskripsi sebelum Arab */
                }
              </p>
              <div className="bg-blue-100 p-3 rounded shadow">
                <p className="text-right text-xl font-arabic mb-2">
                  {
                    item.deskripsi
                      .split("Arab:")[1]
                      .split("Latin:")[0]
                      .trim()
                  }
                </p>
                <p className="italic text-gray-800">
                  {item.deskripsi.split("Latin:")[1]?.trim()}
                </p>
              </div>
            </div>
          ) : (
            <p className="text-gray-700 whitespace-pre-line">
              {item.deskripsi}
            </p>
          )}
        </div>
      ))}
      <div className="flex justify-end mt-8">
        <NextButton/>
      </div>
    </div>
  );
};

export default RukunSholatPage;
