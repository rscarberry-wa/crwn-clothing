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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    // Will be null if called after sign out.
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        // Destructure out these fields
        const { displayName, email } = userAuth;
        // Time of creation
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName: displayName,
                email: email,
                createdAt: createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
// To trigger google login prompt whenever we use this auth provider
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

