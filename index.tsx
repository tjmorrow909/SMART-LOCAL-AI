import React, { useState, useMemo, useEffect, useRef, useCallback } from "react";
import ReactDOM from "react-dom/client";
import { initializeApp } from 'firebase/app';
import { collection, doc, getDocs, setDoc, deleteDoc, Firestore } from '@firebase/firestore';
import { db, firebaseError, signInWithGoogle, signOut, onAuthStateChanged, auth, type User } from '/home/user/SMART-LOCAL-AI/firebase';
import { Loader } from "@googlemaps/js-api-loader";

import { getAI, getGenerativeModel, type GenerativeModel } from 'firebase/ai';

declare var google: any;
interface ClientInfo {
  website: string;
  description: string;
}
interface QuestionnaireAnswers {
    goals: string[];
    customerSupportChannels: string[];
    marketingTime: string;
    biggestChallenge: string;
}
interface Tool {
    name: string;
    description: string;
    url: string;
}
interface Profile extends ClientInfo {
  initiatedPackage: string;
  initiatedDate: string;
  tools?: Tool[];
  auditReport?: string;
}

const formatMarkdownToHtml = (text: string) => {
  // --- App Structure and Types ---

    if (!text) return "";
    let html = text
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/^### (.*$)/gim, '<h4>$1</h4>')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/`([^`]+)`/g, '<code>$1</code>')
        .replace(/^\s*[\*\-]\s(.*$)/gim, '<li>$1</li>')
        .replace(/^\s*\d+\.\s(.*$)/gim, '<li>$1</li>');

    html = html.replace(/(<li>.*<\/li>)/gs, '<ul>$1</ul>').replace(/<\/ul>\s*<ul>/g, '');

    html = html.replace(/\n/g, '<br />');
    html = html.replace(/<br \/>\s*<br \/>/g, '<br />');
    html = html.replace(/<\/h4><br \/>/g, '</h4>');
    html = html.replace(/<\/ul><br \/>/g, '</ul>');
    html = html.replace(/<br \/><ul>/g, '<ul>');

    return html;
};

// --- Firestore Data Helpers ---
const getProfiles = async (userId: string): Promise<Profile[]> => {
  try {
    const profilesCol = collection(db!, 'users', userId, 'profiles');
    const querySnapshot = await getDocs(profilesCol);
    const profiles = querySnapshot.docs.map(doc => doc.data() as Profile);
    profiles.sort((a, b) => a.name.localeCompare(b.name));
    return profiles;
  } catch (error) {
    console.error("Error reading profiles from Firestore", error);
    return [];
  }
};

const saveProfile = async (userId: string, newProfile: Profile) => {
  try {
    const profileDocRef = doc(db!, 'users', userId, 'profiles', newProfile.name);
    await setDoc(profileDocRef, newProfile, { merge: true });
  } catch (error) {
    console.error("Error saving profile to Firestore", error);
    throw error;
  }
};

const deleteProfile = async (userId: string, profileName: string) => {
  try {
    const profileDocRef = doc(db!, 'users', userId, 'profiles', profileName);
    await deleteDoc(profileDocRef);
  } catch (error) {
    console.error("Error deleting profile from Firestore", error);
  }
};

// Initialize the Gemini AI Client
let ai: GenerativeModel | null = null;
if (!firebaseError) { // Make sure firebaseError is a string here, not a function
    const firebaseApp = initializeApp(auth.app.options); // Use the same config as auth
    const aiInstance = getAI(firebaseApp);
    ai = getGenerativeModel(aiInstance, { model: 'gemini-1.5-flash-preview-0514' });
}

// --- Authentication Hook ---
const useAuth = () => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!auth) {
            setLoading(false);
            return;
        }
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    return { user, loading };
};


// --- App Shell ---
const App = () => {
    if (firebaseError) {
        return <FirebaseErrorScreen error={firebaseError.toString()} />;
    }
    const { user, loading } = useAuth();
    if (loading) { return <LoadingScreen />; }
    if (!user) { return <LoginView />; }
    return <MainApp user={user} />;
};

const LogoSvg = ({ theme = 'light' }: { theme?: 'light' | 'dark' }) => {
    const textColor = theme === 'light' ? 'white' : '#1A2B44';
    return (
        <img
            src={`data:image/svg+xml;utf8,${encodeURIComponent(`
            <svg width="270" height="60" viewBox="0 0 270 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <style>
                .heavy { font: 600 32px 'Poppins', sans-serif; fill: ${textColor}; }
                .light { font: 400 32px 'Poppins', sans-serif; fill: ${textColor}; }
                .ai-text { font: 600 28px 'Poppins', sans-serif; fill: #1A2B44; }
              </style>
              <text x="0" y="42" class="heavy">SMART<tspan class="light">LOCAL</tspan></text>
              <rect x="205" y="12" width="60" height="36" rx="8" fill="#A6CE39"/>
              <text x="215" y="39" class="ai-text">.AI</text>
            </svg>`)}`}
            alt="SMARTLOCAL AI Logo"
            className="header-logo"
        />
    );
};

const LoadingScreen = () => (
    <div className="loading-screen">
        <LogoSvg theme="light" />
        <div className="loading-spinner"></div>
    </div>
);

const FirebaseErrorScreen = ({ error }: { error: string | Error | unknown }) => (
    <div className="login-view">
        <div className="login-box" style={{ borderColor: 'var(--danger)', borderWidth: '2px', borderStyle: 'solid' }}>
            <LogoSvg theme="dark" />
            <h1>Configuration Error</h1>
            <p>The application could not start due to a configuration issue.</p>
            <div className="result-container error" style={{ textAlign: 'left', marginTop: 0, marginBottom: '1.5rem' }}>
                <p><strong>Error Details:</strong> {error}</p>
            </div>
            <p style={{marginTop: '1.5rem', fontSize: '0.9rem', color: '#6c757d'}}>Please contact the administrator or check your environment variables to resolve this issue.</p>
        </div>
    </div>
);

const LoginView = () => {
    const [error, setError] = useState<string | null>(null);

    const handleSignIn = async () => {
        setError(null);
        try {
            await signInWithGoogle();
        } catch (err) {
            console.error("Sign in failed:", err);
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("An unknown error occurred during sign-in.");
            }
        }
    };

    return (
        <div className="login-view">
            <div className="login-box">
                <LogoSvg theme="dark" />
                <h1>Welcome to SMARTLOCAL.AI</h1>
                <p>Your intelligent assistant for growing local businesses. Sign in to get started.</p>
                {error && <div className="result-container error" style={{marginBottom: '1rem'}}><p>{error}</p></div>}
                <button onClick={handleSignIn} className="btn btn-google">
                    <svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style={{height: '18px', width: '18px', display: 'block'}}><g fill="none" fillRule="evenodd"><path d="M17.64 9.2045c0-.6381-.0573-1.2518-.1636-1.8409H9v3.4814h4.8441c-.2086 1.125-.8427 2.0782-1.7964 2.7232v2.2582h2.9087c1.7018-1.5668 2.6836-3.874 2.6836-6.6219z" fill="#4285F4"></path><path d="M9 18c2.43 0 4.4673-.806 5.9564-2.1805l-2.9087-2.2582c-.806.5427-1.8409.8618-3.0477.8618-2.344 0-4.3282-1.5832-5.036-3.7104H.957v2.3318C2.4382 16.1423 5.4818 18 9 18z" fill="#34A853"></path><path d="M3.964 10.71c-.18-.5427-.2822-1.1168-.2822-1.71s.1023-1.1673.2822-1.71V4.9582H.957C.3477 6.1718 0 7.5477 0 9c0 1.4523.3477 2.8282.957 4.0418L3.964 10.71z" fill="#FBBC05"></path><path d="M9 3.5795c1.3218 0 2.5077.4541 3.4405 1.346l2.5813-2.5814C13.4632.8918 11.425 0 9 0 5.4818 0 2.4382 1.8577.957 4.9582L3.964 7.29C4.6718 5.1632 6.656 3.5795 9 3.5795z" fill="#EA4335"></path></g></svg>
                    Sign In with Google
                </button>
            </div>
        </div>
    );
};


