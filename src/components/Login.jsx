import React from "react";
import { FaGoogle } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import firebase from "firebase/app";
import { auth } from "../firebase";

const Login = () => {
  return (
    <div id="login-page">
      <div id="login-card">
        <h2>Welcome to Chatter</h2>
        <br />
        <div
          className="login-button google"
          onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
        >
          <FaGoogle size={15} /> Sign In with Google
        </div>
        <br />
        <br />
        <div
          className="login-button facebook"
          onClick={() => auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())}
        >
          <BsFacebook /> Sign In with Facebook
        </div>
      </div>
    </div>
  );
};

export default Login;
