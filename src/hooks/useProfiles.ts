// src/hooks/useProfiles.ts

import { useState, useEffect } from 'react';
import { db, auth } from '../../firebase';
import type { Profile } from '../types';

export const useProfiles = () => {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!auth.currentUser) return;

    const fetchProfiles = async () => {
      setLoading(true);
      try {
        const q = db.collection('profiles').where('consultant_uid', '==', auth.currentUser!.uid);
        const querySnapshot = await q.get();
        const profileData = querySnapshot.docs.map(
          (doc) =>
            ({
              id: doc.id,
              ...doc.data(),
            }) as Profile
        );
        setProfiles(profileData);
      } catch (error) {
        console.error('Error fetching profiles: ', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfiles();
  }, []);

  const createProfile = async (data: { name: string; website?: string; notes?: string }) => {
    if (!auth.currentUser) throw new Error('Not authenticated');

    const profileData = {
      ...data,
      consultant_uid: auth.currentUser.uid,
      createdAt: new Date(),
    };

    const docRef = await db.collection('profiles').add(profileData);
    const newProfile: Profile = {
      id: docRef.id,
      ...profileData,
      createdAt: { toDate: () => new Date(profileData.createdAt) },
    };

    setProfiles((prev) => [...prev, newProfile]);
    return newProfile;
  };

  return { profiles, loading, createProfile };
};
