import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
const SecondaryContainer = () => {

  const movies = useSelector(store => store.movies);

  // const slideLeft = () => {
  //   var slider = document.getElementById('slider')
  //   slider.scrollLeft = slider.scrollLeft - 500;
  //   console.log("clicked");
  // }  

  // const sliderRight = () => {
  //   var slider = document.getElementById('slider')
  //   slider.scrollLeft = slider.scrollLeft + 500;
  // }
  
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
