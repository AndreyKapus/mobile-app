
// import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import "firebase/auth";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCuJ4f2Jd8kuLHhgvbE9RrWeCSzPiAa4og",
  authDomain: "mobile-app-e5c59.firebaseapp.com",
  databaseURL: "https://mobile-app-e5c59-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mobile-app-e5c59",
  storageBucket: "mobile-app-e5c59.appspot.com",
  messagingSenderId: "830605306719",
  appId: "1:830605306719:web:99e787a0a5c68ae5cbe4ea",
  measurementId: "G-25L8FEH9KB"
};

// firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth ;