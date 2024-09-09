import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
import React from "react";

const Layout = ({ children: konten }) => {
  const location = useRouter();

  const path = location.pathname;

  // console.log(path);
  return (
    <>
      <Navbar />
      <main className="isi-konten">{konten}</main>
      <Footer />
    </>
  );
};

export default Layout;
