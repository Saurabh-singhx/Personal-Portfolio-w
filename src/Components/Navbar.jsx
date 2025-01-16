import React, { useState } from "react";
import List from "./image/list.png";
import ShinyText from "./ShinyText";

function Navbar({ setCursorColor }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      <nav className="flex justify-between px-8 h-20 w-auto items-center Navbar">
        {/* Logo Section */}
        <div className="flex w-1/3 items-center Namediv justify-between">
          <ShinyText
            onMouseEnter={() => setCursorColor("bg-teal-400")}
            onMouseLeave={() => setCursorColor("bg-blue-500")}
            text="Saurabh Kumar"
            disabled={false}
            speed={3}
            className="text-4xl font-semibold font-mono Namee"
          />
          <img
            src={List}
            alt="Menu"
            className="w-8 h-8 Menu justify-self-center cursor-pointer"
            onClick={toggleMenu}
          />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-8 justify-evenly font-semibold text-2xl text-slate-900 Sections">
          {/* About Link */}
          <div
            onMouseEnter={() => setCursorColor("bg-green-500")}
            onMouseLeave={() => setCursorColor("bg-blue-500")}
            className="flex flex-col justify-evenly h-10 group"
          >
            <a href="#About" className="group-hover:text-slate-600 transition-all">
              About
            </a>
            <div className="h-1 bg-red-400 w-0 group-hover:w-full transition-all delay-75 rounded-full"></div>
          </div>

          {/* Experience Link */}
          <div
            onMouseEnter={() => setCursorColor("bg-purple-500")}
            onMouseLeave={() => setCursorColor("bg-blue-500")}
            className="flex flex-col justify-evenly h-10 group"
          >
            <a href="#Experience" className="group-hover:text-slate-600 transition-all">
              Experience
            </a>
            <div className="h-1 bg-red-400 w-0 group-hover:w-full transition-all delay-75 rounded-full"></div>
          </div>

          {/* Project Link */}
          <div
            onMouseEnter={() => setCursorColor("bg-orange-500")}
            onMouseLeave={() => setCursorColor("bg-blue-500")}
            className="flex flex-col justify-evenly h-10 group"
          >
            <a href="#Project" className="group-hover:text-slate-600 transition-all">
              Project
            </a>
            <div className="h-1 bg-red-400 w-0 group-hover:w-full transition-all delay-75 rounded-full"></div>
          </div>

          {/* Contact Link */}
          <div
            onMouseEnter={() => setCursorColor("bg-teal-500")}
            onMouseLeave={() => setCursorColor("bg-blue-500")}
            className="flex flex-col justify-evenly h-10 group"
          >
            <a href="#Contact" className="group-hover:text-slate-600 transition-all">
              Contact
            </a>
            <div className="h-1 bg-red-400 w-0 group-hover:w-full transition-all delay-75 rounded-full"></div>
          </div>
        </div>
      </nav>

      {/* Sliding Menu */}
      <div
        className={`fixed top-0 right-0 h-[50%] w-64 bg-gray-100 shadow-lg transform transition-transform duration-300 z-10 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4 text-xl font-bold"
          onClick={toggleMenu}
        >
          ×
        </button>
        <div className="flex flex-col gap-8 justify-evenly font-semibold text-2xl text-slate-900 mt-16 px-8">
          <a href="#About" className="hover:text-slate-600 transition-all">
            About
          </a>
          <a href="#Experience" className="hover:text-slate-600 transition-all">
            Experience
          </a>
          <a href="#Project" className="hover:text-slate-600 transition-all">
            Project
          </a>
          <a href="#Contact" className="hover:text-slate-600 transition-all">
            Contact
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
