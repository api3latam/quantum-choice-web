import { initializeApp,
  apps,
  firestore, } from 'firebase';

const firebaseConfig = {
  apiKey: process.env['NEXT_PUBLIC_FIREBASE_API'],
  authDomain: "quantum-choice.firebaseapp.com",
  projectId: "quantum-choice",
  storageBucket: "quantum-choice.appspot.com",
  messagingSenderId: ["NEXT_PUBLIC_FIREBASE_MESSAGE"],
  appId: process.env["NEXT_PUBLIC_FIREBASE_ID"],
  measurementId: "G-2HP3ERTHWP"
};

let firestoreClient;

if (!apps.length) {
  initializeApp(firebaseConfig);
  firestoreClient = firestore(apps[0]);
};

export default firestoreClient;
