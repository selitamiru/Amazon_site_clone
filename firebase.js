import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDmGMpEUhQW3aLKo--SLDeA8kaDheqVmPM",
  authDomain: "febclass2023-ce07f.firebaseapp.com",
  projectId: "febclass2023-ce07f",
  storageBucket: "febclass2023-ce07f.appspot.com",
  messagingSenderId: "441927449996",
  appId: "1:441927449996:web:4fe3c8bc624d012e2caaa9",
  measurementId: "G-MN9Y524L4M",
};
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();
export { auth, db };
