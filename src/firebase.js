import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyA-8yuy_QGgGuUEpIZ6MsexOuSnHw2azbg",
  authDomain: "whatsapp-clone-c9e32.firebaseapp.com",
  projectId: "whatsapp-clone-c9e32",
  storageBucket: "whatsapp-clone-c9e32.appspot.com",
  messagingSenderId: "303050659766",
  appId: "1:303050659766:web:e7b7940d573b2f2aa39317",
  measurementId: "G-JV0NJ81TFW"
};


// Initialize Firebase
//this special line of code connects everything
const firebaseapp = firebase.initializeApp(firebaseConfig);

// this is for database connection
const db = firebaseapp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;