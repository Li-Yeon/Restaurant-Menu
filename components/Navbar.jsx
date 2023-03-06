import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';

function Navbar({ children }) {

    const [openNav, setOpenNav] = useState(false);

    return (
        <>
            <div className='fixed w-full top-0 z-10 border-b bg-white'>
                <nav className='flex lg:h-24 items-start lg:items-center lg:mx-28 lg:flex-row flex-col'>

                    <div className="flex items-center h-16 w-full lg:w-auto lg:mx-0 lg:h-auto px-5">
                        <p className='font-Poppins font-bold text-lg lg:text-3xl text-blue-500'>Li-Yeon</p>

                        <button className='lg:hidden text-lg ml-auto'
                            onClick={() => { setOpenNav(!openNav) }}>
                            <p><GiHamburgerMenu /></p>
                        </button>
                    </div>

                    {/* a Links */}
                    <div className={`lg:mx-auto lg:flex lg:gap-10 items-center flex-col lg:flex-row ${openNav ? 'flex' : 'hidden'} lg:mt-0 justify-center gap-5 lg:bg-transparent py-5 bg-gray-50 w-full lg:w-auto`}>
                        <a href="#home" className='font-Poppins text-black text-md font-normal hover:text-black'>Home</a>
                        <a href="#about-us" className='font-Poppins text-gray-500 text-md font-normal hover:text-black'>About Us</a>
                        <a href="#features" className='font-Poppins text-gray-500 text-md font-normal hover:text-black'>Features</a>
                        <a href="#contact" className='font-Poppins text-gray-500 text-md font-normal hover:text-black'>Contact</a>
                        <a href="#blog" className='font-Poppins text-gray-500 text-md font-normal hover:text-black'>Blog</a>

                        <button className='rounded-full bg-gradient-to-b from-blue-400 to-blue-500 lg:hidden'>
                            <p className='font-Poppins p-4 px-8 text-white'>Contact Us</p>
                        </button>
                    </div>

                    <button className='rounded-full bg-gradient-to-b from-blue-400 to-blue-500 hover:scale-105 hidden lg:block'>
                        <p className='font-Poppins p-4 px-8 text-white'>Contact Us</p>
                    </button>
                </nav>
            </div>

            <div className='lg:mt-28 mt-20'>
                {children}
            </div>
        </>
    )
}

export default Navbar