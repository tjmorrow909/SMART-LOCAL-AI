import React, { useState, useEffect, type FC } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { auth, signInWithGoogle, signOut, type User, firebaseError } from './firebase';

// --- Type Definitions ---
type View = 'CLIENT_SETUP' | 'AUDIT' | 'PROFILES' | 'TOOLS';

// --- SVG Logo (as a Base64 Data URI) ---
const logoSvg = `<svg width="200" height="50" viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.944 38.336h-3.328V18.176h3.328v20.16zm5.888-20.16c-2.816 0-5.024 2.144-5.024 5.376s2.208 5.376 5.024 5.376c2.816 0 5.024-2.144 5.024-5.376s-2.208-5.376-5.024-5.376zm0 7.424c-1.12 0-1.728-.8-1.728-2.048 0-1.216.608-2.048 1.728-2.048 1.12 0 1.728.832 1.728 2.048 0 1.248-.608 2.048-1.728 2.048zm6.528 12.736h3.328V18.176h-3.328v20.16zm9.216-13.824c0-4.064 2.912-6.336 6.816-6.336 3.84 0 6.784 2.272 6.784 6.336v13.824h-3.328V24.512c0-2.336-1.408-3.712-3.456-3.712s-3.456 1.376-3.456 3.712v13.824h-3.328V24.512zM52.096 38.336h3.328V18.176h-3.328v20.16zm9.824 0h3.52l6.56-10.464V38.336h3.2V18.176h-3.52L65.12 28.32V18.176h-3.2v20.16zm18.496-10.88c0-4.352 3.168-7.2 7.776-7.2 5.024 0 7.84 3.296 7.84 7.776 0 4.64-3.232 7.808-8.224 7.808h-4.064l-.064-8.384zm3.328 5.056h1.44c3.04 0 4.96-1.632 4.96-4.48 0-2.56-1.76-4.256-4.608-4.256-3.136 0-4.768 1.92-4.768 4.672v4.064zM107.01 38.336h3.328V24.512c0-2.336 1.408-3.712 3.456-3.712s3.456 1.376 3.456 3.712v13.824h3.328V24.512c0-4.064-2.912-6.336-6.816-6.336-3.84 0-6.784 2.272-6.784 6.336v13.824zM125.89 38.336h10.4v-3.2h-7.072V18.176h-3.328v20.16zm15.136 0h3.52l6.56-10.464V38.336h3.2V18.176h-3.52l-6.56 10.144V18.176h-3.2v20.16z" fill="#F4F7FC"/><path d="M165.71 18.176v20.16h3.328V28.64h4.928v-3.2h-4.928v-4.064h5.856v-3.2h-5.856V18.176h-3.328zM178.61 23.36c0-3.392 2.272-5.184 5.344-5.184s5.344 1.792 5.344 5.184-2.272 5.184-5.344 5.184-5.344-1.792-5.344-5.184zm7.392 0c0-1.6-1.024-2.24-2.048-2.24s-2.048.64-2.048 2.24.992 2.24 2.048 2.24 2.048-.64 2.048-2.24zM193.36 18.176h3.328v20.16h-3.328V18.176z" fill="#A6CE39"/></svg>`;
const logoUrl = `data:image/svg+xml;base64,${btoa(logoSvg)}`;


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

const AuditView: FC = () => (
    <div className="view-container">
        <h2>Run a Local Presence Audit</h2>
        <div className="audit-controls">
            <div className="form-group">
                <label htmlFor="business-name">Business Name</label>
                <input type="text" id="business-name" placeholder="e.g., Joe's Pizza Downtown" />
            </div>
            <div className="form-group">
                <label htmlFor="business-website">Website URL</label>
                <input type="url" id="business-website" placeholder="https://www.joespizzadt.com" />
            </div>
            <button className="btn btn-primary">Start AI Audit</button>
        </div>
        <div className="audit-placeholder">
            <p>Your audit report will appear here once generated.</p>
        </div>
    </div>
);

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
    const [currentView, setView] = useState<View>('CLIENT_SETUP');

    useEffect(() => {
        // This check ensures 'auth' is initialized before use.
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
            case 'CLIENT_SETUP': return <ClientSetupView />;
            case 'AUDIT': return <AuditView />;
            case 'PROFILES': return <ProfilesView />;
            case 'TOOLS': return <ToolsView />;
            default: return <ClientSetupView />;
        }
    };

    return (
        <>
            <OfflineBanner />
            <AppHeader user={user} currentView={currentView} setView={setView} onSignOut={signOut} />
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