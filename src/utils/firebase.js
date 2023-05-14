// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  firestore,
  getFirestore,
  initializeFirestore,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClfx2PiWhAY3LsV96EaMiiYBmnRZ1i2X8",
  authDomain: "recipe-rendez-vous.firebaseapp.com",
  projectId: "recipe-rendez-vous",
  storageBucket: "recipe-rendez-vous.appspot.com",
  messagingSenderId: "350207495428",
  appId: "1:350207495428:web:7b84b593711f1855a31451",
  measurementId: "G-6KC22CBN7P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage();
