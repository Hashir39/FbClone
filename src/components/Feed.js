import React from 'react'
import Stories from './Stories'
import InputBox from './InputBox'
import Posts from './Posts'

function Feed() {
  return (
    
    <div 
      style={{
        overflowY: 'auto',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        WebkitOverflowScrolling: 'touch',
        WebkitScrollbar: {
          width: 0,
          height: 0,
        },
      }}
      className='flex-grow h-screen pb-44 pt-6'
    >
      <div className='mx-auto max-w-md md:max-w-lg lg:max-w-2xl '>
        <Stories/> 
        <InputBox/>
        <Posts/>
      </div>
      
      

    </div>
  )
}

export default Feed