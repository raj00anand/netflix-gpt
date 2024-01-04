import React, { useEffect, useState } from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO_URL, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearchView } from '../utils/GptSlice';
import { changeLanguage, changeShowSearch } from '../utils/configSlice';
import lang from '../utils/languageConstants';


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showSignOut, setShowSignOut] = useState(false);
  
  
  const user = useSelector(store => store.user);
  const showGptSearch = useSelector(store => store.gpt.showGptSearch)
  const showSearch = useSelector(store => store.config.showSearch); 
  const langKey = useSelector(store => store.config.lang);
  
  const handleSignOut = () => {
    signOut(auth).then(() => {
      
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }

  useEffect(()=>{
    const unsubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
       //sign In
       const {uid, email, displayName, photoURL} = user;
       dispatch(addUser({uid: uid, emai: email, dispalyName: displayName, photoURL: photoURL}));
         // ...
         navigate("/browse");
         
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
        // ...
      }
    });


    //unsubscribe when component unmount
    return () => unsubscribe();
  },[])

  const handleGptSearchClick = () => {
    //Toggle GPT Search 
    dispatch(toggleGptSearchView());

  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  }

  const handleSearchClick = () => {
    dispatch(changeShowSearch());
  }

  return (
    <div className='absolute py-2 px-8 bg-gradient-to-b from-black z-10 w-full flex flex-col md:flex-row md:justify-between'>
    <div>
    <img className='w-36 mx-auto ' src={LOGO_URL} alt='header-logo'/>
    </div>
    {user && (<div className='flex p-2 m-1 justify-center'>
    {!showGptSearch && <div onClick={handleSearchClick} className='text-white font-bold text-3xl cursor-pointer mr-1'>{showSearch ? '🏠' : '⌕'}</div>}
       <select className='p-1 rounded-lg mr-1 bg-gray-900 h-10 text-white' onChange={handleLanguageChange}>
        {SUPPORTED_LANGUAGES.map((lang, index) => (
          <option key={index} value={lang.identifier}>{lang.name}</option>
        ))}
       
      </select>
      
      {!showSearch && <button className='h-10 p-1 rounded-lg bg-purple-400 bg-opacity-90 text-white whitespace-nowrap'
      onClick={handleGptSearchClick}>{!showGptSearch ? lang[langKey].gptButtonText : lang[langKey].gptButtonTextHome}</button>}
      <div>
      <img className='ml-1 w-10 h-10 cursor-pointer rounded-sm' src={user?.photoURL} onClick={() => setShowSignOut(!showSignOut)} alt='user-icon'/>
      <div>
      {showSignOut && <button className='text-white font-bold align-middle m-2' onClick={handleSignOut}>{lang[langKey].signOut}</button>}
      </div>
      </div>
      
      
    </div>)}
      
    </div>
  )
}

export default Header
