import React from "react";
import HeaderSection from "./HeaderSection";
import Image from "next/image";
import emptyStarIcon from "../../../public/assets/icons/emptyStar.svg";
import filledStarIcon from "../../../public/assets/icons/filledStar.svg";

const Testimony = () => {
  const feedbackContents = [
    {
      name: "Mark T",
      caption:
        "From Booking My Appointment To Receiving My Treatment, The Process Was Seamless And Stress-Free. The Staff's Empathy And Attention To Detail Made A World Of Difference In My Experience.",
      rate: 3, // 3 out of 5 stars
    },
    {
      name: "Emily R",
      caption:
        "The care I received was top-notch. The doctors and nurses made me feel like I was their top priority. I couldn’t have asked for a better experience.",
      rate: 5, // 5 out of 5 stars
    },
    {
      name: "John D",
      caption:
        "Overall, my experience was good, but the waiting time was longer than expected. The treatment itself was excellent, though.",
      rate: 4, // 4 out of 5 stars
    },
    {
      name: "Ayesha B",
      caption:
        "The doctors were very knowledgeable, but I felt like I didn’t get enough time during my consultation. It was a bit rushed.",
      rate: 2, // 2 out of 5 stars
    },
    {
      name: "Michael K",
      caption:
        "I was a bit skeptical at first, but the professionalism of the team won me over. The follow-up care was also very reassuring.",
      rate: 4, // 4 out of 5 stars
    },
    {
      name: "Sophia L",
      caption:
        "The clinic was clean and well-organized. However, I felt the staff could have been more attentive during my visit.",
      rate: 3, // 3 out of 5 stars
    },
  ];

  return (
    <>
      <section
        id="testimony"
        className="testimony-section bg-primary-dark md:py-16  md:my-[150px]"
      >
        <div className="container md:w-10/12 mx-auto">
          <HeaderSection
            title={"What our patients say"}
            caption={
              "Hear from those who matter most: our patients. Discover their stories and experiences with our care, and see how we’ve made a difference in their health and lives"
            }
            isBackground={true}
          />
          <div className="testimoy-contents flex flex-nowrap scrolling-touch items-start space-x-2 overflow-x-scroll">
            {feedbackContents.map((item, itemIdx) => {
              return (
                <>
                  {" "}
                  <div className="testimony-item flex-none md:w-[30%] bg-white rounded-lg md:p-4 ">
                    <div className="copy italic text-soft-grey md:text-base line-clamp-3">
                      &quot;{item.caption}&quot;
                    </div>
                    <div className="flex justify-between md:mt-2">
                      <div className="stars flex flex-row gap-x-1">
                        {Array.from({ length: 5 }).map((_, starIdx) => (
                          <Image
                            key={starIdx}
                            className="mx-auto md:mb-1"
                            src={
                              starIdx < item.rate
                                ? filledStarIcon
                                : emptyStarIcon
                            }
                            width={20}
                            height={20}
                            alt={`star-${starIdx}`}
                          />
                        ))}
                      </div>
                      <div className="name md:text-base text-primary-dark font-medium">
                        - {item.name}
                      </div>
                    </div>
                  </div>{" "}
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimony;
