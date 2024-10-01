import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";

const Skills = () => {
  return (
    <div className="bg-slate-50 pl-[70px] flex px-[70px] py-10 gap-10 relative">
      <div className="mx-[50px]">
        <h1 className="text-4xl font-bold mb-6">My Professional Skills</h1>
        <p className="text-lg mb-4">
          I have acquired skills in HTML, CSS, Javascript, and the MERN stack
          (MongoDB, Express.js, React.js, Node.js) through various courses and
          projects. Below are some of my key skills:
        </p>

        {/* Skill Cards */}
        <div className="space-y-4">
          {/* HTML Skill */}
          <div className="bg-white hover:bg-blue-100 shadow-lg rounded-lg p-4 flex justify-between items-center transform hover:scale-105 transition duration-300">
            <div className="flex items-center">
              <FaHtml5 className="text-5xl text-orange-600 mr-4" />
              <h1 className="text-xl font-bold">HTML</h1>
            </div>
            <h1 className="text-xl font-bold">95%</h1>
          </div>

          {/* CSS Skill */}
          <div className="bg-white hover:bg-blue-100 shadow-lg rounded-lg p-4 flex justify-between items-center transform hover:scale-105 transition duration-300">
            <div className="flex items-center">
              <FaCss3Alt className="text-5xl text-blue-500 mr-4" />
              <h1 className="text-xl font-bold">CSS</h1>
            </div>
            <h1 className="text-xl font-bold">90%</h1>
          </div>

          {/* JavaScript Skill */}
          <div className="bg-white hover:bg-blue-100 shadow-lg rounded-lg p-4 flex justify-between items-center transform hover:scale-105 transition duration-300">
            <div className="flex items-center">
              <FaJs className="text-5xl text-yellow-500 mr-4" />
              <h1 className="text-xl font-bold">JavaScript</h1>
            </div>
            <h1 className="text-xl font-bold">85%</h1>
          </div>

          {/* MongoDB */}
          <div className="bg-white hover:bg-green-100 shadow-lg rounded-lg p-4 flex justify-between items-center transform hover:scale-105 transition duration-300">
            <div className="flex items-center">
              <SiMongodb className="text-5xl text-green-600 mr-4" />
              <h1 className="text-xl font-bold">MongoDB</h1>
            </div>
            <h1 className="text-xl font-bold">80%</h1>
          </div>

          {/* Express.js */}
          <div className="bg-white hover:bg-gray-100 shadow-lg rounded-lg p-4 flex justify-between items-center transform hover:scale-105 transition duration-300">
            <div className="flex items-center">
              <SiExpress className="text-5xl text-gray-600 mr-4" />
              <h1 className="text-xl font-bold">Express.js</h1>
            </div>
            <h1 className="text-xl font-bold">80%</h1>
          </div>

          {/* React.js */}
          <div className="bg-white hover:bg-blue-100 shadow-lg rounded-lg p-4 flex justify-between items-center transform hover:scale-105 transition duration-300">
            <div className="flex items-center">
              <FaReact className="text-5xl text-blue-500 mr-4" />
              <h1 className="text-xl font-bold">React.js</h1>
            </div>
            <h1 className="text-xl font-bold">90%</h1>
          </div>

          {/* Node.js */}
          <div className="bg-white hover:bg-green-100 shadow-lg rounded-lg p-4 flex justify-between items-center transform hover:scale-105 transition duration-300">
            <div className="flex items-center">
              <FaNodeJs className="text-5xl text-green-500 mr-4" />
              <h1 className="text-xl font-bold">Node.js</h1>
            </div>
            <h1 className="text-xl font-bold">85%</h1>
          </div>
        </div>
      </div>

      {/* Skills Images */}
      {/* <div className="flex flex-col">
        <img
          className="w-[600px] h-[200px] rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
          src="https://img.freepik.com/free-photo/operation-process-performance-development-icon_53876-16541.jpg"
          alt="skills"
        />
        <img
          className="w-[600px] h-[220px] mt-4 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
          src="https://img.freepik.com/free-photo/html-programming-advanced-technology-web-concept_53876-124133.jpg"
          alt="skills"
        />
      </div> */}

      {/* Web Development Image */}
   
    </div>
  );
};

export default Skills;
