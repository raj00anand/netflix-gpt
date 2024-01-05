import React, { useEffect } from 'react'
import Header from './Header'
import { API_OPTIONS } from '../utils/constants'
import { addNowPlayingMovies } from '../utils/moviesSlice'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import { useDispatch, useSelector } from 'react-redux'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import useUpComingMovies from '../hooks/useUpComingMovies'
import GptSearch from './GptSearch'
import SearchContainer from './SearchContainer'


const Browse = () => {
  const showGptSearch = useSelector(store => store.gpt.showGptSearch)

  const showSearch = useSelector(store => store.config.showSearch); 

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();

  const renderComponent = () => {
    if(showGptSearch){
      return <GptSearch/>;
    }else if(showSearch){
      return <SearchContainer/>
    }else{
      return (<><MainContainer/>
      <SecondaryContainer/>
      </>)
    }
  }


  return (
    <div>
      <Header/>
      {renderComponent()}
      
      
     
    </div>
  )
}

export default Browse
