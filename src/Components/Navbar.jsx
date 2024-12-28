import React from "react";
import List from './image/list.png'
import ShinyText from './ShinyText';

function Navbar({ setCursorColor }) {
  
  return (
    <nav className="flex lg:justify-between lg:px-8 sm:h-40 lg:h-20 lg:w-auto items-center sm:w-full sm:px-6 ">
      {/* Logo Section */}
      <div className="flex sm:w-full sm:h-14 w-1/3 items-center">
        {/* <div
          onMouseEnter={() => setCursorColor("bg-teal-400")}
          onMouseLeave={() => setCursorColor("bg-blue-500")}
          className="flex items-center font-bold lg:text-3xl text-slate-900 w-1/4 sm:justify-center lg:h-10 sm:w-full sm:text-6xl sm:py-10 lg:py-0 lg:justify-start lg:px-10">
          Saurabh Kumar
        </div> */}
        <ShinyText 
          onMouseEnter={() => setCursorColor("bg-teal-400")}
          onMouseLeave={() => setCursorColor("bg-blue-500")}
        text="Saurabh Kumar" disabled={false} speed={3} className='text-4xl font-semibold font-mono' />
        <img src={List} alt="" className="lg:hidden sm:flex w-12 h-full mt-6 justify-self-end"/>
      </div>

      {/* Navigation Links */}
      <div className="flex gap-8 justify-evenly font-semibold text-2xl text-slate-900 w-2/3 sm:hidden lg:flex">
        {/* About Link */}
        <div
          onMouseEnter={() => setCursorColor("bg-green-500")}
          onMouseLeave={() => setCursorColor("bg-blue-500")}
          className="flex flex-col justify-evenly h-10 group"
        >
          <a
            href="#About"
            className="group-hover:text-slate-600 transition-all"
          >
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
          <a
            href="#Experience"
            className="group-hover:text-slate-600 transition-all"
          >
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
          <a
            href="#Project"
            className="group-hover:text-slate-600 transition-all"
          >
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
          <a
            href="#Contact"
            className="group-hover:text-slate-600 transition-all"
          >
            Contact
          </a>
          <div className="h-1 bg-red-400 w-0 group-hover:w-full transition-all delay-75 rounded-full"></div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
