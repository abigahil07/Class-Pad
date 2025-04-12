import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {

    apiKey: "AIzaSyC6ZGbL2IqjLkMkaDVsnc7FFbzzcwHpEuU",

    authDomain: "classpad-d631c.firebaseapp.com",

    projectId: "classpad-d631c",

    storageBucket: "classpad-d631c.firebasestorage.app",

    messagingSenderId: "848558944581",

    appId: "1:848558944581:web:2c6909cb8aed86554bce2c"

  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);

//obtentemos la base de datos
const db = getFirestore(app);

export { db };