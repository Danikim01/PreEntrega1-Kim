// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsTkL2LGJYlcSdAHSYukUixP0-nw5E2Jc",
  authDomain: "eccomerce-online.firebaseapp.com",
  projectId: "eccomerce-online",
  storageBucket: "eccomerce-online.appspot.com",
  messagingSenderId: "177780552359",
  appId: "1:177780552359:web:0fdc15f276cb0b5734e182"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
