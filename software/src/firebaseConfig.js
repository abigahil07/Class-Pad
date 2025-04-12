import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVR9FFmvUoPDrj-Forbvs56JSN_63h8Hc",
  authDomain: "classpad-eb566.firebaseapp.com",
  projectId: "classpad-eb566",
  storageBucket: "classpad-eb566.firebasestorage.app",
  messagingSenderId: "491293655554",
  appId: "1:491293655554:web:db9626bc3a4eae00c79d1b"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

//obtentemos la base de datos
const db = getFirestore(app);

export { db };