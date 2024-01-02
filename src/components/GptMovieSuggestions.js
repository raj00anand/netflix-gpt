import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptMovieSuggestions = () => {
    const {movieResults, movieNames} = useSelector(store => store.gpt);
    console.log(movieResults);
    if(!movieNames) return null;
  return (
    <div className='bg-black p-2 m-2 rounded-lg text-white bg-opacity-90'>
      <div>
        {movieNames.map((movieName,index) => <MovieList key={movieName} title={movieName} movies={movieResults[index]}/>)}
      </div>
    </div>
  )
}

export default GptMovieSuggestions
