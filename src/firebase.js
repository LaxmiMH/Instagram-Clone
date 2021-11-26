import firebase from "firebase/compat";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBWWiBE8CHW2jd5CzBZPAQZTbS7s3nfQ14",
  authDomain: "instagram-clone-45fe3.firebaseapp.com",
  projectId: "instagram-clone-45fe3",
  storageBucket: "instagram-clone-45fe3.appspot.com",
  messagingSenderId: "490538721803",
  appId: "1:490538721803:web:4610fb8a62ebb4767a5d0e",
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();

export { db, auth, storage };
