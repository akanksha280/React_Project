// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getAnalytics } from "firebase/analytics";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//Hoisting-url:https://react-firebase-app-de032.web.app
const firebaseConfig = {
  apiKey: "AIzaSyAgrhYaNt01eToZUgIGLJa0Gpv3hheUdxM",
  authDomain: "react-firebase-app-de032.firebaseapp.com",
  projectId: "react-firebase-app-de032",
  storageBucket: "react-firebase-app-de032.appspot.com",
  messagingSenderId: "396459585361",
  appId: "1:396459585361:web:54518a9d718464c3992d70",
  measurementId: "G-7T2EZQB60C",
};
// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);
// Use these for db & auth
const db = firebaseApp.firestore();
const analytics = getAnalytics(firebaseApp);
// const auth = firebase.auth();
export { db, analytics };
