import React, {useEffect} from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';
const Header = () => {
  const navigate  = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector(store => store.user)

    //signout logic
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    })

  }

  //whenever the user state will change it will be handle at one place by get Auth and update the redux store. We don't need to handle every signin and signup of the user manually in .then portion of the api call.
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed In
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({
          uid: uid, 
          email: email, 
          displayName: displayName, 
          photoURL: photoURL
        }))
        navigate("/browse")
        //this arguments are actions.payload.
      }else {
        // User is signed out
        dispatch(removeUser())
        navigate("/")
      }
  })
  //unsubscribe when component unmounts, because we don't this piece to refresh again and again when the component is not active
  return () => unsubscribe();
  },[])
  
  return (
    //z index to make netflix logo shows up on the screen else it went behind the image
    //bg-gradient-to-b (background gradient to the bottom)
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img  
      className="w-44"
      src={LOGO}
      alt="logo"   />

       {user && <div flex p-2>
        <img 
        className="w-12 h-9" 
        src={user?.photoURL} 
        alt="usericon"
        />
        <button onClick={handleSignOut} className="font-bold text-white">(Sign Out)</button>
      </div>}
    </div>
  
  )
}

export default Header