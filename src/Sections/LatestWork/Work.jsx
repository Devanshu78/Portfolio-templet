import React from "react";
import theam_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data.js";
import arrow_icon from "../../assets/arrow_icon.svg";

function Work() {
  return (
    <div id="portfolio">
      <div className="flex flex-col px-5 md:items-center relative mt-16 md:mt-26">
        <h1 className="text-5xl md:text-6xl font-semibold absolute top-0 ">
          My Latest Work
        </h1>
        <img
          className="w-32 ml-40 mt-8 sm:ml-76 sm:mt-6 md:w-40 h-auto"
          src={theam_pattern}
          alt=""
        />
      </div>

      <div className="max-w-[100rem] mx-auto px-8 gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 mt-10 md:mt-0">
        {mywork_data.map((work, index) => (
          <img
            key={index}
            className="cursor-pointer transition cubic-bezier(0.4, 0, 0.2, 1) hover:-translate hover:scale-110 hover:outline-4 outline-[#B415FF] duration-300 rounded-3xl"
            src={work.w_img}
            alt="project-image"
          />
        ))}
      </div>

      <div className="max-w-66 mx-auto border-2 border-white rounded-3xl cursor-pointer py-5 px-12 flex gap-2 items-center justify-center transition-all duration-500 cubic-bezier(0.2, 1.5, 0.3, 1.2) hover:scale-x-110 hover:gap-6 will-change-transform">
        <p className="text-xl">Show More</p>
        <img src={arrow_icon} alt="arrow-icon" />
      </div>
    </div>
  );
}

export default Work;
