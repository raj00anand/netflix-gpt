import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();

  const user = useSelector(store => store.user);
  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/");
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }
  return (
    <div className='absolute py-[0.5%] px-[8%] bg-gradient-to-b from-black z-10 w-screen flex justify-between'>
    <div>
    <img className='w-[13%] ' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='header-logo'/>
    </div>
    {user && (<div className='flex p-2 m-1'>
      <img className='w-10 h-10 rounded-sm' src={user?.photoURL} alt='user-icon'/>
      <div>
      <button className='text-white font-bold align-middle m-2' onClick={handleSignOut}>SignOut</button>
      </div>
      
    </div>)}
      
    </div>
  )
}

export default Header
