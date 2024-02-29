import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyARkDELtMZLcVEsxGZsQTIyKNiWFuoX-ww",
  authDomain: "youcoin-60a70.firebaseapp.com",
  databaseURL: "https://youcoin-60a70-default-rtdb.firebaseio.com",
  projectId: "youcoin-60a70",
  storageBucket: "youcoin-60a70.appspot.com",
  messagingSenderId: "121578535180",
  appId: "1:121578535180:web:774e66110a9d8c3a173129",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const database = getDatabase(app);

export { auth, firestore, database };
export default app;
