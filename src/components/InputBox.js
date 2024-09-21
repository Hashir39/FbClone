import { CameraIcon, EmojiHappyIcon, VideoCameraIcon } from '@heroicons/react/outline';
import React, { useRef, useState } from 'react'

function InputBox() {
    const inputref= useRef(null)
    const filePickerref = useRef(null)


    const sendpost = (e) => {
        e.preventDefault();
    }
 
    const [Imagetopost, setImagetopost] = useState(null)
     
    const removeimage=()=>{
        setImagetopost(null)
    }
    const addImagetopost=(e)=>{
        const reader = new FileReader();

        if(e.target.files[0]){
            reader.readAsDataURL(e.target.files[0])
        }
        reader.onload = (readerEvent) =>{
            setImagetopost(readerEvent.target.result)
        }

    }
    return (
        <div className='bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6 overflow-x-hidden'>
            <div className='flex space-x-4 p-4 items-center'>
                <img className='rounded-full h-10 w-10' src="/prof.jfif" alt="" />
                <form className='flex flex-1'>
                    <input ref={inputref} className='rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none' type="text" placeholder='Whats on your Mind, Hashir?' />
                    <button type='submit ' hidden onClick={sendpost}>Submit </button>
                </form>
                {Imagetopost && (
                    <div onClick={removeimage} className='flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer'>  
                    <img src={Imagetopost} className='h-10 object-contain' alt="" />
                    <p className='text-xs text-red-500 text-center'>Remove</p>
                    </div>
                )}
            </div>
            <div className='flex justify-evenly p-3 border-t'>
                <div className='flex items-center space-x-1 flex-grow justify-center p-2 rounded-xl cursor-pointer'>
                    <VideoCameraIcon className='h-7 text-red-500 ' />
                    <p className='text-xs sm:text-sm xL:text-base'>Live Video</p>
                </div>

                <div className='flex items-center space-x-1 flex-grow justify-center p-2 rounded-xl cursor-pointer'>
                    <EmojiHappyIcon className='h-7 text-yellow-300' />
                    <p className='text-xs sm:text-sm xL:text-base'>Feeling/Activity</p>
                </div>

                <div onClick={()=>{filePickerref.current.click()} }className='flex items-center space-x-1 flex-grow justify-center p-2 rounded-xl cursor-pointer'>
                    <CameraIcon className='h-7 text-green-400' />
                    <p className='text-xs sm:text-sm xL:text-base'>Photo/Video</p>
                    <input type="file" hidden ref={filePickerref} onChange={addImagetopost} />
                </div>


            </div>

        </div>
    )
}

export default InputBox