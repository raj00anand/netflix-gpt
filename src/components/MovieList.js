import React from 'react'
import MovieCard from './MovieCard'
const MovieList = ({title, movies}) => {
    // console.log(movies)
  return (
    <div className='px-3 cursor-pointer '>
    <h1 className='text-xl text-white py-4 font-medium'>{title}</h1>
      <div className='flex overflow-x-scroll'>
        
        <div className='flex'>
        {movies?.map((movie) => <MovieCard key={movie.id} posterPath={movie?.poster_path}/>)}
        
      </div>
      </div>
      
    </div>
  )
}

export default MovieList
