// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4s0pUM44SC9NUVJEedLyFUgMEBox-jvU",
  authDomain: "react-acm-webtask.firebaseapp.com",
  projectId: "react-acm-webtask",
  storageBucket: "react-acm-webtask.appspot.com",
  messagingSenderId: "500483366173",
  appId: "1:500483366173:web:57cd571346150253a655f4",
  measurementId: "G-9YFB1DNS72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);