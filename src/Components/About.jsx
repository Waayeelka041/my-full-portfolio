import React from "react";
import sawirkeyga from "../Images/swrkeyga.jpg";
import vedio from "../Images/shahaado.mp4";

const About = () => {
  return (
    <div className="py-4 px-4 sm:px-[70px] bg-slate-50">
      <h1 className="font-bold text-4xl pb-4 text-center">About Me</h1>
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-[100px] items-center">
        <video className="w-full sm:w-[400px] rounded-tr-[70px] rounded-bl-[70px]" autoPlay loop muted>
          <source src={vedio} type="video/mp4" />
        </video>
        <div className="text-center sm:text-left pr-0 sm:pr-[80px] text-2xl leading-normal">
          <h1 className="text-3xl font-bold">Anas Abdinasir Ali</h1>
          <p>
            Junior Fullstack Web Developer with a passion for building responsive, user-friendly web applications using modern technologies like HTML, CSS, JavaScript, React, Node.js, and MongoDB. Experienced in both front-end and back-end development, with a goal to continuously learn and innovate to create digital solutions that help businesses grow. Proven ability to work independently or in a team to deliver high-quality projects on time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
