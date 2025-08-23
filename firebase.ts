import { initializeApp, type FirebaseApp } from "firebase/app";
import {
    getAuth,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    signOut as firebaseSignOut,
    type User
} from "firebase/auth";
import { getFirestore, type Firestore } from "firebase/firestore";
import { getFunctions, type Functions } from "firebase/functions";

// --- Configuration ---
// Vite exposes env variables on `import.meta.env`.
// These variables should be set in a `.env.local` file at the root of the project.
// Example: VITE_FIREBASE_API_KEY="AIza..."
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// --- Initialization ---
let app: FirebaseApp | null = null;
let auth: ReturnType<typeof getAuth> | null = null;
let db: Firestore | null = null;
let functions: Functions | null = null;
let firebaseError: string | null = null;

// Validate configuration
if (!firebaseConfig.apiKey || firebaseConfig.apiKey.includes("AIzaSyXXX")) {
    firebaseError = "Firebase API Key is not configured correctly. Please set VITE_FIREBASE_API_KEY in your .env.local file.";
} else if (!firebaseConfig.projectId) {
    firebaseError = "Firebase Project ID is not configured. Please set VITE_FIREBASE_PROJECT_ID in your .env.local file.";
}

if (!firebaseError) {
    try {
        app = initializeApp(firebaseConfig);
        auth = getAuth(app);
        db = getFirestore(app);
        functions = getFunctions(app);
    } catch (e: any) {
        console.error("Firebase initialization error:", e);
        firebaseError = `Firebase initialization failed: ${e.message}. Please check your Firebase project configuration.`;
    }
}

// --- Authentication Functions ---
const provider = auth ? new GoogleAuthProvider() : null;

/**
 * Initiates Google Sign-In flow.
 */
const signInWithGoogle = async () => {
    if (!auth || !provider) {
        throw new Error("Firebase Auth is not initialized. Check your Firebase configuration.");
    }
    // The user will be prompted to select a Google account.
    await signInWithPopup(auth, provider);
};

/**
 * Signs out the current user.
 */
const signOut = async () => {
    if (!auth) {
        throw new Error("Firebase Auth is not initialized.");
    }
    await firebaseSignOut(auth);
};


// --- Exports ---
export {
    auth,
    db,
    functions,
    firebaseError,
    signInWithGoogle,
    signOut,
    onAuthStateChanged,
    type User
};
