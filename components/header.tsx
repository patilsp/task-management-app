'use client';

import React from 'react';
import { FaUserCircle, FaUserAlt } from 'react-icons/fa';
import Image from "next/image";
import Avatar from 'react-avatar';

function Header() {
  return (
    <div className="flex flex-col rounded-sm bg-gray-500/10 p-5 ">
      <div className="flex">
        
        <Image 
            src="/images/chatgpt-icon.svg"
            alt="logo"
            width={100}
            height={50}
            className="mb:pb-0 obtain-contain mr-2 w-10 md:w-10"
            />

            <div className="flex w-full flex-1 items-center justify-end space-x-5"> 
                {/* Search bar */}
                <form className="item-center flex flex-1 space-x-5 rounded-sm bg-white p-2 shadow-md md:flex-initial">
                <FaUserCircle className="h-6 w-6 text-gray-400" />
                    <input type="search" placeholder="search" className="flex-1 bg-white outline-none" />
                    <button hidden> Search </button>            
                </form>

                {/* Avatar */}
                <Avatar name="SP" round size="50" />

            </div>
        </div>
        {/* user suggestions */}
        <div className="flex items-center justify-center px-5 md:py-5">
            <p className="w--fit text[#0055D1] flex max-w-3xl items-center rounded-xl bg-white p-5 text-sm font-light italic shadow-xl">
                <FaUserCircle className="text mr-2 inline-block h-10 w-10" />
                GPT is summarising your tasks for the day ...
            </p>
        </div>
    </div>
  )
}

export default Header
