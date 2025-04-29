// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQMEhdWzlH8Qmjn4I0K4w7jzLiJsZ1dvc",
  authDomain: "email-password-authentic-2d185.firebaseapp.com",
  projectId: "email-password-authentic-2d185",
  storageBucket: "email-password-authentic-2d185.firebasestorage.app",
  messagingSenderId: "731600797324",
  appId: "1:731600797324:web:44e183570558f7cd0145a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);