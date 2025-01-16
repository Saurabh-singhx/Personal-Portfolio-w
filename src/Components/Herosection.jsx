import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Pic from "./image/profpic.jpg";
import Linkdin from "./image/Linkdin.png";
import Github from "./image/github.png";
import Magnet from "./Magnet";
import CV from "./DownloadCV/SaurabhResume.pdf";

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
        <div className="flex w-full lg:justify-center items-center gap-20 h-full p-4 sm:flex-col lg:flex-row Hero">
            {/* Profile Picture */}
            <div className="lg:w-80 lg:h-80 overflow-hidden shadow-red-300 sm:w-1/2 sm:h-1/4 lg:mt-0 shrink-0 imagediv">
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
                    className="w-full h-full lg:-translate-y-0 filter grayscale transition-all delay-200 Mypic rounded-full shrink-0"
                />
            </div>

            {/* Text Section */}
            <div className="flex flex-col lg:gap-6 lg:w-auto Textsection items-center">
                <div className="flex flex-col ">
                    <p className="font-medium w-36 items-center flex lg:text-lg">
                        Hello I'm
                    </p>
                    <h2 className="font-semibold lg:text-4xl">Saurabh Kumar</h2>
                </div>

                {/* Typewriter Effect */}
                <div className="w-[75%] divmoving">
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
                        className="font-mono font-extralight lg:text-2xl"
                    >
                        {isFrontend ? "Frontend Developer" : "Backend Developer"}
                    </motion.div>
                </div>

                {/* Buttons+Social */}
                <div className="flex gap-5 flex-col w-full">

                    {/* 2 += Buttons */}
                    <div className="flex lg:gap-10 lg:w-80 justify-center Magnetbtn">
                        <Magnet padding={5}>
                            <a href={CV} download="SaurabhResume.pdf">
                                <button

                                    onMouseEnter={() => {
                                        setCursorColor("bg-red-400");
                                        setCursorFilter("mix-blend-exclusion");
                                    }}
                                    onMouseLeave={() => {
                                        setCursorColor("bg-blue-400");
                                        setCursorFilter("mix-blend-screen");
                                    }}
                                    className=" Btn1 bg-transparent text-black font-medium border lg:rounded-3xl lg:px-2 lg:h-10 hover:bg-black hover:text-white duration-200 transition-all lg:w-auto lg:text-base"
                                    aria-label="Download CV"
                                >
                                    Download CV
                                </button>
                            </a>
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
                                className=" Btn2 bg-black text-white font-medium border lg:rounded-3xl lg:px-2 lg:h-10 hover:text-black hover:bg-white duration-200 transition-all border-black lg:w-auto lg:text-base"
                                aria-label="Contact Info"
                            >
                                Contact Info
                            </button>
                        </Magnet>
                    </div>

                    {/* Social Media Links */}
                    <div className="flex w-full justify-center items-center lg:gap-3 lg:mt-0 imagesc">

                        <a
                            href="https://www.linkedin.com/in/saurabh-kumar0"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn Profile"
                        >
                            <img src={Linkdin} alt="LinkedIn" className=" h-12 w-12 Cv" />
                        </a>
                        <a
                            href="https://github.com/Saurabh-singhx"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub Profile"
                        >
                            <img src={Github} alt="GitHub" className=" lg:h-12 lg:w-12 Github" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Herosection;
