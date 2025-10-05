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
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyAylaaHTNErQ5xi0wXs0IHtTPunSKOvAHg",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "smartlocalai-470220.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "smartlocalai-470220",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "smartlocalai-470220.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "388512791209",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:388512791209:web:9f784d1d0334c21ea547b8",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-WR2DYTW3K9"
};

// --- Initialization ---
let app: firebase.app.App | null = null;
let auth: firebase.auth.Auth | null = null;
let db: firebase.firestore.Firestore | null = null;
let functions: firebase.functions.Functions | null = null;
let firebaseError: string | null = null;

// Validate configuration
if (!firebaseConfig.apiKey || firebaseConfig.apiKey.includes("placeholder") || firebaseConfig.apiKey.includes("your_")) {
    firebaseError = "🔥 Firebase API Key is not configured. Please:\n\n1. Go to https://console.firebase.google.com/\n2. Select project: smartlocalai-470220\n3. Go to Project Settings > General\n4. Copy your Web App config\n5. Update VITE_FIREBASE_API_KEY in .env.local";
} else if (!firebaseConfig.projectId) {
    firebaseError = "Firebase Project ID is not configured. Please set VITE_FIREBASE_PROJECT_ID in your environment.";
} else if (firebaseConfig.appId.includes("placeholder") || firebaseConfig.appId.includes("your_")) {
    firebaseError = "🔥 Firebase App ID is not configured. Please update VITE_FIREBASE_APP_ID in .env.local with your actual App ID from Firebase Console.";
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
 * Initiates Google Sign-In flow using redirect method to avoid popup blockers.
 * This is more reliable in production environments with strict popup policies.
 */
const signInWithGoogle = async () => {
    if (!auth || !provider) {
        throw new Error("Firebase Auth is not initialized. Check your Firebase configuration.");
    }
    
    try {
        // Use redirect method directly to avoid popup blockers
        console.log('Initiating Google Sign-In redirect...');
        await auth.signInWithRedirect(provider);
        // Note: This will redirect the page, completion handled by getRedirectResult
    } catch (error: any) {
        console.error("Redirect sign-in failed:", error);
        
        // Provide more specific error messages
        if (error.code === 'auth/api-key-not-valid') {
            throw new Error("Firebase API key is invalid. Please check your Firebase project configuration.");
        } else if (error.code === 'auth/project-not-found') {
            throw new Error("Firebase project not found. Please verify your project ID.");
        } else if (error.code === 'auth/invalid-api-key') {
            throw new Error("Invalid Firebase API key. Please update your configuration.");
        } else if (error.code === 'auth/unauthorized-domain') {
            throw new Error("This domain is not authorized for Firebase authentication. Please add it to your Firebase project settings.");
        } else {
            throw new Error(`Authentication failed: ${error.message}`);
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