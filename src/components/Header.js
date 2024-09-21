import React from 'react'
import { SearchIcon, HomeIcon, PlayIcon, UserGroupIcon, ShoppingCartIcon, FlagIcon, ViewGridIcon, ChatIcon, ChevronDownIcon, BellIcon } from "@heroicons/react/outline";
import HeaderIcon from './HeaderIcon';


function Header() {

  return (
    <div className='sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md w-full'>


      <div className='flex items-center'>
        <img src="https://links.papareact.com/5me" alt="" height={40} width={40} layout="fixed" />


        <div className='flex ml-2 items-center rounded-full bg-gray-100 p-2'>
          <SearchIcon className='h-6 text-gray-600' />
          <input className='hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink' type="text" placeholder=' Seach Facebook' />
        </div>
      </div>

      {/*//Center Header*/}
      <div className='flex justify-center flex-grow'>
        <div className='flex space-x-6 md:space-x-2' >
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>


      <div className='flex items-center sm:space-x-2 justify-end'>
        <img src="/prof.jfif" alt='' className='rounded-full cursor-pointer ' height="40" width="40" layout="fixed" />

        <p className='whitespace-nowrap font-semibold pr-3'>Muhammad Hashir </p>
        <ViewGridIcon className='hidden xl:inline-flex p-2 h-10 w-10 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300' />
        <ChatIcon className='hidden xl:inline-flex p-2 h-10 w-10 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300' />
        <BellIcon className='hidden xl:inline-flex p-2 h-10 w-10 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300' />
        <ChevronDownIcon className='hidden xl:inline-flex p-2 h-10 w-10 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300' />
        

      </div>


    </div>
  )
}

export default Header