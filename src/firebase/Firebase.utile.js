import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyCzZZnSlz9wtFSRDXQq2YO_J968IFuTSCM",
  authDomain: "crown-db-1c8fb.firebaseapp.com",
  projectId: "crown-db-1c8fb",
  storageBucket: "crown-db-1c8fb.appspot.com",
  messagingSenderId: "442961178885",
  appId: "1:442961178885:web:c3d08ecf4ccf862e97c76c",
  measurementId: "G-PWLCJP37E0",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
