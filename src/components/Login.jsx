import React from "react";
import { FaGoogle } from "react-icons/fa";
import firebase from "firebase/app";
import { auth } from "../firebase";

const Login = () => {
  return (
    <div id="login-page">
      <div id="login-card">
        <h1 style={{ fontSize: "1.8rem", fontFamily: "sans-serif" }}>Welcome to Chatter</h1>
        <br />
        <div
          className="login-button google"
          onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
        >
          <FaGoogle size={20} /> Sign In with Google
        </div>
        <br />
      </div>
    </div>
  );
};

export default Login;
