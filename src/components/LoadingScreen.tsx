// src/components/LoadingScreen.tsx

import React, { type FC } from 'react';

export const LoadingScreen: FC = () => (
  <div className="loading-screen" aria-label="Loading application">
    <div className="text-logo">SMARTLOCAL.AI</div>
    <div className="loading-spinner"></div>
  </div>
);
