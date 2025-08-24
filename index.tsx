import React, { useState, useEffect, type FC } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { auth, signInWithGoogle, signOut, type User, firebaseError } from './firebase';
import { MapView } from './MapView';

// --- Type Definitions ---
type View = 'CLIENT_SETUP' | 'AUDIT' | 'PROFILES' | 'TOOLS' | 'MAP';
interface Business {
    name: string;
    website?: string;
}


// --- Logo ---
const logoUrl = 'https://storage.googleapis.com/imageonline/ChatGPT%20Image%20Aug%2010%2C%202025%2C%2010_03_53%20AM.png';


// --- Core Components ---

const LoadingScreen: FC = () => (
    <div className="loading-screen" aria-label="Loading application">
        <img src={logoUrl} alt="SMARTLOCAL.AI Logo" className="header-logo" />
        <div className="loading-spinner"></div>
    </div>
);

const LoginView: FC = () => (
    <div className="login-view">
        <div className="login-box">
            <img src={logoUrl} alt="SMARTLOCAL.AI Logo" className="header-logo" />
            <h1>AI-Powered Local Business Growth</h1>
            <p>Sign in to access your dashboard and start optimizing your local presence.</p>
            <button className="btn btn-google" onClick={signInWithGoogle}>
                <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M17.64 9.2045c0-.6381-.0573-1.2518-.1636-1.8409H9v3.4818h4.8436c-.2086 1.125-.8427 2.0782-1.7772 2.7218v2.2582h2.9082c1.7018-1.5668 2.6836-3.8741 2.6836-6.621v.0001z" fill="#4285F4"></path><path d="M9 18c2.43 0 4.4673-.806 5.9564-2.1805l-2.9082-2.2582c-.8059.54-1.8368.8618-3.0482.8618-2.344 0-4.3282-1.5818-5.0359-3.7118H.9573v2.3318C2.4382 16.1423 5.4818 18 9 18z" fill="#34A853"></path><path d="M3.964 10.71c-.18-.54-.2822-1.1168-.2822-1.71s.1023-1.17.2823-1.71V4.9582H.9573C.3477 6.1732 0 7.5477 0 9s.3477 2.8268.9573 4.0418L3.964 10.71z" fill="#FBBC05"></path><path d="M9 3.4773c1.3236 0 2.52.4573 3.4418 1.346l2.5818-2.5818C13.4636.8918 11.43 0 9 0 5.4818 0 2.4382 1.8577.9573 4.9582L3.964 7.29C4.6718 5.159 6.656 3.4773 9 3.4773z" fill="#EA4335"></path></g></svg>
                Sign In with Google
            </button>
        </div>
    </div>
);

