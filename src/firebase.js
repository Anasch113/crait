// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDsclfTvSxoM-3f-Dtcv2Q8QrcMAfoNcqA",
  authDomain: "crait-3589b.firebaseapp.com",
  databaseURL: "https://crait-3589b-default-rtdb.firebaseio.com",
  projectId: "crait-3589b",
  storageBucket: "crait-3589b.firebasestorage.app",
  messagingSenderId: "842837260830",
  appId: "1:842837260830:web:9fd5617f0dfac1cc004c0f",
  measurementId: "G-XFDXC650LQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const database = getDatabase(app)



export default app;