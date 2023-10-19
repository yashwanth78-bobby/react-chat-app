import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD64j3b6R4r0yv-8AYXL0fx-kApzdZg9Iw",
  authDomain: "app-chat-80fb7.firebaseapp.com",
  projectId: "app-chat-80fb7",
  storageBucket: "app-chat-80fb7.appspot.com",
  messagingSenderId: "880587876737",
  appId: "1:880587876737:web:c9728e82851a7369046080",
  measurementId: "G-1FFE4WVBSY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
