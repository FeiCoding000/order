import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebaseConfig from "./firebaseConfig";
import { getDatabase } from 'firebase/database';

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);  
const firestore = getFirestore(app); 

export {db, firestore};