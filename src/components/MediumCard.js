import React from 'react'
function MediumCard({img, title}) {
  return (
    <div className='cursor-pointer hover:scale-105 transform transition duration-300 ease-out'>
        <div className='relative h-90 w-80'>
        <img src={img} alt="live anywhere item image" layout='fill' className='rounded-xl' />
        <h3 className='text-2xl mt-3'>{title}</h3>
        </div>
    </div>
  )
}

export default MediumCard