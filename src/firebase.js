import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyCjtAw0PJCT5ei8XjQh0zLxEStFgHm92Ak",
    authDomain: "unichat-8cab4.firebaseapp.com",
    projectId: "unichat-8cab4",
    storageBucket: "unichat-8cab4.appspot.com",
    messagingSenderId: "802270614630",
    appId: "1:802270614630:web:d832dbc623a118061609a7",
  })
  .auth();
