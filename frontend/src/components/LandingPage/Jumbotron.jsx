import React from "react";
import jumbotron_img from "../../../public/assets/images/jumbotron_image.svg";
import Image from "next/image";
import SparklesText from "../magicui/sparkles-text";
import { FadeText } from "@/components/magicui/fade-text";
import BoxReveal from "../magicui/box-reveal";

const Jumbotron = () => {
  return (
    <>
      <section className="jumbotron-section md:my-[150px] my-[90px]">
        <div className=" md:w-10/12 w-11/12 mx-auto">
          <div className="grid grid-cols-12 gap-y-12 items-center">
            <div className="left-contents md:col-span-6 col-span-full">
              <div className="header-copy md:pr-16 ">
                <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                  <h2 className="header text-primary-dark font-bold md:text-[42px] text-[34px] leading-[48px] md:leading-[60px] text-center md:text-left capitalize">
                    Welcome to the space <br /> where doctors listen to you
                  </h2>
                </BoxReveal>
                {/* <SparklesText
                  text={
                    <h2 className="header text-primary-dark font-bold md:text-[42px] text-[28px] leading-[48px] md:leading-[60px] text-center md:text-left capitalize">
                      Welcome to the space <br /> where doctors listen to you
                    </h2>
                  }
                /> */}
                {/* <h2 className="header text-primary-dark font-bold md:text-[42px] text-[28px] leading-[48px] md:leading-[60px] text-center md:text-left capitalize">
                  Welcome to the space <br /> where doctors listen to you
                </h2> */}

                <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                  <p className="subtitle text-primary-dark font-normal text-base md:text-xl leading-[28px] md:leading-[32px] text-center md:text-left">
                    Here, you are more than just a patient. Someone with a
                    story, and our doctors are here to listen, to care, and to
                    guide you with the understanding and compassion that define
                    true healthcare.
                  </p>
                </BoxReveal>
                {/* <p className="subtitle text-primary-dark font-normal text-lg md:text-xl leading-[28px] md:leading-[32px] text-center md:text-left">
                  Here, you are more than just a patient. Someone with a story,
                  and our doctors are here to listen, to care, and to guide you
                  with the understanding and compassion that define true
                  healthcare.
                </p> */}
              </div>

              <div className="btn-cta flex items-center flex-col md:flex-row gap-y-3 md:gap-x-3 md:mt-8 mt-4">
                <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                  <button className="bg-primary text-white rounded-lg px-5 text-base py-3">
                    Book a video appointment
                  </button>
                </BoxReveal>
                <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                  <button className="text-primary-dark bg-page-bg-300 rounded-lg px-5 text-base py-3">
                    Get All Information
                  </button>
                </BoxReveal>
              </div>
            </div>
            <div className="md:col-span-6 col-span-full">
              <FadeText
                // className="text-4xl font-bold text-black dark:text-white"
                direction="up"
                framerProps={{
                  show: { transition: { delay: 0.5 } },
                }}
                text={
                  <SparklesText
                    text={
                      <div className="hero-image">
                        <Image
                          src={jumbotron_img}
                          width={0}
                          alt="hero-img"
                          height={0}
                          sizes="100vw"
                          style={{ width: "100%", height: "auto" }} // optional
                        />
                      </div>
                    }
                  />
                }
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Jumbotron;
