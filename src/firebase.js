import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyAhg_g-2NK4TYJsCQFB4t664p2uH42vHnA",
    authDomain: "chatter-app-cb9f3.firebaseapp.com",
    projectId: "chatter-app-cb9f3",
    storageBucket: "chatter-app-cb9f3.appspot.com",
    messagingSenderId: "714840719715",
    appId: "1:714840719715:web:aa6ca443358c8c4c345356",
  })
  .auth();
