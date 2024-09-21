import React from 'react'
import StoryCard from './StoryCard'

const stories = [
    {
        name:"Hashir",
        src:'prof.jfif',
        profile: 'prof.jfif'
    },
    {
        name:"Jeff Bezos",
        src:'http://links.papareact.com/xql',
        profile: 'https://links.papareact.com/r57'
    },
    {
        name:"Elon Musk",
        src:'http://links.papareact.com/4zn',
        profile: 'https://links.papareact.com/kxk'
    },
    {
        name:"Bill Gates",
        src:'http://links.papareact.com/4u4',
        profile: 'https://links.papareact.com/zvy'
    }
]

function Stories() {
  return (
    <div className='flex justify-center space-x-3 mx-auto'>
       {stories.map((story)=>{
       return <StoryCard key={story.src} name={story.name} src={story.src} profile={story.profile}/>
       })}
    </div>
  )
}

export default Stories