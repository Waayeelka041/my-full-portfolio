import React from "react";

const Navbar = () => {
  return (
    <div className="bg-white backdrop-blur-md bg-opacity-60 shadow   flex justify-between fixed z-10 w-full px-[70px] py-8 items-center">
      <h1 className="text-4xl font-bold">Anas Waayeel</h1>
      <ul className="flex gap-4 text-2xl px-4 focus:border-b-2 border-blue-700">
        <li className="hover:border-b-2 border-blue-700"><a href="#">Home</a></li>
        <li className="hover:border-b-2 border-blue-700"><a href="/about">About</a></li>
        <li className="hover:border-b-2 border-blue-700"><a href="#">Skills</a></li>
        <li className="hover:border-b-2 border-blue-700"><a href="#">Projects</a></li>
        <li className="hover:border-b-2 border-blue-700"><a href="#">Contacts</a></li>
      </ul>
    </div>
  );
};

export default Navbar;
