import React from 'react'
import pr1 from './image/project 1.jpeg'
import pr2 from './image/project 2.jpeg'
import pr3 from './image/project 3.jpeg'
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function Projectsection({ setCursorColor }) {
        const [scrollPosition, setScrollPosition] = useState(0);
        const [scrollDirection, setScrollDirection] = useState("None");
      
        const handleScroll = () => {
          const currentScrollPosition = window.scrollY;
      
          // Determine the scroll direction
          if (currentScrollPosition > scrollPosition) {
            setScrollDirection("Down");
          } else if (currentScrollPosition < scrollPosition) {
            setScrollDirection("Up");
          } else {
            setScrollDirection("None");
          }
      
          // Update the scroll position
          setScrollPosition(currentScrollPosition);
        };
      
        useEffect(() => {
          window.addEventListener("scroll", handleScroll);
          return () => {
            window.removeEventListener("scroll", handleScroll); // Cleanup on unmount
          };
        }, [scrollPosition]); // Re-run when scrollPosition changes
      

    return (
        <div id="Project" className='flex flex-col h-screen gap-8 w-full'>
            <div className='flex flex-col w-full items-center h-24 py-6 justify-between'>
                <p>Browse My Recent</p>
                <h2 className='font-bold text-5xl'>Project</h2>
            </div>
            <div

                className='w-full p-6 flex justify-evenly items-center lg:flex-row sm:flex-col h-screen sm:gap-8'>
                <motion.div 
                    initial={{ x: "-10vw" }} // Start off-screen to the right
                    animate={scrollPosition>=2000 ? { x: 0 } : { x: "-10vw" }} // Animate to original position or back off-screen
                    
                    transition={{ type: "spring", stiffness:35, damping:15 }} // Smooth spring transition

                    className='gap-2 p-3 lg:w-80 lg:h-96 border-2 border-slate-900 rounded-3xl flex flex-col sm:h-1/3 sm:w-1/2'>
                    <div className='lg:h-auto sm:h-2/3'>
                        <img 
                            onMouseEnter={() => setCursorColor("bg-tranparent")}
                            onMouseLeave={() => setCursorColor("bg-blue-500")}
                        src={pr1} alt="project-pic" className='w-full lg:h-56 rounded-3xl sm:h-full' />
                    </div>
                    <h3 className='flex justify-center font-semibold text-lg'>Project One</h3>
                    <div className='flex gap-3 w-full justify-between p-6'>
                        <button 
                            onMouseEnter={() => setCursorColor("bg-red-400")}
                            onMouseLeave={() => setCursorColor("bg-blue-500")}
                        className='hover:bg-black hover:text-white transition duration-300 ease-in-out lg:py-2 lg:px-4 rounded-3xl border border-zinc-800 font-semibold w-28 sm:py-4 lg:w-auto sm:w-1/2 lg:text-base sm:text-2xl'>Git Hub</button>
                        <button 
                            onMouseEnter={() => setCursorColor("bg-green-400")}
                            onMouseLeave={() => setCursorColor("bg-blue-500")}
                            className='hover:bg-black hover:text-white transition duration-300 ease-in-out lg:py-2 lg:px-4 rounded-3xl border border-zinc-800 font-semibold w-28 sm:py-4 lg:w-auto sm:w-1/2 lg:text-base sm:text-2xl'>Live Demo</button>

                    </div>
                </motion.div>
                <div className='gap-2 p-3 lg:w-80 lg:h-96 border-2 border-slate-900 rounded-3xl flex flex-col sm:h-1/3 sm:w-1/2'>
                    <div className='lg:h-auto sm:h-2/3'>
                        <img 
                            onMouseEnter={() => setCursorColor("bg-tranparent")}
                            onMouseLeave={() => setCursorColor("bg-blue-500")}
                        src={pr2} alt="project-pic" className='w-full lg:h-56 rounded-3xl sm:h-full border border-gray-900' />
                    </div>
                    <h3 className='flex justify-center font-semibold text-lg'>Project Two</h3>
                    <div className='flex gap-3 w-full justify-between p-6'>
                        <button 
                            onMouseEnter={() => setCursorColor("bg-red-400")}
                            onMouseLeave={() => setCursorColor("bg-blue-500")}
                            className='hover:bg-black hover:text-white transition duration-300 ease-in-out lg:py-2 lg:px-4 rounded-3xl border border-zinc-800 font-semibold w-28 sm:py-4 lg:w-auto sm:w-1/2 lg:text-base sm:text-2xl'>Git Hub</button>
                        <button 
                            onMouseEnter={() => setCursorColor("bg-green-400")}
                            onMouseLeave={() => setCursorColor("bg-blue-500")}
                            className='hover:bg-black hover:text-white transition duration-300 ease-in-out lg:py-2 lg:px-4 rounded-3xl border border-zinc-800 font-semibold w-28 sm:py-4 lg:w-auto sm:w-1/2 lg:text-base sm:text-2xl'>Live Demo</button>

                    </div>
                </div>
                <motion.div 
                    initial={{ x: "10vw" }} // Start off-screen to the right
                    animate={scrollPosition>=2000 ? { x: 0 } : { x: "10vw" }} // Animate to original position or back off-screen
                    
                    transition={{ type: "spring", stiffness:35, damping:15 }} // Smooth spring transition

                    className='gap-2 p-3 lg:w-80 lg:h-96 border-2 border-slate-900 rounded-3xl flex flex-col sm:h-1/3 sm:w-1/2'>
                    <div className='lg:h-auto sm:h-2/3'>
                        <img 
                            onMouseEnter={() => setCursorColor("bg-tranparent")}
                            onMouseLeave={() => setCursorColor("bg-blue-500")}
                        src={pr3} alt="project-pic" className='w-full lg:h-56 rounded-3xl sm:h-full' />
                    </div>
                    <h3 className='flex justify-center font-semibold text-lg'>Project Three</h3>
                    <div className='flex gap-3 w-full justify-between p-6'>
                        <button 
                            onMouseEnter={() => setCursorColor("bg-red-400")}
                            onMouseLeave={() => setCursorColor("bg-blue-500")}
                            className='hover:bg-black hover:text-white transition duration-300 ease-in-out lg:py-2 lg:px-4 rounded-3xl border border-zinc-800 font-semibold w-28 sm:py-4 lg:w-auto sm:w-1/2 lg:text-base sm:text-2xl'>Git Hub</button>
                        <button 
                                onMouseEnter={() => setCursorColor("bg-green-400")}
                                onMouseLeave={() => setCursorColor("bg-blue-500")}
                                className='hover:bg-black hover:text-white transition duration-300 ease-in-out lg:py-2 lg:px-4 rounded-3xl border border-zinc-800 font-semibold w-28 sm:py-4 lg:w-auto sm:w-1/2 lg:text-base sm:text-2xl'>Live Demo</button>

                    </div>
                </motion.div>

            </div>
        </div>
    )
}

export default Projectsection
