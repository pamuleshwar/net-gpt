import React, { useEffect } from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebaseAuth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Header = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  //authenticate the user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
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
  },[]);

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
        <img className='w-40' src='https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='netflix-logo' />

        {user && <div className='flex'>
          <img className='w-10 h-10 my-auto p-1 rounded-lg' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='user-default-icon'/>
          <button onClick={handleSignOut} className='rounded-lg bg-red-700 h-10 my-auto ml-2 p-2 font-semibold'>Sign out</button>
        </div>}
    </div>
  )
}

export default Header;