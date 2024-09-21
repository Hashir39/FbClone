import React from 'react'
import Post from './Post'

function Posts() {
  return (
    <div className='overflow-x-hidden'>
      <Post
        name="Muhammad Hashir"
        message="My University"
        timestamp={new Date()}
        caption="My University"
      />
    </div>
  )
}

export default Posts