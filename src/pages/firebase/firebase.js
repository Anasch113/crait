import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase, ref, child, get } from "firebase/database";

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

let activeUser = null;
let username = null;

async function getUserByUID(uid) {
  try {
    const snapshot = await get(child(ref(database), `users/${uid}`));
    if (snapshot.exists()) {
      activeUser = snapshot.val();
      username = activeUser.username;
      console.log(activeUser)
      return activeUser;
    } else {
      activeUser = null;
      username = null;
      return null;
    }
  } catch (error) {
    console.error("Error getting user:", error);
    throw error;
  }
}

export { auth, firestore, database, getUserByUID, activeUser, username };
export default app;
