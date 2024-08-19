import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzaVN-F2cQZG1vpvu8AarDfneTLwRNOD4",
  authDomain: "addisblog-9aaed.firebaseapp.com",
  projectId: "addisblog-9aaed",
  storageBucket: "addisblog-9aaed.appspot.com",
  messagingSenderId: "741471105726",
  appId: "1:741471105726:web:11f15a44b52e772f4fa4ef",
  measurementId: "G-NEV8QHDJJF",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();
export const auth = getAuth();
// const analytics = getAnalytics(app);
