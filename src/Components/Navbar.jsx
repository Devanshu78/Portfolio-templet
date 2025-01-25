import React, { useState } from "react";
import logo from "../assets/logo.svg";
import theam_pattern from "../assets/theme_pattern.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Navbar() {
  const navItems = ["Home", "About", "Services", "Portfolio", "Contact"];
  const [active, setActive] = useState("Home");

  return (
    <>
      <div className="flex justify-between items-center w-full px-36 py-3">
        <div>
          <img src={logo} alt="Logo" />
        </div>
        <ul className=" flex gap-16 text-xl">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="flex flex-col items-center cursor-pointer"
              onClick={() => setActive(item)}
            >
              <AnchorLink href={`#${item.toLowerCase()}`} offset={50}>
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

        <button className="py-3 px-6 rounded-3xl bg-gradient-to-r to-orange-400 from-purple-600 text-[1.25rem] cursor-pointer transition cubic-bezier(0.4, 0, 0.2, 1) hover:-translate hover:scale-105 duration-300">
          Connect with me
        </button>
      </div>
    </>
  );
}

export default Navbar;
