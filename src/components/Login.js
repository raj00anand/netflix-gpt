import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

    const [IsSignInForm, setIsSignInForm] = useState(true);
    const togglesignInForm = () => {
        setIsSignInForm(!IsSignInForm)
    }
  return (
    <div>
     <Header/>
     <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='bg-img'/>
     </div>
      <form className='w-3/12 p-12 bg-black bg-opacity-80 absolute  my-[8%] m-auto right-0 left-0 rounded-sm'>
        <h1 className='m-1 my-4  text-white font-medium text-3xl'>{IsSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!IsSignInForm && <input type='text' placeholder='Full Name' className='m-1 my-4  p-2 w-full bg-gray-600 border-hidden'></input>}
        <input type='text' placeholder='Email Address' className='m-1 my-4  p-2 w-full bg-gray-600 border-hidden'></input>
        <input type='password' placeholder='Password' className='m-1 my-4  p-2 w-full bg-gray-600 border-hidden'></input><br></br>
        <button className='m-1 my-4  p-2 w-full font-medium text-white bg-red-600 rounded-md'>{IsSignInForm ? "Sign In" : "Sign Up"}</button>
        <h6 className='m-1 my-1  p-2 w-full text-white text-sm cursor-pointer font-normal' onClick={togglesignInForm}>{IsSignInForm ?"New to Netflix? Sign Up Now": "Already registered? Sign In Now"}</h6>
      </form>

    </div>
  )
}

export default Login