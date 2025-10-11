// src/hooks/useAuth.ts
import { useState, useEffect } from 'react';
import {
  auth,
  signInWithGoogle,
  signOut as firebaseSignOut,
  type User,
  getRedirectResult,
  onAuthStateChanged,
} from '../../firebase';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true); // Start as true

  useEffect(() => {
    let unsubscribe: () => void;

    const checkAuth = async () => {
      try {
        // First, check for the redirect result. This promise resolves
        // after the auth state has been updated by Firebase internally.
        await getRedirectResult(auth);

        // Now, set up the listener. By this point, any redirect-based
        // user data is available, and onAuthStateChanged will fire with
        // the correct user state immediately.
        unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
          // We are now definitively finished with the auth check.
          setLoading(false);
        });
      } catch (error) {
        console.error("Auth initialization error:", error);
        // Even if there's an error, we must stop loading.
        setLoading(false);
      }
    };

    checkAuth();

    // The cleanup function will be called when the component unmounts.
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, []); // Run only once on component mount

  const signIn = () => signInWithGoogle();
  const signOut = () => firebaseSignOut();

  return { user, loading, signIn, signOut };
};
