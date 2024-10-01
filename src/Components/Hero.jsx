import React from "react";
import  sawirkeyga from "../Images/swrkeyga.jpg"

const Hero = () => {
  return (
    <div className="flex sm:justify-between px-[70px]  py-24 bg-slate-50">
      <div>
        <h1 className="text-8xl font-bold mb-4">
          Hi,<br />I'm <span className="text-blue-700">Anas Abdinasir</span> <br /> <span className="text-4xl">junior </span> <br /> fullstack Web Developer
        </h1>
        <a 
  href="/Anas Abdinasir Ali's Cv.pdf" // Tani waa dariiqa saxda ah ee CV-gaaga
  target="_blank" 
  rel="noopener noreferrer"
  className="bg-blue-500 font-bold px-4 py-4  rounded-[10px] text-white mt-24"
>
  Here is My Resume
</a>

      </div>
      <img className="w-[400px] rounded-[20px] mt-8" src={sawirkeyga} lt="profile" />
    </div>
  );
};

export default Hero;
