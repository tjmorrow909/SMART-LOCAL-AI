import { initializeApp, getApp, getApps } from '@firebase/app';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut as firebaseSignOut, type User } from '@firebase/auth';
import { getFirestore, type Firestore } from '@firebase/firestore';
import { getFunctions, type Functions } from 'firebase/functions';

// Firebase configuration is now securely read from environment variables.
// Ensure these are set in your deployment environment using the VITE_ prefix.
const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID,
  measurementId: process.env.VITE_FIREBASE_MEASUREMENT_ID
};

let auth: ReturnType<typeof getAuth> | null = null;
let db: Firestore | null = null;
let functions: Functions | null = null;
let firebaseError: string | null = null;
let provider: GoogleAuthProvider | null = null;

// Check if the necessary Firebase config variables are provided
if (firebaseConfig.apiKey && firebaseConfig.projectId) {
  try {
    const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);
    functions = getFunctions(app);
    provider = new GoogleAuthProvider();
  } catch (error: any) {
    console.error("Firebase initialization failed:", error);
    firebaseError = error.message || "An unknown error occurred during Firebase initialization.";
    db = null;
    auth = null;
    functions = null;
  }
} else {
  firebaseError = "Firebase configuration is missing from environment variables. Please set them to connect to Firebase.";
  console.warn(firebaseError);
}

const signInWithGoogle = () => {
    if (!auth || !provider) {
        throw new Error("Firebase Auth not initialized. Check your Firebase configuration.");
    }
    return signInWithPopup(auth, provider);
}

const signOut = () => {
    if (!auth) {
        throw new Error("Firebase Auth not initialized. Check your Firebase configuration.");
    }
    return firebaseSignOut(auth);
}

export { db, auth, functions, signInWithGoogle, signOut, onAuthStateChanged, firebaseError, User };