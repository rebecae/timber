import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBghBFlvOSyQ_MWgqbGARL-aDlEV_31qRc",
  authDomain: "rebetimber.firebaseapp.com",
  projectId: "rebetimber",
  storageBucket: "rebetimber.appspot.com",
  messagingSenderId: "1057940735029",
  appId: "1:1057940735029:web:fb6aa793595ecd1bd5dd7c",
  measurementId: "G-P8ZFS6GE6M"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
