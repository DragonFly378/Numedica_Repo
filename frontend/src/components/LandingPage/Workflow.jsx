import React from "react";
import HeaderSection from "./HeaderSection";

import dateIcon from "../../../public/assets/icons/date.svg";
import phoneIcon from "../../../public/assets/icons/phone_in.svg";
import peopleSyncIcon from "../../../public/assets/icons/people_sync.svg";
import receiptIcon from "../../../public/assets/icons/receipt.svg";
import Image from "next/image";
import ShineBorder from "../magicui/shine-border";
import BlurFade from "../magicui/blur-fade";
import { FadeText } from "../magicui/fade-text";

const Workflow = () => {
  const workflowContents = [
    {
      title: "1. Ingresa a la página",
      // caption:
      //   "Easily schedule your appointment at a time that suits you best. We are here when you need us, ready to provide the care you deserve.",
      icon: dateIcon,
    },
    {
      title: "2. Date de alta con nombre de usuario y contraseña",
      // caption:
      //   "Meet with our attentive doctors who take the time to listen and understand your concerns. Your health journey starts with a compassionate conversation.",
      icon: phoneIcon,
    },
    {
      title:
        "3. Responde unas preguntas que permitirán tener tu historial médico que ayudará al profesional de la salud para tomar decisiones. ",
      // caption:
      //   "Receive a clear and detailed summary of your visit, ensuring you have all the information you need for your peace of mind.",
      icon: receiptIcon,
    },
    {
      title:
        "4. Selecciona a tu médico, fecha y hora que mejor se acomode a ti.",
      // caption:
      //   "Follow your personalized treatment plan, designed to support your health goals. We're with you every step of the way, ensuring your care continues beyond the consultation.",
      icon: peopleSyncIcon,
    },
  ];
  return (
    <>
      <section id="works" className="workflow-section md:my-[150px] my-[90px]">
        <div className=" md:w-10/12 w-11/12 mx-auto">
          <HeaderSection
            title={"¿Cómo funciona?"}
            caption={"Es muy sencillo utilizar nuestra plataforma:"}
            isBackground={false}
          />
          <div className="workflow-contents grid grid-cols-12 md:gap-x-4 gap-y-4 md:w-10/12 w-11/12 mx-auto">
            {workflowContents.map((item, itemIdx) => {
              return (
                <>
                  <FadeText
                    // className="text-4xl font-bold text-black dark:text-white"
                    direction="up"
                    framerProps={{
                      show: { transition: { delay: 0.2 * (itemIdx + 1) } },
                    }}
                    className={
                      " workflow-item justify-center col-span-12 md:col-span-3"
                    }
                    text={
                      <ShineBorder
                        borderWidth={1}
                        // className={
                        //   "col-span-full md:col-span-3 w-full justify-center bg-white"
                        // }
                        className={
                          " bg-white relative col-span-12 md:col-span-3 h-full w-full rounded-xl py-8 px-3"
                        }
                        color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                      >
                        <div className={"   "}>
                          <div className="flex flex-col">
                            <div className="flow-header text-center">
                              <Image
                                className="mx-auto md:mb-1 w-2/12 md:w-1/5 h-auto"
                                src={item.icon}
                                width={0}
                                height={0}
                                sizes="100vw"
                                alt={item.title}
                                // style={{ width: "20%", height: "auto" }} // optional
                              />
                              <h4 className="text-primary-dark font-bold text-base md:text-lg text-center">
                                {item.title}
                              </h4>
                            </div>
                          </div>
                          {/* <div className="caption md:mt-4 text-primary-dark text-center text-sm">
                            {item.caption}
                          </div> */}
                        </div>
                      </ShineBorder>
                    }
                  />
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Workflow;
