import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyAWWKjFUAAsvOuw4H1R2eQ_c4NLOkq1hIU",
    authDomain: "crwn-db-a87f1.firebaseapp.com",
    projectId: "crwn-db-a87f1",
    storageBucket: "crwn-db-a87f1.appspot.com",
    messagingSenderId: "666621788690",
    appId: "1:666621788690:web:a6a75c532618279c170ecb"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    
    if (!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();
    
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }  
    
    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
