import React,{useEffect} from 'react'
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Login from './Login';
import Browse from './Browse';
import Header from "./Header";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';


const Body = () => {
const dispacth=useDispatch();
useEffect(()=>{
    

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const {uid,email, displayName ,photoURL} = user;
    dispacth(addUser({uid:uid , email:email , displayName:displayName , photoURL:photoURL}))
    
  } else {
    // User is signed out
    dispacth(removeUser());
  }
});


},[])

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login />}/>
    <Route path="/browse" element={<Browse />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Body;