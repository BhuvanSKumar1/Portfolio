// src/sections/Skills.tsx
import React from 'react';
import { useReducedMotion } from 'framer-motion';
import { motion } from 'framer-motion';
import { fadeUp, containerStagger } from '../utils/scrollVariants';

// Custom SVG icons for Java, Power BI, Tableau
const JavaIcon = () => (
  <svg width={40} height={40} viewBox="0 0 64 64" fill="#E84D0A" className="mb-4" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 4C18.745 4 8 14.745 8 28c0 8.837 4.803 16.544 12 20.618V60c0 2.209 1.791 4 4 4h16c2.209 0 4-1.791 4-4v-11.382c7.197-4.074 12-11.781 12-20.618 0-13.255-10.745-24-24-24zm0 8c8.822 0 16 7.178 16 16s-7.178 16-16 16-16-7.178-16-16 7.178-16 16-16z" />
  </svg>
);

const PowerBIIcon = () => (
  <svg width={40} height={40} viewBox="0 0 64 64" fill="none" className="mb-4" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="56" height="56" fill="white" opacity="0.1" />
    <rect x="12" y="24" width="8" height="28" fill="#F2C811" />
    <rect x="28" y="16" width="8" height="36" fill="#F2C811" />
    <rect x="44" y="8" width="8" height="44" fill="#F2C811" />
  </svg>
);

const TableauIcon = () => (
  <svg width={40} height={40} viewBox="0 0 64 64" fill="none" className="mb-4" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" fill="#E97627" />
    <path d="M32 12L20 52h4l2-6h12l2 6h4L32 12zm-6.5 28l4-12h5l4 12h-13z" fill="white" />
  </svg>
);

// Simple Icons CDN for the remaining technologies
const PythonIcon = () => (
  <svg width={40} height={40} viewBox="0 0 64 64" className="mb-4" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" fill="#3776AB" />
    <text x="32" y="38" fontSize="32" fill="white" textAnchor="middle" fontFamily="Arial,Helvetica,sans-serif">Py</text>
  </svg>
);

const ReactIcon = () => (
  <svg width={40} height={40} viewBox="0 0 64 64" className="mb-4" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="30" fill="#61DAFB" />
    <ellipse cx="32" cy="32" rx="20" ry="10" fill="white" opacity="0.6" />
    <ellipse cx="32" cy="32" rx="10" ry="20" fill="white" opacity="0.6" transform="rotate(60 32 32)" />
  </svg>
);

const NodejsIcon = () => (
  <svg width={40} height={40} viewBox="0 0 64 64" className="mb-4" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="30" fill="#5FA04E" />
    <text x="32" y="38" fontSize="28" fill="white" textAnchor="middle" fontFamily="Arial,Helvetica,sans-serif">N</text>
  </svg>
);

const TypescriptIcon = () => (
  <svg width={40} height={40} viewBox="0 0 64 64" className="mb-4" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" fill="#3178C6" />
    <text x="32" y="38" fontSize="28" fill="white" textAnchor="middle" fontFamily="Arial,Helvetica,sans-serif">TS</text>
  </svg>
);

const PostgreSQLIcon = () => (
  <svg width={40} height={40} viewBox="0 0 64 64" className="mb-4" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" fill="#4169E1" />
    <text x="32" y="38" fontSize="28" fill="white" textAnchor="middle" fontFamily="Arial,Helvetica,sans-serif">PG</text>
  </svg>
);

const skillItems = [
  { name: 'Java', icon: JavaIcon, brandColor: '#E84D0A' },
  { name: 'Python', icon: PythonIcon, brandColor: '#3776AB' },
  { name: 'React', icon: ReactIcon, brandColor: '#61DAFB' },
  { name: 'Node.js', icon: NodejsIcon, brandColor: '#5FA04E' },
  { name: 'TypeScript', icon: TypescriptIcon, brandColor: '#3178C6' },
  { name: 'SQL / PostgreSQL', icon: PostgreSQLIcon, brandColor: '#4169E1' },
  { name: 'PowerBI', icon: PowerBIIcon, brandColor: '#F2C811' },
  { name: 'Tableau', icon: TableauIcon, brandColor: '#0066B3' },
];

const Skills: React.FC = () => {
  const reduced = useReducedMotion();

  const firstSix = skillItems.slice(0, 6);
  const lastTwo = skillItems.slice(6);

  return (
    <section id="skills" className="py-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 bg-opacity-30">
      <motion.div
        className="container mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerStagger}
      >
        <motion.h2
          className="text-3xl lg:text-4xl font-bold text-center text-white mb-4"
          style={{ textShadow: '0 0 4px rgba(139,92,246,0.7)' }}
          variants={fadeUp}
        >
          Skills
        </motion.h2>
        {/* Decorative underline */}
        <motion.div
          className="mx-auto w-24 h-1 bg-gradient-to-r from-violet-500 to-blue-500 rounded opacity-75 mb-6"
          style={{ filter: 'drop-shadow(0 0 4px rgba(139,92,246,0.7))' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        />
        {/* Top six cards */}
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerStagger}
        >
          {firstSix.map((skill, idx) => {
            const IconComponent = skill.icon;
            const hoverEffect = reduced
              ? {}
              : {
                  y: -5,
                  boxShadow: `0 8px 15px ${skill.brandColor}33`,
                  borderColor: skill.brandColor,
                };
            return (
              <motion.div
                key={idx}
                className="bg-purple-900/30 backdrop-blur-md rounded-xl p-6 flex flex-col items-center text-center border border-white/20 shadow-lg group hover:ring-2 hover:ring-accent-violet/40 transition-all duration-300"
                whileHover={hoverEffect}
                whileTap={{ scale: 0.95 }}
                variants={fadeUp}
              >
                <IconComponent />
                <h3 className="text-xl font-medium text-white">{skill.name}</h3>
              </motion.div>
            );
          })}
        </motion.div>
        {/* Bottom two cards centered */}
        <div className="grid gap-6 sm:grid-cols-2 max-w-md mx-auto mt-6">
          {lastTwo.map((skill, idx) => {
            const IconComponent = skill.icon;
            const hoverEffect = reduced
              ? {}
              : {
                  y: -5,
                  boxShadow: `0 8px 15px ${skill.brandColor}33`,
                  borderColor: skill.brandColor,
                };
            return (
              <motion.div
                key={idx + 6}
                className="bg-purple-900/30 backdrop-blur-md rounded-xl p-6 flex flex-col items-center text-center border border-white/20 shadow-lg group hover:ring-2 hover:ring-accent-violet/40 transition-all duration-300"
                whileHover={hoverEffect}
                whileTap={{ scale: 0.95 }}
                variants={fadeUp}
              >
                <IconComponent />
                <h3 className="text-xl font-medium text-white">{skill.name}</h3>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
