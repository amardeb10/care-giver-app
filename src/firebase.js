// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzYypudrrIrKBygfgluQ3nKqtVXbVNkiQ",
  authDomain: "hack-team-dabbler.firebaseapp.com",
  projectId: "hack-team-dabbler",
  storageBucket: "hack-team-dabbler.appspot.com",
  messagingSenderId: "125373257849",
  appId: "1:125373257849:web:39e71357a69ff55df4dca8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
//const analytics = getAnalytics(app);