import React from 'react'
import msg from './image/email.png'
function Contactinfo({ setCursorColor }) {

    const handleB1= ()=>{
        window.open("https://www.linkedin.com/in/saurabh-kumar0","_blank")
    }
    const handleB2 =()=>{
        window.open("mailto:saurabh4442kumar@gmail.com")
    }
    return (
        <div id="Contact"  className='h-screen flex flex-col w-full p-8'>
            <div className='items-center w-full h-1/2 flex flex-col justify-center lg:gap-6 sm:gap-4'>
                <p className='font-light lg:text-base sm:text-xl'>Get in Touch</p>
                <h2 className='font-bold lg:text-4xl sm:text-5xl'>Contact Me</h2>
                <div className='flex lg:w-1/3 py-4 px-6 rounded-3xl lg:border lg:border-gray-800 lg:justify-between lg:flex-row sm:flex-col lg:gap-0 sm:gap-16 sm:w-2/3 sm:justify-center bg-slate-200'>
                    <button 
                        onClick={handleB2}
                    className='flex lg:gap-2 sm:justify-center sm:gap-3 sm:border-2 sm:border-slate-800 sm:p-4 sm:rounded-full bg-aliceblue'>
                        <div className='rounded-full bg-black lg:w-6 lg:h-6 flex items-center justify-center sm:w-10 sm:h-10'>
                            <img src={msg} alt="..." className='lg:w-4 lg:h-4 invert sm:w-8 sm:h-8'/>
                        </div>
                        <a className='font-semibold lg:text-base sm:text-3xl'>Saurabh4442kumar@gmail.com</a>
                    </button>
                    <button  
                        onClick={handleB1}
                        className='flex lg:gap-2 sm:justify-center sm:gap-3 sm:border-2 sm:border-slate-800 sm:p-4 sm:rounded-full bg-aliceblue'>
                        <div className='rounded-full bg-black lg:w-6 lg:h-6 flex items-center justify-center sm:w-10 sm:h-10'>
                            <img src={msg} alt="..." className='lg:w-4 lg:h-4 invert sm:w-8 sm:h-8'/>
                        </div>
                            <button className='font-semibold lg:text-base sm:text-3xl'>Linkdin</button>
                    </button>
                </div>
            </div>
            <div className='flex flex-col justify-end h-full py-20 items-center gap-8'>

                <div className='w-full flex justify-center gap-8 font-semibold lg:text-lg sm:text-3xl'>
                    <a 
                        onMouseEnter={() => setCursorColor("bg-teal-400")}
                        onMouseLeave={() => setCursorColor("bg-blue-500")}
                    href="#About">About</a>
                    <a 
                        onMouseEnter={() => setCursorColor("bg-green-500")}
                        onMouseLeave={() => setCursorColor("bg-blue-500")}
                    href="#Experience">Experience</a>
                    <a 
                        onMouseEnter={() => setCursorColor("bg-purple-500")}
                        onMouseLeave={() => setCursorColor("bg-blue-500")}
                    href="#Project">Projects</a>
                    <a 
                        onMouseEnter={() => setCursorColor("bg-orange-500")}
                        onMouseLeave={() => setCursorColor("bg-blue-500")}
                    href="#Contact">Contact</a>
                </div>
                <div className='font-light lg:text-sm sm:text-lg'>Copyright © 2024 Saurabh kumar All Rights Reserved</div>
            </div>
        </div>
    )
}

export default Contactinfo
