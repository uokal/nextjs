import React, { useState } from 'react'
import SideBar from './SideBar'
import Feed from './Feed'
import MarketStore from './MarketStore'

const MainContainer = () => {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    };
    return (
        <>
            <div className='flex max-[425px]:flex-col sm:flex-col lg:flex-row w-full m-0 p-0'>
                <SideBar />
                <Feed className='hidden md:block' />
                <MarketStore className='hidden md:block' />
            </div>
            <div className='block md:hidden'>
                <div>
                    <div className='flex'>
                        <div className="w-[100%]">
                            <button
                                className={`w-[100%] py-2 px-4 text-sm font-medium focus:outline-none ${activeTab === 1 ? 'nav-mobile-active text-white' : 'nav-mobile text-white'
                                    }`}
                                onClick={() => handleTabClick(1)}
                            >
                                Discussion forum
                            </button>
                        </div>
                        <div className="w-[100%]">
                            <button
                                className={`w-[100%] py-2 px-4 text-sm font-medium focus:outline-none ${activeTab === 2 ? 'nav-mobile-active text-white' : 'nav-mobile text-white'
                                    }`}
                                onClick={() => handleTabClick(2)}
                            >
                                Market Stories
                            </button>
                        </div>
                    </div>
                    {/* Add more tabs as needed */}

                    {/* Tab Content */}
                    <div className="mt-4 flex">
                        {activeTab === 1 && <div><Feed /></div>}
                        {activeTab === 2 && <div><MarketStore /></div>}
                        {/* Add content for more tabs */}
                    </div>
                </div>
            </div></>
    )
}
export default MainContainer