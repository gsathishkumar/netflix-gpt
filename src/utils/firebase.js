// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'netflixgpt-b6920.firebaseapp.com',
  projectId: 'netflixgpt-b6920',
  storageBucket: 'netflixgpt-b6920.firebasestorage.app',
  messagingSenderId: '468227299692',
  appId: '1:468227299692:web:5cc8dd428a5a30d71ffb49',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
