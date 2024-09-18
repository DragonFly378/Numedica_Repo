import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import logo from "../../public/assets/images/logo.svg";
import hamburgerIcon from "../../public/assets/icons/hamburger.svg";
import closeIcon from "../../public/assets/icons/close.svg";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = ({ active }) => {
  const [isOpen, setIsOpen] = useState(false);

  const NavDatas = [
    {
      title: "Inicio",
      target: "/",
    },
    {
      title: "Cómo funciona",
      target: "#works",
    },
    {
      title: "Testimoniales",
      target: "#testimony",
    },
    {
      title: "Preguntas frecuentes",
      target: "#faq",
    },
  ];

  return (
    <>
      <section className="navbar-section">
        {/* web view */}
        <nav className="navbar-web hidden md:block">
          <div className=" w-11/12 mx-auto">
            <div className="navbar-contents md:flex md:justify-between md:py-5">
              <div className="nav-logo">
                <Image
                  src={logo}
                  width={0}
                  height={0}
                  alt="logo-tlabs"
                  className="md:w-[200px] h-auto"
                />
              </div>
              <div className="nav-links flex gap-x-5 text-lg text-putih m-auto">
                {NavDatas.map((link, linkIdx) => {
                  return (
                    <>
                      <Link
                        href={link.target}
                        className={`nav-link text-primary-dark  hover:text-secondary delay-0 transition-all`}
                      >
                        {link.title}
                      </Link>
                    </>
                  );
                })}
              </div>{" "}
              <div className="btn flex my-auto">
                {/* <button className="bg-primary text-white rounded-lg px-5 text-base py-3 hover:bg-primary-dark delay-75 transition-all">
                  Agendar una consulta
                </button> */}
                <Button
                  as={Link}
                  href={"/regist"}
                  text={"Agendar una consulta"}
                  // icon={isOpen === true ? closeIcon : hamburgerIcon}
                  style="bg-primary text-white my-auto flex rounded-lg px-5 text-base py-3 hover:bg-primary-dark delay-75 transition-all"
                />
              </div>
            </div>
          </div>
        </nav>

        {/* mobile view */}
        <nav className="block md:hidden top-0 bg-page-bg shadow-md fixed w-full z-40">
          <div className="w-11/12 mx-auto">
            <div className="nav-brand flex justify-between py-6">
              <Link className="nav-logo flex items-center" href="/">
                <Image
                  src={logo}
                  width={0}
                  height={0}
                  alt="logo-tlabs"
                  className="w-[180px] md:w-[200px] h-auto"
                  // style={{ width: "200px", height: "auto" }} // optional
                />
              </Link>

              <Button
                onClick={() => setIsOpen(!isOpen)}
                href="/"
                icon={isOpen === true ? closeIcon : hamburgerIcon}
                style="text-primary text-xl  my-auto"
                iconStyle="w-[30px] "
                type={"secondary"}
              />
            </div>
            <div
              className={`${
                isOpen ? "h-screen top-[100px]" : "top-[-800px] "
              }     nav-links  bg-page-bg  text-primary-dark my-auto text-center py-36 absolute left-0 right-0 z-20 ease-in-out duration-700`}
            >
              <div className="flex flex-col gap-y-5">
                {NavDatas.map((link, linkIdx) => {
                  return (
                    <>
                      <div key={linkIdx} className="nav-link">
                        <Button
                          as={Link}
                          onClick={() => setIsOpen(!isOpen)}
                          href={link.target}
                          text={link.title}
                          // icon={isOpen === true ? closeIcon : hamburgerIcon}
                          style="hover:underline hover:underline-offset-8 hover:decoration-wavy hover:text-secondary transition ease-in-out delay-150"
                        />
                      </div>{" "}
                      {/* <button
                        onClick={() => setIsOpen(!isOpen)}
                        key={linkIdx}
                        className={`${link.className} hover:underline hover:underline-offset-8 hover:decoration-wavy hover:text-orange transition ease-in-out delay-150`}
                      >
                        <Link href={`${link.target}`}>{link.title}</Link>
                      </button> */}
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
