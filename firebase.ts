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
  authDomain: import.meta.env.DEV ? 'localhost' : import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// --- Critical Configuration Check ---
if (!firebaseConfig.apiKey || !firebaseConfig.authDomain || !firebaseConfig.projectId) {
  throw new Error(
    'Firebase configuration is incomplete. Please make sure all required environment variables (VITE_FIREBASE_*) are set in your .env file.'
  );
}

// --- Initialization ---
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

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
export { auth, db, functions, signInWithGoogle, signOut };
