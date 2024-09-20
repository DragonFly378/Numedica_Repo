import HeaderSection from "@/components/LandingPage/HeaderSection";
import Layout from "@/widget/Layout";
import React from "react";
import bg_download from "../../../public/assets/images/bg_download.svg";
import appstoreIcon from "../../../public/assets/images/appstore.svg";
import playstoreIcon from "../../../public/assets/images/playstore.svg";
import Image from "next/image";
import Link from "next/link";
import BoxReveal from "@/components/magicui/box-reveal";

const Index = () => {
  return (
    <>
      <Layout>
        <section
          style={{
            backgroundImage: `url(assets/images/bg_download.png)`,
          }}
          className="download-section mt-[100px] md:mt-0 md:py-[180px] py-[200px] bg-no-repeat  bg-cover md:mb-[-120px] mb-[80px]"
        >
          <div className=" download-body w-11/12 mx-auto grid grid-cols-12 items-center">
            <div className="left-contents md:col-span-6 col-span-full">
              <div className="header-copy md:pr-16 ">
                <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                  <h2 className="header text-white font-bold md:text-[30px] text-[16px] leading-[38px] md:leading-[60px] text-center md:text-left capitalize">
                    Thanks for completing your subscription. To book your first
                    appointment, download the app
                  </h2>
                </BoxReveal>
              </div>

              <div className="flex items-center md:flex-row flex-col mt-3 gap-y-3 gap-x-4 md:justify-start text-center">
                <Link className="md:w-1/5 w-2/5" href={"/appstore"}>
                  <BoxReveal width="100%" boxColor={"#5046e6"} duration={0.5}>
                    <Image
                      src={appstoreIcon}
                      width={0}
                      alt="hero-img"
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }} // optional
                    />{" "}
                  </BoxReveal>
                </Link>{" "}
                <Link className="md:w-1/5 w-2/5" href={"/playstore"}>
                  <BoxReveal width="100%" boxColor={"#5046e6"} duration={0.5}>
                    {" "}
                    <Image
                      src={playstoreIcon}
                      width={0}
                      alt="hero-img"
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }} // optional
                    />{" "}
                  </BoxReveal>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Index;
