import React from 'react'
import { IMG_CDN } from '../utils/constants'

const MovieCard = (props) => {
    // console.log(posterPath)
    const {posterPath} = props;
    if(!posterPath) return null;
  return (
    <div className='w-36 md:w-40 pr-2'>
      <img className='w-[220px] p-1 rounded-lg inline-block hover:scale-125 ease-in-out duration-100 hover:rounded-lg' src={IMG_CDN + posterPath} alt='movie card'/>
      
    </div>
    
  )
}

export default MovieCard
