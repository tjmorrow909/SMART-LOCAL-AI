// src/pages/ProfilesView.tsx

import React, { type FC } from 'react';
import type { Profile } from '../types';

interface ProfilesViewProps {
  profiles: Profile[];
  onSelectProfile: (profile: Profile) => void;
  loading: boolean;
}

export const ProfilesView: FC<ProfilesViewProps> = ({ profiles, onSelectProfile, loading }) => {
  if (loading) {
    return (
      <div className="view-container profiles-view-container">
        <h2>Client Profiles</h2>
        <div className="loading-spinner"></div>
      </div>
    );
  }

  if (profiles.length === 0) {
    return (
      <div className="view-container profiles-view-container">
        <h2>Client Profiles</h2>
        <div className="no-profiles-message">
          <p>You haven't created any client profiles yet.</p>
          <p>Go to the 'Client Setup' tab to add your first client.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="view-container profiles-view-container">
      <h2>Client Profiles</h2>
      <div className="profiles-grid">
        {profiles.map((profile) => (
          <div
            key={profile.id}
            className="profile-card"
            tabIndex={0}
            onClick={() => onSelectProfile(profile)}
            onKeyDown={(e) => e.key === 'Enter' && onSelectProfile(profile)}
          >
            <h3>{profile.name}</h3>
            {profile.website && (
              <a
                href={profile.website}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                {profile.website}
              </a>
            )}
            <div className="profile-footer">
              <span className="date-info">
                Created: {new Date(profile.createdAt?.toDate()).toLocaleDateString()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
