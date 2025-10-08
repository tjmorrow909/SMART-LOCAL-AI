// src/types/index.ts

export type View =
  | 'CLIENT_SETUP'
  | 'AUDIT'
  | 'PROFILES'
  | 'TOOLS'
  | 'MAP'
  | 'SERVICES'
  | 'PROFILE_DETAIL';

export interface Business {
  id?: string; // Client's Firestore document ID
  name: string;
  website?: string;
}

export interface Profile extends Business {
  id: string;
  notes?: string;
  consultant_uid: string;
  createdAt: { toDate: () => Date }; // Firestore Timestamp
}

export interface Audit {
  id: string;
  ai_report: string;
  date_completed: { toDate: () => Date };
  expanded?: boolean; // For UI state
}
