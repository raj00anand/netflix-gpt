import React, { useEffect } from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO_URL } from '../utils/constants';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector(store => store.user);
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

  return (
    <div className='absolute py-[0.5%] px-[8%] bg-gradient-to-b from-black z-10 w-screen flex justify-between'>
    <div>
    <img className='w-[13%] ' src={LOGO_URL} alt='header-logo'/>
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
