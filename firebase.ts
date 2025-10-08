import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithRedirect, signOut as firebaseSignOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

// --- Configuration ---
const firebaseConfig = {
  apiKey: "AIzaSyBJ0VKNcUOrDCW8TehNJhjzHxxebZDYGmI",
  authDomain: "smart-local-ai.firebaseapp.com",
  projectId: "smart-local-ai",
  storageBucket: "smart-local-ai.appspot.com",
  messagingSenderId: "873357924119",
  appId: "1:873357924119:web:e62fb2feddc1ebb1d08952",
  measurementId: "G-EBE7V88V8H"
};

// --- Initialization ---
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

// --- Error Handling ---
let firebaseError: string | null = null;
if (!firebaseConfig.apiKey) {
  firebaseError = "Firebase API Key is not configured.";
} else if (!firebaseConfig.projectId) {
  firebaseError = "Firebase Project ID is not configured.";
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
export type User = import("firebase/auth").User;

// --- Exports ---
export {
  auth,
  db,
  functions,
  signInWithGoogle,
  signOut,
  firebaseError,
};