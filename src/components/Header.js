
import React  , { useState }from 'react';
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
    // <nav>
    // <Link to="/">Login</Link>
    // <Link to="/Browse">Browse</Link>
    // </nav>

const Header = () => {
    

    const user =useSelector((store)=>store.user)
    const navigate=useNavigate();
   const handleClick=()=>{
    
signOut(auth).then(() => {
  // Sign-out successful.

  navigate("/");
}).catch((error) => {
  // An error happened.
  navigate("/error");
});

   }

return (
    <> 
    <div className="absolute w-screen bg-gradient-to-b from-black px-8 py-2 z-10 flex justify-between">
    <img 
      className=" w-44"src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logoimage" />
    <div className="flex">
 { user &&  <><img className=" w-14 h-14 m-2" src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg" alt="usericon" /><button className='m-2' onClick={handleClick}>Signout</button></> }
    </div>
    </div>

    </>
  )
}

export default Header;