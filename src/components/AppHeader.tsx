// src/components/AppHeader.tsx

import React, { type FC } from 'react';
import type { View } from '../types';
import type { User } from 'firebase/auth';

interface AppHeaderProps {
  user: User;
  currentView: View;
  setView: (view: View) => void;
  onSignOut: () => void;
}

export const AppHeader: FC<AppHeaderProps> = ({ user, currentView, setView, onSignOut }) => {
  const views: { id: View; label: string }[] = [
    { id: 'MAP', label: 'Map View' },
    { id: 'SERVICES', label: 'Service Packages' },
    { id: 'CLIENT_SETUP', label: 'Client Setup' },
    { id: 'PROFILES', label: 'Profiles' },
    { id: 'TOOLS', label: 'AI Tools' },
  ];

  return (
    <header className="app-header">
      <div className="header-branding">
        <div className="text-logo-header">SMARTLOCAL.AI</div>
      </div>
      <nav className="app-nav">
        {views.map((viewItem) => {
          const isActive =
            currentView === viewItem.id || (currentView === 'PROFILE_DETAIL' && viewItem.id === 'PROFILES');
          return (
            <button
              key={viewItem.id}
              className={`nav-button ${isActive ? 'active' : ''}`}
              onClick={() => setView(viewItem.id)}
              aria-current={isActive ? 'page' : undefined}
            >
              {viewItem.label}
            </button>
          );
        })}
      </nav>
      <div className="header-user-info">
        <img src={user.photoURL ?? undefined} alt={user.displayName ?? 'User'} />
        <span className="user-name">{user.displayName}</span>
        <button className="btn-sign-out" onClick={onSignOut}>
          Sign Out
        </button>
      </div>
    </header>
  );
};
