import React, { useState, useRef } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';


const Login = () => {
    const [IsSignInForm, setIsSignInForm] = useState(true);
    const [ErrorMessage, SetErrorMessage] = useState(null);
    const navigate = useNavigate();
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
    const dispatch = useDispatch();


    const handleButtonClick = (e) => {
        
        //use validate funtion
        const message = checkValidData(IsSignInForm, email.current.value, password.current.value, name.current?.value);
        SetErrorMessage(message);
        if(message) return;

        if(!IsSignInForm){
          //Sign up
          createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
    // Signed up 
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, 
            photoURL: "https://media.licdn.com/dms/image/C4E03AQEHA3_U8mRZoA/profile-displayphoto-shrink_400_400/0/1616814077642?e=1709164800&v=beta&t=NouOaI9xNZLZXNS1JBlDqaX_zuENk-B017W_AcQxw1g"
          }).then(() => {
            // Profile updated!
            const {uid, email, displayName, photoURL} = auth.currentUser;
          dispatch(addUser({uid: uid, emai: email, dispalyName: displayName, photoURL: photoURL}));
            // ...
            navigate("/browse");
          }).catch((error) => {
            // An error occurred
            // ...
            SetErrorMessage(error.message);
          });
          console.log(user);
          
    // ...
          })
          .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
          SetErrorMessage(errorCode + "-" + errorMessage)
    // ..
        });
        }else{
          //Sign in
          signInWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
    // Signed in 
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
    // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            SetErrorMessage(errorCode + "-" + errorMessage)
          });
        }
       
    }

    const togglesignInForm = () => {
        setIsSignInForm(!IsSignInForm)
    }
  return (
    <div>
     <Header/>
     <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='bg-img'/>
     </div>
      <form onSubmit={(e)=> e.preventDefault()} className='w-3/12 p-12 bg-black bg-opacity-80 absolute  my-[8%] m-auto right-0 left-0 rounded-sm'>
        <h1 className='m-1 my-4  text-white font-medium text-3xl'>{IsSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!IsSignInForm && <input type='text' ref={name} placeholder='Full Name' className='m-1 my-4  p-2 w-full bg-gray-600 border-hidden'></input>}
        <input type='text' placeholder='Email Address' ref={email} className='m-1 my-4  p-2 w-full bg-gray-600 border-hidden'></input>
        
        <input type='password' placeholder='Password' ref={password} autoComplete="on" className='m-1 my-4  p-2 w-full bg-gray-600 border-hidden'></input><br></br>
        <p className='p-1 w-full text-red-600 font-medium'>{ErrorMessage}</p>
        <button className='m-1  p-2 w-full font-medium text-white bg-red-600 rounded-md' onClick={handleButtonClick}>{IsSignInForm ? "Sign In" : "Sign Up"}</button>
        <h6 className='m-1 my-1  p-2 w-full text-white text-sm cursor-pointer font-normal' onClick={togglesignInForm}>{IsSignInForm ?"New to Netflix? Sign Up Now": "Already registered? Sign In Now"}</h6>
      </form>

    </div>
  )
}

export default Login
