
import React, { useState, useMemo, useEffect, useRef, useCallback } from "react";
import ReactDOM from "react-dom/client";
import { collection, doc, getDocs, setDoc, deleteDoc } from 'firebase/firestore';
import { db, firebaseError, signInWithGoogle, signOut, onAuthStateChanged, type User, auth, functions } from './firebase';
import { httpsCallable } from 'firebase/functions';
import { Loader } from "@googlemaps/js-api-loader";


declare var google: any;

// --- App Structure and Types ---
type View = "clientSetup" | "questionnaire" | "services" | "audit" | "tools" | "profiles" | "map" | "team";
interface ClientInfo {
  name: string;
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
type Role = 'owner' | 'member';
interface TeamMember {
    uid?: string;
    email: string;
    role: Role;
    displayName?: string;
    photoURL?: string;
}

// Define the Type enum locally, as @google/genai is now a backend dependency.
enum Type {
  STRING = 'STRING',
  NUMBER = 'NUMBER',
  INTEGER = 'INTEGER',
  BOOLEAN = 'BOOLEAN',
  ARRAY = 'ARRAY',
  OBJECT = 'OBJECT',
}

// Set up the callable Cloud Function
const geminiProxy = functions ? httpsCallable(functions, 'geminiProxy') : null;

const formatMarkdownToHtml = (text: string) => {
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
    html = html.replace(/<\/h4><br \/>/g, '<h4>');
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

// --- Online Status Hook ---
const useOnlineStatus = () => {
    const [isOnline, setIsOnline] = useState(() => navigator.onLine);

    useEffect(() => {
        const handleOnline = () => setIsOnline(true);
        const handleOffline = () => setIsOnline(false);

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);

    return isOnline;
};

const OfflineBanner = () => (
    <div className="offline-banner" role="status">
        You are currently offline. Some features may be unavailable.
    </div>
);


// --- App Shell ---
const App = () => {
    if (firebaseError) {
        return <FirebaseErrorScreen error={firebaseError} />;
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

const FirebaseErrorScreen = ({ error }: { error: string }) => (
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
  const isOnline = useOnlineStatus();
  
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
      case "team":
        return <TeamView user={user} />;
      case "clientSetup":
      default:
        return <ClientSetupView setView={setView} setClientInfo={setClientInfo} />;
    }
  };

  return (
    <>
      {!isOnline && <OfflineBanner />}
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
  clientName?: string;
  hasClient: boolean;
  user: User;
  signOut: () => void;
}
const Header = ({ currentView, setView, clientName, hasClient, user, signOut }: HeaderProps) => {
  const navItems: {id: View, label: string}[] = [
      { id: "clientSetup", label: "Client" },
      { id: "map", label: "Map"},
      { id: "profiles", label: "Profiles" },
      { id: "team", label: "Team" },
      { id: "audit", label: "Audit" },
      { id: "tools", label: "Tools" },
      { id: "services", label: "Services" },
  ];
  const alwaysEnabled: View[] = ['clientSetup', 'services', 'profiles', 'map', 'team'];

  const handleSignOut = async () => {
    try {
      await signOut();
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
        <button onClick={handleSignOut} className="btn-sign-out">Sign Out</button>
      </div>
    </header>
  );
};


// --- View Components ---

const ClientSetupView = ({ setView, setClientInfo }: { setView: (view: View) => void, setClientInfo: (info: ClientInfo) => void }) => {
    const [notes, setNotes] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);
    const [error, setError] = useState('');
    
    const handleProceed = async () => {
        if (!geminiProxy) { setError("Cloud Functions not initialized."); return; }
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
            const params = {
                model: "gemini-2.5-flash",
                contents: prompt,
                config: {
                    responseMimeType: "application/json",
                    responseSchema: {
                        type: Type.OBJECT,
                        properties: {
                            name: { type: Type.STRING, description: "The name of the business." },
                            website: { type: Type.STRING, description: "The website URL of the business." },
                            description: { type: Type.STRING, description: "A one-paragraph summary of the business." },
                        },
                        required: ["name", "website", "description"]
                    }
                }
            };
            const result = await geminiProxy({ action: 'generateContent', params });
            const response = result.data as { text: string };
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
    if (!geminiProxy) { setError("Cloud Functions not initialized."); return; }
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
- Your identity is the "SmartLocal AI Audit Bot".
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
        const params = { model: 'gemini-2.5-flash', contents: prompt, config: { tools: [{ googleSearch: {} }] } };
        const result = await geminiProxy({ action: 'generateContent', params });
        const response = result.data as { text: string };
        const resultText = response.text;
        setAuditResult(resultText);
        const packages = ["VIP Automation", "Growth Kit", "Quick Boost"];
        let foundPackage: string | null = null;
        for (const pkg of packages) { if (resultText.toLowerCase().includes(pkg.toLowerCase())) { foundPackage = pkg; break; } }
        if (foundPackage) { setRecommendedPackage(foundPackage); setSelectedPackage(foundPackage); } else if (mindset !== "Wants Nothing to Do With It") { setSelectedPackage("Quick Boost"); }
    } catch (err) {
      console.error("Error generating audit:", err);
      setError("Failed to generate the audit. Please check your connection or function logs and try again.");
    } finally { setLoading(false); }
  };

  const handleInitiatePackage = async () => {
    if (!geminiProxy) { setError("Cloud Functions not initialized."); return; }
    if (!clientInfo || !user) return;
    setGeneratingTools(true);
    setIsInitiated(false);
    setError("");
    const toolPrompt = `For a business named "${clientInfo.name}" with the description "${clientInfo.description || 'N/A'}" that has signed up for our "${selectedPackage}" package, please generate a list of 3 to 5 specific AI tools or services exclusively from the Google ecosystem that would be highly beneficial for them. For each tool, provide its name (e.g., "Google Business Profile," "Google Analytics," "Google Ads AI"), a one-sentence description of how it helps this specific business, and a valid, real-world URL for the tool's website. The output must be a JSON object with a single key "tools", which is an array of objects.`;
    try {
        const params = {
            model: "gemini-2.5-flash", contents: toolPrompt,
            config: { responseMimeType: "application/json", responseSchema: { type: Type.OBJECT, properties: { tools: { type: Type.ARRAY, items: { type: Type.OBJECT, properties: { name: { type: Type.STRING, description: "Name of the AI tool or service." }, description: { type: Type.STRING, description: "A one-sentence explanation of its benefit to the business." }, url: { type: Type.STRING, description: "The homepage URL of the tool." }, }, required: ["name", "description", "url"] } } }, required: ["tools"] } }
        };
        const result = await geminiProxy({ action: 'generateContent', params });
        const response = result.data as { text: string };
        const resultData = JSON.parse(response.text);
        const newProfile: Profile = { ...clientInfo, initiatedPackage: selectedPackage, initiatedDate: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }), tools: resultData.tools || [], auditReport: auditResult };
        await saveProfile(user.uid, newProfile);
        setIsInitiated(true);
    } catch (err) {
        console.error("Error generating tools or saving profile:", err);
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
    if (!geminiProxy) { setError("Cloud Functions not initialized."); return; }
    const inputs = getInputs(); if (!inputs) { setError("Please fill in all required fields."); return; }
    setLoading(true); setResult(""); setError(""); setSources([]);
    try {
      const prompt = promptTemplate(inputs);
      const params = { model: 'gemini-2.5-flash', contents: prompt, ...(useGoogleSearch && { config: { tools: [{googleSearch: {}}] } }) };
      const result = await geminiProxy({ action: 'generateContent', params });
      const response = result.data as { text: string; candidates: any[] };
      setResult(response.text);
      const groundingMetadata = response.candidates?.[0]?.groundingMetadata;
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
        if (!geminiProxy) { setError("Cloud Functions not initialized."); return; }
        if (!imagePrompt.trim()) { setError('Please enter a prompt for the image.'); return; }
        setLoading(true); setError(''); setGeneratedImage(''); setGeneratedCaption('');
        try {
            const imageParams = { model: 'imagen-3.0-generate-002', prompt: imagePrompt, config: { numberOfImages: 1, outputMimeType: 'image/jpeg', aspectRatio: '1:1' } };
            const imageResult = await geminiProxy({ action: 'generateImages', params: imageParams });
            const imageResponse = imageResult.data as { generatedImages: { image: { imageBytes: string } }[] };
            const base64ImageBytes = imageResponse.generatedImages[0].image.imageBytes;
            const imageUrl = `data:image/jpeg;base64,${base64ImageBytes}`;
            setGeneratedImage(imageUrl);

            const captionPrompt = `You are a social media manager for ${clientInfo?.name || 'a local business'}. Generate a short, engaging Instagram caption for an image based on this concept: "${imagePrompt}". ${clientInfo?.description ? `The business's description is: "${clientInfo.description}".` : ''} The caption should be upbeat, include relevant emojis, and 2-3 relevant hashtags.`;
            const captionParams = { model: 'gemini-2.5-flash', contents: captionPrompt };
            const captionResult = await geminiProxy({ action: 'generateContent', params: captionParams });
            const captionResponse = captionResult.data as { text: string };
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
        if (!geminiProxy) { setError("Cloud Functions not initialized."); return; }
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
            const params = { model: 'gemini-2.5-flash', contents: prompt, config: { responseMimeType: "application/json", responseSchema: { type: Type.OBJECT, properties: { consultantGuide: { type: Type.STRING, description: "Technical, step-by-step setup guide for the consultant, formatted in markdown." }, clientExplanation: { type: Type.STRING, description: "Benefit-focused explanation for the business owner, including usage and social proof, formatted in markdown." } }, required: ["consultantGuide", "clientExplanation"] } } };
            const result = await geminiProxy({ action: 'generateContent', params });
            const response = result.data as { text: string };
            const resultData = JSON.parse(response.text); setGuideContent(resultData);
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

interface ProfileDetailViewProps {
  profile: Profile;
  user: User;
  onBack: () => void;
  onDelete: (profileName: string) => void;
  onUpdate: (updatedProfile: Profile) => void;
}

const ProfileDetailView = ({ profile, onBack, onDelete }: ProfileDetailViewProps) => {
    const [isSharing, setIsSharing] = useState(false);
    const [shareEmail, setShareEmail] = useState('');

    const handleShareByEmail = (e: React.FormEvent) => {
        e.preventDefault();
        const subject = `AI Recommendations for ${profile.name}`;
        const body = `Hi,\n\nHere are the AI-powered audit and tool recommendations we discussed for ${profile.name}:\n\n--- AUDIT REPORT ---\n\n${profile.auditReport || 'No report available.'}\n\n--- RECOMMENDED TOOLS ---\n\n${profile.tools?.map(t => `${t.name}: ${t.url}`).join('\n') || 'No tools listed.'}\n\nLet me know if you have any questions!\n`;
        window.location.href = `mailto:${shareEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (
        <div className="profile-detail-view">
            <div className="profile-detail-header">
                <button onClick={onBack} className="btn-back">&larr; Back to Profiles</button>
                <div className="profile-detail-actions">
                    <button className="btn btn-secondary" onClick={() => setIsSharing(!isSharing)}>Share Report</button>
                    <button className="btn btn-danger-outline" onClick={() => onDelete(profile.name)}>Delete Profile</button>
                </div>
            </div>
            <div className="profile-detail-info">
                <h2>{profile.name}</h2>
                {profile.website && <a href={profile.website} target="_blank" rel="noopener noreferrer">{profile.website}</a>}
                <p>{profile.description}</p>
                 <div className="profile-footer">
                    <span className="package-badge">{profile.initiatedPackage}</span>
                    <span className="date-info">Initiated: {profile.initiatedDate}</span>
                </div>
            </div>

            {isSharing && (
                <div className="share-form-container">
                    <h4>Share Report via Email</h4>
                    <p>Enter the client's email address to open a pre-filled draft in your default email client.</p>
                    <form onSubmit={handleShareByEmail} className="share-form">
                        <div className="form-group">
                            <label htmlFor="share-email">Client's Email</label>
                            <input type="email" id="share-email" value={shareEmail} onChange={e => setShareEmail(e.target.value)} required placeholder="client@example.com" />
                        </div>
                        <button type="submit" className="btn btn-primary">Generate Email</button>
                    </form>
                </div>
            )}

            {profile.tools && profile.tools.length > 0 && (
                <div className="tool-list-container">
                    <h3>Recommended Tools</h3>
                    <div className="tool-list-grid">
                        {profile.tools.map(tool => (
                            <ToolListItem key={tool.name} tool={tool} clientInfo={profile} />
                        ))}
                    </div>
                </div>
            )}

            {profile.auditReport && (
                <div className="profile-detail-report">
                    <h3>Original AI Audit</h3>
                    <div className="audit-report" dangerouslySetInnerHTML={{ __html: formatMarkdownToHtml(profile.auditReport) }}></div>
                </div>
            )}
        </div>
    );
};

interface ProfilesViewProps {
  user: User;
  setView: (view: View) => void;
  setClientInfo: (info: ClientInfo) => void;
}

const ProfilesView = ({ user, setView }: ProfilesViewProps) => {
    const [profiles, setProfiles] = useState<Profile[]>([]);
    const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);
    const [loading, setLoading] = useState(true);

    const loadProfiles = useCallback(async () => {
        setLoading(true);
        const fetchedProfiles = await getProfiles(user.uid);
        setProfiles(fetchedProfiles);
        setLoading(false);
    }, [user.uid]);
    
    useEffect(() => {
        loadProfiles();
    }, [loadProfiles]);

    const handleSelectProfile = (profile: Profile) => {
        setSelectedProfile(profile);
    };
    
    const handleBackToList = () => {
        setSelectedProfile(null);
        loadProfiles(); // Refresh list in case of updates
    };

    const handleDeleteProfile = async (profileName: string) => {
        if (window.confirm(`Are you sure you want to delete the profile for ${profileName}? This action cannot be undone.`)) {
            await deleteProfile(user.uid, profileName);
            handleBackToList();
        }
    };
    
    const handleUpdateProfile = async (updatedProfile: Profile) => {
        await saveProfile(user.uid, updatedProfile);
        setSelectedProfile(updatedProfile); // Update state with new data
    };
    
    if (loading) {
        return (
            <div className="view-container">
                <h2>Client Profiles</h2>
                <div className="loading-spinner"></div>
            </div>
        );
    }
    
    if (selectedProfile) {
        return <ProfileDetailView profile={selectedProfile} user={user} onBack={handleBackToList} onDelete={handleDeleteProfile} onUpdate={handleUpdateProfile} />;
    }

    return (
        <div className="view-container profiles-view-container">
            <div className="profile-detail-header">
                <h2>Client Profiles</h2>
                <button className="btn btn-primary" onClick={() => setView('clientSetup')}>+ New Consultation</button>
            </div>
            {profiles.length > 0 ? (
                <div className="profiles-grid">
                    {profiles.map(profile => (
                        <div key={profile.name} className="profile-card" tabIndex={0} onClick={() => handleSelectProfile(profile)} onKeyDown={(e) => e.key === 'Enter' && handleSelectProfile(profile)}>
                            <h3>{profile.name}</h3>
                            <p>{profile.description.substring(0, 120)}...</p>
                             <div className="profile-footer">
                                <span className="package-badge">{profile.initiatedPackage}</span>
                                <span className="date-info">Initiated: {profile.initiatedDate}</span>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="no-profiles-message">No client profiles found. Start a new consultation to create one.</p>
            )}
        </div>
    );
};

const MapView = ({ setView, setClientInfo }: { setView: (view: View) => void, setClientInfo: (info: ClientInfo) => void; }) => {
    const mapRef = useRef<HTMLDivElement>(null);
    const searchInputRef = useRef<HTMLInputElement>(null);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const MAPS_API_KEY = (import.meta as any).env?.VITE_MAPS_API_KEY;

    const initMap = useCallback(async () => {
        if (!mapRef.current || !searchInputRef.current || !MAPS_API_KEY) {
            return;
        }

        try {
            const { Map } = await google.maps.importLibrary("maps");
            const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
            const { Autocomplete } = await google.maps.importLibrary("places");

            const map = new Map(mapRef.current as HTMLDivElement, {
                center: { lat: 40.7128, lng: -74.0060 }, // Default to NYC
                zoom: 12,
                mapId: 'SMARTLOCAL_AI_MAP'
            });

            const autocomplete = new Autocomplete(searchInputRef.current, {
                fields: ["place_id", "name", "geometry", "website", "formatted_address"],
            });
            
            autocomplete.bindTo("bounds", map);

            const infowindow = new google.maps.InfoWindow();
            const infowindowContent = document.createElement('div');
            infowindowContent.className = 'map-infowindow-content';

            const marker = new AdvancedMarkerElement({
                map: map,
            });

            autocomplete.addListener("place_changed", () => {
                infowindow.close();
                marker.position = null;
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

                marker.position = place.geometry.location;
                
                infowindowContent.innerHTML = `
                    <h4>${place.name}</h4>
                    <p>${place.formatted_address || 'Address not available'}</p>
                    ${place.website ? `<a href="${place.website}" target="_blank" rel="noopener noreferrer">${place.website}</a>` : ''}
                    <button id="select-business-btn" class="btn btn-primary">Select Business</button>
                `;
                
                infowindow.setContent(infowindowContent);
                infowindow.open(map, marker);
                
                const selectButton = infowindowContent.querySelector('#select-business-btn');
                if(selectButton) {
                    selectButton.addEventListener('click', () => {
                        const clientData: ClientInfo = {
                            name: place.name || '',
                            website: place.website || '',
                            description: `Business located at ${place.formatted_address || 'unknown address'}.`,
                        };
                        setClientInfo(clientData);
                        setView('audit');
                    });
                }
            });

        } catch (e) {
            console.error("Error loading Google Maps:", e);
            setError("Could not load map. Please check the console for details.");
        } finally {
            setIsLoading(false);
        }
    }, [MAPS_API_KEY, setClientInfo, setView]);

    useEffect(() => {
        if (!MAPS_API_KEY) {
            setError("Google Maps API Key is missing. Please set the VITE_MAPS_API_KEY environment variable.");
            setIsLoading(false);
            return;
        }

        const loader = new Loader({
            apiKey: MAPS_API_KEY,
            version: "weekly",
            libraries: ["places", "maps", "marker"],
        });

        loader.load().then(() => {
            initMap();
        }).catch(e => {
            console.error("Failed to load Google Maps script:", e);
            setError("Failed to load Google Maps. Check your API key and network connection.");
            setIsLoading(false);
        });

    }, [MAPS_API_KEY, initMap]);


    return (
        <div className="view-container map-view-wrapper">
            {isLoading && <div className="map-loader"><div className="loading-spinner"></div></div>}
            {error && <div className="map-error-overlay">{error}</div>}
            <input
                ref={searchInputRef}
                type="text"
                className="map-search-input"
                placeholder="Search for a business..."
                disabled={!!error || isLoading}
            />
            <div ref={mapRef} className="map-container" style={{ visibility: error ? 'hidden' : 'visible' }}></div>
        </div>
    );
};

const TeamView = ({ user }: { user: User }) => {
    const [team, setTeam] = useState<TeamMember[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [inviteEmail, setInviteEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const currentUserRole = useMemo(() => {
        const self = team.find(m => m.uid === user.uid || m.email === user.email);
        return self?.role;
    }, [team, user.uid, user.email]);

    const fetchTeamData = useCallback(async () => {
        if (!geminiProxy) {
            setError("Cloud Functions not initialized.");
            setLoading(false);
            return;
        }
        setLoading(true);
        setError('');
        try {
            const result = await geminiProxy({ action: 'getTeam' });
            const data = result.data as { members?: TeamMember[] };
            setTeam(Array.isArray(data.members) ? data.members : []);
        } catch (err: any) {
            console.error("Error fetching team data:", err);
            setError(err.message || "Could not load your team data.");
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchTeamData();
    }, [fetchTeamData]);

    const handleInvite = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!geminiProxy || !inviteEmail.trim()) return;
        setIsSubmitting(true);
        setError('');
        try {
            const result = await geminiProxy({
                action: 'manageTeam',
                teamAction: 'add',
                memberEmail: inviteEmail,
                newRole: 'member'
            });
            const data = result.data as { members?: TeamMember[] };
            setTeam(Array.isArray(data.members) ? data.members : []);
            setInviteEmail('');
        } catch (err: any) {
            console.error("Error inviting team member:", err);
            setError(err.message || "Failed to invite member.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleRemove = async (emailToRemove: string) => {
        if (!geminiProxy || !window.confirm(`Are you sure you want to remove ${emailToRemove} from the team?`)) return;
        setIsSubmitting(true);
        setError('');
        try {
            const result = await geminiProxy({
                action: 'manageTeam',
                teamAction: 'remove',
                memberToRemoveEmail: emailToRemove
            });
             const data = result.data as { members?: TeamMember[] };
            setTeam(Array.isArray(data.members) ? data.members : []);
        } catch (err: any) {
            console.error("Error removing team member:", err);
            setError(err.message || "Failed to remove member.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (loading) {
        return <div className="view-container"><div className="loading-spinner"></div></div>;
    }

    return (
        <div className="view-container">
            <h2>Team Management</h2>
            {error && <div className="result-container error" style={{marginBottom: '1.5rem'}}><p>{error}</p></div>}
            
            {currentUserRole === 'owner' && (
                <div className="invite-member-container">
                    <h3>Invite a New Member</h3>
                    <form onSubmit={handleInvite} className="invite-member-form">
                        <div className="form-group">
                            <label htmlFor="invite-email">Member's Email</label>
                            <input
                                type="email"
                                id="invite-email"
                                value={inviteEmail}
                                onChange={e => setInviteEmail(e.target.value)}
                                placeholder="new.member@example.com"
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary" disabled={isSubmitting || !inviteEmail.trim()}>
                            {isSubmitting ? 'Sending...' : 'Send Invite'}
                        </button>
                    </form>
                </div>
            )}
            
            <div className="team-members-container">
                 <h3>Current Team Members</h3>
                 {team.length > 0 ? (
                    <div className="team-grid">
                        {team.map(member => (
                            <div key={member.email} className="team-member-card">
                                <img src={member.photoURL || `https://ui-avatars.com/api/?name=${encodeURIComponent(member.displayName || member.email)}&background=A6CE39&color=1A2B44&bold=true`} alt={`${member.displayName || member.email} profile`} className="team-member-avatar" />
                                <div className="team-member-info">
                                    <h4>{member.displayName || member.email}</h4>
                                    <p>{member.email}</p>
                                </div>
                                <div className="team-member-role-actions">
                                   <span className={`role-badge role-${member.role}`}>{member.role}</span>
                                    {currentUserRole === 'owner' && member.role !== 'owner' && (
                                        <button 
                                            className="btn-remove-member" 
                                            onClick={() => handleRemove(member.email)}
                                            disabled={isSubmitting}
                                            aria-label={`Remove ${member.displayName || member.email}`}
                                        >
                                           &times;
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                 ) : (
                    <p>Your team hasn't been set up yet. As the owner, you can invite your first member.</p>
                 )}
            </div>
        </div>
    );
};


const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);