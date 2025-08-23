import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut as firebaseSignOut, type User } from 'firebase/auth';
import { getFirestore, type Firestore } from 'firebase/firestore';
import { getFunctions, type Functions } from 'firebase/functions';

// Firebase configuration is now securely read from environment variables.
// Ensure these are set in your deployment environment using the VITE_ prefix.
const env = (import.meta as any).env;
const firebaseConfig = {
  apiKey: "AIzaSyAQKbUQdmZFfWrD92-SMxthZtgN6Jxuoxg",
  authDomain: "smartlocalai-469603.firebaseapp.com",
  projectId: "smartlocalai-469603",
  storageBucket: "smartlocalai-469603.firebasestorage.app",
  messagingSenderId: "206325636938",
  appId: "1:206325636938:web:16040b951bdfb691fbabb3",
  measurementId: "G-KZHGGD9JVP"
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
