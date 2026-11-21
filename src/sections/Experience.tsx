// src/sections/Experience.tsx
import { motion } from 'framer-motion';
import { containerStagger } from '../utils/scrollVariants';
import { Users, Award, Code, Trophy } from 'lucide-react';




const Experience = () => {
  return (
    <section id="experience" className="py-12 sm:py-16 bg-gray-900">
      <motion.div
        className="container mx-auto px-4 sm:px-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        variants={containerStagger}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-center text-white mb-12">
          Experience &amp; Achievements
        </h2>

        {/* Experience & Leadership - vertical timeline */}
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#C4B5FD] mb-6">Experience & Leadership</h3>
        <div className="relative ml-4 sm:ml-8">
          {/* vertical line */}
          <div className="absolute left-0 top-0 w-0.5 bg-violet-500 h-full"></div>
        
        

          {/* first entry */}
          <motion.div
            className="flex items-start mb-12 pl-4 sm:pl-8 relative group"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -4, boxShadow: '0 0 12px rgba(140, 93, 255,0.6)' }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-violet-500 flex items-center justify-center mr-4 mt-2">
              <Users size={20} className="text-white" />
            </div>
        
        
            <div className="bg-gray-900/60 p-5 rounded-xl shadow-md transition-all duration-300 group-hover:scale-105">
              <h4 className="text-xl font-bold text-white mb-2">CodeTroopers – Project Team Lead</h4>
              <ul className="list-disc pl-5 space-y-1 text-[#D1D5DB]">
                <li>Led project‑related activities and collaborated with team members on development tasks.</li>
                <li>Coordinated technical discussions and supported collaborative coding activities.</li>
                <li>Contributed to knowledge sharing and technical learning within the college coding club.</li>
              </ul>
            </div>
        
        
          </motion.div>

          {/* second entry */}
          <motion.div
            className="flex items-start mb-12 pl-4 sm:pl-8 relative group"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -4, boxShadow: '0 0 12px rgba(140, 93, 255,0.6)' }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-violet-500 flex items-center justify-center mr-4 mt-2">
              <Users size={20} className="text-white" />
            </div>
        
        
            <div className="bg-gray-900/60 p-5 rounded-xl shadow-md transition-all duration-300 group-hover:scale-105">
              <h4 className="text-xl font-bold text-white mb-2">HPL – Hackathon Premier League | Organizing Committee Member &amp; Team Manager</h4>
              <ul className="list-disc pl-5 space-y-1 text-[#D1D5DB]">
                <li>Served on the organizing committee for the college‑level HPL hackathon.</li>
                <li>Managed and coordinated participating teams throughout the event.</li>
                <li>Assisted with event coordination, team communication, and smooth execution of hackathon activities.</li>
              </ul>
            </div>
        
        
          </motion.div>
        </div>
        
        

        {/* Achievements & Activities */}
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#C4B5FD] mb-6">Achievements &amp; Activities</h3>
        <div className="grid gap-6 md:grid-cols-2">
          {/* Card 1 */}
          <motion.div
            className="flex items-start bg-gray-900/60 border-l-4 border-violet-500 rounded-xl p-5 shadow-md transition-all duration-300 group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -4, boxShadow: '0 0 12px rgba(140, 93, 255,0.6)' }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#C4B5FD]/10 flex items-center justify-center mr-4 mt-1">
              <Award size={20} className="text-[#C4B5FD]" />
            </div>
        
        
            <div>
              <h4 className="text-xl font-bold text-white mb-2">Consolation Prize – AI Vision National‑Level Hackathon, MITK</h4>
              <p className="text-[#D1D5DB]">Developed an LLM FinOps Dashboard for AI usage and cost tracking.</p>
            </div>
        
        
          </motion.div>
          {/* Card 2 */}
          <motion.div
            className="flex items-start bg-gray-900/60 border-l-4 border-violet-500 rounded-xl p-5 shadow-md transition-all duration-300 group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -4, boxShadow: '0 0 12px rgba(140, 93, 255,0.6)' }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#C4B5FD]/10 flex items-center justify-center mr-4 mt-1">
              <Code size={20} className="text-[#C4B5FD]" />
            </div>
        
        
            <div>
              <h4 className="text-xl font-bold text-white mb-2">Workshop Conductor – Data Analyst Essentials</h4>
              <p className="text-[#D1D5DB]">Conducted a workshop on data analytics using Power BI.</p>
            </div>
        
        
          </motion.div>
          {/* Card 3 */}
          <motion.div
            className="flex items-start bg-gray-900/60 border-l-4 border-violet-500 rounded-xl p-5 shadow-md transition-all duration-300 group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -4, boxShadow: '0 0 12px rgba(140, 93, 255,0.6)' }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#C4B5FD]/10 flex items-center justify-center mr-4 mt-1">
              <Award size={20} className="text-[#C4B5FD]" />
            </div>
        
        
            <div>
              <h4 className="text-xl font-bold text-white mb-2">Srinivas College Code Meet</h4>
              <p className="text-[#D1D5DB]">Participated in the hackathon and worked on a Smart Disaster Response Platform.</p>
            </div>
        
        
          </motion.div>
          {/* Card 4 */}
          <motion.div
            className="flex items-start bg-gray-900/60 border-l-4 border-violet-500 rounded-xl p-5 shadow-md transition-all duration-300 group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -4, boxShadow: '0 0 12px rgba(140, 93, 255,0.6)' }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#C4B5FD]/10 flex items-center justify-center mr-4 mt-1">
              <Award size={20} className="text-[#C4B5FD]" />
            </div>
        
        
            <div>
              <h4 className="text-xl font-bold text-white mb-2">National‑Level Hackathon – SMVITM</h4>
              <p className="text-[#D1D5DB]">Participated in the Museum Art Digitalization project.</p>
            </div>
        
        
          </motion.div>
          {/* Card 5 */}
          <motion.div
            className="flex items-start bg-gray-900/60 border-l-4 border-violet-500 rounded-xl p-5 shadow-md transition-all duration-300 group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -4, boxShadow: '0 0 12px rgba(140, 93, 255,0.6)' }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#C4B5FD]/10 flex items-center justify-center mr-4 mt-1">
              <Award size={20} className="text-[#C4B5FD]" />
            </div>
        
        
            <div>
              <h4 className="text-xl font-bold text-white mb-2">Ayush Habba Hackathon</h4>
              <p className="text-[#D1D5DB]">Developed a medical reports digitalization solution using QR codes.</p>
            </div>
        
        
          </motion.div>
        </div>
        
        
      </motion.div>
    </section>
  );
};

export default Experience;