const MainApp = ({ user }: { user: User }) => {
  const [view, setView] = useState<View>("clientSetup");
  const [clientInfo, setClientInfo] = useState<ClientInfo | null>(null);
  const [questionnaireAnswers, setQuestionnaireAnswers] = useState<QuestionnaireAnswers | null>(null);
  
  const renderView = () => {
    switch (view) {
      case "services":
        return <ServicesView />;
      case "questionnaire":
        return <QuestionnaireView setView={setView} setQuestionnaireAnswers={setQuestionnaireAnswers} clientName={clientInfo?.name} />;
      case "audit":
        return <AuditView clientInfo={clientInfo} questionnaireAnswers={questionnaireAnswers} user={user} />;
      case "tools":
        return <ToolsView clientInfo={clientInfo} />;
      case "profiles":
        return <ProfilesView setView={setView} setClientInfo={setClientInfo} user={user}/>;
      case "map":
        return <MapView setView={setView} setClientInfo={setClientInfo} />;
      case "clientSetup":
      default:
        return <ClientSetupView setView={setView} setClientInfo={setClientInfo} />;
    }
  };

  return (
    <>
      <Header currentView={view} setView={setView} clientName={clientInfo?.name} hasClient={!!clientInfo} user={user} signOut={signOut} />
      <main className="app-container">
        {renderView()}
      </main>
    </>
  );
};


// --- Header Component ---
interface HeaderProps {
  currentView: View;
  setView: (view: View) => void;
  clientName: string | undefined;
  hasClient: boolean;
  user: User;
  signOut: (auth: Auth) => Promise<void>; // Correct type to match Firebase auth.signOut
}
const Header = ({ currentView, setView, clientName, hasClient, user, signOut }: HeaderProps) => {
  const navItems: {id: View, label: string}[] = [
      { id: "clientSetup", label: "Client" },
      { id: "map", label: "Map"},
      { id: "profiles", label: "Profiles" },
      { id: "audit", label: "Audit" },
      { id: "tools", label: "Tools" },
      { id: "services", label: "Services" },
  ];
  const alwaysEnabled: View[] = ['clientSetup', 'services', 'profiles', 'map'];

  const handleSignOut = async () => {
    try {
      await signOut(auth); // Pass the auth object
    } catch (error) {
      console.error("Sign out failed:", error);
      alert(`Sign out failed: ${error}`);
    }
  };
  
  return (
    <header className="app-header">
      <div className="header-branding" onClick={() => setView("clientSetup")} title="Go to Client Setup">
         <LogoSvg theme="light" />
      </div>
      <nav className="app-nav">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`nav-button ${currentView === item.id ? "active" : ""}`}
            onClick={() => setView(item.id)}
            aria-current={currentView === item.id ? "page" : undefined}
            disabled={!alwaysEnabled.includes(item.id) && !hasClient}
          >
            {item.label}
          </button>
        ))}
      </nav>
      {clientName && <span className="header-session-info">Session for: {clientName}</span>}
      <div className="header-user-info">
        {user.photoURL && <img src={user.photoURL} alt="User profile picture" />}
        <span className="user-name">{user.displayName}</span>
        <button onClick={() => handleSignOut()} className="btn-sign-out">Sign Out</button>      </div>
    </header>
  );
};


// --- View Components ---

const ClientSetupView = ({ setView, setClientInfo }: { setView: (view: View) => void, setClientInfo: (info: ClientInfo) => void }) => {
    const [notes, setNotes] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);
    const [error, setError] = useState('');
    const handleProceed = async () => {
    
        if (!ai) { setError("AI client not initialized."); return; }
        if (!notes.trim()) {
            alert("Please provide some notes before proceeding.");
            return;
        }
        setIsProcessing(true);
        setError('');
        const prompt = `Analyze the following unstructured notes from a client consultation. Your task is to extract key information about the business.
        From the notes, identify:
        1. The official name of the business.
        2. The business's website URL, if mentioned.
        3. A concise, one-paragraph summary of what the business does, its main offerings, or its current situation.
        Notes:
        ---
        ${notes}
        ---
        Return the result as a JSON object with the keys "name", "website", and "description". If a piece of information isn't found, return an empty string for that key.`;
 try {
            const response = await ai.models.generateContent({
                contents: [{ role: "user", parts: [{ text: prompt }] }],
                config: {
                    responseMimeType: "application/json", // Request JSON output
                    responseSchema: {
                             name: { type: "STRING" }, website: { type: "STRING" }, description: { type: "STRING" }, required: ["name", "website", "description"] 
                    }
                }
 });
            const extractedInfo = JSON.parse(response.text);
            if (!extractedInfo.name) {
                throw new Error("Could not identify a business name from the notes.");
            }
            setClientInfo(extractedInfo);
            setView('questionnaire');
        } catch (err) {
            console.error("Note parsing error:", err);
            setError("Failed to analyze notes. Please ensure the business name is clearly mentioned and try again.");
            setIsProcessing(false);
        }
    };

    const keyQuestions = ["What is the business name and website?", "What products or services do you offer?", "Who are your primary customers?", "What are your biggest business goals right now?", "What's your biggest challenge or bottleneck?", "How do you currently handle marketing?", "How do you communicate with customers?"];

    return (
        <div className="view-container client-setup-view">
            <div className="client-setup-header">
                <h2>Start a New Client Consultation</h2>
                <p>Use the notepad below to capture details during your conversation. The AI will analyze your notes to set up the client profile.</p>
            </div>
            
            <div className="client-setup-layout">
                <div className="key-questions-panel">
                    <h3>Key Questions to Ask</h3>
                    <ul>{keyQuestions.map(q => <li key={q}>{q}</li>)}</ul>
                </div>
                
                <div className="notepad-container">
                    <textarea 
                        className="notepad-textarea" 
                        value={notes} 
                        onChange={(e) => setNotes(e.target.value)} 
                        placeholder="Start taking notes here..."
                        rows={15}
                    />
                    <div className="notepad-actions">
                        <button 
                            className="btn btn-primary" 
                            onClick={handleProceed} 
                            disabled={isProcessing || !notes.trim()}
                        >
                            {isProcessing ? 'Analyzing...' : 'Analyze Notes & Proceed'}
                        </button>
                    </div>
                    {isProcessing && <div className="loading-spinner" style={{marginTop: '1rem'}}></div>}
                    {error && <div className="result-container error" style={{marginTop: '1rem'}}><p>{error}</p></div>}
                </div>
            </div>
        </div>
    );
};

