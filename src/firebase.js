import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCc9MXz_MMuemNLUEchNAFBLl88oi-SxCM",
  authDomain: "facebook-clone-1baf7.firebaseapp.com",
  projectId: "facebook-clone-1baf7",
  storageBucket: "facebook-clone-1baf7.appspot.com",
  messagingSenderId: "157027444472",
  appId: "1:157027444472:web:1e11a4f6de5a8ec770bd0d",
  measurementId: "G-QFPX6XFHTJ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;