// src/data/projects.ts
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  achievement?: string;
  image?: string; // path to thumbnail (placeholder for now)
  github?: string;
  live?: string;
  featured?: boolean;
  // Additional optional fields for overlay details
  problem?: string;
  solution?: string;
  role?: string;
  keyFeatures?: string[];
}

export const projects: Project[] = [
  {
    id: 'realmeta',
    title: 'RealMeta – AI Museum Scanner',
    description:
      'An AI‑powered artwork recognition platform that identifies paintings, sculptures, and artifacts using Google Gemini Vision. It provides detailed information for curated artworks and uses live AI identification with Wikipedia enrichment for unknown artworks.',
    technologies: [
      'React 19',
      'Vite 7',
      'Tailwind CSS',
      'Framer Motion',
      'Node.js',
      'Express 5',
      'MongoDB',
      'Mongoose',
      'Google Gemini Vision',
      'Recharts',
      'Wikipedia REST API',
      'Workbox PWA',
    ],
    // No actual screenshot available – will use placeholder
    // No live or GitHub URLs provided
    keyFeatures: [
      'Camera‑based artwork scanning and photo upload.',
      'Curated artwork collection with detailed information.',
      'Live AI identification using Gemini Vision.',
      'Wikipedia information enrichment.',
      'Searchable digital gallery.',
      "Curator's Challenge – interactive art quiz.",
      "Curator's Desk – analytics dashboard with server‑side password authentication.",
      'Privacy‑first image handling and analytics opt‑out.',
    ],
  },
  {
    id: 'smart-grid',
    title: 'GridMind – AI-Driven Residential Energy Management & Fault Protection System',
    description:
      'AI‑driven residential energy manager that monitors consumption via MQTT, classifies appliances with KNN, detects anomalies, forecasts loads, and autonomously sheds priority loads using LLM assistance.',
    technologies: [
      'Python',
      'React',
      'MQTT',
      'ESP32',
      'JavaScript',
      'Tailwind CSS',
      'Scikit-learn',
      'KNN',
      'IsolationForest',
      'Groq/Llama 3',
      'Twilio',
    ],
    featured: true,
    github: '#',
    live: '#',
    role: 'Working on the integration of IoT hardware, energy monitoring, data processing, and machine learning‑based optimization for the smart‑grid prototype.',
    keyFeatures: [
      'Real-time MQTT energy telemetry.',
      'NILM appliance classification using KNN.',
      'Anomaly detection via IsolationForest.',
      'Groq/Llama 3‑powered conversational energy assistant.',
      'Autonomous priority‑based load shedding and restoration.',
      'Predictive load forecasting.',
      'Twilio emergency voice call alerts.',
      'React‑based real‑time monitoring dashboard.',
    ],
  },
  {
    id: 'karmic-canteen',
    title: 'Karmic Canteen – Smart Meal Management System',
    description:
      'A digital canteen platform that streamlines meal selection, menu administration, employee management, and canteen operations with role‑based access and Firebase back‑end.',
    technologies: ['React.js', 'Vite', 'Node.js', 'Express.js', 'Firebase Authentication', 'Cloud Firestore', 'Python', 'CSS'],
    achievement: 'Second Prize – Madhwa Hackathon',
    github: '#',
    live: '#',
    role: 'Developed the web application, integrated Firebase services, and implemented the meal‑tracking workflow.',
    keyFeatures: [
      'Super Admin dashboard with analytics.',
      'Admin and employee management with RBAC.',
      'Firebase Authentication and Firestore data sync.',
      'Menu management and bulk upload.',
      'Weekly meal selection and order handling.',
      'Responsive UI for desktop, tablet, and mobile.',
    ],
  },
  {
    id: 'talentiq',
    title: 'TalentIQ — AI Recruitment Intelligence Platform',
    description:
      'A flagship AI-powered recruitment platform that delivers semantic candidate matching, explainable recommendations, fairness monitoring, and advanced analytics for enterprise hiring.',
    technologies: [
      'React 18',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'shadcn/ui',
      'Framer Motion',
      'Node.js 20',
      'Express',
      'Prisma',
      'PostgreSQL',
      'pgvector',
      'Redis',
      'JWT',
      'Docker',
    ],
    featured: true,
    github: 'https://github.com/BhuvanSKumar1/TalentIQ',
    live: 'https://talent-iq-lac.vercel.app/',
    role: 'Developed the full-stack application, worked on frontend and backend integration, database connectivity, and intelligent candidate search functionality.',
    keyFeatures: [
      'Semantic candidate search using AI-powered embeddings.',
      'Candidate filtering based on skills and relevant criteria.',
      'Skill-based relationship visualization through a skill graph.',
      'Candidate matching scores to support recruitment decisions.',
      'Modular frontend and backend architecture.',
    ],
  },

];
