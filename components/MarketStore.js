import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import axios from 'axios';
import { fetchMarket } from '@/redux/marketslice';
import { useDispatch, useSelector } from 'react-redux';
const MarketStore = () => {
    const dispatch = useDispatch();
    const market = useSelector(state => state.market.mockups);
    useEffect(() => {
        dispatch(fetchMarket());
    }, [dispatch]);

    return (
        <div className='ml-[20px] max-[425px]:ml-0 max-[425px]:pl-2 w-full mb-9 sm:w-[100%] sm:m-auto sm:mb-12 lg:m-0'>
            <h1 className='text-[17px] font-bold font-sans uppercase text-red-500 ml-6  mt-5' >Market Stories</h1>
            <div className={`mt-[41.5px] px-6 __marketStyle w-full h-[600px] max-[425px]:h-auto overflow-y-auto max-[425px]:overflow-y-visible --marketScroll sm:h-auto lg:h-auto xl:h-[768px] `} >
                {market?.map((item) => {
                    return (
                        <>
                            <div key={item.id} className='relative w-full h-60 max-h-[50]'>
                             
                                <img src={item.thumbnail} className='w-full h-full rounded-lg' alt='postImage' width={100}
                                    height={250} />

                                <div
                                    className='absolute bottom-0 left-0 w-full px-5 py-4 bg-[rgba(0,0,0,0.4)] rounded-b-lg'
                                >
                                    <p className='text-white text-sm text-justify'>
                                        {item.title}
                                    </p>
                                </div>
                            </div>
                        </>
                    )
                })}

            </div>
        </div>
    )
}

export default MarketStore