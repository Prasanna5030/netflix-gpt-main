// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgCKnUIti96xfh20Gt4r5jxoCWkDLEdBg",
  authDomain: "netflixgpt-0.firebaseapp.com",
  projectId: "netflixgpt-0",
  storageBucket: "netflixgpt-0.appspot.com",
  messagingSenderId: "461825386176",
  appId: "1:461825386176:web:15787caebe12b644beaf25",
  measurementId: "G-BJ2FRHR4RS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth = getAuth();
