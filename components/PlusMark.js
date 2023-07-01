import React from 'react'
import { GoPlus } from "react-icons/go"

const PlusMark = () => {
    return (
        <div className='fixed bottom-[50px] right-[20px] rounded-[50%] p-3 bg-[#1d3b61] md:bottom-[20px]'>
            <span className='text-white font-bold text-[20px]'><GoPlus /></span>
        </div>
    )
}

export default PlusMark