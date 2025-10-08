// src/App.tsx

import React, { useState, Suspense, lazy, type FC } from 'react';
import { useAuth } from './hooks/useAuth';
import { useProfiles } from './hooks/useProfiles';
import { LoginView } from './components/LoginView';
import { AppHeader } from './components/AppHeader';
import { LoadingScreen } from './components/LoadingScreen';
import { OfflineBanner } from './components/OfflineBanner';
import { ClientSetupView } from './pages/ClientSetupView';
import { AuditView } from './pages/AuditView';
import { ProfilesView } from './pages/ProfilesView';
import { ProfileDetailView } from './pages/ProfileDetailView';
import { ToolsView } from './pages/ToolsView';
import { ServicesView } from './pages/ServicesView';
import ErrorBoundary from '../ErrorBoundary';
import type { View, Profile, Business } from './types';

// Lazy load the MapView component
const MapView = lazy(() => import('../MapView').then((module) => ({ default: module.MapView })));

const App: FC = () => {
  const { user, loading: authLoading, signIn, signOut } = useAuth();
  const { profiles, loading: profilesLoading, createProfile } = useProfiles();
  const [currentView, setCurrentView] = useState<View>('MAP');
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);
  const [auditBusiness, setAuditBusiness] = useState<Business | undefined>();

  if (authLoading) {
    return <LoadingScreen />;
  }

  if (!user) {
    return <LoginView onSignIn={signIn} />;
  }

  const handleCreateProfile = async (data: { name: string; website?: string; notes?: string }) => {
    await createProfile(data);
    setCurrentView('PROFILES');
  };

  const handleSelectProfile = (profile: Profile) => {
    setSelectedProfile(profile);
    setCurrentView('PROFILE_DETAIL');
  };

  const handleBackToProfiles = () => {
    setSelectedProfile(null);
    setCurrentView('PROFILES');
  };

  const handleRunAudit = (business: Business) => {
    setAuditBusiness(business);
    setCurrentView('AUDIT');
  };

  const handleSaveAudit = async (report: string, clientId: string) => {
    // This would need to be implemented with a proper hook
    console.log('Saving audit:', report, clientId);
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'CLIENT_SETUP':
        return <ClientSetupView onCreateProfile={handleCreateProfile} />;
      case 'AUDIT':
        return <AuditView business={auditBusiness} onSaveAudit={handleSaveAudit} />;
      case 'PROFILES':
        return (
          <ProfilesView
            profiles={profiles}
            onSelectProfile={handleSelectProfile}
            loading={profilesLoading}
          />
        );
      case 'PROFILE_DETAIL':
        return selectedProfile ? (
          <ProfileDetailView
            profile={selectedProfile}
            onBack={handleBackToProfiles}
            onRunAudit={handleRunAudit}
          />
        ) : null;
      case 'TOOLS':
        return <ToolsView />;
      case 'SERVICES':
        return <ServicesView />;
      case 'MAP':
        return (
          <Suspense fallback={<LoadingScreen />}>
            <MapView onStartAudit={handleRunAudit} />
          </Suspense>
        );
      default:
        return null;
    }
  };

  return (
    <ErrorBoundary>
      <div className="app-container">
        <AppHeader
          user={user}
          currentView={currentView}
          setView={setCurrentView}
          onSignOut={signOut}
        />
        <OfflineBanner />
        {renderCurrentView()}
      </div>
    </ErrorBoundary>
  );
};

export default App;
