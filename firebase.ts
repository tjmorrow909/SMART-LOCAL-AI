import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/functions';

// --- Type Re-export for compatibility ---
// This allows other files to import the User type consistently.
export type User = firebase.User;

// --- Configuration ---
// Vite exposes env variables on `import.meta.env`.
// These variables should be set in a `.env` file at the root of the project.
// Example: VITE_FIREBASE_API_KEY="AIza..."
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// --- Initialization ---
let app: firebase.app.App | null = null;
let auth: firebase.auth.Auth | null = null;
let db: firebase.firestore.Firestore | null = null;
let functions: firebase.functions.Functions | null = null;
let firebaseError: string | null = null;

// Validate configuration
if (!firebaseConfig.apiKey) {
    firebaseError = "Firebase API Key is not configured. Please set VITE_FIREBASE_API_KEY in your .env file.";
} else if (!firebaseConfig.projectId) {
    firebaseError = "Firebase Project ID is not configured. Please set VITE_FIREBASE_PROJECT_ID in your .env file.";
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
 * Initiates Google Sign-In flow using a popup window. This is generally more
 * compatible with embedded or sandboxed environments than the redirect method.
 */
const signInWithGoogle = async () => {
    if (!auth || !provider) {
        throw new Error("Firebase Auth is not initialized. Check your Firebase configuration.");
    }
    try {
        await auth.signInWithPopup(provider);
    } catch (error: any) {
        console.error("Google Sign-In Error:", error);
        // Handle specific errors for a better user experience.
        if (error.code === 'auth/popup-blocked') {
            alert('Popup was blocked by your browser. Please allow popups for this site and try again.');
        } else if (error.code === 'auth/popup-closed-by-user') {
            // This is a common user action, not a technical error. Can be ignored.
            console.log('Sign-in popup was closed by the user.');
        } else {
            // For other errors, show a generic message.
            alert(`An error occurred during sign-in: ${error.message}`);
        }
    }
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