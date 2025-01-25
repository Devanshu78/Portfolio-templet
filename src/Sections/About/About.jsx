import React from "react";
import AboutProfile from "../../assets/about_profile.svg";
import theam_pattern from "../../assets/theme_pattern.svg";

function About() {
  return (
    <div id="about">
      <div className="flex flex-col md:items-center px-5 relative mt-26">
        <h1 className="text-5xl md:text-6xl font-semibold text-center absolute top-0 ">
          About me
        </h1>
        <img
          className="w-32 md:w-40 h-auto ml-24 md:-mr-30 mt-5 md:mt-6"
          src={theam_pattern}
          alt=""
        />
      </div>

      <div className="flex justify-center gap-20 p-5 mt-6 md:mt-10">
        <img
          className="rounded-3xl hidden lg:block h-96 w-auto"
          src={AboutProfile}
          alt=""
        />
        <div className="w-full lg:w-[55%] font-semibold text-lg">
          <div className="space-y-5">
            <p>
              I am an experienced Frontend Developer with over a decade of
              professional expertise in the field. Throughout my career, I have
              had the privilege of collaborating with prestigious organizations,
              contributing to their success and growth.
            </p>
            <p>
              My passion for frontend development is not only reflected in my
              extensive experience but also in the enthusiasm and dedication I
              bring to each project.
            </p>
          </div>
          <div className="space-y-5 mt-10">
            <div className="flex gap-2 items-center transition cubic-bezier(0.4, 0, 0.2, 1) hover:-translate hover:scale-105 duration-300 text-sm">
              <p className="min-w-24 px-2">HTML & CSS</p>
              <p className="h-2 w-7/12 bg-gradient-to-r to-[#DF8908] from-[#B415FF] rounded-2xl">
                {" "}
              </p>
            </div>
            <div className="flex gap-2 items-center transition cubic-bezier(0.4, 0, 0.2, 1) hover:-translate hover:scale-105 duration-300 text-sm">
              <p className="min-w-24 px-2">JAVASCRIPT</p>
              <p className="h-2 w-7/12 bg-gradient-to-r to-[#DF8908] from-[#B415FF] rounded-2xl">
                {" "}
              </p>
            </div>
            <div className="flex gap-2 items-center transition cubic-bezier(0.4, 0, 0.2, 1) hover:-translate hover:scale-105 duration-300 text-sm">
              <p className="min-w-24 px-2">REACT</p>
              <p className="h-2 w-6/12 bg-gradient-to-r to-[#DF8908] from-[#B415FF] rounded-2xl">
                {" "}
              </p>
            </div>
            <div className="flex gap-2 items-center transition cubic-bezier(0.4, 0, 0.2, 1) hover:-translate hover:scale-105 duration-300 text-sm">
              <p className="min-w-24 px-2">PYTHON</p>
              <p className="h-2 w-7/12 bg-gradient-to-r to-[#DF8908] from-[#B415FF] rounded-2xl">
                {" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-evenly mt-10">
        <div className="flex flex-col items-center">
          <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r to-orange-400 from-purple-600 w-fit">
            10+
          </p>
          <p className="uppercase text-center text-base sm:text-lg md:text-xl">
            Years of Experience
          </p>
        </div>
        <p className="min-w-0.5 h-auto bg-white rounded-2xl"></p>
        <div className="flex flex-col items-center">
          <p className="text-4xl font-bold  bg-clip-text text-transparent bg-gradient-to-r to-orange-400 from-purple-600 w-fit">
            90+
          </p>
          <p className="uppercase text-center text-base sm:text-lg md:text-xl">
            project completed
          </p>
        </div>
        <p className="min-w-0.5 h-auto bg-white rounded-2xl"></p>
        <div className="flex flex-col items-center">
          <p className="text-4xl font-bold  bg-clip-text text-transparent bg-gradient-to-r to-orange-400 from-purple-600 w-fit">
            15+
          </p>
          <p className="uppercase text-center text-base sm:text-lg md:text-xl">
            happy clients
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
