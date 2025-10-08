
import React, { useState, useEffect, type FC, useCallback, Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { auth, signInWithGoogle, signOut, type User, db, functions } from './firebase';
import type { HttpsCallableResult } from 'firebase/functions';
import ErrorBoundary from './ErrorBoundary';

// Lazy load the MapView component
const MapView = lazy(() => import('./MapView').then(module => ({ default: module.MapView })));


// --- Type Definitions ---
type View = 'CLIENT_SETUP' | 'AUDIT' | 'PROFILES' | 'TOOLS' | 'MAP' | 'SERVICES' | 'PROFILE_DETAIL';

interface Business {
    id?: string; // Client's Firestore document ID
    name: string;
    website?: string;
}

interface Profile extends Business {
    id: string;
    notes?: string;
    consultant_uid: string;
    createdAt: { toDate: () => Date }; // Firestore Timestamp
}

interface Audit {
    id: string;
    ai_report: string;
    date_completed: { toDate: () => Date };
}


// --- Logo ---
// Using text-based logo temporarily due to broken image URL
const logoUrl = 'https://storage.googleapis.com/imageonline/ChatGPT%20Image%20Aug%2010%2C%202025%2C%2010_03_53%20AM.png';

// --- Gemini API Proxy ---
let geminiProxy: any = null;
if (functions) {
    geminiProxy = functions.httpsCallable('geminiProxy');
}


// --- Core Components ---

const LoadingScreen: FC = () => (
    <div className="loading-screen" aria-label="Loading application">
        <div className="text-logo">SMARTLOCAL.AI</div>
        <div className="loading-spinner"></div>
    </div>
);

const LoginView: FC = () => {
    const [signingIn, setSigningIn] = useState(false);
    const [signInError, setSignInError] = useState<string | null>(null);

    const handleSignIn = async () => {
        if (signingIn) return; // Prevent multiple clicks
        
        setSigningIn(true);
        setSignInError(null);
        
        try {
            await signInWithGoogle();
            // For redirect method, the page will redirect, so we don't reset signingIn here
            // If we reach this point and there's no redirect, something went wrong
            setTimeout(() => {
                if (signingIn) {
                    setSignInError('Sign-in redirect did not complete. Please try again.');
                    setSigningIn(false);
                }
            }, 5000);
        } catch (error: any) {
            console.error('Sign-in failed:', error);
            setSignInError(error.message || 'Sign-in failed. Please try again.');
            setSigningIn(false);
        }
    };

    return (
        <div className="login-view">
            <div className="login-box">
                <div className="text-logo">SMARTLOCAL.AI</div>
                <h1>AI-Powered Local Business Growth</h1>
                <p>Sign in to access your dashboard and start optimizing your local presence.</p>
                
                {signInError && (
                    <div style={{ color: 'var(--danger)', marginBottom: '1rem', padding: '0.5rem', background: '#fff1f1', border: '1px solid var(--danger)', borderRadius: '4px' }}>
                        <strong>Sign-in Failed:</strong> {signInError}
                        {signInError.includes('Blocked by client') && (
                            <div style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
                                <p><strong>Possible fixes:</strong></p>
                                <p>1. Check if popup blockers are enabled</p>
                                <p>2. Ensure this domain is authorized in Firebase Console:</p>
                                <p style={{ fontFamily: 'monospace', background: '#f5f5f5', padding: '0.25rem' }}>
                                    Authentication → Settings → Authorized domains
                                </p>
                            </div>
                        )}
                    </div>
                )}
                
                <button 
                    className="btn btn-google" 
                    onClick={handleSignIn}
                    disabled={signingIn}
                    style={{ opacity: signingIn ? 0.7 : 1 }}
                >
                    <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M17.64 9.2045c0-.6381-.0573-1.2518-.1636-1.8409H9v3.4818h4.8436c-.2086 1.125-.8427 2.0782-1.7772 2.7218v2.2582h2.9082c1.7018-1.5668 2.6836-3.8741 2.6836-6.621v.0001z" fill="#4285F4"></path><path d="M9 18c2.43 0 4.4673-.806 5.9564-2.1805l-2.9082-2.2582c-.8059.54-1.8368.8618-3.0482.8618-2.344 0-4.3282-1.5818-5.0359-3.7118H.9573v2.3318C2.4382 16.1423 5.4818 18 9 18z" fill="#34A853"></path><path d="M3.964 10.71c-.18-.54-.2822-1.1168-.2822-1.71s.1023-1.17.2823-1.71V4.9582H.9573C.3477 6.1732 0 7.5477 0 9s.3477 2.8268.9573 4.0418L3.964 10.71z" fill="#FBBC05"></path><path d="M9 3.4773c1.3236 0 2.52.4573 3.4418 1.346l2.5818-2.5818C13.4636.8918 11.43 0 9 0 5.4818 0 2.4382 1.8577.9573 4.9582L3.964 7.29C4.6718 5.159 6.656 3.4773 9 3.4773z" fill="#EA4335"></path></g></svg>
                    {signingIn ? 'Signing In...' : 'Sign In with Google'}
                </button>
            </div>
        </div>
    );
};

const AppHeader: FC<{ user: User; currentView: View; setView: (view: View) => void; onSignOut: () => void; }> = ({ user, currentView, setView, onSignOut }) => {
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
                {views.map(view => {
                    const isActive = currentView === view.id || (currentView === 'PROFILE_DETAIL' && view.id === 'PROFILES');
                    return (
                        <button
                            key={view.id}
                            className={`nav-button ${isActive ? 'active' : ''}`}
                            onClick={() => setView(view.id)}
                            aria-current={isActive ? 'page' : undefined}
                        >
                            {view.label}
                        </button>
                    );
                })}
            </nav>
            <div className="header-user-info">
                <img src={user.photoURL ?? undefined} alt={user.displayName ?? 'User'} />
                <span className="user-name">{user.displayName}</span>
                <button className="btn-sign-out" onClick={onSignOut}>Sign Out</button>
            </div>
        </header>
    );
};

