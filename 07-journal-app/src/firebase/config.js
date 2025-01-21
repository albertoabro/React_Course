// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import { configEnvFirebase } from "../config/config";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


const firebaseConfig = {
  
  apiKey: configEnvFirebase.firebaseApyKey,
  authDomain: configEnvFirebase.firebaseAuthDomain,
  projectId: configEnvFirebase.firebaseProjectID,
  storageBucket: configEnvFirebase.firebaseStorageBucket,
  messagingSenderId: configEnvFirebase.firebaseMessagingSenderId,
  appId: configEnvFirebase.firebaseApiId 
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseBD = getFirestore( FirebaseApp );