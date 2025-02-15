import React, { useState } from 'react';
import msg from './image/email.png';

function Contactinfo({ setCursorColor }) {
    // State variables to store form input values
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    // Function to handle form submission
    const handleFormSubmit = () => {
        if (name === '' || email === '' || message === '') {
            alert('Please fill all the fields');
            return;
        } else {
            alert('Your message has been sent successfully');
            setName('');
            setEmail('');
            setMessage('');
        }
    };

    return (
        <section className='h-screen flex flex-col w-full Contact items-center'>
            {/* Header Section */}
            <header className='items-center w-full flex flex-col lg:gap-2 mt-4'>
                <p className='font-light lg:text-base sm:text-xl'>Get in Touch</p>
                <h2 className='font-bold lg:text-4xl sm:text-5xl'>Contact Me</h2>
            </header>

            {/* Contact Form Section */}
            <form className='w-[40%] h-[100%] p-8 m-8 flex flex-col gap-8 items-center'>
                <div className='w-[70%]'>
                    <label htmlFor='name'>Name:</label>
                    <input
                        id='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className='w-[100%] h-10 rounded-lg bg-red-100 p-3'
                        type='text'
                    />
                </div>
                <div className='w-[70%]'>
                    <label htmlFor='email'>Email:</label>
                    <input
                        id='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='w-[100%] h-10 rounded-lg bg-red-100 p-3'
                        type='email'
                    />
                </div>
                <div className='w-[70%]'>
                    <label htmlFor='message'>Enter Your Message:</label>
                    <textarea
                        id='message'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className='w-[100%] rounded-2xl bg-red-100 p-3'
                        cols='50'
                        rows='7'
                    ></textarea>
                </div>
                <button
                    type='button'
                    onClick={handleFormSubmit}
                    className='bg-green-200 py-3 px-4 w-[70%] rounded-lg'>
                    Send
                </button>
            </form>

            {/* Footer Section */}
            <footer className='flex flex-col justify-end items-center gap-2'>
                <nav className='w-full flex justify-center gap-8 font-semibold lg:text-lg sm:text-3xl'>
                    <a
                        onMouseEnter={() => setCursorColor("bg-teal-400")}
                        onMouseLeave={() => setCursorColor("bg-blue-500")}
                        href='#About'>About</a>
                    <a
                        onMouseEnter={() => setCursorColor("bg-green-500")}
                        onMouseLeave={() => setCursorColor("bg-blue-500")}
                        href='#Experience'>Experience</a>
                    <a
                        onMouseEnter={() => setCursorColor("bg-purple-500")}
                        onMouseLeave={() => setCursorColor("bg-blue-500")}
                        href='#Project'>Projects</a>
                    <a
                        onMouseEnter={() => setCursorColor("bg-orange-500")}
                        onMouseLeave={() => setCursorColor("bg-blue-500")}
                        href='#Contact'>Contact</a>
                </nav>
                <p className='font-light lg:text-sm sm:text-lg mb-2'>
                    Copyright © 2024 Saurabh Kumar. All Rights Reserved.
                </p>
            </footer>
        </section>
    );
}

export default Contactinfo;
