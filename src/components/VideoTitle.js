import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-[20%] px-24 absolute text-white w-full aspect-video bg-gradient-to-r from-black'>
      <h1 className='text-xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-1/4'>{overview}</p>
      <div className=''>
        <button className='bg-white text-black p-2 px-4 text-sm font-semibold  rounded-lg hover:bg-opacity-90'> ▷ Play</button>
        <button className='bg-gray-100 ml-2 text-white p-2 px-2 text-sm font-semibold rounded-lg bg-opacity-30 hover:bg-opacity-50'>ⓘ More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
