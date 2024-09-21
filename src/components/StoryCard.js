import React from 'react'

function StoryCard({ name, src, profile }) {
    return (
        <div className='relative h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:w-32 cursor-pointer  transition duration-200 transform ease-in hover:scale-105 hover:animate-pulse'>
            <img className="absolute opacity-0 lg:opacity-100 rounded-full z-50 top-2" src={profile} alt="" style={{
                height: '40px',
                width: '40px',
                objectFit: 'cover',
            }} />
            <img className='object-cover filter brightness-75 rounded-full lg:rounded-3xl'
                src={src} alt="" style={{ width: '100%', height: '100%' }} />
            <p className="absolute opacity-0 lg:opacity-100 bottom-3 ml-2 w-5/6 text-white text-sm font-bold truncate">
                {name}
            </p>
        </div>
    )
}

export default StoryCard