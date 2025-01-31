import React from 'react'
import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import Browse from './Browse';
import Login from './Login';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebaseAuth';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Body = () => {
    const dispatch = useDispatch();

    const appRouter = createBrowserRouter([
        {
            path : "/",
            element : <Login />,
        },
        {
            path : "/browse",
            element : <Browse />
        }
    ]);

    //authenticate the user
    onAuthStateChanged(auth, (user) => {
        if (user) {
          //user logged in/sign-up
          const {uid, email, displayName} = user;
          
          //add the user to store\
          dispatch(addUser({uid : uid, email : email, displayName : displayName}));
        } else {
          // User is signed out -> remove the  user from store
          dispatch(removeUser());
        }
    });

  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body;