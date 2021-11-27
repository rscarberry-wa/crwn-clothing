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

        console.log("USERAUTH: ", userAuth);
        console.log("ADDITIONALDATA: ", additionalData);

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

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        // Let firebase assign an id by not supplying anything to doc()
        const newDocRef = collectionRef.doc()
        batch.set(newDocRef, obj);
    })

    return await batch.commit();
}

firebase.initializeApp(config);

export const convertCollectionSnapshotToMap = (collectionsSnapshot) => {
    const transformedCollection = collectionsSnapshot.docs.map(doc => {
        const { title, items } = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        };
    });

    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});
}

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
        }, reject)
    });
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
// To trigger google login prompt whenever we use this auth provider
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;

