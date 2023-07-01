import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci"
import UserPost from './UserPost';
const postData = [
    {
        id: "1",
        createAt: "2 min ago",
        postImage: "/payments.gif",
        userAvator: "/userimg.png",
        userName: "John Deo",
        sector: "Sector 1",
        userComment: "lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
        likes: "5k",
        comments: '2k',
        views: "9k"
    },
    {
        id: "2",
        createAt: "1 day ago",
        postImage: "",
        userAvator: "/userimg.png",
        userName: "John Neo",
        sector: "Sector 2",
        userComment: "lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
        likes: "3k",
        comments: '1k',
        views: "4k"
    },
    {
        id: "3",
        createAt: "2 years ago",
        postImage: "",
        userAvator: "/userimg.png",
        userName: "John Rex",
        sector: "Sector 3",
        userComment: "lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
        likes: "3k",
        comments: '1k',
        views: "4k"
    },
    {
        id: "4",
        createAt: "2 min ago",
        postImage: "",
        userAvator: "/userimg.png",
        userName: "John Rex",
        sector: "Sector 1",
        userComment: "lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
        likes: "3k",
        comments: '1k',
        views: "4k"
    },
    {
        id: "5",
        createAt: "2 min ago",
        postImage: "",
        userAvator: "/userimg.png",
        userName: "John Rex",
        sector: "Sector 3",
        userComment: "lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
        likes: "3k",
        comments: '1k',
        views: "4k"
    },
]

function Feed() {
    const [selectedSector, setSelectedSector] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    // Filter posts based on the selected sector and search query
    const filteredPosts = postData.filter((post) => {
        if (selectedSector && post.sector !== selectedSector) {
            return false;
        }

        if (
            searchQuery &&
            !post.userName.toLowerCase().includes(searchQuery.toLowerCase())
        ) {
            return false;
        }

        return true;
    });

    const handleFilterClick = (sector) => {
        setSelectedSector(sector);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <div className="w-full  lg:w-[1260px] xl:w-[1360px] 2xl:w-[2650px] max-[425px]:w-[100%] max-[425px]:min-w-[100%]">
            <h1 className="text-[17px] font-bold font-sans uppercase text-red-500 ml-6 mt-2">
                Discussion forum
            </h1>

            {/* filter section */}
            <div className="mt-2  ml-[75px] max-[425px]:ml-6">
                <p className="text-lg font-bold mb-2">Filters</p>

                <div className="flex py-[10px]  justify-around px-2 rounded-md shadow-[0_2px_6px_rgba(0,0,0,0.3)]">
                    {/* all filters buttons */}
                    <div className="flex justify-between items-center gap-3 max-[425px]:gap-1 max-[425px]:text-sm">
                        <button
                            className={`${selectedSector === 'Sector 1'
                                    ? 'bg-red-500 hover:bg-blue-700'
                                    : 'bg-gray-300 hover:bg-red-500'
                                } text-white w-24 py-[3px] rounded-[50px] font-semibold`}
                            onClick={() => handleFilterClick('Sector 1')}
                        >
                            Sector 1
                        </button>
                        <button
                            className={`${selectedSector === 'Sector 2'
                                    ? 'bg-blue-500 hover:bg-green-700'
                                    : 'bg-gray-300 hover:bg-blue-500'
                                } text-white w-24 py-[3px] rounded-[50px] font-semibold`}
                            onClick={() => handleFilterClick('Sector 2')}
                        >
                            Sector 2
                        </button>
                        <button
                            className={`${selectedSector === 'Sector 3'
                                    ? 'bg-yellow-500 hover:bg-red-700'
                                    : 'bg-gray-300 hover:bg-yellow-500'
                                } text-white w-24 py-[3px] rounded-[50px] font-semibold`}
                            onClick={() => handleFilterClick('Sector 3')}
                        >
                            Sector 3
                        </button>

                        <div className="flex items-center justify-between border bg-gray-200 border-t-2 border-gray-300 rounded-full ml-1 py-1 ">
                            <div>
                                <CiSearch className="text-black text-[22px] ml-2" />
                            </div>
                            <div className="flex-grow">
                                <input
                                    type="text"
                                    className="border-none outline-none bg-gray-200 text-black px-2 py-1 text-base w-full h-8 sm:w-auto sm:max-w-[425px] sm:h-6 rounded-[50px]"
                                    placeholder="Search here..."
                                    value={searchQuery}
                                    onChange={handleSearchChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* posts */}
            <div className="my-6 p-3 flex flex-col gap-3.5 overflow-y-auto max-[425px]:overflow-y-visible ml-[62px] max-[425px]:ml-3  xl:h-[700px] --postScroll">
                {filteredPosts?.map((item) => (
                    <UserPost key={item.id} {...item} />
                ))}
            </div>
        </div>
    );
}

export default Feed;