import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBNHEYsEE8q4JJsd7a7eEEelf51ykseC3E",
  authDomain: "instagramclone-540ba.firebaseapp.com",
  projectId: "instagramclone-540ba",
  storageBucket: "instagramclone-540ba.appspot.com",
  messagingSenderId: "306165816391",
  appId: "1:306165816391:web:d358518f68d49195072562",
  measurementId: "G-R9K6TWC5GY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
