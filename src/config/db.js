import Firebase from "firebase";

export const db = Firebase.initializeApp({
  apiKey: "AIzaSyAvvH5I5x8pDQ4yDVjy8UAQrYzxNunQ-jY",
  authDomain: "slam-ak2018.firebaseapp.com",
  databaseURL: "https://slam-ak2018.firebaseio.com",
  projectId: "slam-ak2018",
  storageBucket: "slam-ak2018.appspot.com",
  messagingSenderId: "277984518191"
}).database();
