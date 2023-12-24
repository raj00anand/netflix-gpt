import React, { useEffect } from 'react'
import Header from './Header'
import { API_OPTIONS } from '../utils/constants'
import { addNowPlayingMovies } from '../utils/moviesSlice'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import { useDispatch } from 'react-redux'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'


const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse
