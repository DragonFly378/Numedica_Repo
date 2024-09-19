import Layout from "@/widget/Layout";
import Head from "next/head";
import React from "react";

const Index = () => {
  return (
    <>
      <Head>
        <title>Numedica365 - Your healthcare space</title>
        <meta property="og:title" content="Numedica365" key="title" />
        <link rel="icon" type="image/png" href="/logoBrand.png" />
      </Head>
      <Layout>
        <h3>Halo</h3>
      </Layout>{" "}
    </>
  );
};

export default Index;
