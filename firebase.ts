

import { initializeApp, getApp, getApps } from '@firebase/app';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut as firebaseSignOut, type User } from '@firebase/auth';
import { getFirestore, type Firestore } from '@firebase/firestore';

// Firebase configuration is now securely read from environment variables.
// Ensure these are set in your deployment environment.
const firebaseConfig = {
  apiKey: "AIzaSyDc8wSWfDRCo7-I7zi0F5xHs0RaSvAauME",
  authDomain: "smartlocalai-ee2a5.firebaseapp.com",
  projectId: "smartlocalai-ee2a5",
  storageBucket: "smartlocalai-ee2a5.firebasestorage.app",
  messagingSenderId: "499745794023",
  appId: "1:499745794023:web:c0f500a86fe88955c9bf42",
  measurementId: "G-084LWY33K9"
};

let auth: ReturnType<typeof getAuth> | null = null;
let db: Firestore | null = null;
let firebaseError: string | null = null;
let provider: GoogleAuthProvider | null = null;

// Check if the necessary Firebase config variables are provided
if (firebaseConfig.apiKey && firebaseConfig.projectId) {
  try {
    const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);
    provider = new GoogleAuthProvider();
  } catch (error: any) {
    console.error("Firebase initialization failed:", error);
    firebaseError = error.message || "An unknown error occurred during Firebase initialization.";
    db = null;
    auth = null;
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

export { db, auth, signInWithGoogle, signOut, onAuthStateChanged, firebaseError, User };