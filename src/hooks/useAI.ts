// src/hooks/useAI.ts
import { useState, useCallback } from 'react';
import { httpsCallable, HttpsCallable } from 'firebase/functions';
import { functions } from '../../firebase';

let geminiProxy: HttpsCallable<unknown, { text: string }> | null = null;
if (functions) {
  geminiProxy = httpsCallable(functions, 'geminiProxy');
}

export const useAI = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateContent = useCallback(async (prompt: string, model = 'gemini-1.5-flash') => {
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
    } catch (e: unknown) {
      if (e instanceof Error) {
        const errorMessage = e.message || 'An unknown error occurred.';
        setError(errorMessage);
        throw new Error(errorMessage);
      } else {
        setError('An unknown error occurred.');
        throw new Error('An unknown error occurred.');
      }
    } finally {
      setLoading(false);
    }
  }, []);

  return { generateContent, loading, error };
};