const OfflineBanner: FC = () => {
    const [isOffline, setIsOffline] = useState(!navigator.onLine);

    useEffect(() => {
        const handleOnline = () => setIsOffline(false);
        const handleOffline = () => setIsOffline(true);
        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);
        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);

    if (!isOffline) return null;
    return (
        <div className="offline-banner" role="status">
            You are currently offline. Some features may be unavailable.
        </div>
    );
};

// --- View Components (Placeholders & Features) ---

const ClientSetupView: FC<{ onCreateProfile: (data: { name: string; website?: string; notes?: string }) => Promise<void> }> = ({ onCreateProfile }) => {
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
            console.error("Failed to save profile:", error);
            alert("Failed to save profile. Please try again.");
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <div className="view-container client-setup-view">
            <div className="client-setup-header">
                <h2>Client Onboarding</h2>
                <p>Enter your new client's information. This will create a profile to track audits and AI-generated content.</p>
            </div>
            <div className="client-setup-layout">
                <div className="notepad-container" style={{ gap: '1rem', textAlign: 'left' }}>
                     <div className="form-group">
                        <label htmlFor="client-name">Business Name</label>
                        <input id="client-name" type="text" value={name} onChange={e => setName(e.target.value)} placeholder="e.g., Joe's Pizza Downtown" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="client-website">Website URL</label>
                        <input id="client-website" type="url" value={website} onChange={e => setWebsite(e.target.value)} placeholder="https://www.joespizzadt.com" />
                    </div>
                     <div className="form-group">
                        <label htmlFor="client-notes">Onboarding Notes</label>
                        <textarea id="client-notes" className="notepad-textarea" rows={10} value={notes} onChange={e => setNotes(e.target.value)} placeholder="e.g., target audience, primary goals for local SEO, main competitors, etc."></textarea>
                    </div>
                    <div className="notepad-actions">
                        <button className="btn btn-primary" onClick={handleSave} disabled={isSaving || !name.trim()}>
                            {isSaving ? 'Saving...' : 'Create Profile'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const AuditView: FC<{ business?: Business; onSaveAudit: (report: string, clientId: string) => Promise<void>; }> = ({ business, onSaveAudit }) => {
    const [businessName, setBusinessName] = useState(business?.name || '');
    const [websiteUrl, setWebsiteUrl] = useState(business?.website || '');
    const [report, setReport] = useState('');
    const [isAuditing, setIsAuditing] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isSaving, setIsSaving] = useState(false);
    const [saveSuccess, setSaveSuccess] = useState(false);

    useEffect(() => {
        setBusinessName(business?.name || '');
        setWebsiteUrl(business?.website || '');
        setReport('');
        setError(null);
        setSaveSuccess(false);
        setIsSaving(false);
    }, [business]);

    const handleStartAudit = async () => {
        if (!businessName.trim()) {
            alert('Business Name is required to run an audit.');
            return;
        }
        if (!geminiProxy) {
            setError("AI functionality is not available. Please check your configuration.");
            return;
        }
        
        setIsAuditing(true);
        setError(null);
        setReport('');
        
        const prompt = `Please perform a comprehensive local SEO and online presence audit for the following business. Provide a summary, key findings, and actionable recommendations.\n\nBusiness Name: ${businessName}\nWebsite: ${websiteUrl || 'Not provided'}\n\nThe audit should cover:\n1.  **Google Business Profile:** Potential optimizations, completeness, photo quality, reviews, Q&A.\n2.  **On-Page SEO:** Website mobile-friendliness, page speed insights (conceptual), local keyword targeting, NAP consistency.\n3.  **Local Citations & Listings:** Importance of consistent NAP across major directories.\n4.  **Online Reviews:** Reputation analysis, strategy for getting more reviews.\n5.  **Social Media Presence:** Brief check of relevant social media channels for activity and engagement.\n\nFormat the output as clean, well-structured markdown. Use headings, bold text, and bullet points to make it easy to read.`;

        try {
            const result = await geminiProxy({
                action: 'generateContent',
                params: {
                    model: 'gemini-2.5-flash',
                    contents: prompt,
                }
            });
            setReport(result.data.text);
        } catch (e: any) {
            console.error("Audit generation failed:", e);
            setError(`Failed to generate audit: ${e.message || 'An unknown error occurred.'}`);
        } finally {
            setIsAuditing(false);
        }
    };
    
    const handleSaveAuditReport = async () => {
        if (!report || !business?.id) return;
        setIsSaving(true);
        setSaveSuccess(false);
        setError(null);
        try {
            await onSaveAudit(report, business.id);
            setSaveSuccess(true);
        } catch (err) {
            console.error("Failed to save audit report:", err);
            setError("Failed to save the report. Please try again.");
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
                <button className="btn btn-primary" onClick={handleStartAudit} disabled={isAuditing || !businessName}>
                     {isAuditing ? 'Generating Report...' : 'Start AI Audit'}
                </button>
            </div>
            <div className={`result-container ${report ? 'has-content' : ''} ${error ? 'error' : ''}`}>
                {isAuditing && <div className="loading-spinner small"></div>}
                {error && <p>{error}</p>}
                {report ? (
                    <p>{report}</p>
                ) : !isAuditing && (
                    <div className="audit-placeholder">
                        <p>Your audit report will appear here once generated.</p>
                    </div>
                )}
            </div>
             {report && (
                <div className="audit-actions">
                    {business?.id ? (
                        <button className="btn btn-primary" onClick={handleSaveAuditReport} disabled={isSaving || saveSuccess}>
                            {isSaving ? 'Saving...' : saveSuccess ? '✓ Report Saved' : 'Save Report to Profile'}
                        </button>
                    ) : (
                        <div className="audit-actions-note">
                            <p>To save this report, first create a client profile from the 'Client Setup' tab and run the audit from the 'Profiles' view.</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

const ProfilesView: FC<{ profiles: Profile[]; onSelectProfile: (profile: Profile) => void; loading: boolean; }> = ({ profiles, onSelectProfile, loading }) => {
    
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
                {profiles.map(profile => (
                    <div key={profile.id} className="profile-card" tabIndex={0} onClick={() => onSelectProfile(profile)} onKeyDown={(e) => e.key === 'Enter' && onSelectProfile(profile)}>
                        <h3>{profile.name}</h3>
                        {profile.website && <a href={profile.website} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>{profile.website}</a>}
                        <div className="profile-footer">
                            <span className="date-info">Created: {new Date(profile.createdAt?.toDate()).toLocaleDateString()}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const ProfileDetailView: FC<{
    profile: Profile;
    onBack: () => void;
    onRunAudit: (profile: Profile) => void;
}> = ({ profile, onBack, onRunAudit }) => {
    const [audits, setAudits] = useState<Audit[]>([]);
    const [loadingAudits, setLoadingAudits] = useState(true);
    const [selectedAudit, setSelectedAudit] = useState<string | null>(null);

    useEffect(() => {
        const fetchAudits = async () => {
            if (!db) return;
            setLoadingAudits(true);
            try {
                const q = db.collection('audits').where('client_id', '==', profile.id).orderBy('date_completed', 'desc');
                const querySnapshot = await q.get();
                const auditData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                } as Audit));
                setAudits(auditData);
            } catch (error) {
                console.error("Error fetching audits: ", error);
            } finally {
                setLoadingAudits(false);
            }
        };

        fetchAudits();
    }, [profile.id]);

    const toggleAudit = (auditId: string) => {
        setSelectedAudit(selectedAudit === auditId ? null : auditId);
    };

    return (
        <div className="view-container profile-detail-view">
            <div className="profile-detail-header">
                <button className="btn-back" onClick={onBack}>&larr; Back to Profiles</button>
                <div className="profile-detail-actions">
                     <button className="btn btn-primary" onClick={() => onRunAudit(profile)}>Run New Audit</button>
                </div>
            </div>

            <div className="profile-detail-info">
                <h2>{profile.name}</h2>
                {profile.website && <a href={profile.website} target="_blank" rel="noopener noreferrer">{profile.website}</a>}
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
                        {audits.map(audit => (
                            <div key={audit.id} className="audit-item-card">
                                <div className="audit-item-header" onClick={() => toggleAudit(audit.id)} tabIndex={0} onKeyDown={e => e.key === 'Enter' && toggleAudit(audit.id)} role="button" aria-expanded={selectedAudit === audit.id}>
                                    <span>Audit from {new Date(audit.date_completed.toDate()).toLocaleString()}</span>
                                    <span>{selectedAudit === audit.id ? 'Hide Report ▲' : 'View Report ▼'}</span>
                                </div>
                                {selectedAudit === audit.id && (
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

const ToolsView: FC = () => {
    // State for GBP Post tool
    const [postTopic, setPostTopic] = useState('');
    const [postTone, setPostTone] = useState('Friendly');
    const [postResult, setPostResult] = useState('');
    const [isGeneratingPost, setIsGeneratingPost] = useState(false);
    const [postError, setPostError] = useState<string | null>(null);

    // State for Keyword Ideas tool
    const [keywordService, setKeywordService] = useState('');
    const [keywordLocation, setKeywordLocation] = useState('');
    const [keywordResult, setKeywordResult] = useState('');
    const [isGeneratingKeywords, setIsGeneratingKeywords] = useState(false);
    const [keywordError, setKeywordError] = useState<string | null>(null);

    const handleGeneratePost = async () => {
        if (!postTopic.trim()) return;
        if (!geminiProxy) { setPostError("AI is unavailable"); return; }
        
        setIsGeneratingPost(true);
        setPostError(null);
        setPostResult('');
        
        const prompt = `Generate a short, engaging Google Business Profile post about "${postTopic}". The tone of voice should be ${postTone}. Include relevant hashtags.`;
        
        try {
            const result = await geminiProxy({
                action: 'generateContent',
                params: { model: 'gemini-2.5-flash', contents: prompt }
            });
            setPostResult(result.data.text);
        } catch(e: any) {
            console.error("Post generation failed:", e);
            setPostError(e.message || "Failed to generate post.");
        } finally {
            setIsGeneratingPost(false);
        }
    };
    
    const handleGetIdeas = async () => {
        if (!keywordService.trim() || !keywordLocation.trim()) return;
        if (!geminiProxy) { setKeywordError("AI is unavailable"); return; }
        
        setIsGeneratingKeywords(true);
        setKeywordError(null);
        setKeywordResult('');
        
        const prompt = `Generate a list of local SEO keyword ideas for a business that offers "${keywordService}" in "${keywordLocation}". Include a mix of short-tail, long-tail, and question-based keywords.`;
        
        try {
            const result = await geminiProxy({
                action: 'generateContent',
                params: { model: 'gemini-2.5-flash', contents: prompt }
            });
            setKeywordResult(result.data.text);
        } catch(e: any) {
            console.error("Keyword idea generation failed:", e);
            setKeywordError(e.message || "Failed to get ideas.");
        } finally {
            setIsGeneratingKeywords(false);
        }
    };

    return (
        <div className="view-container">
            <h2>AI Content Tools</h2>
            <div className="tools-grid">
                <div className="tool-card">
                    <h3>Google Business Profile Post</h3>
                    <div className="form-group">
                        <label htmlFor="post-topic">Topic</label>
                        <input type="text" id="post-topic" placeholder="e.g., New weekly special, upcoming event" value={postTopic} onChange={e => setPostTopic(e.target.value)} />
                    </div>
                     <div className="form-group">
                        <label htmlFor="post-tone">Tone of Voice</label>
                        <select id="post-tone" value={postTone} onChange={e => setPostTone(e.target.value)}>
                            <option>Friendly</option>
                            <option>Professional</option>
                            <option>Excited</option>
                            <option>Informative</option>
                        </select>
                    </div>
                    <button className="btn btn-primary" onClick={handleGeneratePost} disabled={isGeneratingPost || !postTopic.trim()}>
                        {isGeneratingPost ? 'Generating...' : 'Generate Post'}
                    </button>
                    <div className={`result-container ${postResult ? 'has-content' : ''} ${postError ? 'error' : ''}`}>
                       {isGeneratingPost && <div className="loading-spinner small"></div>}
                       {postError && <p>{postError}</p>}
                       {postResult && <p>{postResult}</p>}
                    </div>
                </div>
                <div className="tool-card">
                    <h3>Local SEO Keyword Ideas</h3>
                     <div className="form-group">
                        <label htmlFor="keyword-service">Service/Product</label>
                        <input type="text" id="keyword-service" placeholder="e.g., residential plumbing, artisan coffee" value={keywordService} onChange={e => setKeywordService(e.target.value)} />
                    </div>
                     <div className="form-group">
                        <label htmlFor="keyword-location">Location</label>
                        <input type="text" id="keyword-location" placeholder="e.g., San Francisco" value={keywordLocation} onChange={e => setKeywordLocation(e.target.value)} />
                    </div>
                    <button className="btn btn-primary" onClick={handleGetIdeas} disabled={isGeneratingKeywords || !keywordService.trim() || !keywordLocation.trim()}>
                        {isGeneratingKeywords ? 'Generating...' : 'Get Ideas'}
                    </button>
                     <div className={`result-container ${keywordResult ? 'has-content' : ''} ${keywordError ? 'error' : ''}`}>
                         {isGeneratingKeywords && <div className="loading-spinner small"></div>}
                         {keywordError && <p>{keywordError}</p>}
                         {keywordResult && <p>{keywordResult}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

const ServicesView: FC = () => {
    const [expandedCard, setExpandedCard] = useState<string | null>(null);

    const handleCardClick = (cardId: string) => {
        setExpandedCard(expandedCard === cardId ? null : cardId);
    };

    const packages = [
        {
            id: 'starter',
            name: 'Local SEO Starter',
            price: '$99',
            description: 'Essential local SEO to get your business on the map and ranking.',
            features: [
                'Google Business Profile Optimization',
                'Local Keyword Research (10 keywords)',
                'On-Page SEO for 5 Pages',
                'Monthly Performance Report',
                'Basic Citation Building (20 listings)',
            ],
        },
        {
            id: 'growth',
            name: 'Business Growth Pro',
            price: '$299',
            description: 'A comprehensive package for businesses ready to dominate local search.',
            features: [
                'All features from Starter Plan',
                'Advanced Schema Markup',
                'Content Creation (2 Articles/mo)',
                'Local Link Building Campaign',
                'Quarterly Strategy Review',
            ],
        },
        {
            id: 'ultimate',
            name: 'Ultimate Presence',
            price: '$699+',
            description: 'The ultimate solution for market leaders who want maximum visibility.',
            features: [
                'All features from Growth Pro Plan',
                'Reputation Management & Review Generation',
                'Social Media Signal Integration',
                'Hyperlocal Content Strategy',
                'Dedicated Account Manager',
            ],
        },
    ];

    return (
        <div className="view-container">
            <h2>Our Service Packages</h2>
            <p style={{textAlign: 'center', maxWidth: '600px', margin: '0 auto 2rem'}}>Choose a package that fits your goals. Click on any package to see the full list of features.</p>
            <div className="services-grid">
                {packages.map(pkg => (
                    <div className="service-card" key={pkg.id} onClick={() => handleCardClick(pkg.id)} tabIndex={0} role="button" aria-expanded={expandedCard === pkg.id}>
                        <div className="service-header">
                            <h3>{pkg.name}</h3>
                            <p className="service-price">{pkg.price}</p>
                            <p>{pkg.description}</p>
                        </div>
                        <div className={`service-details ${expandedCard === pkg.id ? 'expanded' : ''}`}>
                            <ul>
                                {pkg.features.map((feature, index) => <li key={index}>{feature}</li>)}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


// --- Main App Component ---

const App: FC = () => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [currentView, setView] = useState<View>('MAP');
    const [auditTarget, setAuditTarget] = useState<Business | undefined>();
    const [profiles, setProfiles] = useState<Profile[]>([]);
    const [profilesLoading, setProfilesLoading] = useState(true);
    const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);

    const fetchProfiles = useCallback(async (currentUser: User | null) => {
        if (!currentUser || !db) {
            setProfiles([]);
            setProfilesLoading(false);
            return;
        }
        setProfilesLoading(true);
        try {
            const q = db.collection('clients').where('consultant_uid', '==', currentUser.uid).orderBy('createdAt', 'desc');
            const querySnapshot = await q.get();
            const profilesData = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            } as Profile));
            setProfiles(profilesData);
        } catch (error) {
            console.error("Error fetching profiles: ", error);
        } finally {
            setProfilesLoading(false);
        }
    }, []);

    useEffect(() => {
        if (!auth) {
            setLoading(false);
            return;
        }

        let isMounted = true;

        // Handle redirect result first (for Google Sign-In redirect)
        const handleRedirect = async () => {
            try {
                const result = await auth.getRedirectResult();
                if (result?.user && isMounted) {
                    console.log('Sign-in successful via redirect:', result.user.displayName);
                    // Don't need to do anything else, onAuthStateChanged will handle the user state
                }
            } catch (error: any) {
                if (error.code !== 'auth/no-auth-event' && isMounted) {
                    console.error('Redirect sign-in error:', error);
                }
            }
        };

        handleRedirect();

        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            if (isMounted) {
                console.log('Auth state changed:', currentUser ? `Signed in as ${currentUser.displayName}` : 'Signed out');
                setUser(currentUser);
                fetchProfiles(currentUser);
                setLoading(false);
            }
        });

        return () => {
            isMounted = false;
            unsubscribe();
        };
    }, [fetchProfiles]);
    
    useEffect(() => {
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js').then(registration => {
                    console.log('Service Worker registered: ', registration);
                }).catch(registrationError => {
                    console.log('Service Worker registration failed: ', registrationError);
                });
            });
        }
    }, []);

    const handleStartAudit = (business: { name: string; website?: string }) => {
        setAuditTarget(business);
        setView('AUDIT');
    };

    const handleViewChange = (view: View) => {
        if (view !== 'AUDIT') {
            setAuditTarget(undefined);
        }
        if (view !== 'PROFILE_DETAIL') {
            setSelectedProfile(null);
        }
        setView(view);
    };

    const handleCreateProfile = async (profileData: { name: string; website?: string; notes?: string }) => {
        if (!user || !db) throw new Error("User not signed in or DB not available");

        await db.collection('clients').add({
            ...profileData,
            consultant_uid: user.uid,
            createdAt: new Date(),
        });
        await fetchProfiles(user);
        setView('PROFILES');
    };
    
    const handleSelectProfile = (profile: Profile) => {
        setSelectedProfile(profile);
        setView('PROFILE_DETAIL');
    };

    const handleSaveAudit = async (report: string, clientId: string) => {
        if (!user || !db) {
            throw new Error("User not signed in or DB not available");
        }
        await db.collection('audits').add({
            client_id: clientId,
            consultant_uid: user.uid,
            status: "complete",
            ai_report: report,
            date_completed: new Date(),
        });
    };

    // Removed firebaseError handling since it is no longer exported from firebase.ts

    if (loading) {
        return <LoadingScreen />;
    }

    if (!user) {
        return <LoginView />;
    }
    
    const renderView = () => {
        switch (currentView) {
            case 'MAP': return (
                <Suspense fallback={<div className="loading-spinner">Loading Map...</div>}>
                    <MapView onStartAudit={handleStartAudit} />
                </Suspense>
            );
            case 'SERVICES': return <ServicesView />;
            case 'CLIENT_SETUP': return <ClientSetupView onCreateProfile={handleCreateProfile} />;
            case 'AUDIT': return <AuditView business={auditTarget} onSaveAudit={handleSaveAudit} />;
            case 'PROFILES': return <ProfilesView profiles={profiles} onSelectProfile={handleSelectProfile} loading={profilesLoading} />;
            case 'PROFILE_DETAIL':
                return selectedProfile ? (
                    <ProfileDetailView
                        profile={selectedProfile}
                        onBack={() => setView('PROFILES')}
                        onRunAudit={(profile) => {
                            setAuditTarget(profile);
                            setView('AUDIT');
                        }}
                    />
                ) : (
                    <ProfilesView profiles={profiles} onSelectProfile={handleSelectProfile} loading={profilesLoading} />
                );
            case 'TOOLS': return <ToolsView />;
            default: return <MapView onStartAudit={handleStartAudit} />;
        }
    };

    return (
        <>
            <OfflineBanner />
            <AppHeader user={user} currentView={currentView} setView={handleViewChange} onSignOut={signOut} />
            <main className="app-container">
                <ErrorBoundary>
                    {renderView()}
                </ErrorBoundary>
            </main>
        </>
    );
};

// --- Render Application ---
const container = document.getElementById('root');
if (container) {
    const root = createRoot(container);
    root.render(
        <ErrorBoundary>
            <App />
        </ErrorBoundary>
    );
} else {
    console.error('Failed to find the root element.');
}