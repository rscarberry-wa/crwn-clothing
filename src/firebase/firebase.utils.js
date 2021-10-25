import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyBdE-fp4xWujDGEWWcPNIxImBvgmJFSxxU",
    authDomain: "crwn-db-1b9be.firebaseapp.com",
    projectId: "crwn-db-1b9be",
    storageBucket: "crwn-db-1b9be.appspot.com",
    messagingSenderId: "359767864064",
    appId: "1:359767864064:web:d796b6cb4353735138f9e5",
    measurementId: "G-TFKSZ3VWLZ"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
// To trigger google login prompt whenever we use this auth provider
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

