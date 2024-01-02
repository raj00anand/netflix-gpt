import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import lang from '../utils/languageConstants';
import openai from '../utils/openai';
import { useDispatch } from 'react-redux';
import { addGptMovieResult } from '../utils/GptSlice';
import { API_OPTIONS } from '../utils/constants';

const GptSearchBar = () => {
    const langKey = useSelector(store => store.config.lang);
    const dispatch = useDispatch();
    const searchText = useRef(null);

    //search movie in TMDB
    //https://api.themoviedb.org/3/search/movie?query=phir%20hera%20pheri&include_adult=false&language=en-US&page=1
    const searchMovieTMDB = async (movie) => {
        const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1", API_OPTIONS);
        const json = await data.json();
        // console.log(json.results);
        return json.results;
    }

    const handleGptSearchClick = async () => {
        console.log(searchText.current.value);
        //make an api call to GPT api to get movies result
        const query = 'Act as a movie Recommendation system and suggest some movies for the query' + searchText.current.value + '. only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don , Dhol, Pher Hera Pheri';

        const gptResult = await openai.chat.completions.create({
            messages: [{ role: 'user', content: query }],
            model: 'gpt-3.5-turbo',
          });
        
          if(!gptResult.choices) {
            // TODO: write error handling
          }
        //   console.log(gptResult.choices);

          const gptMovies = gptResult.choices?.[0]?.message?.content.split(",");
        
          const promiseArray = gptMovies.map(movie => searchMovieTMDB(movie));

          const tmdbResult = await Promise.all(promiseArray);
          // console.log(tmdbResult);
          dispatch(addGptMovieResult({movieNames: gptMovies, movieResults: tmdbResult}));
          
    }

  return (
    <div className='pt-[35%] md:p-[10%] flex justify-center'>
      <form onSubmit={(e) => e.preventDefault()} className='w-full mx-2 rounded-lg md:w-1/2 bg-black grid grid-cols-12'>
        <input type='text' className='p-2 m-3 col-span-9' ref={searchText} placeholder={lang[langKey].gptSearchPlaceholder} />
        <button className='py-1 m-3 px-2 col-span-3 bg-red-700 text-white rounded-lg'  onClick={handleGptSearchClick}>{lang[langKey].Search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar
