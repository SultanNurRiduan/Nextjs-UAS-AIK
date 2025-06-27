"use client";

import { usePathname, useRouter } from "next/navigation";
import { SubWudhu } from "@/constants/wudhu";
import { SubSholat } from "@/constants/sholat"; // ✅ Tambahkan ini

const NextButton = () => {
  const pathname = usePathname();
  const router = useRouter();

  // Tentukan apakah halaman saat ini adalah bagian dari wudhu atau sholat
  const isWudhu = pathname.startsWith("/wudhu");
  const isSholat = pathname.startsWith("/sholat");

  // Pilih daftar yang sesuai
  const steps = isWudhu ? SubWudhu : isSholat ? SubSholat : [];

  const currentIndex = steps.findIndex((item) => item.pathname === pathname);
  const nextItem = steps[currentIndex + 1];

  const handleNext = () => {
    if (nextItem) {
      router.push(nextItem.pathname);
    }
  };

  if (!nextItem) return null;

  return (
    <button
      onClick={handleNext}
      className="inline-block text-blue-500 hover:scale-105 font-bold transition"
    >
      Selanjutnya → {nextItem.label}
    </button>
  );
};

export default NextButton;
