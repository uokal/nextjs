
import Head from 'next/head';
import Image from 'next/image';
import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci"
import { IoMdClose } from "react-icons/io"
import { RxAvatar } from "react-icons/rx"
function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="NextJS || Assignment" />
                <title>NextJS Go india stock</title>
                <link rel="icon" href="/logo.png" />
            </Head>
            <nav className='sticky top-0 left-0 bg-white z-10 flex justify-between items-center h-16 bg-white-800 shadow-md lg:px-10 sm:px-2  py-3 max-[425px]:px-3' >
                {/* for logo */}
                <div className='h-10 flex items-center'>
                    <img src="/logo.png" alt="goIndiaStack"
                        width={60}
                        height={30}
                        className='h-7 md:h-8 lg:h-10 mx-auto'

                        priority={true}
                    />
                </div>
                {/* SearchBar  */}
                <div className='flex items-center justify-between border  bg-gray-200 border-t-2 border-gray-300 rounded-md px-2 py-1 w-2/4 sm:w-1/3 md:w-[40%] lg:w-2/5 xl:w-3/6 '>
                    <div className='flex-grow'>
                        <input type="text"
                            className='border-none outline-none  bg-gray-200 text-black px-2 py-1 text-base w-full h-full'
                            placeholder='Search here...' />
                    </div>
                    <div className='mr-2' >
                        <CiSearch className='text-black text-lg' />
                    </div>
                </div>
                {/* SignupSignin */}
                <div className='hidden sm:flex items-center'>
                    <p className='text-base font-medium mr-4 text-gray-700'>Contact Us</p>
                    <button className='text-black bg-white border border-gray-400 rounded-md px-7 py-2 mr-2 text-base font-medium shadow-md'>Signup</button>
                    <button className='text-black bg-white border border-gray-400 rounded-md px-7 py-2 mr-2 text-base font-medium shadow-md'>Signin</button>
                </div>
                {/* Hamburger icon on mobile screen */}
                <div className="block sm:hidden">
                    {isMenuOpen ? (
                        <IoMdClose onClick={() => setIsMenuOpen(!isMenuOpen)} />
                    ) : (
                        <RxAvatar onClick={() => setIsMenuOpen(!isMenuOpen)} className='text-2xl' />
                    )}
                </div>
                {isMenuOpen && (
                    <div class="absolute flex flex-col top-2 mt-16 right-1 w-260 bg-orange-500 shadow-md p-4 z-10 transition-all duration-500 ease-out">
                        <p class="text-white text-xl mb-4 font-bold">Contact Us</p>
                        <button class="text-black bg-white border border-gray-400 rounded-md px-7 py-2 mr-2 text-base font-medium shadow-md mb-4">Signup</button>
                        <button class="text-black bg-white border border-gray-400 rounded-md px-7 py-2 mr-2 text-base font-medium shadow-md mb-4">Signin</button>
                    </div>


                )}
            </nav>
        </>
    )
}

export default Navbar
