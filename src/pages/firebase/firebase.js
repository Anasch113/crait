import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyARkDELtMZLcVEsxGZsQTIyKNiWFuoX-ww",
    authDomain: "youcoin-60a70.firebaseapp.com",
    projectId: "youcoin-60a70",
    storageBucket: "youcoin-60a70.appspot.com",
    messagingSenderId: "121578535180",
    appId: "1:121578535180:web:774e66110a9d8c3a173129"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();