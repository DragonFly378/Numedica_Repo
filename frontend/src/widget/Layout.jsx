import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Layout = ({ children: konten }) => {
  return (
    <>
      <Navbar />
      <main className="isi-konten">{konten}</main>
      <Footer />
    </>
  );
};

export default Layout;
