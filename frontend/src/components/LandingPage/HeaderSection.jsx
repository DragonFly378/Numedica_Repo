import React from "react";
import BlurFade from "@/components/magicui/blur-fade";

const HeaderSection = ({
  title,
  caption,
  isBackground,
  style,
  headerStyle,
}) => {
  return (
    <>
      <BlurFade delay={0.25} inView={true}>
        <div
          className={`header-section ${style} text-center md:w-7/12 mx-auto mb-8 md:mb-12`}
        >
          <div
            className={`header-content text-xl ${headerStyle} md:text-2xl font-bold mb-1  ${
              isBackground ? "text-white" : "text-primary-dark"
            } `}
          >
            {title}
          </div>
          <div
            className={`caption text-sm md:text-base ${
              isBackground ? "text-white" : "text-primary-dark"
            }`}
          >
            {caption}
          </div>
        </div>
      </BlurFade>
    </>
  );
};

export default HeaderSection;
