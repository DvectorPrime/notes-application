// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBk9haiRs4KbK5dCZPYB51xvJAtgdQ1N5s",
  authDomain: "notes-app-vn01.firebaseapp.com",
  projectId: "notes-app-vn01",
  storageBucket: "notes-app-vn01.firebasestorage.app",
  messagingSenderId: "570934402735",
  appId: "1:570934402735:web:1b5f00dab0e9c8eb493e5a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);