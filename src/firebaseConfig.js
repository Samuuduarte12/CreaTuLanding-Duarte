import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDcMo1rQtxRQ86fD_zB8DNT3TPlv2j3AZ8",
  authDomain: "arte-vivo-775a1.firebaseapp.com",
  projectId: "arte-vivo-775a1",
  storageBucket: "arte-vivo-775a1.firebasestorage.app",
  messagingSenderId: "1074045171776",
  appId: "1:1074045171776:web:5f95f32eb58a40a00487a5",
  measurementId: "G-0J82PCHK7G"
};

const app = initializeApp(firebaseConfig);

export const  db = getFirestore(app);

