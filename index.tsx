import React from 'react';
import { createRoot } from 'react-dom/client';
import { firebaseError, auth, onAuthStateChanged, signInWithGoogle, signOut, User } from './firebase';

const App: React.FC = () => {
    const [user, setUser] = React.useState<User | null>(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        if (auth) {
            const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
                setUser(currentUser);
                setLoading(false);
            });
            return () => unsubscribe();
        } else {
            setLoading(false);
        }
    }, []);

    if (firebaseError) {
        return (
            <div className="login-view">
                <div className="login-box">
                    <h1>Configuration Error</h1>
                    <p>{firebaseError}</p>
                    <p style={{ fontSize: '0.9rem', color: '#6c757d' }}>
                        Please create a <code>.env.local</code> file with your Firebase project configuration.
                        You can use <code>.env.example</code> as a template.
                    </p>
                </div>
            </div>
        );
    }
    
    if (loading) {
        return (
            <div className="loading-screen">
                 <div className="loading-spinner"></div>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="login-view">
                <div className="login-box">
                     <img src="https://smartlocal.ai/wp-content/uploads/2024/02/logo-dark.svg" alt="SMARTLOCAL.AI Logo" className="header-logo" />
                    <h1>Welcome to SMARTLOCAL.AI</h1>
                    <p>Sign in to continue to your dashboard.</p>
                    <button onClick={signInWithGoogle} className="btn btn-google">
                        <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="#4285F4" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"></path><path fill="#34A853" d="M6.306 14.691L11.96 18.336C12.992 15.39 15.012 13.008 17.618 11.514L11.962 7.869C9.333 10.062 7.22 13.018 6.306 14.691z"></path><path fill="#FBBC05" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-5.657-5.657C30.012 35.636 27.218 37 24 37c-3.211 0-6.008-1.383-7.962-3.668l-5.656 5.657C14.14 41.945 18.834 44 24 44z"></path><path fill="#EA4335" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-1.428 0-2.795-.25-4.088-.696l-5.464 5.464C17.03 42.107 20.368 43 24 43c4.512 0 8.584-1.484 11.735-4.045l5.657 5.657C38.216 45.945 31.734 48 24 48c-11.045 0-20-8.955-20-20s8.955-20 20-20c5.268 0 9.973 1.944 13.409 5.192l-5.656 5.657C30.012 9.364 27.218 8 24 8c-3.211 0-6.008 1.383-7.962 3.668l-5.656-5.657C14.14 2.055 18.834 0 24 0c5.166 0 9.86 1.977 13.409 5.192l5.657 5.657C38.216 14.055 42 12.876 42 12c0 2.228-.532 4.34-1.464 6.273l-1.049 1.81z"></path></svg>
                        <span>Sign in with Google</span>
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div id="root">
            <header className="app-header">
                <div className="header-branding">
                    <img src="https://smartlocal.ai/wp-content/uploads/2024/02/logo.svg" alt="SMARTLOCAL.AI Logo" className="header-logo" />
                </div>
                 <div className="header-user-info">
                    {user.photoURL && <img src={user.photoURL} alt={user.displayName || 'User'} />}
                    <span className="user-name">{user.displayName}</span>
                    <button onClick={signOut} className="btn-sign-out">Sign Out</button>
                </div>
            </header>
            <main className="app-container">
                <div className="view-container">
                  <h1>Welcome, {user.displayName}!</h1>
                  <p>This is your dashboard. The application is now running correctly.</p>
                </div>
            </main>
        </div>
    );
};

const container = document.getElementById('root');
if (container) {
    const root = createRoot(container);
    root.render(<React.StrictMode><App /></React.StrictMode>);
}
