import React from "react";
import theam_pattern from "../../assets/theme_pattern.svg";
import Cards from "./Cards";

function Services() {
  return (
    <div id="services">
      <div className="flex flex-col items-center relative mt-26">
        <h1 className="text-6xl font-semibold text-center absolute top-0 ">
          My Services
        </h1>
        <img className="w-40 h-auto -mr-36 mt-6" src={theam_pattern} alt="" />
      </div>

      <Cards />
    </div>
  );
}

export default Services;
