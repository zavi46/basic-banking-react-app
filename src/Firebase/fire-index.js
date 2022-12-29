import firebase from 'firebase/compat/app'
import { getFirestore } from 'firebase/firestore/lite';
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAP7ZfiFZXVIXUccj6a1cFMTtctBz55YM0",
    authDomain: "banking-app-46.firebaseapp.com",
    projectId: "banking-app-46",
    storageBucket: "banking-app-46.appspot.com",
    messagingSenderId: "65097373601",
    appId: "1:65097373601:web:d34edc6c3e569c89c4dde0",
    measurementId: "G-ZWC9P3G39Q"
  };
  
  
  const app = firebase.initializeApp(firebaseConfig);
  const db = getFirestore(app)

  export {db}