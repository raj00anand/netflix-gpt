import React from 'react'
import { IMG_CDN } from '../utils/constants'
import { Link } from 'react-router-dom';

const MovieCard = (props) => {
    // console.log(posterPath)
    const {posterPath, moviesTitle, movieId} = props;
    if(!posterPath) return null;
  return (
    <div className='relative w-36 md:w-40 pr-2'>
      <div>
        <img className='w-[220px] p-1 rounded-lg inline-block hover:scale-125 ease-in-out duration-100 hover:rounded-lg' src={IMG_CDN + posterPath} alt='movie card'/>
       
      </div>
      <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10   justify-center items-center hover:bg-black text-center hover:rounded-lg  hover:p-1 hover:text-wrap hover:bg-opacity-65 text-white font-semibold  p-1 rounded-lg hover:scale-120 ease-in-out hover:pt-10">
      <div>{moviesTitle}</div><br/>
      <Link to={'/browse/movie/'+movieId}><button className='bg-white bg-opacity-60 text-black m-1 p-1 px-2 text-sm font-semibold  rounded-lg hover:bg-opacity-90'> ▷ Play</button></Link>
      </div>
      
      
    </div>
    
  )
}

export default MovieCard
