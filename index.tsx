import React, { useState, useMemo, useEffect, useRef, useCallback } from "react";
import ReactDOM from "react-dom/client";
import { GoogleGenAI, Type } from "@google/genai";
import { collection, doc, getDocs, setDoc, deleteDoc } from '@firebase/firestore';
import { db, firebaseError, signInWithGoogle, signOut, onAuthStateChanged, type User, auth } from './firebase'; // Assuming firebase.ts handles Firebase initialization
import { Loader } from "@googlemaps/js-api-loader";


declare var google: any;

// --- App Structure and Types ---
type View = "clientSetup" | "questionnaire" | "services" | "audit" | "tools" | "profiles" | "map";
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
import { API_KEY, MAPS_API_KEY } from './env';
const ai = API_KEY ? new GoogleGenAI({ apiKey: API_KEY }) : null; // Use the imported API_KEY

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
        return <FirebaseErrorScreen error={firebaseError} />;
    } // Add checks for API_KEY and MAPS_API_KEY here if needed at the App level
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
      { id: "audit", label: "Audit" },
      { id: "tools", label: "Tools" },
      { id: "services", label: "Services" },
  ];
  const alwaysEnabled: View[] = ['clientSetup', 'services', 'profiles', 'map'];

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
        if (!ai) { setError("AI client not initialized. Check API_KEY."); return; }
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
    if (!ai) { setError("AI client not initialized. Check API_KEY."); return; }
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
      const response = await ai.models.generateContent({ model: 'gemini-2.5-flash', contents: prompt, config: { tools: [{ googleSearch: {} }] }, });
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
    if (!ai) { setError("AI client not initialized. Check API_KEY."); return; }
    if (!clientInfo || !user) return;
    setGeneratingTools(true);
    setIsInitiated(false);
    setError("");
    const toolPrompt = `For a business named "${clientInfo.name}" with the description "${clientInfo.description || 'N/A'}" that has signed up for our "${selectedPackage}" package, please generate a list of 3 to 5 specific AI tools or services exclusively from the Google ecosystem that would be highly beneficial for them. For each tool, provide its name (e.g., "Google Business Profile," "Google Analytics," "Google Ads AI"), a one-sentence description of how it helps this specific business, and a valid, real-world URL for the tool's website. The output must be a JSON object with a single key "tools", which is an array of objects.`;
    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash", contents: toolPrompt,
            config: { responseMimeType: "application/json", responseSchema: { type: Type.OBJECT, properties: { tools: { type: Type.ARRAY, items: { type: Type.OBJECT, properties: { name: { type: Type.STRING, description: "Name of the AI tool or service." }, description: { type: Type.STRING, description: "A one-sentence explanation of its benefit to the business." },
