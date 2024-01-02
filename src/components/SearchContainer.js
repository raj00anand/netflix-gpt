import React from 'react'
import SearchBar from './SearchBar'
import { BG_URL } from '../utils/constants'

const SearchContainer = () => {
  return (
    <div>
      <div className='fixed -z-10'>
        <img className='w-screen h-screen object-cover' src={BG_URL} alt='bg-img'/>
     </div>
     <SearchBar/>
    </div>
  )
}

export default SearchContainer
