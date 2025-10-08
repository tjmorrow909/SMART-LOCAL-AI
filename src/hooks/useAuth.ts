// src/hooks/useAuth.ts

import { useState, useEffect } from 'react';
import { auth, signInWithGoogle, signOut as firebaseSignOut, type User } from '../../firebase';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const signIn = () => signInWithGoogle();
  const signOut = () => firebaseSignOut();

  return { user, loading, signIn, signOut };
};
