"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "./navbar/navbar";
import Footer from "./footer";
import Header from "./Header";
import LandingPage from "./LandingPage";
import NAVBAR_LINKS from "@/constants/navbar";
import ScrollToTop from "../elements/ScrollToTop";

const AppLayout = ({ children }) => {
  const pathname = usePathname();

  const findLabelFromPath = (path) => {
    for (const item of NAVBAR_LINKS) {
      if (item.pathname === path) return item.label;
      if (item.SubWudhu) {
        const match = item.SubWudhu.find((sub) => sub.pathname === path);
        if (match) return match.label;
      }
    }
    return "Halaman"; // fallback jika tidak cocok
  };

  const pageTitle = findLabelFromPath(pathname);

  return (
    <div>
      <Header />
      <Navbar />
      <LandingPage title={pageTitle} />
      <div className="py-5">
        <main>{children}</main>
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default AppLayout;