const AppHeader: FC<{ user: User; currentView: View; setView: (view: View) => void; onSignOut: () => void; }> = ({ user, currentView, setView, onSignOut }) => {
    const views: { id: View; label: string }[] = [
        { id: 'MAP', label: 'Map View' },
        { id: 'CLIENT_SETUP', label: 'Client Setup' },
        { id: 'AUDIT', label: 'Run Audit' },
        { id: 'PROFILES', label: 'Profiles' },
        { id: 'TOOLS', label: 'AI Tools' },
    ];

    return (
        <header className="app-header">
            <div className="header-branding">
                <img src={logoUrl} alt="SMARTLOCAL.AI Logo" className="header-logo" />
            </div>
            <nav className="app-nav">
                {views.map(view => (
                    <button
                        key={view.id}
                        className={`nav-button ${currentView === view.id ? 'active' : ''}`}
                        onClick={() => setView(view.id)}
                        aria-current={currentView === view.id ? 'page' : undefined}
                    >
                        {view.label}
                    </button>
                ))}
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

// --- View Components (Placeholders) ---

const ClientSetupView: FC = () => (
    <div className="view-container client-setup-view">
        <div className="client-setup-header">
            <h2>Client Onboarding Notepad</h2>
            <p>Use this space to jot down initial notes, goals, and key information about your new client. This context will power AI-driven strategies and reports.</p>
        </div>
        <div className="client-setup-layout">
            <div className="notepad-container">
                <textarea className="notepad-textarea" rows={15} placeholder="Start typing client notes here... e.g., business name, website, target audience, primary goals for local SEO, main competitors, etc."></textarea>
                <div className="notepad-actions">
                    <button className="btn btn-primary">Save Notes & Create Profile</button>
                </div>
            </div>
            <div className="key-questions-panel">
                <h3>Key Questions to Ask</h3>
                <ul>
                    <li>What are your business goals?</li>
                    <li>Who is your target audience?</li>
                    <li>What services do you offer?</li>
                    <li>Who are your main competitors?</li>
                    <li>What is your service area?</li>
                    <li>What makes your business unique?</li>
                </ul>
            </div>
        </div>
    </div>
);

const AuditView: FC<{ business?: Business }> = ({ business }) => {
    const [businessName, setBusinessName] = useState(business?.name || '');
    const [websiteUrl, setWebsiteUrl] = useState(business?.website || '');

    useEffect(() => {
        setBusinessName(business?.name || '');
        setWebsiteUrl(business?.website || '');
    }, [business]);

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
                <button className="btn btn-primary">Start AI Audit</button>
            </div>
            <div className="audit-placeholder">
                <p>Your audit report will appear here once generated.</p>
            </div>
        </div>
    );
};

const ProfilesView: FC = () => (
    <div className="view-container profiles-view-container">
        <h2>Client Profiles</h2>
        <div className="no-profiles-message">
            <p>You haven't created any client profiles yet.</p>
            <p>Go to the 'Client Setup' tab to add your first client.</p>
        </div>
    </div>
);

const ToolsView: FC = () => (
    <div className="view-container">
        <h2>AI Content Tools</h2>
        <div className="tools-grid">
            <div className="tool-card">
                <h3>Google Business Profile Post</h3>
                <div className="form-group">
                    <label htmlFor="post-topic">Topic</label>
                    <input type="text" id="post-topic" placeholder="e.g., New weekly special, upcoming event" />
                </div>
                 <div className="form-group">
                    <label htmlFor="post-tone">Tone of Voice</label>
                    <select id="post-tone">
                        <option>Friendly</option>
                        <option>Professional</option>
                        <option>Excited</option>
                        <option>Informative</option>
                    </select>
                </div>
                <button className="btn btn-primary">Generate Post</button>
                <div className="result-container">
                   {/* AI generated content appears here */}
                </div>
            </div>
            <div className="tool-card">
                <h3>Local SEO Keyword Ideas</h3>
                 <div className="form-group">
                    <label htmlFor="keyword-service">Service/Product</label>
                    <input type="text" id="keyword-service" placeholder="e.g., residential plumbing, artisan coffee" />
                </div>
                 <div className="form-group">
                    <label htmlFor="keyword-location">Location</label>
                    <input type="text" id="keyword-location" placeholder="e.g., San Francisco" />
                </div>
                <button className="btn btn-primary">Get Ideas</button>
                 <div className="result-container">
                     {/* AI generated content appears here */}
                </div>
            </div>
        </div>
    </div>
);


// --- Main App Component ---

const App: FC = () => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [currentView, setView] = useState<View>('MAP');
    const [auditTarget, setAuditTarget] = useState<Business | undefined>();

    useEffect(() => {
        if (!auth) {
            setLoading(false);
            return;
        }
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);
    
    const handleStartAudit = (business: Business) => {
        setAuditTarget(business);
        setView('AUDIT');
    };

    const handleViewChange = (view: View) => {
        // Clear the audit target if we navigate away from the audit view manually
        if (view !== 'AUDIT') {
            setAuditTarget(undefined);
        }
        setView(view);
    };

    if (firebaseError) {
        return (
            <div style={{ padding: '2rem', color: '#dc3545', textAlign: 'center' }}>
                <h2>Configuration Error</h2>
                <p>{firebaseError}</p>
            </div>
        );
    }

    if (loading) {
        return <LoadingScreen />;
    }

    if (!user) {
        return <LoginView />;
    }
    
    const renderView = () => {
        switch (currentView) {
            case 'MAP': return <MapView onStartAudit={handleStartAudit} />;
            case 'CLIENT_SETUP': return <ClientSetupView />;
            case 'AUDIT': return <AuditView business={auditTarget} />;
            case 'PROFILES': return <ProfilesView />;
            case 'TOOLS': return <ToolsView />;
            default: return <MapView onStartAudit={handleStartAudit} />;
        }
    };

    return (
        <>
            <OfflineBanner />
            <AppHeader user={user} currentView={currentView} setView={handleViewChange} onSignOut={signOut} />
            <main className="app-container">
                {renderView()}
            </main>
        </>
    );
};

// --- Render Application ---
const container = document.getElementById('root');
if (container) {
    const root = createRoot(container);
    root.render(<App />);
} else {
    console.error('Failed to find the root element.');
}