const QuestionnaireView = ({ setView, setQuestionnaireAnswers, clientName }: { setView: (view: View) => void; setQuestionnaireAnswers: (answers: QuestionnaireAnswers) => void, clientName?: string }) => {
    const [goals, setGoals] = useState<string[]>([]);
    const [customerSupportChannels, setCustomerSupportChannels] = useState<string[]>([]);
    const [marketingTime, setMarketingTime] = useState('');
    const [biggestChallenge, setBiggestChallenge] = useState('');
    const handleCheckboxChange = (setter: React.Dispatch<React.SetStateAction<string[]>>) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target;
        setter(prev => checked ? [...prev, value] : prev.filter(item => item !== value));
    };
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setQuestionnaireAnswers({ goals, customerSupportChannels, marketingTime, biggestChallenge });
        setView('audit');
    };
    const goalOptions = ["Increase online sales/bookings", "Generate more leads", "Improve customer service", "Save time on daily tasks", "Enhance social media presence"];
    const supportOptions = ["Answering phone calls", "Replying to emails", "Direct messages on social media", "Responding to online reviews", "No formal process"];
    const timeOptions = ["0-2 hours", "3-5 hours", "6-10 hours", "10+ hours"];
    return (
        <div className="view-container questionnaire-view">
            <h2>Client Questionnaire for {clientName || 'the Business'}</h2>
            <p>Your answers will help us tailor the AI recommendations.</p>
            <form className="questionnaire-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>What are your primary business goals? <span className="label-note">(Check all that apply)</span></label>
                    <div className="checkbox-group">{goalOptions.map(goal => (<label key={goal} className="checkbox-item"><input type="checkbox" value={goal} onChange={handleCheckboxChange(setGoals)} />{goal}</label>))}</div>
                </div>
                <div className="form-group">
                    <label>How do you currently handle customer communication? <span className="label-note">(Check all that apply)</span></label>
                    <div className="checkbox-group">{supportOptions.map(opt => (<label key={opt} className="checkbox-item"><input type="checkbox" value={opt} onChange={handleCheckboxChange(setCustomerSupportChannels)} />{opt}</label>))}</div>
                </div>
                <div className="form-group">
                    <label>How much time is spent on marketing each week? <span className="label-note">(Select one)</span></label>
                    <div className="radio-group">{timeOptions.map(opt => (<label key={opt} className="radio-item"><input type="radio" name="marketingTime" value={opt} checked={marketingTime === opt} onChange={(e) => setMarketingTime(e.target.value)} />{opt}</label>))}</div>
                </div>
                <div className="form-group">
                    <label htmlFor="biggest-challenge">What is your single biggest challenge or bottleneck right now?</label>
                    <textarea id="biggest-challenge" value={biggestChallenge} onChange={(e) => setBiggestChallenge(e.target.value)} placeholder="e.g., 'Not enough time to post on social media consistently' or 'Struggling to reply to all customer emails quickly'" rows={4}></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Proceed to AI Audit</button>
            </form>
        </div>
    );
};

