import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: process.env['NEXT_PUBLIC_FIREBASE_API'],
  authDomain: "quantum-choice.firebaseapp.com",
  projectId: "quantum-choice",
  storageBucket: "quantum-choice.appspot.com",
  messagingSenderId: ["NEXT_PUBLIC_FIREBASE_MESSAGE"],
  appId: process.env["NEXT_PUBLIC_FIREBASE_ID"],
  measurementId: "G-2HP3ERTHWP"
};

const app = initializeApp(firebaseConfig);

export const firestoreClient = getFirestore(app);
