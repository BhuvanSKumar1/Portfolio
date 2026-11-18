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
    title: 'AI-Powered Smart Grid Optimization System',
    description:
      'An IoT‑based energy monitoring and optimization system that uses ESP32 hardware for real‑time electricity usage monitoring, applies machine‑learning analysis to consumption patterns, and provides intelligent load‑management decisions.',
    technologies: ['Python', 'Machine Learning', 'ESP32', 'IoT', 'MQTT'],
    featured: true,
    github: '#',
    live: '#',
    role: 'Working on the integration of IoT hardware, energy monitoring, data processing, and machine learning-based optimization for the smart grid prototype.',
    keyFeatures: [
      'Real-time energy monitoring using ESP32-based hardware.',
      'Dashboard for displaying energy consumption data.',
      'Machine learning-based energy analysis and prediction.',
      'Appliance-group consumption estimation.',
      'Priority-based load management and anomaly detection.',
    ],
  },
  {
    id: 'karmic-canteen',
    title: 'Karmic Canteen – Smart Meal Management System',
    description:
      'A web‑based meal management platform that digitizes canteen operations, provides digital meal tracking, employee management, role‑based access for admins and employees, an admin dashboard, real‑time data via Firebase Firestore, and Python‑based machine learning for analytics.',
    technologies: ['React.js', 'HTML', 'CSS', 'JavaScript', 'Python', 'Firebase Firestore'],
    achievement: '2nd Prize — Madhwa Hackathon',
    github: '#',
    live: '#',
    role: 'Contributed to developing the web application, implementing user-facing functionality, integrating Firebase, and supporting the meal management workflow.',
    keyFeatures: [
      'Digital meal tracking and employee management.',
      'Separate role-based access for administrators and employees.',
      'Admin dashboard for managing meal-related information.',
      'Real-time data management using Firebase Firestore.',
      'Python-based machine learning functionality.',
    ],
  },
  {
    id: 'talentiq',
    title: 'TalentIQ — AI Recruitment Intelligence Platform',
    description:
      'A full-stack recruitment intelligence platform designed to simplify candidate discovery and help recruiters identify suitable candidates using intelligent search and data-driven matching.',
    technologies: ['React.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'Prisma'],
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
  {
    id: 'ayu-connect',
    title: 'AYU‑CONNECT',
    description:
      'A digital dosage instruction system that uses QR codes to provide accessible medication instructions.',
    technologies: ['React', 'Firebase Firestore', 'QR Codes'],
    github: '#',
    live: '#',
  },
];
