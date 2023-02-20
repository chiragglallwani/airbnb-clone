import React, { useState } from 'react'
import Image from 'next/image'
import {
    GlobeAltIcon,
    Bars3Icon,
    UserCircleIcon,
    UserGroupIcon,
    MagnifyingGlassIcon
} from '@heroicons/react/20/solid' 
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import Search from '@/pages/search';

function Header() {

    const [searchInput, setSearchInput] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [guestNumber, setGuestNumber] = useState(1);

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
      }

      const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
      }

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
            <input value={searchInput} onChange={(e) => setSearchInput(e.target.value)} className='pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400' type="text" placeholder="Find your Airbnb"/>
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

        {searchInput && (
            <div className='flex flex-col col-span-3 mx-auto'>
                <DateRangePicker
                minDate={new Date()}
                ranges={[selectionRange]}
                rangeColors={["#FD5B61"]}
                onChange={handleSelect}
                />
                <div className='flex justify-center items-center'>
                    <h2 className='text-2xl flex-grow font-semibold'>Number of Guest</h2>
                    <UserGroupIcon className='h-5' />
                    <input className="w-12 pl-2 text-lg outline-none text-red-400" type="number" value={guestNumber} onChange={(e) => setGuestNumber(e.target.value)} min={1} />
                </div>
                <div className='flex'>
                    <button onClick={() => setSearchInput("")} className='flex-grow text-gray-500'>Cancel</button>
                    <button className='flex-grow text-red-400'>Search</button>
                </div>
            </div>
        )}
    </header>
  )
}

export default Header