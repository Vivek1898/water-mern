import * as firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5nDTQSJlzU2ubU4q86Vyw9SBkrfEO73U",
  authDomain: "ecoommer-a734a.firebaseapp.com",
  projectId: "ecoommer-a734a",
  storageBucket: "ecoommer-a734a.appspot.com",
  messagingSenderId: "555561512859",
  appId: "1:555561512859:web:a3becdf2f3b36a3ce7bb3e",
  measurementId: "G-2MQL5KMTKX"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
 
export const FacebookAuthProvider = new firebase.auth.FacebookAuthProvider();
export {firebase};
