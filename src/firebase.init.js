// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBzoNIIgG3A11OnCvwY8gNGmA1i9YD4hIA",
  authDomain: "my-photography-web.firebaseapp.com",
  projectId: "my-photography-web",
  storageBucket: "my-photography-web.appspot.com",
  messagingSenderId: "7785613854",
  appId: "1:7785613854:web:5ff228be1790df509afc0f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;