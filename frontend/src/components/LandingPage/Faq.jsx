import React, { useState } from "react";
import HeaderSection from "./HeaderSection";
import Image from "next/image";
import arrowBottomIcon from "../../../public/assets/icons/arrow_bottom.svg";

const Faq = () => {
  const [faqContents, setFaqContents] = useState([
    {
      title: "How do I book an appointment?",
      answer:
        "Easily schedule your appointment at a time that suits you best. We are here when you need us, ready to provide the care you deserve.",
      isOpen: false,
    },
    {
      title: "What should I expect during my consultation?",
      answer:
        "Meet with our attentive doctors who take the time to listen and understand your concerns. Your health journey starts with a compassionate conversation.",
      isOpen: false,
    },
    {
      title: "Will I receive a receipt after my visit?",
      answer:
        "Receive a clear and detailed summary of your visit, ensuring you have all the information you need for your peace of mind.",
      isOpen: false,
    },
    {
      title: "How is my treatment routine determined?",
      answer:
        "Follow your personalized treatment plan, designed to support your health goals. We're with you every step of the way, ensuring your care continues beyond the consultation.",
      isOpen: false,
    },
  ]);

  const toggleFaq = (index) => {
    setFaqContents((prevContents) =>
      prevContents.map((item, i) =>
        i === index ? { ...item, isOpen: !item.isOpen } : item
      )
    );
  };

  return (
    <>
      <section id="faq" className="faq-section md:my-[150px]">
        <div className="container md:w-10/12 mx-auto">
          <HeaderSection
            title={"Frequently asked Questions"}
            caption={
              "Got Questions? We've Got Answers. Find quick and clear information on booking, treatments, and services in our Frequently Asked Questions section. We're here to help every step of the way"
            }
            isBackground={false}
          />

          <div className="faq-contents grid grid-cols-12 md:gap-x-4 md:w-10/12 mx-auto">
            {faqContents.map((item, itemIdx) => {
              return (
                <>
                  <div className="faq-item col-span-3 flex flex-col">
                    <button
                      onClick={() => toggleFaq(itemIdx)}
                      className="faq-header bg-white rounded-t-xl py-3 px-5 text-center"
                    >
                      <h4 className="text-primary-dark font-bold md:text-lg text-center">
                        {item.title}
                      </h4>
                      <Image
                        className={`mx-auto md:mt-1 ${
                          item.isOpen && "rotate-180"
                        }`}
                        src={arrowBottomIcon}
                        width={0}
                        height={0}
                        sizes="100vw"
                        alt="iconarrow"
                        style={{ width: "5%", height: "auto" }} // optional
                      />
                    </button>
                    <div
                      className={`caption bg-white rounded-b-xl py-3 px-5 ${
                        item.isOpen ? "block" : "hidden"
                      }  text-primary-dark text-center text-sm`}
                    >
                      {item.answer}
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
