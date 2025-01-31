import React, { useRef, useState } from 'react'
import Header from './Header';
import { checkValidation } from '../utils/validate';
import { auth } from '../utils/firebaseAuth';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { updateProfile } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
    const [signUp, setSignUp] = useState(false);
    const [validadtionMessage, setValidationMessage] = useState(null);

    const navigate = useNavigate();

    const dispatch = useDispatch();

    //email and password
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);


    const handleSignUp = () => {
        //validate the email and password
        const message = checkValidation(email?.current?.value,password?.current?.value);
        setValidationMessage(message);
        
        if(message) return;

        //sign-in/sign-up logic
        if(signUp){
            // sign-up logic
            createUserWithEmailAndPassword(auth, email?.current?.value,password?.current?.value)
            .then((userCredential) => {
                //signed in -> log-in
                const user = userCredential.user;

                //update the user info
                updateProfile(user, {
                    displayName: name.current.value,
                  })
                  //fixing the bug of current user
                  .then(() => {
                    //user successfully registered -> update the info of current user
                    const {uid, email, displayName} = auth.currentUser;
                    
                    //add the user to store
                    dispatch(addUser({uid : uid, email : email, displayName : displayName}));
                    navigate("/browse");

                  }).catch((error) => {
                    // An error occurred
                    setValidationMessage(error.message);
                  });
            })
            .catch((error) => {
                //not signed up
                const errorCode = error.code;
                const errorMessage = error.message;

                //give some error
                setValidationMessage(errorCode+" "+errorMessage);
            });

        }else{
            // sign in logic
            signInWithEmailAndPassword(auth, email?.current?.value,password?.current?.value)
            .then((userCredential) => {
                //valid user -> signed in
                const user = userCredential.user;
                
                //redirect to browse page
                navigate("/browse");
                
            })
            .catch((error) => {
                //invalid user -> error
                const errorCode = error.code;
                const errorMessage = error.message;
                
                setValidationMessage(errorCode+" "+errorMessage);
            });
        }
    }
    
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
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/fb5cb900-0cb6-4728-beb5-579b9af98fdd/web/IN-en-20250127-TRIFECTA-perspective_cf66f5a3-d894-4185-9106-5f45502fc387_large.jpg' alt='background-image' />
        </div>

        {/* sign in form */}
        <form onSubmit={(e) => e.preventDefault()} className='w-3/12 absolute p-12 bg-black my-40 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-85'>
            <h1 className='font-bold text-3xl pb-8'>{signUp ? "Sign Up" : "Sign In"}</h1>

            {signUp && <input ref={name} type='text' placeholder='Name' className='p-4 my-4 w-full bg-gray-600 rounded-md border' />}

            <input ref={email} type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-600 rounded-md border' />
            
            <input ref={password} type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-600 rounded-md border'/>

            {validadtionMessage && <p className='text-red-800 text-sm font-bold'>{validadtionMessage}</p>}
            
            <button className='p-2 my-4 w-full bg-red-700 rounded-md' onClick={handleSignUp}>{signUp ? "Sign up" : "Sign in"}</button>
            
            <p className='text-gray-500'>{signUp ? "Already registered? " : "New to Netflix? "}<span className='text-white font-bold cursor-pointer' onClick={toggleSignUpForm}>{signUp ? "Sign in." :"Sign up now."}</span></p>
        </form>
    </div>
  )
}

export default Login;