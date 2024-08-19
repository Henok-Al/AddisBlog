import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCXXQLCXWdIDnmXFKpiTbBcm_PwyUAcWk",
  authDomain: "music-app-2e605.firebaseapp.com",
  projectId: "music-app-2e605",
  storageBucket: "music-app-2e605.appspot.com",
  messagingSenderId: "741745042748",
  appId: "1:741745042748:web:9265651242d989caa26a39",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
