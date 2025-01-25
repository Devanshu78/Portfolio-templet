import React from "react";
import theam_pattern from "../../assets/theme_pattern.svg";
import Cards from "./Cards";

function Services() {
  return (
    <div id="services">
      <div className="flex flex-col px-5 md:items-center relative mt-26">
        <h1 className="text-5xl md:text-6xl font-semibold text-center absolute top-0 ">
          My Services
        </h1>
        <img
          className="w-32 md:w-40 h-auto ml-40 mt-5 md:-mr-8 md:mt-6"
          src={theam_pattern}
          alt=""
        />
      </div>

      <Cards />
    </div>
  );
}

export default Services;
