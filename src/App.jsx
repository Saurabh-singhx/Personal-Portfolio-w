
import './App.css'
import Navbar from './Components/Navbar'
import Herosection from './Components/Herosection'
import Aboutsection from './Components/Aboutsection'
import Experience from './Components/Experience'
import Projectsection from './Components/Projectsection'
import Contactinfo from './Components/Contactinfo'
import React, { useState, useEffect } from "react";

function App() {
  const [cursorFilter, setCursorFilter] = useState("mix-blend-screen");
  const [cursorColor, setCursorColor] = useState("bg-blue-500");
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check if the user is on a mobile device
    const checkIfMobile = () => { // Adjust breakpoint as needed
      setIsMobile(window.innerWidth <= 1080);
    };

    // Initial check and resize event listener
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  useEffect(() => {
    if (isMobile) return;
    // Function to update cursor position
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    // Add event listener
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {!isMobile && (
        <div
          className={`fixed top-0 left-0 w-14 h-14 rounded-full pointer-events-none ${cursorFilter} ${cursorColor}`}
          style={{
            transform: `translate(${cursorPosition.x - 28}px, ${
              cursorPosition.y - 28
            }px)`,
          }}
        ></div>
      )}
      

      <div className='flex flex-col h-screen'>
        <Navbar setCursorColor={setCursorColor} setCursorFilter={setCursorFilter}/>
        <Herosection setCursorColor={setCursorColor} setCursorFilter={setCursorFilter}/>
      </div>
      <Aboutsection setCursorColor={setCursorColor} setCursorFilter={setCursorFilter}/>
      <Experience setCursorColor={setCursorColor}/>
      <Projectsection setCursorColor={setCursorColor}/>
      <Contactinfo setCursorColor={setCursorColor}/>

      
    </>
  )
}

export default App
