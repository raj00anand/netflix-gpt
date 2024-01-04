import React, { useRef, useState } from 'react'
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addSearchMovies } from '../utils/searchSlice';
import lang from '../utils/languageConstants';
import { useSelector } from 'react-redux';

const SearchBar = () => {
    const [searchText, setSearchText] = useState('');
    const dispatch = useDispatch();
    const langKey = useSelector(store => store.config.lang);
    

    const handleSearchClick = () => {
        console.log(searchText);
        getSearchedMovies();
    }

    const getSearchedMovies = async () => {
        const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+searchText+"&include_adult=false&language=en-US&page=1", API_OPTIONS);
        const json = await data.json();
        dispatch(addSearchMovies(json.results));
        // console.log(json.results);
    }
  return (
    <div className='pt-[35%] md:p-[10%] flex justify-center'>
      <form onSubmit={(e) => e.preventDefault()} className='w-full mx-2 rounded-lg md:w-1/2 bg-black grid grid-cols-12'>
        <input type='text' className='p-2 m-3 col-span-9'  onChange={(e)=>setSearchText(e.target.value)} placeholder={lang[langKey].searchPlaceholder} />
        <button className='py-1 m-3 px-2 col-span-3 bg-red-700 text-white rounded-lg' value={searchText}  onClick={handleSearchClick}>{lang[langKey].Search}</button>
      </form>
    </div>
  )
}

export default SearchBar
