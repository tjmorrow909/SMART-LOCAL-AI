// src/pages/AuditView.tsx

import React, { useState, useEffect, type FC } from 'react';
import { useAI } from '../hooks/useAI';
import type { Business } from '../types';

interface AuditViewProps {
  business?: Business;
  onSaveAudit: (report: string, clientId: string) => Promise<void>;
}

export const AuditView: FC<AuditViewProps> = ({ business, onSaveAudit }) => {
  const [businessName, setBusinessName] = useState(business?.name || '');
  const [websiteUrl, setWebsiteUrl] = useState(business?.website || '');
  const [report, setReport] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const { generateContent, loading: isAuditing, error } = useAI();

  useEffect(() => {
    setBusinessName(business?.name || '');
    setWebsiteUrl(business?.website || '');
    setReport('');
    setSaveSuccess(false);
    setIsSaving(false);
  }, [business]);

  const handleStartAudit = async () => {
    if (!businessName.trim()) {
      alert('Business Name is required to run an audit.');
      return;
    }

    const prompt = `Please perform a comprehensive local SEO and online presence audit for the following business. Provide a summary, key findings, and actionable recommendations.\n\nBusiness Name: ${businessName}\nWebsite: ${websiteUrl || 'Not provided'}\n\nThe audit should cover:\n1.  **Google Business Profile:** Potential optimizations, completeness, photo quality, reviews, Q&A.\n2.  **On-Page SEO:** Website mobile-friendliness, page speed insights (conceptual), local keyword targeting, NAP consistency.\n3.  **Local Citations & Listings:** Importance of consistent NAP across major directories.\n4.  **Online Reviews:** Reputation analysis, strategy for getting more reviews.\n5.  **Social Media Presence:** Brief check of relevant social media channels for activity and engagement.\n\nFormat the output as clean, well-structured markdown. Use headings, bold text, and bullet points to make it easy to read.`;

    try {
      const result = await generateContent(prompt);
      setReport(result);
    } catch (err) {
      // Error is handled by useAI hook
    }
  };

  const handleSaveAuditReport = async () => {
    if (!report || !business?.id) return;
    setIsSaving(true);
    setSaveSuccess(false);
    try {
      await onSaveAudit(report, business.id);
      setSaveSuccess(true);
    } catch (err) {
      console.error('Failed to save audit report:', err);
      alert('Failed to save the report. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="view-container">
      <h2>Run a Local Presence Audit</h2>
      <div className="audit-controls">
        <div className="form-group">
          <label htmlFor="business-name">Business Name</label>
          <input
            type="text"
            id="business-name"
            placeholder="e.g., Joe's Pizza Downtown"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="business-website">Website URL</label>
          <input
            type="url"
            id="business-website"
            placeholder="https://www.joespizzadt.com"
            value={websiteUrl}
            onChange={(e) => setWebsiteUrl(e.target.value)}
          />
        </div>
        <button
          className="btn btn-primary"
          onClick={handleStartAudit}
          disabled={isAuditing || !businessName}
        >
          {isAuditing ? 'Generating Report...' : 'Start AI Audit'}
        </button>
      </div>
      <div className={`result-container ${report ? 'has-content' : ''} ${error ? 'error' : ''}`}>
        {isAuditing && <div className="loading-spinner small"></div>}
        {error && <p>{error}</p>}
        {report ? (
          <p>{report}</p>
        ) : (
          !isAuditing && (
            <div className="audit-placeholder">
              <p>Your audit report will appear here once generated.</p>
            </div>
          )
        )}
      </div>
      {report && (
        <div className="audit-actions">
          {business?.id ? (
            <button
              className="btn btn-primary"
              onClick={handleSaveAuditReport}
              disabled={isSaving || saveSuccess}
            >
              {isSaving ? 'Saving...' : saveSuccess ? '✓ Report Saved' : 'Save Report to Profile'}
            </button>
          ) : (
            <div className="audit-actions-note">
              <p>
                To save this report, first create a client profile from the 'Client Setup' tab and
                run the audit from the 'Profiles' view.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
