import React from 'react'
import zoro from './image/zoro.jpeg'

function Aboutsection({ setCursorColor }) {
  return (
    <section id="About" className='flex flex-col h-screen p-10 '>
      <div className='w-full flex justify-between flex-col items-center lg:text-base sm:text-3xl lg:gap-1 sm:gap-5'>
        <p>Get To Know More</p>
        <h2 className='font-bold lg:text-4xl sm:text-5xl'>About Me</h2>
      </div>
      {/* Main section */}
      <div className='flex h-screen items-center lg:justify-center lg:gap-16 lg:flex-row sm:flex-col sm:justify-evenly lg:w-auto sm:w-full'>
        {/* <div className=' rounded-full'> */}
        <img src={zoro} alt="Zoro" className='lg:h-96 lg:w-96 rounded-3xl filter grayscale shadow-zinc-600 shadow-md sm:h- sm:w-2/3' />
        {/* </div> */}
        <div className='flex lg:w-2/5 flex-col gap-4 sm:items-center sm:w-full lg:h-auto sm:h-1/2'>
          <div className='flex gap-10 lg:justify-between p-4 lg:flex-row sm:flex-col w-full sm:justify-evenly sm:items-center'>
            <div
              onMouseEnter={() => setCursorColor("bg-red-500")}
              onMouseLeave={() => setCursorColor("bg-blue-500")}
              className='border py-6 px-8 rounded-2xl border-gray-800 lg:w-1/2 shadow-slate-500 shadow-inner sm:w-2/3 lg:text-base sm:text-2xl lg:font-medium sm:font-semibold' >
              <h3 className='w-full flex justify-center font-semibold text-lg'>Experience</h3>
              <p className='w-full flex justify-center'>1+ Years</p>
              <p className='w-full flex justify-center'>Frontend Devlopment</p>
            </div>
            <div
              onMouseEnter={() => setCursorColor("bg-green-500")}
              onMouseLeave={() => setCursorColor("bg-blue-500")}
              className='border py-6 px-8 rounded-2xl border-gray-800 lg:w-1/2 shadow-slate-500 shadow-inner sm:w-2/3 lg:text-base sm:text-2xl lg:font-medium sm:font-semibold'>
              <h3 className='w-full flex justify-center font-semibold text-lg'>Education</h3>
              <p className='w-full flex justify-center'>BCA Bachlers Degree</p>
              <p className='w-full flex justify-center'>MCA Masters Degree</p>
            </div>
          </div>
          <div className='overflow-hidden px-3 lg:w-auto sm:w-2/3 lg:text-base sm:text-3xl '>
            <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aperiam illo doloribus, maiores similique ex quidem sapiente vero repellendus? At in, recusandae voluptatum hic excepturi delectus deserunt, debitis alias a voluptatibus quisquam! Deleniti pariatur velit vel, quas debitis ullam eveniet.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Aboutsection
