import React from "react";
import GoogleSignin from "../../image/btn_google_signin_dark_pressed_web.png";
import { auth } from "../firebase"
import "./Welcome.css"
//import { GoogleAuthProvider, signInWithPopup } from fir
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";

const Welcome = () => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  return (
    <div className="welcome">
      <h2>Welcome to Caring Hand.</h2>
      <p>Sign in with Google to access the application.</p>
      <button className="sign-in">
        <img
          onClick={googleSignIn}
          src={GoogleSignin}
          alt="sign in with google"
          type="button"
        />
      </button>
    </div>
  );
};

export default Welcome;
