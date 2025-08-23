// Firebase configuration
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, User } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getFunctions } from 'firebase/functions';

// Firebase config object
const firebaseConfig = {
  apiKey: "AIzaSyCE0Ejeun2o_0TroWKF1O3rkJF6XyqJ9us",
  authDomain: "smartlocal-ai.firebaseapp.com",
  projectId: "smartlocal-ai",
  storageBucket: "smartlocal-ai.firebasestorage.app",
  messagingSenderId: "953770623238",
  appId: "1:953770623238:web:fbc6247c764d3e9c029e87",
  measurementId: "G-PQ9ZZKG40W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const functions = getFunctions(app);

// Auth provider
const provider = new GoogleAuthProvider();

// Auth functions
export const signInWithGoogle = () => {
  return signInWithPopup(auth, provider);
};

export const signOutUser = () => {
  return signOut(auth);
};

export const onAuthStateChange = (callback: (user: User | null) => void) => {
  return onAuthStateChanged(auth, callback);
};

// Type exports
export type { User };

export default app;