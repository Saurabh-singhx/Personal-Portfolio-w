import React, { useState, useEffect } from 'react';
import pr1 from './image/project 1.jpeg';
import pr2 from './image/project 2.jpeg';
import pr3 from './image/project 3.jpeg';
import { motion } from "framer-motion";
import Magnet from './Magnet';

function Projectsection({ setCursorColor }) {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [scrollDirection, setScrollDirection] = useState("None");

    const handleScroll = () => {
        const currentScrollPosition = window.scrollY;

        if (currentScrollPosition > scrollPosition) {
            setScrollDirection("Down");
        } else if (currentScrollPosition < scrollPosition) {
            setScrollDirection("Up");
        } else {
            setScrollDirection("None");
        }

        setScrollPosition(currentScrollPosition);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrollPosition]);

    return (
        <div id="Project" className='flex flex-col gap-8 w-full Project'>
            <div className='flex flex-col w-full items-center h-24 py-6 justify-between'>
                <p>Browse My Recent</p>
                <h2 className='font-bold text-5xl'>Project</h2>
            </div>

            <div className='w-full p-6 flex justify-evenly items-center lg:flex-row  h-screen MainPro'>
                <motion.div
                    initial={{ x: "-10vw" }}
                    animate={scrollPosition >= 2000 ? { x: 0 } : { x: "-10vw" }}
                    transition={{ type: "spring", stiffness: 35, damping: 15 }}
                    className='gap-2 p-3 lg:w-80 lg:h-96 border-2 border-slate-900 rounded-3xl flex flex-col'>
                    <div className='lg:h-auto '>
                        <img
                            onMouseEnter={() => setCursorColor("bg-tranparent")}
                            onMouseLeave={() => setCursorColor("bg-blue-500")}
                            src={pr1} alt="project-pic" className='w-full lg:h-56 rounded-3xl sm:h-full' />
                    </div>
                    <h3 className='flex justify-center font-semibold text-lg'>Task Management APP</h3>
                    <div className='flex gap-3 w-full justify-between p-6'>
                        <Magnet disabled={false} padding={10}>
                            <button
                                onClick={() => {
                                    window.location.href = "https://github.com/Saurabh-singhx/Employee-Task-Management";
                                }}
                                onMouseEnter={() => setCursorColor("bg-red-400")}
                                onMouseLeave={() => setCursorColor("bg-blue-500")}
                                className='hover:bg-black hover:text-white transition duration-300 ease-in-out lg:py-2 lg:px-4 rounded-3xl border border-zinc-800 font-semibold w-28 sm:py-4 lg:w-auto sm:w-1/2 lg:text-base sm:text-2xl'>Git Hub</button>
                        </Magnet>
                        <Magnet disabled={false} padding={10}>
                            <button
                                onClick={() => {
                                    window.location.href = "https://saurabh-singhx.github.io/Employee-Task-Management/";
                                }}
                                onMouseEnter={() => setCursorColor("bg-green-400")}
                                onMouseLeave={() => setCursorColor("bg-blue-500")}
                                className='hover:bg-black hover:text-white transition duration-300 ease-in-out lg:py-2 lg:px-4 rounded-3xl border border-zinc-800 font-semibold w-28 sm:py-4 lg:w-auto sm:w-1/2 lg:text-base sm:text-2xl'>Live Demo</button>
                        </Magnet>
                    </div>
                </motion.div>

                <div className='gap-2 p-3 lg:w-80 lg:h-96 border-2 border-slate-900 rounded-3xl flex flex-col'>
                    <div className='lg:h-auto sm:h-2/3'>
                        <img
                            onMouseEnter={() => setCursorColor("bg-tranparent")}
                            onMouseLeave={() => setCursorColor("bg-blue-500")}
                            src={pr2} alt="project-pic" className='w-full lg:h-56 rounded-3xl sm:h-full border border-gray-900' />
                    </div>
                    <h3 className='flex justify-center font-semibold text-lg'>Personal Portfolio</h3>
                    <div className='flex gap-3 w-full justify-between p-6'>
                        <Magnet disabled={false} padding={10}>
                            <button
                                onClick={() => {
                                    window.location.href = "https://github.com/Saurabh-singhx/Personal-Portfolio-w";
                                }}
                                onMouseEnter={() => setCursorColor("bg-red-400")}
                                onMouseLeave={() => setCursorColor("bg-blue-500")}
                                className='hover:bg-black hover:text-white transition duration-300 ease-in-out lg:py-2 lg:px-4 rounded-3xl border border-zinc-800 font-semibold w-28 sm:py-4 lg:w-auto sm:w-1/2 lg:text-base sm:text-2xl'>Git Hub</button>
                        </Magnet>
                        <Magnet disabled={false} padding={10}>
                            <button
                                onClick={() => {
                                    window.location.href = "https://saurabh-singhx.github.io/Personal-Portfolio-w/";
                                }}
                                onMouseEnter={() => setCursorColor("bg-green-400")}
                                onMouseLeave={() => setCursorColor("bg-blue-500")}
                                className='hover:bg-black hover:text-white transition duration-300 ease-in-out lg:py-2 lg:px-4 rounded-3xl border border-zinc-800 font-semibold w-28 sm:py-4 lg:w-auto sm:w-1/2 lg:text-base sm:text-2xl'>Live Demo</button>
                        </Magnet>
                    </div>
                </div>

                <motion.div
                    initial={{ x: "10vw" }}
                    animate={scrollPosition >= 2000 ? { x: 0 } : { x: "10vw" }}
                    transition={{ type: "spring", stiffness: 35, damping: 15 }}
                    className='gap-2 p-3 lg:w-80 lg:h-96 border-2 border-slate-900 rounded-3xl flex flex-col sm:h-1/3 sm:w-1/2'>
                    <div className='lg:h-auto sm:h-2/3'>
                        <img
                            onMouseEnter={() => setCursorColor("bg-tranparent")}
                            onMouseLeave={() => setCursorColor("bg-blue-500")}
                            src={pr3} alt="project-pic" className='w-full lg:h-56 rounded-3xl sm:h-full' />
                    </div>
                    <h3 className='flex justify-center font-semibold text-lg'>Tic Tac Toe</h3>
                    <div className='flex gap-3 w-full justify-between p-6'>
                        <Magnet disabled={false} padding={10}>
                            <button
                                onClick={() => {
                                    window.location.href = "https://github.com/Saurabh-singhx/Tictactoe-Game";
                                }}
                                onMouseEnter={() => setCursorColor("bg-red-400")}
                                onMouseLeave={() => setCursorColor("bg-blue-500")}
                                className='hover:bg-black hover:text-white transition duration-300 ease-in-out lg:py-2 lg:px-4 rounded-3xl border border-zinc-800 font-semibold w-28 sm:py-4 lg:w-auto sm:w-1/2 lg:text-base sm:text-2xl'>Git Hub</button>
                        </Magnet>
                        <Magnet disabled={false} padding={10}>
                            <button
                                onClick={() => {
                                    window.location.href = "/";
                                }}
                                onMouseEnter={() => setCursorColor("bg-green-400")}
                                onMouseLeave={() => setCursorColor("bg-blue-500")}
                                className='hover:bg-black hover:text-white transition duration-300 ease-in-out lg:py-2 lg:px-4 rounded-3xl border border-zinc-800 font-semibold w-28 sm:py-4 lg:w-auto sm:w-1/2 lg:text-base sm:text-2xl'>Live Demo</button>
                        </Magnet>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Projectsection;
