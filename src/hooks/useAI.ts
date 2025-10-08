// src/hooks/useAI.ts

import { useState } from 'react';
import { httpsCallable, type HttpsCallableResult } from 'firebase/functions';
import { functions } from '../../firebase';

let geminiProxy: any = null;
if (functions) {
  geminiProxy = httpsCallable(functions, 'geminiProxy');
}

export const useAI = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateContent = async (prompt: string, model = 'gemini-2.5-flash') => {
    if (!geminiProxy) {
      throw new Error('AI functionality is not available. Please check your configuration.');
    }

    setLoading(true);
    setError(null);

    try {
      const result = await geminiProxy({
        action: 'generateContent',
        params: {
          model,
          contents: prompt,
        },
      });
      return result.data.text;
    } catch (e: any) {
      const errorMessage = e.message || 'An unknown error occurred.';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return { generateContent, loading, error };
};
