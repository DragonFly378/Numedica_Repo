import React, { useState, useEffect } from "react";
import HeaderSection from "./HeaderSection";
import pricingImage from "../../../public/assets/images/pricing.svg";
import checklistIcon from "../../../public/assets/icons/checklist.svg";
import Image from "next/image";
import { BorderBeam } from "../magicui/border-beam";
import ShineBorder from "@/components/magicui/shine-border";
import { FadeText } from "../magicui/fade-text";
import SparklesText from "../magicui/sparkles-text";

const Pricing = () => {
  const [isChecked, setIsChecked] = useState(false);

  const benefitCategory = {
    visit: {
      price: 100,
      benefits: [
        {
          title: "You will get benefit a",
        },
        {
          title: "You will get benefit a",
        },
        {
          title: "You will get benefit a",
        },
        {
          title: "You will get benefit a",
        },
        {
          title: "You will get benefit a",
        },
      ],
    },
    membership: {
      price: 59,
      benefits: [
        {
          title: "You will get benefit b",
        },
        {
          title: "You will get benefit b",
        },
        {
          title: "You will get benefit b",
        },
        {
          title: "You will get benefit b",
        },
        {
          title: "You will get benefit b",
        },
      ],
    },
  };

  const currentCategory = isChecked
    ? benefitCategory.membership
    : benefitCategory.visit;

  // Function to handle checkbox change
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  console.log(isChecked);

  return (
    <>
      <section id="pricing" className="pricing-section md:my-[150px] my-[90px]">
        <div className=" md:w-10/12 w-11/12 mx-auto">
          <FadeText
            // className="text-4xl font-bold text-black dark:text-white"
            direction="left"
            framerProps={{
              show: { transition: { delay: 0.5 } },
            }}
            text={
              <div className="pricing-image md:hidden mb-4 mx-auto">
                <Image
                  className=" mx-auto"
                  src={pricingImage}
                  width={0}
                  alt="hero-img"
                  height={0}
                  sizes="100vw"
                  style={{ width: "80%", height: "auto" }} // optional
                />
              </div>
            }
          />

          <HeaderSection
            title={"Costos por nuestro servicio"}
            caption={
              "Affordable, Transparent, and Accessible Care. Explore our straightforward pricing options for online doctor visits, ensuring you receive the care you need without any surprises. We believe in clear communication and fair pricing, so you can focus on your health with peace of mind."
            }
            isBackground={false}
          />
          <div className="md:w-10/12 w-11/12 mx-auto grid grid-cols-12">
            <div className="left-content md:col-span-6 relative">
              <FadeText
                // className="text-4xl font-bold text-black dark:text-white"
                direction="left"
                framerProps={{
                  show: { transition: { delay: 0.5 } },
                }}
                text={
                  <div className="pricing-image hidden md:block md:w-10/12 mx-auto">
                    <Image
                      className=" mx-auto"
                      src={pricingImage}
                      width={0}
                      alt="hero-img"
                      height={0}
                      sizes="100vw"
                      style={{ width: "80%", height: "auto" }} // optional
                    />
                  </div>
                }
              />
              <FadeText
                // className="text-4xl font-bold text-black dark:text-white"
                direction="left"
                framerProps={{
                  show: { transition: { delay: 0.5 } },
                }}
                text={
                  <div className="contact-us hidden md:block absolute w-1/2 bottom-0 right-20 bg-white custom-shadow rounded-lg md:px-3 md:pt-4 md:pb-10">
                    <div className="header-copy text-primary-dark font-bold md:text-lg text-center md:mb-3">
                      Let us talk with us
                    </div>
                    <form className="flex flex-col gap-y-1" action="submit">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="yourmail@gmail.com"
                        className="bg-page-bg-300 md:py-2 md:px-2 rounded-md"
                      />
                      <button
                        type="submit"
                        className="bg-primary-dark text-white rounded-md md:py-1"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                }
              />
            </div>
            <div className="right-content content-center md:content-start col-span-full md:col-span-6">
              <FadeText
                // className="text-4xl font-bold text-black dark:text-white"
                direction="right"
                framerProps={{
                  show: { transition: { delay: 0.5 } },
                }}
                text={
                  <ShineBorder
                    color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                    className="card-price w-full md:w-7/12 mx-auto md:mr-auto rounded-lg border-[1px] border-primary-dark px-3 py-4 md:px-5 md:py-6"
                  >
                    <div className="flex flex-col md:gap-y-5">
                      <div className="header-content flex flex-col gap-y-2">
                        <h4 className="header-copy text-primary-dark font-bold text-lg text-center">
                          Pricing plans
                        </h4>{" "}
                        <div className="grid grid-cols-12 gap-x-0 md:gap-x-1 mx-auto">
                          <div className="col-span-4 text-left caption text-sm md:text-base text-primary-dark ">
                            Por consulta
                          </div>{" "}
                          <div className="col-span-3  text-center">
                            <label class="inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                value=""
                                className="sr-only peer"
                                checked={isChecked}
                                onChange={handleCheckboxChange}
                              />
                              <div className="relative w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                            </label>
                          </div>
                          <div className="col-span-4 text-left caption text-sm md:text-base text-primary-dark">
                            Agendar una consulta <br />{" "}
                            <span className="discount rounded-full text-center text-white bg-pink-soft px-2 py-1 md:px-3 md:py-1">
                              20% off
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="body-content flex flex-col gap-y-14">
                        <div className="benefits-content flex flex-col gap-y-2">
                          <div className="price-tag text-primary-dark font-bold text-lg md:text-xl">
                            ${currentCategory.price} MXN
                          </div>{" "}
                          {currentCategory.benefits.map(
                            (benefit, benefitIdx) => (
                              <div
                                key={benefitIdx}
                                className="benefit-item grid grid-cols-12 items-center"
                              >
                                <Image
                                  className="col-span-1"
                                  src={checklistIcon}
                                  width={0}
                                  alt="hero-img"
                                  height={0}
                                  sizes="100vw"
                                  style={{ width: "80%", height: "auto" }} // optional
                                />
                                <div className="benefit-copy col-span-11 text-primary-dark md:text-lg">
                                  {benefit.title}
                                </div>
                              </div>
                            )
                          )}
                        </div>
                        <button className="bg-primary-dark text-white md:text-lg md:py-2 py-1 rounded-md md:rounded-lg">
                          {isChecked ? "Get membership plan" : "Get visit plan"}
                        </button>
                      </div>
                    </div>
                    {/* <BorderBeam /> */}
                  </ShineBorder>
                }
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
