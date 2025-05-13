import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARv3D-oJhwVC4YDymlsvJh0DeWQQ6p2RU",
  authDomain: "reactnative-98ad8.firebaseapp.com",
  projectId: "reactnative-98ad8",
  storageBucket: "reactnative-98ad8.firebasestorage.app",
  messagingSenderId: "985943342934",
  appId: "1:985943342934:web:ed2bbae1f5cdfee8c8e0f7",
  measurementId: "G-WDQF0PTV4P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); 