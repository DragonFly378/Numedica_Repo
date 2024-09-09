import Image from "next/image";
import Layout from "@/widget/Layout";
import Head from "next/head";
import Jumbotron from "@/components/LandingPage/Jumbotron";
import Workflow from "@/components/LandingPage/Workflow";
import Testimony from "@/components/LandingPage/Testimony";
import Faq from "@/components/LandingPage/Faq";
import Pricing from "@/components/LandingPage/Pricing";

export default function Home() {
  return (
    <>
      <Head>
        <title>Numedica365</title>
        <meta property="og:title" content="Numedica365" key="title" />
      </Head>
      <Layout>
        <Jumbotron />
        <Workflow />
        <Testimony />
        <Faq />
        <Pricing />
      </Layout>{" "}
    </>
  );
}
