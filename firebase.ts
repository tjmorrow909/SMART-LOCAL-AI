interface ImportMetaEnv {
  VITE_SOME_ENV: string;
  VITE_MAPS_API_KEY: string;
}
interface ImportMeta { env: ImportMetaEnv; }
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, type User } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";
 
const firebaseConfig = {
  apiKey: "AIzaSyBFH5WfN7mUNCjh5kLMsL8GZTVp9BVIvvg",
  authDomain: "smart-local-ai-usa-45ac6.firebaseapp.com",
  projectId: "smart-local-ai-usa-45ac6",
  storageBucket: "smart-local-ai-usa-45ac6.firebasestorage.app",
  messagingSenderId: "1008259191905",
  appId: "1:1008259191905:web:b83c57f8c3e31cb52d8620",
  measurementId: "G-ZQQ60HRE8N"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);

export function getFirebaseErrorMessage(error: any) {
  return error.message;
}

export function signInWithGoogle() {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
}

export { signOut, onAuthStateChanged };
export type { User };
