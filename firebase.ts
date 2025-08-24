// firebase.ts (for Firebase v9+ modular SDK)
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  User
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getFunctions } from 'firebase/functions';

// --- Your config object (replace with your values or .env variables) ---
const firebaseConfig = {
  apiKey: "AIzaSyAQKbUQdmZFfWrD92-SMxthZtgN6Jxuoxg",
  authDomain: "smartlocalai-469603.firebaseapp.com",
  projectId: "smartlocalai-469603",
  storageBucket: "smartlocalai-469603.appspot.com", // <-- FIXED
  messagingSenderId: "206325636938",
  appId: "1:206325636938:web:16040b951bdfb691fbabb3",
  measurementId: "G-KZHGGD9JVP"
};

// --- Initialize Firebase ---
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();

// --- Authentication Helpers ---
function signInWithGoogle() {
  return signInWithPopup(auth, provider);
}
function onAuthChange(callback: (user: User | null) => void) {
  return onAuthStateChanged(auth, callback);
}

// --- Export everything needed ---
export {
  auth,
  db,
  functions,
  provider,
  signInWithGoogle,
  firebaseSignOut as signOut,
  onAuthChange,
  User
};
