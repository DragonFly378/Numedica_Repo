import React, { useState } from "react";
import HeaderSection from "./HeaderSection";
import Image from "next/image";
import arrowBottomIcon from "../../../public/assets/icons/arrow_bottom.svg";
import { MagicCard } from "../magicui/magic-card";

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
      <section id="faq" className="faq-section md:my-[150px] my-[90px]">
        <div className="w-11/12 md:w-10/12 mx-auto">
          <HeaderSection
            title={"Preguntas frecuentes - FAQ"}
            caption={"Nos las compartirá el equipo de Fabrice"}
            isBackground={false}
          />

          <div className="faq-contents grid grid-cols-12 gap-y-3 md:gap-x-4 md:w-10/12 w-11/12 mx-auto">
            {faqContents.map((item, itemIdx) => {
              return (
                <>
                  <div className="faq-item col-span-full md:col-span-3 flex flex-col">
                    {" "}
                    <button onClick={() => toggleFaq(itemIdx)}>
                      <MagicCard
                        className={`faq-header bg-white rounded-t-xl ${
                          item.isOpen ? "rounded-b-none" : "rounded-b-xl"
                        } py-3 px-5 text-center`}
                        // className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
                        gradientColor={"#c0f4f570"}
                      >
                        <h4 className="text-primary-dark font-bold text-base md:text-lg text-center">
                          {item.title}
                        </h4>
                        <Image
                          className={`mx-auto md:w-[5%] w-[4%] h-auto mt-1 ${
                            item.isOpen && "rotate-180"
                          }`}
                          src={arrowBottomIcon}
                          width={0}
                          height={0}
                          sizes="100vw"
                          alt="iconarrow"
                          // style={{ width: "5%", height: "auto" }} // optional
                        />
                      </MagicCard>
                    </button>
                    <MagicCard
                      gradientColor={"#c0f4f570"}
                      className={`caption rounded-b-xl bg-white py-3 px-5 transition-all duration-500 ease-in-out overflow-hidden ${
                        item.isOpen
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      } text-primary-dark text-center text-sm`}
                    >
                      {item.answer}
                    </MagicCard>{" "}
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
