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
 * Initiates Google Sign-In flow using popup first, with redirect as fallback.
 * This avoids common redirect loop issues while maintaining compatibility.
 */
const signInWithGoogle = async () => {
    if (!auth || !provider) {
        throw new Error("Firebase Auth is not initialized. Check your Firebase configuration.");
    }
    
    try {
        // Try popup first (more reliable, avoids redirect loops)
        const result = await auth.signInWithPopup(provider);
        console.log('Sign-in successful:', result.user.displayName);
        return result;
    } catch (error: any) {
        console.error("Popup sign-in failed, trying redirect:", error);
        
        // If popup fails (blocked, etc.), fallback to redirect
        if (error.code === 'auth/popup-blocked' || error.code === 'auth/popup-closed-by-user') {
            console.log('Popup blocked, using redirect method...');
            try {
                await auth.signInWithRedirect(provider);
                return; // Will complete via getRedirectResult
            } catch (redirectError: any) {
                console.error("Redirect sign-in also failed:", redirectError);
                throw new Error(`Sign-in failed: ${redirectError.message}`);
            }
        }
        
        // Provide more specific error messages for other errors
        if (error.code === 'auth/api-key-not-valid') {
            throw new Error("Firebase API key is invalid. Please check your Firebase project configuration.");
        } else if (error.code === 'auth/project-not-found') {
            throw new Error("Firebase project not found. Please verify your project ID.");
        } else if (error.code === 'auth/invalid-api-key') {
            throw new Error("Invalid Firebase API key. Please update your configuration.");
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