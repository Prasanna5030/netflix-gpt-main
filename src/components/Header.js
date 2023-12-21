
import React, { useEffect } from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { login_icon, netflix_logo } from '../utils/constants';
// import { Link } from 'react-router-dom';
// <nav>
// <Link to="/">Login</Link>
// <Link to="/Browse">Browse</Link>
// </nav>


const Header = () => {
  const user = useSelector((store) => store.user)
  const navigate = useNavigate();
  const dispatch = useDispatch();


  useEffect(() => {
const unsubscribe =    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    
     return ()=>unsubscribe();
  } , []);

  const handleClick = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });

  }

  return (
    <>
      <div className="absolute w-screen bg-gradient-to-b from-black px-8 py-2 z-10 flex justify-between">
        <img
          className=" w-44" src={netflix_logo} alt="logoimage" />
        <div className="flex">
          {user && <><img className=" w-14 h-14 m-2" src={user?.photoURL} alt="usericon" /><button className='m-2 text-white' onClick={handleClick}>Signout</button></>}
        </div>
      </div>

    </>
  )
}

export default Header;
