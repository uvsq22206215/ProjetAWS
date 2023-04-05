// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { firestore } from "firebase/firestore";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDk5S53sa5AdfuCXsDvFAWA-ZrjHAczKZg",
  authDomain: "recipe-rendezvous.firebaseapp.com",
  projectId: "recipe-rendezvous",
  storageBucket: "recipe-rendezvous.appspot.com",
  messagingSenderId: "432028603309",
  appId: "1:432028603309:web:9c975ea91f7bb063810724",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
