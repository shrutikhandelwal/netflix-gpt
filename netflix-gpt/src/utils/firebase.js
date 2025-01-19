// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKKaETXK7t4qqTRg-VoaRsr55OOPJ0w18",
  authDomain: "netflixgpt-9809a.firebaseapp.com",
  projectId: "netflixgpt-9809a",
  storageBucket: "netflixgpt-9809a.firebasestorage.app",
  messagingSenderId: "447738092742",
  appId: "1:447738092742:web:92c1db834307e910da8bc7",
  measurementId: "G-3F7VL9LYNE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);