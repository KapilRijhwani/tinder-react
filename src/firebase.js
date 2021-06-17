import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA07JW7QyoSXINA2qBXslmjD9wDP1vEHZc",
  authDomain: "tinder-react-f13b0.firebaseapp.com",
  projectId: "tinder-react-f13b0",
  storageBucket: "tinder-react-f13b0.appspot.com",
  messagingSenderId: "386749432425",
  appId: "1:386749432425:web:653745940f9c8e6ea218f8",
  measurementId: "G-2XWGSVQ7SG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
