// src/pages/ClientSetupView.tsx

import React, { useState, type FC } from 'react';

interface ClientSetupViewProps {
  onCreateProfile: (profileData: { name: string; website?: string; notes?: string }) => Promise<void>;
}

export const ClientSetupView: FC<ClientSetupViewProps> = ({ onCreateProfile }) => {
  const [name, setName] = useState('');
  const [website, setWebsite] = useState('');
  const [notes, setNotes] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    if (!name.trim()) {
      alert('Business Name is required.');
      return;
    }
    setIsSaving(true);
    try {
      await onCreateProfile({ name, website, notes });
      setName('');
      setWebsite('');
      setNotes('');
    } catch (error) {
      console.error('Failed to save profile:', error);
      alert('Failed to save profile. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="view-container client-setup-view">
      <div className="client-setup-header">
        <h2>Client Onboarding</h2>
        <p>
          Enter your new client&apos;s information. This will create a profile to track audits and
          AI-generated content.
        </p>
      </div>
      <div className="client-setup-layout">
        <div className="notepad-container" style={{ gap: '1rem', textAlign: 'left' }}>
          <div className="form-group">
            <label htmlFor="client-name">Business Name</label>
            <input
              id="client-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g., Joe's Pizza Downtown"
            />
          </div>
          <div className="form-group">
            <label htmlFor="client-website">Website URL</label>
            <input
              id="client-website"
              type="url"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              placeholder="https://www.joespizzadt.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="client-notes">Onboarding Notes</label>
            <textarea
              id="client-notes"
              className="notepad-textarea"
              rows={10}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g., target audience, primary goals for local SEO, main competitors, etc."
            ></textarea>
          </div>
          <div className="notepad-actions">
            <button
              className="btn btn-primary"
              onClick={handleSave}
              disabled={isSaving || !name.trim()}
            >
              {isSaving ? 'Saving...' : 'Create Profile'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
