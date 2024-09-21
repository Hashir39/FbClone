import { ChatAltIcon, ShareIcon, ThumbUpIcon } from '@heroicons/react/outline'
import React from 'react'


function Post({ name, message, timestamp, caption }) {
    // Ensure timestamp is a Date object
    const formattedTimestamp = timestamp instanceof Date ? timestamp : timestamp.toDate ? timestamp.toDate() : new Date(timestamp);

    return (
        <div className='overflow-x-hidden'>
        <div className='flex flex-col'>
        <div className='p-5 bg-white mt-5 rounded-t-2xl shadow-sm'>
            <div className='flex items-center pb-2'>
                <img className='rounded-full w-12 h-12 -ml-5 -mb-3' width={40} height={40} src="prof.jfif" alt="" />
                <div className='ml-2'>
                    <p className='font-medium'>{name}</p>
                    <p className='text-xs text-gray-400'>
                        {formattedTimestamp ? formattedTimestamp.toLocaleString() : ''}
                    </p>
                </div>
            </div>
            <p className='text-sm mt-2 -ml-4 -mb-4'>{caption}</p> {/* Added margin-top to caption and moved it inside the parent div */}
        </div>

            <div className='relative bg-white'>
                <div className='h-56 md:h-96'>
                    <img src='/ubit.jpg' className='w-full h-full object-cover -mb-7' alt='' />
                </div>
            </div>
            

            <div className='flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t'>
                <div className='flex items-center space-x-1 flex-grow justify-center p-2 cursor-pointer rounded-bl-2xl'>
                    <ThumbUpIcon className='h-4' />
                    <p className='text-xs sm:text-base'>Like</p>
                </div>
                <div className='flex items-center space-x-1 flex-grow justify-center p-2 cursor-pointer'>
                    <ChatAltIcon className='h-4' />
                    <p className='text-xs sm:text-base'>Comment</p>
                </div>
                <div className='flex items-center space-x-1 flex-grow justify-center p-2 cursor-pointer rounded-br-2xl'>
                    <ShareIcon className='h-4' />
                    <p className='text-xs sm:text-base'>Share</p>
                </div>
            </div>
        </div></div>
    );
}

export default Post