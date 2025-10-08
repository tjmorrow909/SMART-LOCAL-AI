// src/pages/ToolsView.tsx

import React, { useState, type FC } from 'react';
import { useAI } from '../hooks/useAI';

export const ToolsView: FC = () => {
  // State for GBP Post tool
  const [postTopic, setPostTopic] = useState('');
  const [postTone, setPostTone] = useState('Friendly');
  const [postResult, setPostResult] = useState('');
  const { generateContent, loading: isGeneratingPost, error: postError } = useAI();

  // State for Keyword Ideas tool
  const [keywordService, setKeywordService] = useState('');
  const [keywordLocation, setKeywordLocation] = useState('');
  const [keywordResult, setKeywordResult] = useState('');
  const {
    generateContent: generateKeywords,
    loading: isGeneratingKeywords,
    error: keywordError,
  } = useAI();

  const handleGeneratePost = async () => {
    if (!postTopic.trim()) return;

    setPostResult('');
    const prompt = `Generate a short, engaging Google Business Profile post about "${postTopic}". The tone of voice should be ${postTone}. Include relevant hashtags.`;

    try {
      const result = await generateContent(prompt);
      setPostResult(result);
    } catch (e: any) {
      // Error handled by hook
    }
  };

  const handleGetIdeas = async () => {
    if (!keywordService.trim() || !keywordLocation.trim()) return;

    setKeywordResult('');
    const prompt = `Generate a list of local SEO keyword ideas for a business that offers "${keywordService}" in "${keywordLocation}". Include a mix of short-tail, long-tail, and question-based keywords.`;

    try {
      const result = await generateKeywords(prompt);
      setKeywordResult(result);
    } catch (e: any) {
      // Error handled by hook
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
            <input
              type="text"
              id="post-topic"
              placeholder="e.g., New weekly special, upcoming event"
              value={postTopic}
              onChange={(e) => setPostTopic(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="post-tone">Tone of Voice</label>
            <select id="post-tone" value={postTone} onChange={(e) => setPostTone(e.target.value)}>
              <option>Friendly</option>
              <option>Professional</option>
              <option>Excited</option>
              <option>Informative</option>
            </select>
          </div>
          <button
            className="btn btn-primary"
            onClick={handleGeneratePost}
            disabled={isGeneratingPost || !postTopic.trim()}
          >
            {isGeneratingPost ? 'Generating...' : 'Generate Post'}
          </button>
          <div
            className={`result-container ${postResult ? 'has-content' : ''} ${postError ? 'error' : ''}`}
          >
            {isGeneratingPost && <div className="loading-spinner small"></div>}
            {postError && <p>{postError}</p>}
            {postResult && <p>{postResult}</p>}
          </div>
        </div>
        <div className="tool-card">
          <h3>Local SEO Keyword Ideas</h3>
          <div className="form-group">
            <label htmlFor="keyword-service">Service/Product</label>
            <input
              type="text"
              id="keyword-service"
              placeholder="e.g., residential plumbing, artisan coffee"
              value={keywordService}
              onChange={(e) => setKeywordService(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="keyword-location">Location</label>
            <input
              type="text"
              id="keyword-location"
              placeholder="e.g., San Francisco"
              value={keywordLocation}
              onChange={(e) => setKeywordLocation(e.target.value)}
            />
          </div>
          <button
            className="btn btn-primary"
            onClick={handleGetIdeas}
            disabled={isGeneratingKeywords || !keywordService.trim() || !keywordLocation.trim()}
          >
            {isGeneratingKeywords ? 'Generating...' : 'Get Ideas'}
          </button>
          <div
            className={`result-container ${keywordResult ? 'has-content' : ''} ${keywordError ? 'error' : ''}`}
          >
            {isGeneratingKeywords && <div className="loading-spinner small"></div>}
            {keywordError && <p>{keywordError}</p>}
            {keywordResult && <p>{keywordResult}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};
