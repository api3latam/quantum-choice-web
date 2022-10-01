
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

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



// Auth exports
export const auth = firebase.auth();

// Firestore exports
export const firestore = firebase.firestore();

// Storage exports
export const storage = firebase.storage();
