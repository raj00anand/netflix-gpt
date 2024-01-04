import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import lang from '../utils/languageConstants';

const VideoTitle = ({title, overview, movieId}) => {

  const langKey = useSelector(store => store.config.lang);
  return (
    <div className='pt-[30%] md:pt-[20%] p-6 md:px-24 absolute text-white w-full aspect-video bg-gradient-to-r from-black'>
      <h1 className='text-sm md:text-xl font-normal md:font-bold w-1/2 md:w-1/4'>{title}</h1>
      <p className='hidden md:inline-block sm:hidden py-6 text-lg  w-1/4'>{overview}</p>
      <div className=''>
      <Link to={'/browse/movie/'+movieId}><button className='bg-white text-black p-2 px-4 text-sm font-semibold  rounded-lg hover:bg-opacity-90'> ▷ {lang[langKey].play}</button></Link>
        
        <button className='bg-gray-100 ml-2 text-white p-2 px-2 text-sm font-semibold rounded-lg bg-opacity-30 hover:bg-opacity-50'>ⓘ {lang[langKey].info}</button>
      </div>
    </div>
  )
}

export default VideoTitle
