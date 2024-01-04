import React from 'react'
import SearchBar from './SearchBar'
import { BG_URL } from '../utils/constants'
import { useSelector } from 'react-redux'
import MovieCard from './MovieCard'

const SearchContainer = () => {

    const movies = useSelector(store => store.search.searchMovies);
    console.log(movies);
  return (
    <div>
      <div className='fixed -z-10'>
        <img className='w-screen h-screen object-cover' src={BG_URL} alt='bg-img'/>
        
     </div>
     <SearchBar/>
     {movies && <div className='  bg-black p-2 m-2 rounded-lg text-white bg-opacity-90'>
      <div className='flex flex-wrap m-4 justify-center'>
        {movies.map((movie, index) =>  <MovieCard key={movie.id} posterPath={movie?.poster_path} moviesTitle={movie?.title} movieId={movie.id}/>)}
      </div>
    </div>}
    </div>
  )
}

export default SearchContainer
