import React from 'react'
import checkpic from './image/check.png'
function Experience({ setCursorColor }) {
    return (
        <div id="Experience" className='h-screen flex flex-col lg:gap-28 px-10 lg:h-screen sm:gap-2'>
            <div className='flex flex-col w-full items-center h-24 py-6 justify-between lg:mt-0 sm:mt-24'>
                <p className='lg:text-base sm:text-3xl'>Explore My</p>
                <h2 className='font-bold lg:text-4xl sm:text-7xl'>Experience</h2>
            </div>
            <div className='flex gap-20 items-center justify-center lg:flex-row sm:flex-col lg:h-auto sm:h-screen lg:px-0 sm:px-20'>
                <div 
                    onMouseEnter={() => setCursorColor("bg-red-400")}
                    onMouseLeave={() => setCursorColor("bg-blue-500")}
                    className='lg:w-2/5 lg:h-96 border-4 rounded-3xl flex flex-col lg:py-4 lg:px-2 shadow-inner shadow-slate-500 sm:w-full lg:text-base sm:text-3xl sm:h-1/3 sm:px-10 sm:items-center sm:justify-evenly sm:py-10'>
                    <h3 className='w-full flex justify-center lg:text-xl lg:font-semibold'>Frontend Development</h3>
                    <div className='h-full flex gap-16'>
                        <div className='flex flex-col justify-evenly h-full w-1/2'>
                            <div className='flex px-8 gap-4'>
                                <div className='py-1'>
                                    <img src={checkpic} alt="" className='lg:w-4 lg:h-4 sm:w-8 sm:h-8'/>
                                </div>
                                <div>
                                    <h3 className='lg:font-medium lg:text-sm sm:text-2xl sm:font-semibold'>HTML</h3>
                                    <p className='text-sm font-light'>Experienced</p>
                                </div>
                            </div>
                            <div className='flex px-8 gap-4'>
                                <div className='py-1'>
                                    <img src={checkpic} alt="" className='lg:w-4 lg:h-4 sm:w-8 sm:h-8'/>
                                </div>
                                <div>
                                    <h3 className='lg:font-medium lg:text-sm sm:text-2xl sm:font-semibold'>CSS</h3>
                                    <p className='text-sm font-light'>Experienced</p>
                                </div>
                            </div>
                            <div className='flex px-8 gap-4'>
                                <div className='py-1'>
                                    <img src={checkpic} alt="" className='lg:w-4 lg:h-4 sm:w-8 sm:h-8'/>
                                </div>
                                <div>
                                    <h3 className='lg:font-medium lg:text-sm sm:text-2xl sm:font-semibold'>JavaScript</h3>
                                    <p className='text-sm font-light'>Basic</p>
                                </div>
                            </div>
                            
                        </div>
                        <div className='flex flex-col justify-evenly  h-full w-1/2'>
                            <div className='flex px-8 gap-4'>
                                <div className='py-1'>
                                    <img src={checkpic} alt="" className='lg:w-4 lg:h-4 sm:w-8 sm:h-8'/>
                                </div>
                                <div>
                                    <h3 className='lg:font-medium lg:text-sm sm:text-2xl sm:font-semibold'>React</h3>
                                    <p className='text-sm font-light'>Basic</p>
                                </div>
                            </div>
                            <div className='flex px-8 gap-4'>
                                <div className='py-1'>
                                    <img src={checkpic} alt="" className='lg:w-4 lg:h-4 sm:w-8 sm:h-8'/>
                                </div>
                                <div>
                                    <h3 className='lg:font-medium lg:text-sm sm:text-2xl sm:font-semibold'>Tailwind CSS</h3>
                                    <p className='text-sm font-light'>intermediate</p>
                                </div>
                            </div>
                            <div className='flex px-8 gap-4'>
                                <div className='py-1'>
                                    <img src={checkpic} alt="" className='lg:w-4 lg:h-4 sm:w-8 sm:h-8'/>
                                </div>
                                <div>
                                    <h3 className='lg:font-medium lg:text-sm sm:text-2xl sm:font-semibold'>C++</h3>
                                    <p className='text-sm font-light'>intermediate</p>
                                </div>
                            </div>
                            
                        </div>
                        
                        
                    </div>
                </div>
                <div 
                    onMouseEnter={() => setCursorColor("bg-green-400")}
                    onMouseLeave={() => setCursorColor("bg-blue-500")}
                    className='lg:w-2/5 lg:h-96 border-4 rounded-3xl flex flex-col lg:py-4 lg:px-2 shadow-inner shadow-slate-500 sm:w-full lg:text-base sm:text-3xl sm:h-1/3 sm:px-10 sm:items-center sm:justify-evenly sm:py-10'>
                    <h3 className='w-full flex justify-center lg:text-xl lg:font-semibold'>Backend Development</h3>
                    <div className='h-full flex lg:gap-6 sm:gap-16 w-full lg:px-20 sm:px-14'>
                        <div className='flex flex-col mt-14  h-full w-1/2 gap-12'>
                            <div className='flex px-8 gap-4 p-2'>
                                <div className='py-1 '>
                                    <img src={checkpic} alt="" className='lg:w-4 lg:h-4 sm:w-8 sm:h-8 '/>
                                </div>
                                <div>
                                    <h3 className='lg:font-medium lg:text-sm sm:text-2xl sm:font-semibold'>Express JS</h3>
                                    <p className='text-sm font-light'>Basic</p>
                                </div>
                            </div>
                            <div className='flex px-8 gap-4'>
                                <div className='py-1'>
                                    <img src={checkpic} alt="" className='lg:w-4 lg:h-4 sm:w-8 sm:h-8'/>
                                </div>
                                <div>
                                    <h3 className='lg:font-medium lg:text-sm sm:text-2xl sm:font-semibold'>Git</h3>
                                    <p className='text-sm font-light'>Basic</p>
                                </div>
                            </div>
                            {/* <div className='flex px-8 gap-4'>
                                <div className='py-1'>
                                    <img src={checkpic} alt="" className='w-4 h-4'/>
                                </div>
                                <div>
                                    <h3 className='font-medium text-sm'>JavaScript</h3>
                                    <p className='text-sm font-light'>Basic</p>
                                </div>
                            </div> */}
                            
                        </div>
                        <div className='flex flex-col mt-14  h-full w-1/2 gap-12'>
                            <div className='flex px-8 gap-4'>
                                <div className='py-1'>
                                    <img src={checkpic} alt="" className='lg:w-4 lg:h-4 sm:w-8 sm:h-8'/>
                                </div>
                                <div>
                                    <h3 className='lg:font-medium lg:text-sm sm:text-2xl sm:font-semibold'>Node JS</h3>
                                    <p className='text-sm font-light'>Basic</p>
                                </div>
                            </div>
                            <div className='flex px-8 gap-4'>
                                <div className='py-1'>
                                    <img src={checkpic} alt="" className='lg:w-4 lg:h-4 sm:w-8 sm:h-8 '/>
                                </div>
                                <div>
                                    <h3 className='lg:font-medium lg:text-sm sm:text-2xl sm:font-semibold'>PostgreSQL</h3>
                                    <p className='text-sm font-light'>Basic</p>
                                </div>
                            </div>
                            {/* <div className='flex px-8 gap-4'>
                                <div className='py-1'>
                                    <img src={checkpic} alt="" className='w-4 h-4'/>
                                </div>
                                <div>
                                    <h3 className='font-medium text-sm'>C++</h3>
                                    <p className='text-sm font-light'>intermediate</p>
                                </div>
                            </div> */}
                            
                        </div>
                        
                        
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Experience
