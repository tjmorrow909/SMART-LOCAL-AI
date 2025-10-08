// src/components/OfflineBanner.tsx

import React, { useState, useEffect, type FC } from 'react';

export const OfflineBanner: FC = () => {
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
