import React from 'react'
import Image from 'next/image'

function Banner() {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px]'>
        <Image src="https://links.papareact.com/0fm" layout="fill" objectFit="cover" alt='banner-img'/>
        <div className='absolute top-1/2 w-full text-center'>
            <p className='text-sm sm:text-lg'>Not sure where to go? Perfect.</p>
            <button className=' border-none bg-white px-10 py-4 rounded-full font-bold my-3 shadow-md hover:shadow-xl active:scale-90 transition duration-150 text-purple-500'>I am flexible</button>
        </div>
    </div>
  )
}

export default Banner