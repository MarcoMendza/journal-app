// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from  'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAatIk2t_HoJyoQe0S97VjOLK8ub4x1mME",
  authDomain: "react-curso-4d34d.firebaseapp.com",
  projectId: "react-curso-4d34d",
  storageBucket: "react-curso-4d34d.appspot.com",
  messagingSenderId: "684049971429",
  appId: "1:684049971429:web:817a38c0e736b9ec8cbc0c"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );