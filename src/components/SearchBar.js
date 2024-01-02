import React, { useRef } from 'react'


const SearchBar = () => {
    const searchText = useRef();

    const handleSearchClick = () => {

    }
  return (
    <div className='pt-[35%] md:p-[10%] flex justify-center'>
      <form onSubmit={(e) => e.preventDefault()} className='w-full mx-2 rounded-lg md:w-1/2 bg-black grid grid-cols-12'>
        <input type='text' className='p-2 m-3 col-span-9' ref={searchText} placeholder="Search Movies" />
        <button className='py-1 m-3 px-2 col-span-3 bg-red-700 text-white rounded-lg'  onClick={handleSearchClick}>Search</button>
      </form>
    </div>
  )
}

export default SearchBar
