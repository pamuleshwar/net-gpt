import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-full aspect-video pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-3xl font-bold'>{title}</h1>
        <p className='py-6 text-sm w-1/4'>{overview}</p>
        <div className=''>
            <button className='bg-gray-500 px-2 py-1 rounded-md bg-opacity-50 font-bold hover:bg-gray-700 hover:bg-opacity-50'>▶️ Play</button>
            <button className='bg-gray-500 px-2 py-1 ml-2 rounded-md bg-opacity-50 font-bold hover:bg-gray-700 hover:bg-opacity-50'>ℹ️ More info</button>
        </div>
    </div>
  )
}

export default VideoTitle;