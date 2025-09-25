import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbv6wMHp40eMDDZAGrZGOEUizjiUH3cSw",
  authDomain: "mockmate-interviewprep.firebaseapp.com",
  projectId: "mockmate-interviewprep",
  storageBucket: "mockmate-interviewprep.firebasestorage.app",
  messagingSenderId: "95095406231",
  appId: "1:95095406231:web:9933203c46f2f37caff3d2",
  measurementId: "G-F7JKQW3F8B",
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
