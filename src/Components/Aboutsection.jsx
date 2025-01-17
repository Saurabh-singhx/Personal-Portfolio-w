import React from 'react'
import zoro from './image/zoro.jpeg'

function Aboutsection({ setCursorColor }) {
  return (
    <section id="About" className='flex flex-col h-screen p-10 '>
      <div className='w-full flex justify-between flex-col items-center lg:text-base lg:gap-1'>
        <p>Get To Know More</p>
        <h2 className='font-bold lg:text-4xl sm:text-5xl'>About Me</h2>
      </div>
      {/* Main section */}
      <div className='flex h-screen items-center lg:justify-center lg:gap-16 lg:flex-row lg:w-auto Mainsec'>
        {/* <div className=' rounded-full'> */}
        <img 
          onMouseEnter={() => setCursorColor("transparent")}
          onMouseLeave={() => setCursorColor("bg-blue-500")}
        src={zoro} alt="Zoro" className='lg:h-96 lg:w-96 rounded-3xl filter grayscale shadow-zinc-600 shadow-md Zoroimg' />
        {/* </div> */}
        <div className='flex lg:w-2/5 flex-col gap-4 lg:h-auto'>
          <div className='flex gap-10 lg:justify-between p-4 lg:flex-row w-full twoBox'>
            <div
              onMouseEnter={() => setCursorColor("bg-red-500")}
              onMouseLeave={() => setCursorColor("bg-blue-500")}
              className='border py-6 px-8 rounded-2xl border-gray-800 lg:w-1/2 shadow-slate-500 shadow-inner lg:text-base lg:font-medium h-32 ' >
              <h3 className='w-full flex justify-center font-semibold text-lg'>Experience</h3>
              <p className='w-full flex justify-center'>1+ Years</p>
              <p className='w-full flex justify-center'>Frontend Devlopment</p>
            </div>
            <div
              onMouseEnter={() => setCursorColor("bg-green-500")}
              onMouseLeave={() => setCursorColor("bg-blue-500")}
              className='border py-6 px-8 rounded-2xl border-gray-800 lg:w-1/2 shadow-slate-500 shadow-inner lg:text-base lg:font-medium h-32'>
              <h3 className='w-full flex justify-center font-semibold text-lg'>Education</h3>
              <p className='w-full flex justify-center'>BCA Bachlers Degree</p>
              {/* <p className='w-full flex justify-center'>MCA Masters Degree</p> */}
            </div>
          </div>
          <div className='overflow-hidden px-3 lg:w-auto lg:text-base'>
            <p className='text-center abouttext'>A budding Web Developer with a strong foundation in React, JavaScript, and Tailwind CSS, I am currently pursuing a BCA at Patliputra University. My focus is on designing and developing responsive, user-friendly web applications that solve real-world problems. With hands-on experience in projects like the Employee Task Management System and Personal Portfolio Website, I strive to create intuitive and efficient digital solutions. Passionate about continuous learning and innovation, I aim to contribute effectively to dynamic and forward-thinking development teams.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Aboutsection
