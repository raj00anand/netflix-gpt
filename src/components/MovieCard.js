import React from 'react'
import { IMG_CDN } from '../utils/constants'

const MovieCard = ({posterPath}) => {
    // console.log(posterPath)
  return (
    <div className='w-40 pr-2'>
      <img src={IMG_CDN + posterPath} alt='movie card'/>
    </div>
  )
}

export default MovieCard
