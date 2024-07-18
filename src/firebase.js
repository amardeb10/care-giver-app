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
  apiKey: "AIzaSyDT4DsVrr3FknRoHasXojA0kwLt1Ff1UfM",
  authDomain: "chat-app-f7e82.firebaseapp.com",
  projectId: "chat-app-f7e82",
  storageBucket: "chat-app-f7e82.appspot.com",
  messagingSenderId: "484121825390",
  appId: "1:484121825390:web:c9c69fbedab243c131167f",
  measurementId: "G-ZTW0LE0611"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
//const analytics = getAnalytics(app);