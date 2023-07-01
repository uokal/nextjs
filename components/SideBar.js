import React, { useState } from 'react'
import { BsFillCaretRightFill, BsCaretDownFill } from "react-icons/bs"
import { FaUserCircle } from "react-icons/fa"
import { IoNotifications } from "react-icons/io5"
import { RiDiscussFill } from "react-icons/ri"
import { AiFillDollarCircle } from "react-icons/ai"

const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    function toggle() {
        setIsOpen(!isOpen);
    }
    return (
        <div className={`bg-[#1d3b61] border-[#1d3b61] h-auto max-[425px]:fixed max-[425px]:top-[63px] max-[425px]:h-full  xl:sticky  xl:h-[100vh] lg:fixed lg:h-[100vh] top-[64px] left-0 transform transition-all duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} max-[425px]:z-50 sm:z-50 lg:z-0 sm:fixed sm:top-[63px] sm:h-[100vh]`} >
            {/* user profile section  */}
            <div className={`${isOpen ? 'w-[270px]' : 'hidden'}`}>
                <div className='px-[20px] flex justify-between items-center h-[60px] border-[white] border-b-[1px] text-white'>
                    <div className='flex justify-between items-center gap-2'>
                        <span className='text-4xl text-[#1d3b61] cursor-pointer'><FaUserCircle className=' bg-white rounded-[60%]' /></span>
                        <span>Hello, User</span>
                    </div>
                    <div className='text-2xl cursor-pointer relative'>
                        <IoNotifications />
                        <span className='absolute w-2 h-2 bg-red-600 rounded-[50%] top-0 right-0'></span>
                    </div>
                </div>

                {/* option   */}
                <ul className='mt-2 text-white'>
                    <ul>
                        <ul className='flex justify-between items-center px-3 py-2 hover:bg-stone-800 cursor-pointer'>
                            <li className='flex justify-between items-center gap-2 '><RiDiscussFill className='text-2xl' /> Disscussion Fourm</li>
                            <li><BsCaretDownFill /></li>
                        </ul>
                    </ul>

                    <ul className='flex justify-between items-center px-3 py-2 hover:bg-stone-800 cursor-pointer'>
                        <li className='flex justify-between items-center gap-2 '><AiFillDollarCircle className='text-2xl' /> Market Stories</li>
                    </ul>

                    <li className='pl-11 flex items-center gap-2 px-3 py-2 hover:bg-stone-800 cursor-pointer'>Sentiment</li>
                    <li className='pl-11 flex items-center gap-2 px-3 py-2 hover:bg-stone-800 cursor-pointer'>Market</li>
                    <li className='pl-11 flex items-center gap-2 px-3 py-2 hover:bg-stone-800 cursor-pointer'>Sector</li>
                    <li className='pl-11 flex items-center gap-2 px-3 py-2 hover:bg-stone-800 cursor-pointer'>Watchlist</li>
                    <li className='pl-11 flex items-center gap-2 px-3 py-2 hover:bg-stone-800 cursor-pointer'>Events</li>
                    <li className='pl-11 flex items-center gap-2 px-3 py-2 hover:bg-stone-800 cursor-pointer'>News/Interview</li>
                </ul>
            </div>
            <div onClick={toggle} className='absolute top-[200px] right-[-20px] border-[#1d3b61] border-[2px] h-[70px] rounded-r-[4px] bg-[#1d3b61] text-white flex justify-center items-center hover:cursor-pointer'> <BsFillCaretRightFill /></div>
        </div>

    )
}

export default SideBar
