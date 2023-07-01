import React, { useState } from 'react';
import { BsHeart } from "react-icons/bs";
import { BiComment } from "react-icons/bi";
import { GrView } from "react-icons/gr";
import { AiOutlineShareAlt } from "react-icons/ai";
import Image from 'next/image';

const UserPost = (props) => {
  const {
    createAt,
    postImage,
    userAvator,
    userName,
    sector
  } = props;
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeToggle = () => {
    setIsLiked(!isLiked);
  };

  return (
    <>
      <div className="px-5 rounded-md shadow-[0_2px_6px_rgba(0,0,0,0.3)]">
        <div className="--when_post---  text-right text-blue-500 font-bold text-sm mb-2 pt-4">
          {createAt}
        </div>
        {postImage && (
          <div className="flex justify-center mb-2 items-center">
            <Image
              src={postImage}
              width={100}
              height={250}
              priority={true}
              alt="postImage"
              className="w-[350px] h-[158px]"
            />
          </div>
        )}

        <div className="flex">
          <Image
            src={userAvator}
            width={80}
            height={80}
            priority={true}
            alt="postImage"
            style={{ height: "40px", width: "40px", borderRadius: "50%" }}
          />
          <p className="font-bold font-sans ml-4">{userName}</p>
          <button
            style={{ width: "120px", height: "30px" }}
            className={`mx-2 hover:bg-green-700 rounded-full text-white flex items-center justify-center ${
              sector === "Sector 1"
                ? "bg-red-500"
                : sector === "Sector 2"
                ? " bg-blue-500"
                : "bg-yellow-500"
            }`}
          >
            {sector}
          </button>
        </div>

        <div className="pl-14 text-gray-500">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, rerum.
          Excepturi, ducimus placeat fugit eveniet aliquam ut odit deleniti
          reiciendis!
        </div>
        <div className="flex ml-12 mt-4 pb-4">
          <div className="flex justify-between w-11/12">
            <div className="flex items-center mx-2">
              <div
                className={`text-2xl max-[425px]:text-sm ${
                  isLiked ? "text-red-500" : ""
                }`}
                onClick={handleLikeToggle}
              >
                <BsHeart />
              </div>
              <div className="text-lg max-[425px]:text-sm font-semibold ml-2">
                200k
              </div>
            </div>
            <div className="flex items-center mx-2">
              <div className="text-2xl max-[425px]:text-sm">
                <GrView />
              </div>
              <div className="text-lg max-[425px]:text-sm font-semibold ml-2">
                200k
              </div>
            </div>
            <div className="flex items-center mx-2">
              <div className="text-2xl max-[425px]:text-sm">
                <BiComment />
              </div>
              <div className="text-lg max-[425px]:text-sm font-semibold ml-2">
                200k
              </div>
            </div>
            <div className="flex items-center mx-2">
              <div className="text-2xl max-[425px]:text-sm">
                <AiOutlineShareAlt />{" "}
              </div>
              <span className="text-lg max-[425px]:text-sm font-semibold ml-2">
                Share
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserPost;
