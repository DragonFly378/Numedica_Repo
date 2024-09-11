import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";

export const IconComponent = ({ iconSrc, iconStyle }) => {
  return (
    <>
      <Image
        className={iconStyle}
        src={iconSrc}
        width={0}
        height={0}
        sizes="100vw"
        alt={"icon"}
        // style={{ width: "20%", height: "auto" }} // optional
      />
    </>
  );
};

const Button = ({
  target,
  href,
  type,
  // if you want to use as Link, change parent props as={Link}
  as: Component = "button",
  btnType,
  style,
  text,
  icon,
  iconStyle,
  iconPosition: iconPosition = "right",
  onClick,
}) => {
  const variants = {
    primary:
      "primary py-[8px] px-[2px] md:py-[10px] md:px-[20px] flex items-center gap-x-3 ",
    secondary:
      "secondary py-[10px] px-[10px] md:py-[10px] md:px-[20px]  flex gap-x-3",
  };

  return (
    <Component
      type={btnType}
      onClick={onClick}
      href={href}
      rel="noopener noreferrer"
      target={target}
      className={`${variants[type]} ${style}`}
    >
      {iconPosition === "left" && (
        <IconComponent iconSrc={icon} iconStyle={iconStyle} />
      )}

      {text}

      {iconPosition === "right" && (
        <IconComponent iconSrc={icon} iconStyle={iconStyle} />
      )}
    </Component>
  );
};

export default Button;
