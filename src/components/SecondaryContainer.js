import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movies = useSelector(store => store.movies);

  
 
  
  return (
    movies.nowPlayingMovies && <div className='bg-black'>
    <div className='md:-mt-56 relative'>
      
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
        
        <MovieList title={"Popular"} movies={movies.popularMovies}/>
        <MovieList title={"Top Rated"} movies={movies.TopRatedMovies}/>
        
        <MovieList title={"Upcoming Movies"} movies={movies.upComingMovies}/>
      
      </div>
    </div>
  )
}

export default SecondaryContainer
