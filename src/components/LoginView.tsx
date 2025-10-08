// src/components/LoginView.tsx

import React, { useState, type FC } from 'react';

interface LoginViewProps {
  onSignIn: () => void;
}

export const LoginView: FC<LoginViewProps> = ({ onSignIn }) => {
  const [signingIn, setSigningIn] = useState(false);
  const [signInError, setSignInError] = useState<string | null>(null);

  const handleSignIn = async () => {
    if (signingIn) return; // Prevent multiple clicks

    setSigningIn(true);
    setSignInError(null);

    try {
      await onSignIn();
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
          <div
            style={{
              color: 'var(--danger)',
              marginBottom: '1rem',
              padding: '0.5rem',
              background: '#fff1f1',
              border: '1px solid var(--danger)',
              borderRadius: '4px',
            }}
          >
            <strong>Sign-in Failed:</strong> {signInError}
            {signInError.includes('Blocked by client') && (
              <div style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
                <p>
                  <strong>Possible fixes:</strong>
                </p>
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
          <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <path
                d="M17.64 9.2045c0-.6381-.0573-1.2518-.1636-1.8409H9v3.4818h4.8436c-.2086 1.125-.8427 2.0782-1.7772 2.7218v2.2582h2.9082c1.7018-1.5668 2.6836-3.8741 2.6836-6.621v.0001z"
                fill="#4285F4"
              ></path>
              <path
                d="M9 18c2.43 0 4.4673-.806 5.9564-2.1805l-2.9082-2.2582c-.8059.54-1.8368.8618-3.0482.8618-2.344 0-4.3282-1.5818-5.0359-3.7118H.9573v2.3318C2.4382 16.1423 5.4818 18 9 18z"
                fill="#34A853"
              ></path>
              <path
                d="M3.964 10.71c-.18-.54-.2822-1.1168-.2822-1.71s.1023-1.17.2823-1.71V4.9582H.9573C.3477 6.1732 0 7.5477 0 9s.3477 2.8268.9573 4.0418L3.964 10.71z"
                fill="#FBBC05"
              ></path>
              <path
                d="M9 3.4773c1.3236 0 2.52.4573 3.4418 1.346l2.5818-2.5818C13.4636.8918 11.43 0 9 0 5.4818 0 2.4382 1.8577.9573 4.9582L3.964 7.29C4.6718 5.159 6.656 3.4773 9 3.4773z"
                fill="#EA4335"
              ></path>
            </g>
          </svg>
          {signingIn ? 'Signing In...' : 'Sign In with Google'}
        </button>
      </div>
    </div>
  );
};
