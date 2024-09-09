import React from "react";
import logo from "../../public/assets/images/logo.svg";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const NavDatas = [
    {
      title: "Home",
      target: "/",
    },
    {
      title: "How it works",
      target: "#works",
    },
    {
      title: "Testimonials",
      target: "#testimony",
    },
    {
      title: "FaQ",
      target: "#faq",
    },
    {
      title: "Pricing",
      target: "#pricing",
    },
  ];

  return (
    <>
      <section className="navbar-section">
        {/* web view */}
        <nav className="navbar-web hidden md:block">
          <div className="container md:w-11/12 mx-auto">
            <div className="navbar-contents md:flex md:justify-between md:py-5">
              <div className="nav-logo">
                <Image
                  src={logo}
                  width={0}
                  height={0}
                  alt="logo-tlabs"
                  className="md:w-[200px] h-auto"
                  // style={{ width: "200px", height: "auto" }} // optional
                />
              </div>
              <div className="nav-links flex gap-x-5 text-base text-putih m-auto">
                {NavDatas.map((link, linkIdx) => {
                  return (
                    <>
                      <Link
                        href={link.target}
                        className="nav-link text-primary-dark  hover:text-secondary delay-0 transition-all"
                      >
                        {link.title}
                      </Link>
                    </>
                  );
                })}
              </div>{" "}
              <div className="btn flex my-auto">
                <button className="bg-primary text-white rounded-lg px-5 text-base py-3 hover:bg-primary-dark delay-75 transition-all">
                  Book an appointment
                </button>
              </div>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
