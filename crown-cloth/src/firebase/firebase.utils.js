import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCBZMzH6na8mNvSs8q8-ZwimliqMVaXYAI",
    authDomain: "crown-db-9faa3.firebaseapp.com",
    projectId: "crown-db-9faa3",
    storageBucket: "crown-db-9faa3.appspot.com",
    messagingSenderId: "604228387924",
    appId: "1:604228387924:web:68591af3fe900f4bbf19c1",
    measurementId: "G-8T426LK5H2"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;