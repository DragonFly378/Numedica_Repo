import React from "react";

const HeaderSection = ({ title, caption, isBackground }) => {
  return (
    <>
      <div className="header-section text-center md:w-6/12 md:mx-auto md:mb-12">
        <div
          className={`header-content md:text-2xl font-bold mb-1 ${
            isBackground ? "text-white" : "text-primary-dark"
          }`}
        >
          {title}
        </div>
        <div
          className={`caption md:text-base ${
            isBackground ? "text-white" : "text-primary-dark"
          }`}
        >
          {caption}
        </div>
      </div>
    </>
  );
};

export default HeaderSection;
