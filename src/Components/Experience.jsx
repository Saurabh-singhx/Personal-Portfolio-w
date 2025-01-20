import React from 'react';
import checkpic from './image/check.png';

function Experience({ setCursorColor }) {
    return (
        <div id="Experience" className="h-screen flex flex-col lg:gap-28 px-10 lg:h-screen w-full">
            {/* Header Section */}
            <div className="flex flex-col w-full items-center h-24 py-6 justify-between lg:mt-0">
                <p className="lg:text-base">Explore My</p>
                <h2 className="font-bold lg:text-4xl">Experience</h2>
            </div>

            {/* Content Section */}
            <div className="flex gap-20 items-center justify-center lg:flex-row lg:h-auto lg:px-0 mainExp w-full">

                {/* Frontend Development Card */}
                <div 
                    onMouseEnter={() => setCursorColor("bg-red-400")}
                    onMouseLeave={() => setCursorColor("bg-blue-500")}
                    className="lg:w-2/5 lg:h-96 border-4 rounded-3xl flex flex-col lg:py-4 lg:px-2 shadow-inner shadow-slate-500 lg:text-base FirstBox w-full"
                >
                    <h3 className="w-full flex justify-center lg:text-xl lg:font-semibold Headline">Frontend Development</h3>
                    <div className="h-full flex gap-16 Innerbox">

                        {/* Left Column */}
                        <div className="flex flex-col justify-evenly h-full w-1/2">
                            {["HTML", "CSS", "JavaScript"].map((skill, index) => (
                                <div key={index} className="flex px-8 gap-4">
                                    <div className="py-1 shrink-0 w-4 h-4">
                                        <img src={checkpic} alt="" className="lg:w-4 lg:h-4" />
                                    </div>
                                    <div>
                                        <h3 className="lg:font-medium lg:text-sm">{skill}</h3>
                                        <p className="text-sm font-light">
                                            {skill === "JavaScript" ? "Basic" : "Experienced"}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Right Column */}
                        <div className="flex flex-col justify-evenly h-full w-1/2">
                            {["React", "Tailwind CSS", "C++"].map((skill, index) => (
                                <div key={index} className="flex px-8 gap-4">
                                    <div className="py-1 shrink-0 w-4 h-4">
                                        <img src={checkpic} alt="" className="lg:w-4 lg:h-4" />
                                    </div>
                                    <div>
                                        <h3 className="lg:font-medium lg:text-sm">{skill}</h3>
                                        <p className="text-sm font-light">
                                            {skill === "React" ? "Basic" : "Intermediate"}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

                {/* Backend Development Card */}
                <div 
                    onMouseEnter={() => setCursorColor("bg-green-400")}
                    onMouseLeave={() => setCursorColor("bg-blue-500")}
                    className="lg:w-2/5 lg:h-96 border-4 rounded-3xl flex flex-col lg:py-4 lg:px-2 shadow-inner shadow-slate-500 lg:text-base FirstBox"
                >
                    <h3 className="w-full flex justify-center lg:text-xl lg:font-semibold Headline">Backend Development</h3>
                    <div className="h-full flex lg:gap-6 w-full lg:px-20">

                        {/* Left Column */}
                        <div className="flex flex-col mt-14 h-full w-1/2 gap-12 Leftcol">
                            {["Express JS", "Git"].map((skill, index) => (
                                <div key={index} className="flex px-8 gap-4 p-2">
                                    <div className="py-1 shrink-0 w-4 h-4">
                                        <img src={checkpic} alt="" className="lg:w-4 lg:h-4" />
                                    </div>
                                    <div>
                                        <h3 className="lg:font-medium lg:text-sm">{skill}</h3>
                                        <p className="text-sm font-light">Basic</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Right Column */}
                        <div className="flex flex-col mt-14 h-full w-1/2 gap-12 Leftcol">
                            {["Node JS", "PostgreSQL"].map((skill, index) => (
                                <div key={index} className="flex px-8 gap-4 p-2">
                                    <div className="py-1 shrink-0 w-4 h-4">
                                        <img src={checkpic} alt="" className="lg:w-4 lg:h-4" />
                                    </div>
                                    <div>
                                        <h3 className="lg:font-medium lg:text-sm">{skill}</h3>
                                        <p className="text-sm font-light">Basic</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default Experience;
