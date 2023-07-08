import { initializeApp } from "firebase/app";
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCuJ4f2Jd8kuLHhgvbE9RrWeCSzPiAa4og",
  authDomain: "mobile-app-e5c59.firebaseapp.com",
  projectId: "mobile-app-e5c59",
  storageBucket: "mobile-app-e5c59.appspot.com",
  messagingSenderId: "830605306719",
  appId: "1:830605306719:web:cac89973fb81ac70cbe4ea",
  measurementId: "G-KLZFWC5JNT"
};

const firebase = initializeApp(firebaseConfig);

export default firebase
