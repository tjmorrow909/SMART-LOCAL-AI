import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  signOut as firebaseSignOut,
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getFunctions } from 'firebase/functions';

// --- Configuration ---
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// --- Initialization ---
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

// --- Error Handling ---
let firebaseError: string | null = null;
if (!firebaseConfig.apiKey) {
  firebaseError =
    'Firebase API Key is not configured. Please set VITE_FIREBASE_API_KEY in your environment.';
} else if (!firebaseConfig.projectId) {
  firebaseError =
    'Firebase Project ID is not configured. Please set VITE_FIREBASE_PROJECT_ID in your environment.';
}

// --- Authentication Functions ---
const provider = new GoogleAuthProvider();

/**
 * Initiates Google Sign-In flow using redirect method to avoid popup blockers.
 */
const signInWithGoogle = async () => {
  await signInWithRedirect(auth, provider);
};

/**
 * Signs out the current user.
 */
const signOut = async () => {
  await firebaseSignOut(auth);
};

// --- User Type ---
export type User = import('firebase/auth').User;

// --- Exports ---
export { auth, db, functions, signInWithGoogle, signOut, firebaseError };
