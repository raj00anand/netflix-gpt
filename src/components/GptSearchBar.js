import React from 'react'
import { useSelector } from 'react-redux'
import lang from '../utils/languageConstants';

const GptSearchBar = () => {
    const langKey = useSelector(store => store.config.lang);

  return (
    <div className='p-[10%] flex justify-center'>
      <form className='w-1/2 bg-black grid grid-cols-12'>
        <input type='text' className='p-2 m-3 col-span-9' placeholder={lang[langKey].gptSearchPlaceholder} />
        <button className='py-1 m-3 px-2 col-span-3 bg-red-700 text-white rounded-lg'>{lang[langKey].Search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar
