import React, { useState, useRef } from "react";
import logo from "../assets/logo.svg";
import theam_pattern from "../assets/theme_pattern.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../assets/menu_open.svg";
import menu_close from "../assets/menu_close.svg";

function Navbar() {
  const navItems = ["Home", "About", "Services", "Portfolio", "Contact"];
  const [active, setActive] = useState("Home");

  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.classList.add("right-0");
  };

  const closeMenu = () => {
    menuRef.current.classList.remove("right-0");
  };

  const menuSection = () => {
    console.log("hello");
  };

  return (
    <>
      <div className="flex justify-between items-center w-full px-5 lg:px-20 py-3 relative gap-10">
        <img className="w-28 h-auto" src={logo} alt="Logo" />

        <img
          className="w-8 mr-10 lg:hidden"
          onClick={openMenu}
          src={menu_open}
          alt=""
        />

        <ul
          ref={menuRef}
          className=" bg-[#1F0016] lg:bg-transparent lg:flex items-center gap-16 text-xl transition-right duration-500 fixed lg:relative -right-[100%]  lg:right-0 z-50 lg:z-0  top-0  h-screen lg:h-auto w-60 lg:w-auto space-y-10 lg:space-y-0 pt-24 lg:pt-0"
        >
          <img
            src={menu_close}
            alt=""
            onClick={closeMenu}
            className="absolute top-7 right-14 w-8 z-100 lg:hidden"
          />
          {navItems.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer px-10 lg:px-0"
              onClick={() => setActive(item)}
            >
              <AnchorLink
                href={`#${item.toLowerCase()}`}
                offset={50}
                className="flex gap-5 items-center lg:flex-col lg:gap-0"
              >
                <p>{item}</p>
                {active === item || (index === 0 && active === "Home") ? (
                  <img
                    className="w-10 -mt-1 -z-10"
                    src={theam_pattern}
                    alt=""
                  />
                ) : null}
              </AnchorLink>
            </li>
          ))}
        </ul>

        <button className="py-3 px-6 rounded-3xl bg-gradient-to-r to-orange-400 from-purple-600 text-[1.25rem] cursor-pointer transition cubic-bezier(0.4, 0, 0.2, 1) hover:-translate hover:scale-105 duration-300 hidden lg:block">
          Connect with me
        </button>
      </div>
    </>
  );
}

export default Navbar;
