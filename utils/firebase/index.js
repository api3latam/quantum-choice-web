import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: process.env['NEXT_PUBLIC_FIREBASE_API'],
  authDomain: "quantum-choice.firebaseapp.com",
  projectId: "quantum-choice",
  storageBucket: "quantum-choice.appspot.com",
  messagingSenderId: ["NEXT_PUBLIC_FIREBASE_MESSAGE"],
  appId: process.env["NEXT_PUBLIC_FIREBASE_ID"],
  measurementId: "G-2HP3ERTHWP"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Firestore exports for convenience
export const firestore = firebase.firestore();

// Storage exports
export const storage = firebase.storage();

export * from "./address";
