import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Pic from "./image/profpic.jpg";
import Linkdin from "./image/Linkdin.png";
import Github from "./image/github.png";
import Magnet from "./Magnet";

function Herosection({ setCursorColor, setCursorFilter }) {
    const [isFrontend, setIsFrontend] = useState(true);

    // Toggle between "Frontend Developer" and "Backend Developer"
    useEffect(() => {
        const interval = setInterval(() => {
            setIsFrontend((prev) => !prev);
        }, 4000); // Change text every 4 seconds (matches animation duration)
        return () => clearInterval(interval);
    }, []);
    const handleB2 = () => {
        window.open("mailto:saurabh4442kumar@gmail.com")
    }
    return (
        <div className="flex w-full lg:justify-center items-center gap-20 h-full p-4 sm:flex-col lg:flex-row">
            {/* Profile Picture */}
            <div className="lg:w-80 lg:h-80 bg-black rounded-full overflow-hidden border border-slate-700 shadow-red-300 sm:w-1/2 sm:h-1/4 sm:mt-60 lg:mt-0">
                <img

                    onMouseEnter={() => {
                        setCursorColor("bg-white");
                        setCursorFilter("mix-blend-exclusion");
                    }}
                    onMouseLeave={() => {
                        setCursorColor("bg-blue-400");
                        setCursorFilter("mix-blend-screen");
                    }}
                    src={Pic}
                    alt="profile"
                    className="lg:w-96 lg:h-96 lg:-translate-y-8 filter grayscale transition-all delay-200 sm:w-full sm:-translate-y-16"
                />
            </div>

            {/* Text Section */}
            <div className="flex flex-col lg:gap-8 sm:2/3 lg:w-auto sm:items-center sm:gap-16 sm:w-full">
                <div className="flex flex-col ">
                    <p className="font-medium w-36 items-center justify-center flex sm:text-4xl lg:text-lg">
                        Hello I'm
                    </p>
                    <h2 className="font-semibold sm:text-6xl lg:text-4xl">Saurabh Kumar</h2>
                </div>

                {/* Typewriter Effect */}
                <div className="sm:w-96 lg:w-64">
                    <motion.div
                        key={isFrontend ? "frontend" : "backend"} // Unique key to trigger animation on text change
                        animate={{
                            width: ["0%", "100%", "100%", "0%"], // Keyframes for typewriter effect
                        }}
                        transition={{
                            duration: 4, // Total animation time
                            ease: "easeInOut",
                            repeat: Infinity, // Infinite loop
                            repeatType: "loop", // Smooth repeat
                        }}
                        style={{
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                            borderRight: "2px solid black", // Cursor effect
                        }}
                        className="font-mono font-extralight sm:text-4xl lg:text-2xl"
                    >
                        {isFrontend ? "Frontend Developer" : "Backend Developer"}
                    </motion.div>
                </div>

                {/* Buttons+Social */}
                <div className="flex gap-3 flex-col w-full">

                    {/* 2 += Buttons */}
                    <div className="flex lg:gap-4 sm:w-full lg:w-80 sm:gap-12 justify-center">
                        <Magnet padding={5}>
                            <button
                                onMouseEnter={() => {
                                    setCursorColor("bg-red-400");
                                    setCursorFilter("mix-blend-exclusion");
                                }}
                                onMouseLeave={() => {
                                    setCursorColor("bg-blue-400");
                                    setCursorFilter("mix-blend-screen");
                                }}
                                className="bg-transparent text-black font-medium border lg:rounded-3xl lg:px-2 lg:h-10 hover:bg-black hover:text-white duration-200 transition-all sm:h-28 lg:w-auto sm:w-1/3 sm:rounded-full sm:text-2xl lg:text-base"
                                aria-label="Download CV"
                            >
                                Download CV
                            </button>
                        </Magnet>
                        <Magnet padding={5}>
                            <button
                                onClick={handleB2}
                                onMouseEnter={() => {
                                    setCursorColor("bg-green-400");
                                    setCursorFilter("mix-blend-exclusion");
                                }}
                                onMouseLeave={() => {
                                    setCursorColor("bg-blue-400");
                                    setCursorFilter("mix-blend-screen");
                                }}
                                className="bg-black text-white font-medium border lg:rounded-3xl lg:px-2 lg:h-10 hover:text-black hover:bg-white duration-200 transition-all border-black sm:h-28 lg:w-auto sm:w-1/3 sm:rounded-full sm:text-2xl lg:text-base"
                                aria-label="Contact Info"
                            >
                                Contact Info
                            </button>
                        </Magnet>
                    </div>

                    {/* Social Media Links */}
                    <div className="flex w-full sm:gap-14 justify-center items-center sm:mt-14 lg:gap-3 lg:mt-0">
                        <div className="lg:h-8 lg:w-8 overflow-hidden ">
                            <a
                                href="https://www.linkedin.com/in/saurabh-kumar0"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn Profile"
                            >
                                <img src={Linkdin} alt="LinkedIn" className="sm:h-24 lg:h-auto" />
                            </a>
                        </div>
                        <a
                            href="https://github.com/Saurabh-singhx"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub Profile"
                        >
                            <img src={Github} alt="GitHub" className="sm:h-24 lg:h-7 lg:w-7" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Herosection;
