// src/sections/Experience.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { containerStagger } from '../utils/scrollVariants';
import { Users, Award, Code } from 'lucide-react';

// reusable timeline item with optional style variant
const timelineItem = (
  icon: React.ReactNode,
  title: React.ReactNode,
  children: React.ReactNode,
  variant: 'leadership' | 'achievement' = 'achievement'
) => (
  <motion.div
    className={`flex items-start mb-8 p-5 rounded-xl shadow-md transition-all duration-300 
      ${variant === 'leadership' ? 'bg-accent-violet/10 border-l-4 border-accent-violet' : 'bg-white/5 border-l-4 border-white/20'}`}
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    whileHover={{ scale: 1.03 }}
    transition={{ duration: 0.6 }}
  >
    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-accent-violet/20 rounded-full mr-4">
      {icon}
    </div>
    <div>
      <h3 className={`text-xl font-bold ${variant === 'leadership' ? 'text-accent-violet' : 'text-foreground'}`}>{title}</h3>
      <div className="text-foreground/80 mt-1 text-sm leading-relaxed">{children}</div>
    </div>
  </motion.div>
);

const Experience = () => {
  return (
    <section id="experience" className="py-16 bg-gray-900">
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        variants={containerStagger}
      >
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-accent-violet mb-12">
          Experience &amp; Achievements
        </h2>

        {/* Experience & Leadership */}
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-violet-300 mb-6">Experience &amp; Leadership</h3>
        {timelineItem(
          <Users size={24} className="text-accent-violet" />, 
          <span>CodeTroopers – Project Team Lead</span>,
          <ul className="list-disc pl-5 space-y-1">
            <li>Led project‑related activities and collaborated with team members on development tasks.</li>
            <li>Coordinated technical discussions and supported collaborative coding activities.</li>
            <li>Contributed to knowledge sharing and technical learning within the college coding club.</li>
          </ul>
        )}
        {timelineItem(
          <Users size={24} className="text-accent-violet" />, 
          <span>HPL – Hackathon Premier League | Organizing Committee Member &amp; Team Manager</span>,
          <ul className="list-disc pl-5 space-y-1">
            <li>Served on the organizing committee for the college‑level HPL hackathon.</li>
            <li>Managed and coordinated participating teams throughout the event.</li>
            <li>Assisted with event coordination, team communication, and smooth execution of hackathon activities.</li>
          </ul>
        )}

        {/* Achievements & Activities */}
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-violet-300 mb-6">Achievements &amp; Activities</h3>
        {timelineItem(
          <Award size={24} className="text-accent-violet" />, 
          <span>Consolation Prize – AI Vision National‑Level Hackathon, MITK</span>,
          <p>Developed an LLM FinOps Dashboard for AI usage and cost tracking.</p>
        )}
        {timelineItem(
          <Award size={24} className="text-accent-violet" />, 
          <span>2nd Prize – Madhwa Hackathon</span>,
          <p>Recognized for the Karmic Canteen – Smart Meal Management System.</p>
        )}
        {timelineItem(
          <Code size={24} className="text-accent-violet" />, 
          <span>Workshop Conductor – Data Analyst Essentials</span>,
          <p>Conducted a workshop on data analytics using Power BI.</p>
        )}
        {timelineItem(
          <Award size={24} className="text-accent-violet" />, 
          <span>Srinivas College Code Meet</span>,
          <p>Participated in the hackathon and worked on a Smart Disaster Response Platform.</p>
        )}
        {timelineItem(
          <Award size={24} className="text-accent-violet" />, 
          <span>National‑Level Hackathon – SMVITM</span>,
          <p>Participated in the Museum Art Digitalization project.</p>
        )}
        {timelineItem(
          <Award size={24} className="text-accent-violet" />, 
          <span>Ayush Habba Hackathon</span>,
          <p>Developed a medical reports digitalization solution using QR codes.</p>
        )}
      </motion.div>
    </section>
  );
};

export default Experience;
