import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyAcSua670w-Qjkdtsj2TPxwYdCSFG-Phqs",
    authDomain: "twitter-clone-5849d.firebaseapp.com",
    databaseURL: "https://twitter-clone-5849d.firebaseio.com",
    projectId: "twitter-clone-5849d",
    storageBucket: "twitter-clone-5849d.appspot.com",
    messagingSenderId: "1011134618766",
    appId: "1:1011134618766:web:4bcddf3c5ae6cde12e3ddf",
    measurementId: "G-D9MWCXRVH2"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);

  const db= firebaseApp.firestore();

  export default db;