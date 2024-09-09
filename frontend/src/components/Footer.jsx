import React from "react";
import logo from "../../public/assets/images/logo.svg";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const footerContents = [
    {
      title: "Navigation",
      links: [
        {
          name: "Home",
          target: "#home",
        },
        {
          name: "How it works",
          target: "#works",
        },
        {
          name: "Testimonials",
          target: "#testimony",
        },
        {
          name: "FaQ",
          target: "#faq",
        },
      ],
    },
    {
      title: "Social Media",
      links: [
        {
          name: "Instagram",
          target: "#home",
        },
        {
          name: "Facebook",
          target: "#works",
        },
        {
          name: "Youtube",
          target: "#testimony",
        },
      ],
    },
    {
      title: "Contact Us",
      links: [
        {
          name: "+62 898 1234 5678",
          target: "#home",
        },
        {
          name: "contact@numedica.com",
          target: "#works",
        },
      ],
    },
  ];

  return (
    <>
      <section id="footer" className="footer-section md:mt-[150px]">
        <div className="container w-11/12 mx-auto">
          <div className="grid grid-cols-12 gap-y-6">
            <div className="col-span-full md:col-span-4">
              <Image
                className="md:w-3/4 mx-auto md:mr-auto items-center"
                src={logo}
                width={0}
                height={0}
                alt="logo-numedica"
              />
            </div>
            {footerContents.map((item, itemIdx) => {
              return (
                <>
                  <div className="col-span-full text-center md:text-left md:col-span-2">
                    <div className="flex flex-col md:gap-y-2">
                      <div className="header text-lg md:text-xl text-primary-dark font-bold">
                        {item.title}{" "}
                      </div>
                      <div className="links-footer flex flex-col gap-y-1">
                        {item.links.map((link, linkIdx) => {
                          return (
                            <>
                              {" "}
                              <Link
                                href={link.target}
                                className="nav-link text-primary-dark text-base hover:text-secondary md:text-base"
                              >
                                {link.name}
                              </Link>{" "}
                            </>
                          );
                        })}
                      </div>
                    </div>{" "}
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div className="copyright py-3 mt-6 text-white text-center bg-primary-dark text-xs md:text-base">
          Copyright 2024 • All rights reserved • Numedica365
        </div>
      </section>
    </>
  );
};

export default Footer;
