import React from "react";
import sawirkeyga from "../Images/swrkeyga.jpg";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-[70px] py-24 bg-slate-50">
      <div className="text-center sm:text-left">
        <h1 className="text-5xl sm:text-8xl font-bold mb-4">
          Hi,<br />I'm <span className="text-blue-700">Anas Abdinasir</span> <br /> <span className="text-2xl sm:text-4xl">junior </span> <br /> Fullstack Web Developer
        </h1>
        <a 
          href="/Anas Abdinasir Ali's Cv.pdf" // Tani waa dariiqa saxda ah ee CV-gaaga
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-blue-500 font-bold px-6 py-3 rounded-[10px] text-white mt-8 transition duration-300 hover:bg-blue-600"
        >
          Here is My Resume
        </a>
      </div>
      <img className="w-full sm:w-[400px] rounded-[20px] mt-8 sm:mt-0 sm:ml-8" src={sawirkeyga} alt="profile" />
    </div>
  );
};

export default Hero;
