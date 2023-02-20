import React from 'react'
import Image from 'next/image';
function LargeCard({img, title, description, buttonText}) {
  return <section  className='relative py-16 cursor-pointer'>
    <div className='relative'>
        <Image src={img}
        layout="responsive"
        width="1200"
        height="600"
        objectFit='cover' className='rounded-2xl'
        alt='LargeCard-image'/>
    </div>
    <div className='absolute top-16  sm:top-20 md:top-24 lg:top-32 left-12'>
    <h3 className=' text-md sm:text-2xl md:text-4xl mb-3 w-64'>{title}</h3>
    <p className='text-sm'>{description}</p>

    <button className='text-xs sm:text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5'>{buttonText}</button>
    </div>
  </section>;   
}

export default LargeCard