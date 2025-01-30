import React, { useState } from 'react'
import Header from './Header';

const Login = () => {
    const [signUp, setSignUp] = useState(false);
    
    // toggle the sign-up and sign-in form 
    const toggleSignUpForm = () => {
        setSignUp(!signUp);
    };


  return (
    <div>
        {/* Header */}
        <Header />

        {/* background image */}
        <div className='absolute'>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/fb5cb900-0cb6-4728-beb5-579b9af98fdd/web/IN-en-20250127-TRIFECTA-perspective_cf66f5a3-d894-4185-9106-5f45502fc387_large.jpg' />
        </div>

        {/* sign in form */}
        <form className='w-3/12 absolute p-12 bg-black my-40 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-85'>
            <h1 className='font-bold text-3xl pb-8'>{signUp ? "Sign Up" : "Sign In"}</h1>
            {signUp && <input type='text' placeholder='Name' className='p-4 my-4 w-full bg-gray-600 rounded-md border' />}
            <input type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-600 rounded-md border' />
            <input type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-600 rounded-md border'/>
            <button className='p-2 my-4 w-full bg-red-700 rounded-md'>{signUp ? "Sign up" : "Sign in"}</button>
            <p className='text-gray-500'>{signUp ? "Already registered? " : "New to Netflix? "}<span className='text-white font-bold cursor-pointer' onClick={toggleSignUpForm}>{signUp ? "Sign in." :"Sign up now."}</span></p>
        </form>
    </div>
  )
}

export default Login;