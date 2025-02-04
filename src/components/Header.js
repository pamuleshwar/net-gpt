import React, { useEffect } from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebaseAuth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { NETFLIX_LOGO, USER_DEFAULT_ICON } from '../utils/constant';
import { toggleGPTSearch } from '../utils/gptSlice';

const Header = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  //authenticate the user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName} = user;
        dispatch(addUser({uid:uid, email:email, displayName:displayName}));

        //user authenticated -> don't let him go to login page
        navigate("/browse");
      } else {
        // User is signed out -> remove the  user from store
        dispatch(removeUser());

        //use un-authenticated -> don't let him go to only login page
        navigate("/");
      }
    });

    //unmount the onAuthStateChange while unloading the header component
    return () => unSubscribe();
  },[]);

  const handleGPT = () => {
    dispatch(toggleGPTSearch());
  };

  //onclick signout button -> sign out
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful -> remove the user
      dispatch(removeUser());

    }).catch((error) => {
      // An error happened -> navigate to error page
      navigate("/error");
    });
  };


  return (
    <div className='w-full absolute px-8 py-2 bg-gradient-to-b from-black z-50 flex justify-between'>
        <img className='w-40' src={NETFLIX_LOGO} alt='netflix-logo' />

        {user && <div className='flex p-2'>
          <button className='bg-purple-700 text-white my-auto mr-3 py-1 px-2 rounded-md font-bold' onClick={handleGPT}>GPT Search</button>
          <img className='w-10 h-10 my-auto p-1 rounded-lg' src={USER_DEFAULT_ICON} alt='user-default-icon'/>
          <button onClick={handleSignOut} className='rounded-lg bg-red-700 my-auto py-1 px-2 font-semibold'>Sign out</button>
        </div>}
    </div>
  )
}

export default Header;