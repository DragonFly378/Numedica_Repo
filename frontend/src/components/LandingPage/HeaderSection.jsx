import React from "react";

const HeaderSection = ({ title, caption, isBackground }) => {
  return (
    <>
      <div className="header-section text-center md:w-6/12 mx-auto mb-8 md:mb-12">
        <div
          className={`header-content text-xl md:text-2xl font-bold mb-1 ${
            isBackground ? "text-white" : "text-primary-dark"
          }`}
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
    </>
  );
};

export default HeaderSection;
