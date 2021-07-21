import firebase from "firebase/app";
import "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBd1od-_1umNN7C1V0S2-tCiOaYuFVhUh0",
  authDomain: "loginauth-1e87a.firebaseapp.com",
  projectId: "loginauth-1e87a",
  storageBucket: "loginauth-1e87a.appspot.com",
  messagingSenderId: "1037664033829",
  appId: "1:1037664033829:web:f9366076446501e263f3cc",
  measurementId: "G-7DQZNENC55",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
