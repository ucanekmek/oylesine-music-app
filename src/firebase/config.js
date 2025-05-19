import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBWksdrExIaNt1Na2KuuagdSsLSc9Iy7jA",
  authDomain: "learnapp-f4408.firebaseapp.com",
  projectId: "learnapp-f4408",
  storageBucket: "learnapp-f4408.firebasestorage.app",
  messagingSenderId: "560839670180",
  appId: "1:560839670180:web:42e6cac3f2860c02356931",
  measurementId: "G-CJTE51W2LP"
};

initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export {auth,db}