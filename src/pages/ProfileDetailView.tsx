// src/pages/ProfileDetailView.tsx

import React, { useState, useEffect, type FC } from 'react';
import { collection, query, where, orderBy, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import type { Profile, Audit } from '../types';

interface ProfileDetailViewProps {
  profile: Profile;
  onBack: () => void;
  onRunAudit: (profile: Profile) => void;
}

export const ProfileDetailView: FC<ProfileDetailViewProps> = ({ profile, onBack, onRunAudit }) => {
  const [audits, setAudits] = useState<Audit[]>([]);
  const [loadingAudits, setLoadingAudits] = useState(true);

  useEffect(() => {
    const fetchAudits = async () => {
      if (!db) return;
      setLoadingAudits(true);
      try {
        const q = query(
          collection(db, 'audits'),
          where('client_id', '==', profile.id),
          orderBy('date_completed', 'desc')
        );
        const querySnapshot = await getDocs(q);
        const auditData = querySnapshot.docs.map(
          (doc) =>
            ({
              id: doc.id,
              ...doc.data(),
            }) as Audit
        );
        setAudits(auditData);
      } catch (error) {
        console.error('Error fetching audits: ', error);
      } finally {
        setLoadingAudits(false);
      }
    };

    fetchAudits();
  }, [profile.id]);

  const toggleAudit = (auditId: string) => {
    setAudits((prev) =>
      prev.map((audit) => (audit.id === auditId ? { ...audit, expanded: !audit.expanded } : audit))
    );
  };

  return (
    <div className="view-container profile-detail-view">
      <div className="profile-detail-header">
        <button className="btn-back" onClick={onBack}>
          &larr; Back to Profiles
        </button>
        <div className="profile-detail-actions">
          <button className="btn btn-primary" onClick={() => onRunAudit(profile)}>
            Run New Audit
          </button>
        </div>
      </div>

      <div className="profile-detail-info">
        <h2>{profile.name}</h2>
        {profile.website && (
          <a href={profile.website} target="_blank" rel="noopener noreferrer">
            {profile.website}
          </a>
        )}
        {profile.notes && <p className="profile-notes">{profile.notes}</p>}
      </div>

      <div className="profile-audits-section">
        <h3>Audit History</h3>
        {loadingAudits ? (
          <div className="loading-spinner"></div>
        ) : audits.length === 0 ? (
          <p>No audits found for this client yet.</p>
        ) : (
          <div className="audits-list">
            {audits.map((audit) => (
              <div key={audit.id} className="audit-item-card">
                <div
                  className="audit-item-header"
                  onClick={() => toggleAudit(audit.id)}
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && toggleAudit(audit.id)}
                  role="button"
                  aria-expanded={audit.expanded}
                >
                  <span>Audit from {new Date(audit.date_completed.toDate()).toLocaleString()}</span>
                  <span>{audit.expanded ? 'Hide Report ▲' : 'View Report ▼'}</span>
                </div>
                {audit.expanded && (
                  <div className="audit-item-body">
                    <pre>{audit.ai_report}</pre>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
