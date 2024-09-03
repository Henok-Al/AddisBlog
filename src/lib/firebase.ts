import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2Om0WCpZgZRvT5zWNJhfqhpS5Ampe7BY",
  authDomain: "yebalespices-6fcc3.firebaseapp.com",
  projectId: "yebalespices-6fcc3",
  storageBucket: "yebalespices-6fcc3.appspot.com",
  messagingSenderId: "558175672217",
  appId: "1:558175672217:web:12b82532e00780d90ee508",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();