const ServicesView = () => {
  const [expanded, setExpanded] = useState<string | null>(null);
  const services = [ { id: "quick-boost", name: "Quick Boost", price: "$99", description: "Setup of 1 AI tool, perfect for a quick and impactful start.", details: [ "Setup of 1 AI tool (e.g. chatbot or caption generator)", "30-minute setup and 10-minute tutorial", "PDF cheat sheet with instructions", ], }, { id: "growth-kit", name: "Growth Kit", price: "$299", description: "A comprehensive package to integrate multiple AI solutions.", details: [ "Setup of 3 AI tools (chatbot, content system, review reply)", "Custom templates + branding alignment", "7-day support", ], }, { id: "vip-automation", name: "VIP Automation", price: "$699+", description: "A complete AI transformation for your business.", details: [ "Full AI audit and business system revamp", "Up to 5 integrated tools", "Custom-trained assistant for posts, replies, scheduling", "AI-generated assets, print-ready QR codes, and training", ], }, ];
  const toggleExpand = (id: string) => { setExpanded(expanded === id ? null : id); };
  return (
    <div className="view-container">
      <h2>Our Service Packages</h2>
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card" onClick={() => toggleExpand(service.id)} role="button" tabIndex={0} aria-expanded={expanded === service.id}>
            <div className="service-header">
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <div className="service-price">{service.price}</div>
            </div>
            <div className={`service-details ${expanded === service.id ? "expanded" : ""}`}>
              <ul>{service.details.map((detail, index) => (<li key={index}>{detail}</li>))}</ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

interface AuditViewProps {
  clientInfo: ClientInfo | null;
  questionnaireAnswers: QuestionnaireAnswers | null;
  user: User;
}

const AuditView = ({ clientInfo, questionnaireAnswers, user }: AuditViewProps) => {
  const [auditResult, setAuditResult] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [mindset, setMindset] = useState("Open to Try");
  const [recommendedPackage, setRecommendedPackage] = useState<string | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<string>("");
  const [isInitiated, setIsInitiated] = useState(false);
  const [generatingTools, setGeneratingTools] = useState(false);

  const handleGenerateAudit = async () => {
    if (!ai) { setError("AI client not initialized."); return; }
    if (!clientInfo) {
      setError("Client information is missing. Please set it up in the 'Client' tab or find a business on the 'Map' tab.");
      return;
    }
    setLoading(true);
    setAuditResult("");
    setError("");
    setRecommendedPackage(null);
    setSelectedPackage("");
    setIsInitiated(false);
    if (mindset === "Wants Nothing to Do With It") {
        const gracefulExitMessage = `### Acknowledging Your Preference\nThat's perfectly understandable. AI isn't for everyone, and it's important to find what works best for your business. We respect your position entirely.\n\n### One Low-Pressure Idea (Optional)\nIf you're ever in a pinch and just need a quick hand, one simple, non-intrusive idea is using a free tool to help write a single social media post when you're short on time. There's no commitment or complex setup.\n\nFor now, thank you for your time, and we wish you all the best with ${clientInfo.name}!`;
        setAuditResult(gracefulExitMessage);
        setLoading(false);
        return;
    }
    let questionnaireSummary = "The client did not fill out the questionnaire.";
    if (questionnaireAnswers && (questionnaireAnswers.goals.length > 0 || questionnaireAnswers.customerSupportChannels.length > 0 || questionnaireAnswers.marketingTime || questionnaireAnswers.biggestChallenge)) {
        questionnaireSummary = `\nClient's Questionnaire Insights:\n- Primary Goals: ${questionnaireAnswers.goals.join(', ') || 'Not specified'}\n- Current Customer Communication: ${questionnaireAnswers.customerSupportChannels.join(', ') || 'Not specified'}\n- Weekly Marketing Time: ${questionnaireAnswers.marketingTime || 'Not specified'}\n- Biggest Challenge: "${questionnaireAnswers.biggestChallenge || 'Not specified'}"\n`;
    }
    const mindsetInstructions: Record<string, string> = { "Skeptic": "The client is a 'Skeptic'. Your tone must be patient, data-driven, and reassuring. Focus on control, transparency, and low-risk starting points. Avoid buzzwords. Clearly explain *how* each tool works in simple terms and emphasize that the business owner is always in control of the final output (e.g., 'AI drafts a reply, but you approve it').", "Old-fashioned": "The client is 'Old-fashioned'. Use relatable, non-technical analogies to explain AI concepts (e.g., compare an AI chatbot to a 24/7 receptionist). Avoid jargon completely. Focus on practical, time-saving benefits and connect them to familiar business practices.", "Curious": "The client is 'Curious'. They are interested but might not know where to start. Your tone should be educational and encouraging. Explain the 'why' behind each recommendation. Offer simple, foundational tools that provide clear value.", "Open to Try": "The client is 'Open to Try'. Your tone should be exciting and action-oriented. Highlight quick, simple wins. Recommend low-hassle, easy-to-implement tools first. Focus on the positive impact and how easy it is to get started.", "Enthusiastic": "The client is an 'Enthusiast' and may already use some AI. You can skip the basic explanations. Offer more advanced or integrative tool suggestions. Focus on how Google's AI can connect different parts of their business or automate more complex workflows. Be direct and use standard industry terms where appropriate." };
    const prompt = `You are the SmartLocal AI Audit Bot. Your mission is to help small local businesses grow using **only Google tools and services**.

**Your Persona & Rules:**
- Your identity is the "SmartLocal AI Audit Bot". It is critical that you adopt the communication strategy provided based on the client's mindset.
- You **must exclusively recommend solutions from the Google ecosystem** (e.g., Google Workspace, Google Cloud, Firebase, Vertex AI, Google Ads, Google Business Profile, YouTube, etc.). **Never suggest non-Google tools.**
- Your language must be plain, friendly, and professional, focusing on immediate wins and clear ROI.
- Your tone and pacing must be adjusted based on the client's mindset.

**Client's Mindset Towards AI: ${mindset}**
**Your Communication Strategy:** ${mindsetInstructions[mindset]}. It is critical that you adopt this persona and tailor your entire response accordingly.

**Client Information & Questionnaire Responses:**
- Business Name: "${clientInfo.name}"
- Website: "${clientInfo.website || 'Not provided'}"
- Description: "${clientInfo.description || 'Not provided'}"
${questionnaireSummary}

**Your Task:**
1.  Use Google Search to analyze the client's online presence.
2.  Based on your analysis and the questionnaire, generate a report in markdown.
3.  The report must contain these exact sections:

### 3 Quick Wins
Suggest three actionable improvements using Google tools that can show results in under 7 days.

### 3 Growth Recommendations
Suggest three longer-term strategies for sustained growth, again using only Google tools.

### ROI One-Liner
A single sentence explaining the potential return on investment in simple terms. Example: "By using Google's AI to automate replies and social media, you could save 5+ hours a week and capture more leads."

4. After the report, recommend one of our service packages and explain why it's the best fit based on the client's needs and your recommendations. The packages are:
- **Quick Boost ($99):** For setting up one foundational Google AI tool.
- **Growth Kit ($299):** For integrating a few core Google AI tools.
- **VIP Automation ($699+):** For a full Google AI business system revamp.`;
    try {
      const response = await ai.models.generateContent({ model: 'gemini-2.5-flash', contents: [{ role: "user", parts: [{ text: prompt }] }], config: { tools: [{ googleSearch: {} }] }, });
      const resultText = response.text;
      setAuditResult(resultText);
      const packages = ["VIP Automation", "Growth Kit", "Quick Boost"];
      let foundPackage: string | null = null;
      for (const pkg of packages) { if (resultText.toLowerCase().includes(pkg.toLowerCase())) { foundPackage = pkg; break; } }
      if (foundPackage) { setRecommendedPackage(foundPackage); setSelectedPackage(foundPackage); } else if (mindset !== "Wants Nothing to Do With It") { setSelectedPackage("Quick Boost"); }
    } catch (err) {
      console.error("Error generating audit:", err);
      setError("Failed to generate the audit. Please check your connection or API key and try again.");
    } finally { setLoading(false); }
  };

  const handleInitiatePackage = async () => {
    if (!ai) { setError("AI client not initialized."); return; }
    if (!clientInfo || !user) return;
    setGeneratingTools(true);
    setIsInitiated(false);
    setError("");
    const toolPrompt = `For a business named "${clientInfo.name}" with the description "${clientInfo.description || 'N/A'}" that has signed up for our "${selectedPackage}" package, please generate a list of 3 to 5 specific AI tools or services exclusively from the Google ecosystem that would be highly beneficial for them. For each tool, provide its name (e.g., "Google Business Profile," "Google Analytics," "Google Ads AI"), a one-sentence description of how it helps this specific business, and a valid, real-world URL for the tool's website. The output must be a JSON object with a single key "tools", which is an array of objects.`;
    try {
            const response = await ai.models.generateContent({ model: "gemini-2.5-flash", contents: [{ role: "user", parts: [{ text: toolPrompt }] }], config: { responseMimeType: "application/json", responseSchema: { type: "OBJECT", properties: { tools: { type: "ARRAY", items: { type: "OBJECT", properties: { name: { type: "STRING", description: "Name of the AI tool or service." }, description: { type: "STRING", description: "A one-sentence explanation of its benefit to the business." }, url: { type: "STRING", description: "The homepage URL of the tool." } }, required: ["name", "description", "url"] } } }, required: ["tools"] } }
        });

        const resultData = JSON.parse(response.text);

        const newProfile: Profile = { ...clientInfo, initiatedPackage: selectedPackage, initiatedDate: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }), tools: resultData.tools || [], auditReport: auditResult };
        await saveProfile(user.uid, newProfile);
        setIsInitiated(true);
    } catch (err) {
        setError("Failed to generate the recommended tools for the profile. The profile was not saved. Please try again.");
    } finally { setGeneratingTools(false); }
  };

  return (
    <div className="view-container">
      <h2>AI Readiness Audit</h2>
      <p>This tool analyzes the client's online presence to generate a personalized AI readiness report and service recommendation.</p>
      <div className="audit-controls">
        <div className="form-group">
            <label htmlFor="mindset-select">First, how does the client feel about AI?</label>
            <select id="mindset-select" value={mindset} onChange={(e) => setMindset(e.target.value)} disabled={loading}>
                <option value="Open to Try">Open to Try</option> <option value="Curious">Curious</option> <option value="Skeptic">Skeptic</option> <option value="Old-fashioned">Old-fashioned</option> <option value="Enthusiastic">Enthusiastic</option> <option value="Wants Nothing to Do With It">Wants Nothing to Do With It</option>
            </select>
        </div>
        <button className="btn btn-primary" onClick={handleGenerateAudit} disabled={loading || !clientInfo}>{loading ? 'Analyzing Business...' : 'Generate AI Audit'}</button>
      </div>
      <div className={`result-container ${error ? 'error' : ''} ${auditResult ? 'has-content' : ''}`}>
        {loading && <div className="loading-spinner"></div>}
        {error && <p>{error}</p>}
        {auditResult && (<div className="audit-report" dangerouslySetInnerHTML={{ __html: formatMarkdownToHtml(auditResult) }}></div>)}
        {!loading && !error && !auditResult && (<div className="audit-placeholder">Your client's personalized report will appear here.</div>)}
      </div>
      {auditResult && !loading && !error && mindset !== "Wants Nothing to Do With It" && (
        <div className="initiation-container">
          {isInitiated ? (
            <div className="initiation-success">
              <h4>Success!</h4>
              <p>The <strong>{selectedPackage}</strong> package has been initiated for <strong>{clientInfo?.name}</strong>. The profile, complete with recommended tools, has been saved to the 'Profiles' tab.</p>
            </div>
          ) : (
            <>
              <h3>Recommended Action</h3>
              {recommendedPackage ? (<p>Based on the analysis, the AI recommends the <strong>{recommendedPackage}</strong> package.</p>) : (<p>No specific package was recommended. Please select a package to proceed.</p>)}
              <div className="package-selection">
                <label htmlFor="package-select">Selected Package:</label>
                <select id="package-select" value={selectedPackage} onChange={(e) => setSelectedPackage(e.target.value)}>
                  <option value="Quick Boost">Quick Boost ($99)</option> <option value="Growth Kit">Growth Kit ($299)</option> <option value="VIP Automation">VIP Automation ($699+)</option>
                </select>
                <button className="btn btn-primary" onClick={handleInitiatePackage} disabled={!selectedPackage || generatingTools}>{generatingTools ? 'Saving Profile & Tools...' : `Initiate ${selectedPackage}`}</button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

// --- AI Tool: Generic Generator Component ---
interface AiToolGeneratorProps { title: string; promptTemplate: (inputs: Record<string, string>) => string; children?: React.ReactNode; getInputs: () => Record<string, string> | null; useGoogleSearch?: boolean; }
const AiToolGenerator = ({ title, promptTemplate, children, getInputs, useGoogleSearch = false }: AiToolGeneratorProps) => {
  const [result, setResult] = useState(""); const [sources, setSources] = useState<any[]>([]); const [error, setError] = useState(""); const [loading, setLoading] = useState(false);
  const handleGenerate = async () => {
    if (!ai) { setError("AI client not initialized. Check API_KEY."); return; }
    const inputs = getInputs(); if (!inputs) { setError("Please fill in all required fields."); return; }
    setLoading(true); setResult(""); setError(""); setSources([]);
    try {
      const prompt = promptTemplate(inputs);
      const response = await (ai as GenerativeModel).model.generateContent({ model: 'gemini-2.5-flash', contents: [{ role: "user", parts: [{ text: prompt }] }], ...(useGoogleSearch && { tools: [{googleSearch: {}}] }) });
      setResult(response.text);
      const groundingMetadata = response.candidates?.[0]?.citationMetadata; // Use citationMetadata
      if (groundingMetadata?.groundingChunks) { setSources(groundingMetadata.groundingChunks); }
    } catch (err) { console.error(err); setError("Failed to generate content. Please try again."); } finally { setLoading(false); }
  };
  return (
    <div className="tool-card">
      <h3>{title}</h3>
      {children}
      <button className="btn btn-primary" onClick={handleGenerate} disabled={loading}>{loading ? 'Generating...' : 'Generate'}</button>
      <div className={`result-container ${error ? 'error' : ''}`}>
        {loading && <div className="loading-spinner"></div>}
        {error && <p>{error}</p>}
        {result && <p>{result}</p>}
        {sources.length > 0 && (
          <div className="sources-container">
            <h4>Sources:</h4>
            <ul>{sources.map((source, index) => (source.web?.uri && (<li key={index}><a href={source.web.uri} target="_blank" rel="noopener noreferrer">{source.web.title || source.web.uri}</a></li>)))}</ul>
          </div>
        )}
      </div>
    </div>
  );
};

const SocialPostCreator = ({ clientInfo }: { clientInfo: ClientInfo | null }) => {
    const [imagePrompt, setImagePrompt] = useState(''); const [generatedImage, setGeneratedImage] = useState(''); const [generatedCaption, setGeneratedCaption] = useState(''); const [loading, setLoading] = useState(false); const [error, setError] = useState('');
    const handleGenerate = async () => {
        if (!ai) { setError("AI client not initialized."); return; }
        if (!imagePrompt.trim()) { setError('Please enter a prompt for the image.'); return; }
        setLoading(true); setError(''); setGeneratedImage(''); setGeneratedCaption('');
        try {
            const imageResponse = await ai.model.generateImages({ model: 'imagen-3.0-generate-002', prompt: imagePrompt, config: { numberOfImages: 1, outputMimeType: 'image/jpeg', aspectRatio: '1:1' } });
            const base64ImageBytes = imageResponse.generatedImages?.[0]?.image?.imageBytes;
            const imageUrl = `data:image/jpeg;base64,${base64ImageBytes}`;
            setGeneratedImage(imageUrl);
            const captionPrompt = `You are a social media manager for ${clientInfo?.name || 'a local business'}. Generate a short, engaging Instagram caption for an image based on this concept: "${imagePrompt}". ${clientInfo?.description ? `The business's description is: "${clientInfo.description}".` : ''} The caption should be upbeat, include relevant emojis, and 2-3 relevant hashtags.`;
            const captionResponse = await ai.model.generateContent({ model: 'gemini-2.5-flash', contents: captionPrompt });
            setGeneratedCaption(captionResponse.text);
        } catch (err) { console.error("Error generating social post:", err); setError("Sorry, couldn't generate the post. Please try again."); } finally { setLoading(false); }
    };
    return (
        <div className="tool-card social-post-creator">
            <h3>AI Social Post Creator</h3>
            <div className="form-group">
                <label htmlFor="image-prompt">Image Concept</label>
                <textarea id="image-prompt" value={imagePrompt} onChange={(e) => setImagePrompt(e.target.value)} placeholder="e.g., A smiling family enjoying a large pepperoni pizza at a cozy restaurant." rows={3} />
            </div>
            <button className="btn btn-primary" onClick={handleGenerate} disabled={loading}>{loading ? 'Generating...' : 'Generate Post'}</button>
            <div className={`result-container ${error ? 'error' : ''}`}>
                 {loading && <div className="loading-spinner"></div>}
                 {error && <p>{error}</p>}
                 {!loading && !error && (generatedImage || generatedCaption) && (<div className="post-output">{generatedImage && <img src={generatedImage} alt="AI generated content" />}{generatedCaption && <p className="caption">{generatedCaption}</p>}</div>)}
            </div>
        </div>
    );
};

const ToolsView = ({ clientInfo }: { clientInfo: ClientInfo | null }) => {
  const [reviewText, setReviewText] = useState(""); const [reviewRating, setReviewRating] = useState("5"); const [customerMessage, setCustomerMessage] = useState(""); const [responseTone, setResponseTone] = useState("Professional"); const [reportBusinessName, setReportBusinessName] = useState(clientInfo?.name || ""); const [reportBusinessWebsite, setReportBusinessWebsite] = useState(clientInfo?.website || "");
  React.useEffect(() => { setReportBusinessName(clientInfo?.name || ""); setReportBusinessWebsite(clientInfo?.website || ""); }, [clientInfo]);
  return (
    <div className="view-container">
      <h2>AI Tool Demos</h2>
      <div className="tools-grid">
         <AiToolGenerator title="Business Intelligence Report" useGoogleSearch={true} promptTemplate={(inputs) => `As the SmartLocal AI Audit Bot, generate a concise business intelligence report for the company "${inputs.name}" (website: ${inputs.website}).
          Your report should include:
          1.  A brief summary of what the company does, based on its website and public information.
          2.  Mention of any recent positive news or developments.
          3.  Three concrete, actionable suggestions for how this specific business could use **tools from the Google ecosystem (like Google Ads AI, Google Business Profile, Vertex AI, etc.)** to improve their operations, marketing, or customer service.
          Keep the tone professional, consultative, and strictly adhere to recommending only Google products.`} getInputs={() => reportBusinessName.trim() ? { name: reportBusinessName, website: reportBusinessWebsite } : null}>
          <>
            <div className="form-group"><label htmlFor="report-business-name">Business Name</label><input id="report-business-name" type="text" value={reportBusinessName} onChange={(e) => setReportBusinessName(e.target.value)} placeholder="e.g., 'The Daily Grind Cafe' or 'Innovatech'"/></div>
            <div className="form-group"><label htmlFor="report-business-website">Business Website (Optional)</label><input id="report-business-website" type="text" value={reportBusinessWebsite} onChange={(e) => setReportBusinessWebsite(e.target.value)} placeholder="e.g., www.dailygrind.com"/></div>
          </>
        </AiToolGenerator>
        <SocialPostCreator clientInfo={clientInfo} />
        <AiToolGenerator title="Review Responder" promptTemplate={(inputs) => `Write a professional and empathetic reply to this customer review. The customer gave a ${inputs.rating}-star rating. Here is the review: '${inputs.review}'`} getInputs={() => reviewText.trim() ? { review: reviewText, rating: reviewRating } : null}>
          <>
            <div className="form-group"><label htmlFor="review-text">Customer Review</label><textarea id="review-text" value={reviewText} onChange={(e) => setReviewText(e.target.value)} placeholder="Paste customer review here..."/></div>
            <div className="form-group"><label htmlFor="review-rating">Star Rating</label><select id="review-rating" value={reviewRating} onChange={(e) => setReviewRating(e.target.value)}><option value="5">5 Stars</option><option value="4">4 Stars</option><option value="3">3 Stars</option><option value="2">2 Stars</option><option value="1">1 Star</option></select></div>
          </>
        </AiToolGenerator>
        <AiToolGenerator title="AI Email Responder" promptTemplate={(inputs) => `You are an AI assistant for ${clientInfo?.name || 'a local business'}. ${clientInfo?.description ? `Here's a description of the business: ${clientInfo.description}.` : ''} Draft a ${inputs.tone} email reply to the following customer inquiry. Keep it concise, helpful, and sign off with the business name. Customer's message: "${inputs.message}"`} getInputs={() => customerMessage.trim() ? { message: customerMessage, tone: responseTone } : null}>
          <>
            <div className="form-group"><label htmlFor="customer-message">Customer's Inquiry</label><textarea id="customer-message" value={customerMessage} onChange={(e) => setCustomerMessage(e.target.value)} placeholder="e.g., 'Hi, do you offer gluten-free options?'" rows={4}/></div>
            <div className="form-group"><label htmlFor="response-tone">Response Tone</label><select id="response-tone" value={responseTone} onChange={(e) => setResponseTone(e.target.value)}><option value="Professional">Professional</option><option value="Friendly">Friendly</option><option value="Empathetic">Empathetic</option><option value="Direct">Direct</option></select></div>
          </>
        </AiToolGenerator>
      </div>
    </div>
  );
};

interface ToolListItemProps {
    tool: Tool;
    clientInfo: Profile;
}

const ToolListItem: React.FC<ToolListItemProps> = ({ tool, clientInfo }) => {
    const [guideContent, setGuideContent] = useState<{ consultantGuide: string; clientExplanation: string; } | null>(null); const [guideView, setGuideView] = useState<'consultant' | 'client'>('consultant'); const [error, setError] = useState(""); const [loading, setLoading] = useState(false); const [showCopySuccess, setShowCopySuccess] = useState(false);
    const handleGenerateInstructions = async () => {
        if (!ai) { setError("AI client not initialized. Check API_KEY."); return; }
        setLoading(true); setGuideContent(null); setError("");
        const prompt = `You are an expert AI implementation consultant creating a setup guide for the tool "${tool.name}" for the business "${clientInfo.name}" (${clientInfo.description || 'a local business'}).
Generate a JSON object with two distinct keys: "consultantGuide" and "clientExplanation".
1.  **consultantGuide**: Provide concise, direct, step-by-step instructions for an expert (like me) to set up the tool. Focus on the technical steps. Use markdown with ordered lists and bold text for emphasis.
2.  **clientExplanation**: Write an easy-to-understand explanation for the business owner. It should cover:
    - What this tool is and the specific benefits it will bring to *their* business.
    - A simple, high-level overview of how they will use it day-to-day.
    - Mention 2-3 well-known companies that use similar technology to build trust and credibility.
    Use markdown with h3 headings for sections and bold text.
Do not use top-level headings (h1, h2) in either section.`;
        try {
            const response = await ai.model.generateContent({ model: 'gemini-1.5-flash-preview-0514', contents: prompt, config: { responseMimeType: "application/json", responseSchema: { type: "OBJECT", properties: { consultantGuide: { type: "STRING", description: "Technical, step-by-step setup guide for the consultant, formatted in markdown." }, clientExplanation: { type: "STRING", description: "Benefit-focused explanation for the business owner, including usage and social proof, formatted in markdown." } }, required: ["consultantGuide", "clientExplanation"] } } });
            const resultData = JSON.parse(response.text); setGuideContent(resultData); // Correctly parse JSON
        } catch (err) { console.error("Error generating instructions:", err); setError("Failed to generate instructions. Please try again."); } finally { setLoading(false); }
    };
    const stripMarkdown = (text: string): string => { if (!text) return ""; return text.replace(/### (.*)/g, '$1').replace(/\*\*(.*?)\*\*/g, '$1').replace(/^\s*-\s(.*)/gm, '- $1').replace(/^\s*\d\.\s(.*)/gm, (match, p1) => `${match.split('.')[0]}. ${p1}`).replace(/\n{2,}/g, '\n\n').trim(); };
    const handleShare = async () => {
        if (!guideContent?.clientExplanation) return;
        const plainTextExplanation = stripMarkdown(guideContent.clientExplanation);
        const shareData = { title: `AI Tool Recommendation for ${clientInfo.name}`, text: `Here's an overview of the "${tool.name}" tool we discussed for ${clientInfo.name}:\n\n${plainTextExplanation}\n\nLearn more at their website.`, url: tool.url };
        if (navigator.share) {
            try { await navigator.share(shareData); } catch (err) { if (err instanceof Error && err.name !== 'AbortError') { console.error('Share failed:', err); alert("Sharing failed. You can copy the text instead."); } }
        } else {
            try { const clipboardText = `${shareData.title}\n\n${shareData.text}\n\n${shareData.url}`; await navigator.clipboard.writeText(clipboardText); setShowCopySuccess(true); setTimeout(() => setShowCopySuccess(false), 2500); } catch (err) { console.error('Failed to copy to clipboard', err); alert('This browser does not support sharing. Failed to copy to clipboard automatically. Please copy the text manually.'); }
        }
    };
    return (
        <div className="tool-list-item">
            <h4>{tool.name}</h4> <p>{tool.description}</p>
            <div className="tool-item-actions"><a href={tool.url} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Visit Website</a><button className="btn btn-primary-outline" onClick={handleGenerateInstructions} disabled={loading}>{loading ? 'Generating...' : 'Setup Guide'}</button></div>
            {loading && <div className="loading-spinner small"></div>}
            {error && <div className="result-container error" style={{marginTop: '1rem'}}><p>{error}</p></div>}
            {guideContent && (
                <div className="instructions-wrapper">
                    <div className="guide-view-toggle">
                        <div className="guide-view-toggle-buttons">
                            <button className={`toggle-btn ${guideView === 'consultant' ? 'active' : ''}`} onClick={() => setGuideView('consultant')} aria-pressed={guideView === 'consultant'}>Consultant Guide</button>
                            <button className={`toggle-btn ${guideView === 'client' ? 'active' : ''}`} onClick={() => setGuideView('client')} aria-pressed={guideView === 'client'}>Client Explanation</button>
                        </div>
                         {guideView === 'client' && (<button className="btn-share" onClick={handleShare} disabled={showCopySuccess}>{showCopySuccess ? 'Copied!' : 'Share'}</button>)}
                    </div>
                    <div className="instructions-content" dangerouslySetInnerHTML={{ __html: formatMarkdownToHtml(guideView === 'consultant' ? guideContent.consultantGuide : guideContent.clientExplanation) }}></div>
                </div>
            )}
        </div>
    );
};

const ProfileDetailView = ({ profile, onBack, onLoadClient, onDeleteProfile }: { profile: Profile; onBack: () => void; onLoadClient: (profile: Profile) => void; onDeleteProfile: (profileName: string) => void; }) => {
    const [showShareForm, setShowShareForm] = useState(false);
    return (
        <div className="profile-detail-view">
            <div className="profile-detail-header">
                <button onClick={onBack} className="btn-back">&larr; Back to Profiles</button>
                <div className="profile-detail-actions">
                    <button className="btn btn-secondary" onClick={() => setShowShareForm(!showShareForm)}>{showShareForm ? 'Cancel Share' : 'Share Report'}</button>
                    <button className="btn btn-primary" onClick={() => onLoadClient(profile)}>Load for Consultation</button>
                    <button className="btn btn-danger-outline" onClick={() => onDeleteProfile(profile.name)}>Delete Profile</button>
                </div>
            </div>
            {showShareForm && (
                <div className="share-form-container">
                    <h4>Share Report with Client</h4>
                    <p>A secure link to view the report will be sent for verification.</p>
                    <div className="form-group">
                        <label htmlFor="client-email">Client Email</label>
                        <input type="email" id="client-email" placeholder="name@example.com" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="client-phone">Client Phone (Optional)</label>
                        <input type="tel" id="client-phone" placeholder="+1 (555) 123-4567" />
                    </div>
                    <button className="btn btn-primary" onClick={() => {
                        alert('A link to the report has been sent to the client.');
                        setShowShareForm(false);
                    }}>Send Verification Link</button>
                </div>
            )}
            <div className="profile-detail-info">
              <h2>{profile.name}</h2>
              {profile.website && <a href={profile.website.startsWith('http') ? profile.website : `//${profile.website}`} target="_blank" rel="noopener noreferrer">{profile.website}</a>}
              <p>{profile.description}</p>
            </div>

            <div className="profile-detail-report">
                <h3>AI Readiness Audit Report</h3>
                {profile.auditReport ? (
                    <div className="audit-report" dangerouslySetInnerHTML={{ __html: formatMarkdownToHtml(profile.auditReport) }} />
                ) : (
                    <p>No audit report was saved for this profile.</p>
                )}
            </div>
            
            <div className="tool-list-container">
                <h3>Recommended AI Tools &amp; Setup Guides</h3>
                {profile.tools && profile.tools.length > 0 ? (<div className="tool-list-grid">{profile.tools.map(tool => (<ToolListItem key={tool.name} tool={tool} clientInfo={profile} />))}</div>) : (<p className="no-profiles-message">No specific tools were generated for this profile.</p>)}
            </div>
        </div>
    );
};

const ProfilesView = ({ setView, setClientInfo, user }: { setView: (view: View) => void, setClientInfo: (info: ClientInfo) => void, user: User }) => {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);

  const fetchProfiles = useCallback(async () => {
    const userProfiles = await getProfiles(user.uid);
    setProfiles(userProfiles);
  }, [user.uid]);

  useEffect(() => { fetchProfiles(); }, [fetchProfiles]);

  const handleLoadClient = (profile: Profile) => {
    const clientInfo: ClientInfo = { name: profile.name, website: profile.website, description: profile.description };
    setClientInfo(clientInfo);
    setView('audit');
  };

  const handleDeleteProfile = async (profileName: string) => {
    if (window.confirm(`Are you sure you want to delete the profile for ${profileName}?`)) {
      await deleteProfile(user.uid, profileName);
      setSelectedProfile(null);
      fetchProfiles();
    }
  };
  
  if (selectedProfile) {
      return (<div className="view-container" style={{ padding: 0, background: 'none', boxShadow: 'none' }}><ProfileDetailView profile={selectedProfile} onBack={() => setSelectedProfile(null)} onLoadClient={handleLoadClient} onDeleteProfile={handleDeleteProfile} /></div>);
  }

  return (
    <div className="view-container profiles-view-container">
        <h2>Client Profiles</h2>
        {profiles.length === 0 ? (
            <p className="no-profiles-message">No client profiles found. Initiate a package from the 'Audit' tab to save a new profile.</p>
        ) : (
            <div className="profiles-grid">
                {profiles.map(profile => (
                    <div key={profile.name} className="profile-card" onClick={() => setSelectedProfile(profile)} onKeyDown={(e) => e.key === 'Enter' && setSelectedProfile(profile)} role="button" tabIndex={0}>
                        <h3>{profile.name}</h3>
                        <div className="profile-footer">
                            <span className="package-badge">{profile.initiatedPackage}</span>
                            <span className="date-info">Initiated: {profile.initiatedDate}</span>
                        </div>
                    </div>
                ))}
            </div>
        )}
    </div>
  );
};

const MapView = ({ setView, setClientInfo }: { setView: (view: View) => void, setClientInfo: (info: ClientInfo) => void }) => {
    const mapRef = useRef<HTMLDivElement>(null);
    const searchInputRef = useRef<HTMLInputElement>(null);
    const mapInstanceRef = useRef<any | null>(null);
    const placesServiceRef = useRef<any | null>(null);
    const markersRef = useRef<any[]>([]);
    const infoWindowRef = useRef<any | null>(null);

    const mapsApiKey = useMemo(() => process.env.MAPS_API_KEY, []);
   
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    const clearMarkers = () => {
        markersRef.current.forEach(marker => {
            marker.map = null;
        });
        markersRef.current = [];
    };
    
    const handleMarkerClick = useCallback((place: any, marker: any) => {
        if (!placesServiceRef.current || !mapInstanceRef.current) return;
        setLoading(true);
    
        if (infoWindowRef.current) {
            infoWindowRef.current.close();
        }
        
        const escapeHTML = (str: string | undefined) => {
            if (!str) return '';
            const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
            // @ts-ignore
            return str.replace(/[&<>"']/g, m => map[m]);
        }
    
        const detailsRequest = {
            placeId: place.place_id!,
            fields: ['name', 'website', 'formatted_address', 'url']
        };
    
        placesServiceRef.current.getDetails(detailsRequest, async (detailedPlace: any, status: any) => {
            setLoading(false);
            let client: ClientInfo;
            let mapsUrl: string | undefined;
    
            if (status === google.maps.places.PlacesServiceStatus.OK && detailedPlace) {
                client = {
                    name: detailedPlace.name || 'Unknown Business',
                    website: detailedPlace.website || '',
                    description: detailedPlace.formatted_address || ''
                };
                mapsUrl = detailedPlace.url;
            } else {
                console.error('Place details request failed:', status);
                client = {
                    name: place.name || 'Unknown Business',
                    website: '',
                    description: place.vicinity || ''
                };
            }
    
            const { InfoWindow } = await google.maps.importLibrary("maps");
    
            const infoWindowContent = document.createElement('div');
            infoWindowContent.className = 'map-infowindow-content';
            
            infoWindowContent.innerHTML = `
                <h4>${escapeHTML(client.name)}</h4>
                ${client.description ? `<p>${escapeHTML(client.description)}</p>` : ''}
                ${mapsUrl ? `<a href="${mapsUrl}" target="_blank" rel="noopener noreferrer">View on Google Maps</a>` : ''}
            `;
            
            const button = document.createElement('button');
            button.textContent = 'Start Questionnaire';
            button.className = 'btn btn-primary';
            button.style.marginTop = '10px';
            button.style.width = '100%';
            button.onclick = () => {
                setClientInfo(client);
                setView('questionnaire');
            };
    
            infoWindowContent.appendChild(button);
    
            const infoWindow = new InfoWindow({
                content: infoWindowContent,
            });
    
            infoWindowRef.current = infoWindow;
            infoWindow.open({
                anchor: marker,
                map: mapInstanceRef.current,
            });
        });
    }, [setView, setClientInfo]);
    
    const findNearbyPlaces = useCallback((location: any) => {
        if (!placesServiceRef.current || !mapInstanceRef.current) return;
        setLoading(true);

        if (infoWindowRef.current) {
            infoWindowRef.current.close();
        }

        const request: any = {
            location: location,
            radius: 2000,
            type: 'establishment'
        };

        placesServiceRef.current.nearbySearch(request, async (results: any, status: any) => {
            if (status === google.maps.places.PlacesServiceStatus.OK && results) {
                clearMarkers();
                const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary("marker");
                results.forEach((place: any) => {
                    if (place.geometry?.location && place.name) {
                        const pin = new PinElement({
                            background: '#EA4335',
                            borderColor: '#B3261E',
                            glyphColor: '#FFFFFF',
                        });
                        const marker = new AdvancedMarkerElement({
                            map: mapInstanceRef.current,
                            position: place.geometry.location,
                            title: place.name,
                            content: pin.element,
                        });
                        marker.addListener('click', () => handleMarkerClick(place, marker));
                        markersRef.current.push(marker);
                    }
                });
            }
            setLoading(false);
        });
    }, [handleMarkerClick]);

    useEffect(() => {
        if (!mapsApiKey) {            
            setError("Google Maps API key is not configured. The map feature is disabled.");
            setLoading(false);
            return;
        }

        let isMounted = true;

        const loader = new Loader({
            apiKey: mapsApiKey, // Use the renamed variable here
            version: "weekly",
            libraries: ["places", "marker"],
        });

        loader.load().then(async () => {
            if (!isMounted) return;
            
            setError(null);
            const { Map } = await google.maps.importLibrary("maps");
            const { Autocomplete, PlacesService } = await google.maps.importLibrary("places");
            
            if (!mapRef.current || !searchInputRef.current) return;
            
            const defaultCenter = { lat: 34.0522, lng: -118.2437 };

            const map = new Map(mapRef.current, {
                center: defaultCenter,
                zoom: 12,
                mapId: 'SMARTLOCAL_AI_MAP',
            });
            
            mapInstanceRef.current = map;
            placesServiceRef.current = new PlacesService(map);
            
            const autocomplete = new Autocomplete(searchInputRef.current, {
                fields: ["name", "geometry", "place_id"],
                types: ["establishment"]
            });
            
            autocomplete.bindTo("bounds", map);

            autocomplete.addListener("place_changed", () => {
                const place = autocomplete.getPlace();
                if (!place.geometry || !place.geometry.location) {
                    window.alert("No details available for input: '" + place.name + "'");
                    return;
                }
                
                if (place.geometry.viewport) {
                    map.fitBounds(place.geometry.viewport);
                } else {
                    map.setCenter(place.geometry.location);
                    map.setZoom(17);
                }
                findNearbyPlaces(place.geometry.location);
            });
            
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const userLoc = { lat: position.coords.latitude, lng: position.coords.longitude };
                        map.setCenter(userLoc);
                        findNearbyPlaces(userLoc);
                    },
                    () => {
                        if (!isMounted) return;
                        setError("Location access denied. Showing default area.");
                        findNearbyPlaces(defaultCenter);
                    }
                );
            } else {
                if (!isMounted) return;
                setError("Geolocation is not supported by this browser.");
                findNearbyPlaces(defaultCenter);
            }

        }).catch(e => {
            if (!isMounted) return;
            console.error("Error loading Google Maps:", e);
            setError("Failed to load Google Maps. The API key might be invalid or missing required permissions.");
            setLoading(false);
        });
        
        return () => {
             isMounted = false;
             clearMarkers();
             if (infoWindowRef.current) {
                infoWindowRef.current.close();
            }
        };

    }, [mapsApiKey, findNearbyPlaces]);

    if (!mapsApiKey) {
        return (
            <div className="view-container map-view-wrapper" style={{ padding: 0, background: 'transparent', boxShadow: 'none' }}>
                <div className="map-api-key-form">
                    <h3>Google Maps Not Available</h3>
                    <p>The map feature cannot be loaded because the Google Maps API key is not configured in the application's environment variables. Please contact an administrator.</p>
                    {error && <div className="result-container error" style={{marginTop: '1rem'}}><p>{error}</p></div>}
                </div>
            </div>
        );
    }

    return (
        <div className="view-container map-view-wrapper" style={{ padding: 0, background: 'transparent', boxShadow: 'none' }}>
            <input ref={searchInputRef} type="text" placeholder="Search for a business..." className="map-search-input" />
            {loading && <div className="map-loader"><div className="loading-spinner"></div></div>}
            <div ref={mapRef} className="map-container">
                {error && !loading && <div className="map-error-overlay">{error}</div>}
            </div>
        </div>
    );
};


// --- Render the App ---
const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<App />);
