import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAW-EbJVlCCoMntZhfWQ55XiV0IjXVYTlc",
    authDomain: "instagram-clone-38c5f.firebaseapp.com",
    databaseURL: "https://instagram-clone-38c5f-default-rtdb.firebaseio.com",
    projectId: "instagram-clone-38c5f",
    storageBucket: "instagram-clone-38c5f.appspot.com",
    messagingSenderId: "634466823499",
    appId: "1:634466823499:web:76898cc6181dd59877ccce",
    measurementId: "G-BHG75GP3QQ"
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export { db, auth, storage };

