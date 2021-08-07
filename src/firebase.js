import firebase from "firebase/app";
import "firebase/firestore";
var firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE,
  authDomain: "anime-store-9933a.firebaseapp.com",
  projectId: "anime-store-9933a",
  storageBucket: "anime-store-9933a.appspot.com",
  messagingSenderId: "169700000678",
  appId: "1:169700000678:web:02afd3e88dc585fa328567",
  measurementId: "G-LJ8TYQ23CM",
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();
