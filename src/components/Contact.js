import React from 'react'

function Contact({src,name }) {
  return (
    <div className='flex items-center space-x-3 mb-2 relative hover:bg-gray-200 cursor-pointer p-2 rounded-xl'>
        <img src={src} height={50} width={50} style={{objectFit:'cover'}} alt="" />
        <p>{name}</p> 
        <p className='absolute bottom-2 left-7 bg-green-400 h-3 w-3 rounded-full'></p>
    </div>
  )
}

export default Contact 