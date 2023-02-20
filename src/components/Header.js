import React from 'react'
import Image from 'next/image'
import {
    GlobeAltIcon,
    Bars3Icon,
    UserCircleIcon,
    UserIcon,
    MagnifyingGlassIcon
} from '@heroicons/react/20/solid' 

function Header() {
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
        {/** left */}
        <div className='relative flex items-center h-10 cursor-pointer my-auto'>
            <Image src="https://links.papareact.com/qd3" 
            layout="fill"
            objectFit='contain'
            objectPosition='left'
            alt='airbnb-logo'
            />
        </div>

        {/** middle */}
        <div className='flex items-center md:border-2 rounded-full p-2 md:shadow-sm'>
            <input className='pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400' type="text" placeholder="Find your Airbnb"/>
            <MagnifyingGlassIcon className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2' />
        </div>

        {/** right */}
        <div className='flex justify-end space-x-4 items-center text-gray-500'>
            <p className='hidden md:inline cursor-pointer'>Airbnb your home</p>
            <GlobeAltIcon className='h-6 cursor-pointer' />
            <div className='flex items-center space-x-2 border-2 p-2 rounded-full'>
                <Bars3Icon className="h-6" />
                <UserCircleIcon className='h-6'/>
            </div>
        </div>
    </header>
  )
}

export default Header