import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/functions';

// --- Type Re-export for compatibility ---
// This allows other files to import the User type consistently.
export type User = firebase.User;

// --- Configuration ---
// Vite exposes env variables on `import.meta.env`.
// These variables should be set in a `.env.local` file at the root of the project.
// Example: VITE_FIREBASE_API_KEY="AIza..."
const firebaseConfig = {
  apiKey: "AIzaSyAQKbUQdmZFfWrD92-SMxthZtgN6Jxuoxg",
  authDomain: "smartlocalai-469603.firebaseapp.com",
  projectId: "smartlocalai-469603",
  storageBucket: "smartlocalai-469603.firebasestorage.app",
  messagingSenderId: "206325636938",
  appId: "1:206325636938:web:16040b951bdfb691fbabb3",
  measurementId: "G-KZHGGD9JVP"
};

// --- Initialization ---
let app: firebase.app.App | null = null;
let auth: firebase.auth.Auth | null = null;
let db: firebase.firestore.Firestore | null = null;
let functions: firebase.functions.Functions | null = null;
let firebaseError: string | null = null;

// Validate configuration
if (!firebaseConfig.apiKey || firebaseConfig.apiKey.includes("xxxxxxxxxx")) {
    firebaseError = "Firebase API Key is not configured correctly. Please set VITE_FIREBASE_API_KEY in your environment.";
} else if (!firebaseConfig.projectId) {
    firebaseError = "Firebase Project ID is not configured. Please set VITE_FIREBASE_PROJECT_ID in your environment.";
}

if (!firebaseError) {
    try {
        if (!firebase.apps.length) {
            app = firebase.initializeApp(firebaseConfig);
        } else {
            app = firebase.app(); // Get default app if already initialized
        }
        auth = firebase.auth(app);
        db = firebase.firestore(app);
        functions = firebase.functions(app);
    } catch (e: any) {
        console.error("Firebase initialization error:", e);
        firebaseError = `Firebase initialization failed: ${e.message}. Please check your Firebase project configuration.`;
    }
}

// --- Authentication Functions ---
const provider = auth ? new firebase.auth.GoogleAuthProvider() : null;

/**
 * Initiates Google Sign-In flow.
 */
const signInWithGoogle = async () => {
    if (!auth || !provider) {
        throw new Error("Firebase Auth is not initialized. Check your Firebase configuration.");
    }
    // The user will be prompted to select a Google account.
    await auth.signInWithPopup(provider);
};

/**
 * Signs out the current user.
 */
const signOut = async () => {
    if (!auth) {
        throw new Error("Firebase Auth is not initialized.");
    }
    await auth.signOut();
};


// --- Exports ---
// Note: onAuthStateChanged is now a method on the `auth` object, not a separate export.
export {
    auth,
    db,
    functions,
    firebaseError,
    signInWithGoogle,
    signOut,
};