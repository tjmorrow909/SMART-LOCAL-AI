
import { initializeApp, getApp, getApps } from '@firebase/app';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut as firebaseSignOut, type User } from '@firebase/auth';
import { getFirestore, type Firestore } from '@firebase/firestore';

// Firebase configuration is now securely read from environment variables.
// Ensure these are set in your deployment environment.
const firebaseConfig = {
  apiKey: "AIzaSyDEh4oZeZsc8elIexA1MHKVr3RED1aqgVg",
  authDomain: "smart-local-ai-usa.firebaseapp.com",
  projectId: "smart-local-ai-usa",
  storageBucket: "smart-local-ai-usa.firebasestorage.app",
  messagingSenderId: "878199402577",
  appId: "1:878199402577:web:990be530f0220357210870",
  measurementId: "G-2CHTVK5C3E"
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