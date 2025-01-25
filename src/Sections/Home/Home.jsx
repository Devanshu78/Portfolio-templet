import React from "react";
import Navbar from "../../Components/Navbar";
import profile from "../../assets/profile_img.svg";
import Background from "./Background";

function Home() {
  return (
    <div id="home" className="relative">
      <div className="fixed top-0 left-0 right-0 bottom-0 h-screen -z-10">
        <Background />
      </div>
      <div className="text-white flex flex-col items-center">
        <Navbar />
        <div className="flex flex-col items-center mt-20 justify-center">
          <img
            className="h-40 sm:h-60 w-auto"
            src={profile}
            alt="NOTE ALEX image"
          />
          <h2 className="bg-clip-text text-center text-white w-10/12 lg:w-auto text-3xl md:text-3xl lg:text-6xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r to-orange-400 from-purple-600">
              I'm Alex Bennett,
            </span>{" "}
            fronted developer <br /> based in USA.
          </h2>
          <p className="text-base md:text-lg lg:text-xl max-w-10/12 mx-auto text-center ">
            I am a frontend developer from California, USA with 10 years of
            experience in multiple companies like Microsoft, Tesla and Apple.
          </p>

          <div className="flex gap-5 md:gap-10 mt-8">
            <button className="px-6 py-3 md:py-3 md:px-6 rounded-3xl bg-gradient-to-r  to-[#DF8908] from-[#B415FF] font-semibold cursor-pointer hover:outline-2 outline-white text-sm md:text-base">
              Connect with me
            </button>

            <button className="px-6 py-3 md:py-4 md:px-8 rounded-3xl border-2 border-white hover:border-purple-500 cursor-pointer text-sm md:text-base">
              My Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
