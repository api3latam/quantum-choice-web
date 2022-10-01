//import firebase from firebase/app

import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBSJpJo7ua78JpXvaqoAGpBxwIFrBE5Pu0",
  authDomain: "quantum-choice.firebaseapp.com",
  projectId: "quantum-choice",
  storageBucket: "quantum-choice.appspot.com",
  messagingSenderId: "520450701307",
  appId: "1:520450701307:web:feeda79ac8c61b51a5bd5e",
  measurementId: "G-2HP3ERTHWP"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}



// Firestore exports for convenience
export const firestore = firebase.firestore();

// Storage exports
export const storage = firebase.storage();
