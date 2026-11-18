// src/sections/Skills.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, containerStagger } from '../utils/scrollVariants';
import { Code, Database, Cpu, Server, BarChart, PieChart } from 'lucide-react';

// Simple placeholder skill set – you can replace with real ones later
const skillItems = [
  { name: 'Java', icon: Code },
  { name: 'Python', icon: Cpu },
  { name: 'React', icon: Code },
  { name: 'Node.js', icon: Server },
  { name: 'TypeScript', icon: Code },

  { name: 'SQL / PostgreSQL', icon: Database },
  { name: 'PowerBI', icon: BarChart },
  { name: 'Tableau', icon: PieChart },
];

const Skills: React.FC = () => {
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
          className="text-3xl lg:text-4xl font-bold text-center text-foreground mb-12"
          variants={fadeUp}
        >
          Skills
        </motion.h2>
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerStagger}
        >
          {skillItems.map((skill, idx) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={idx}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 flex flex-col items-center text-center text-foreground group hover:ring-2 hover:ring-accent-violet/40 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={fadeUp}
              >
                <Icon size={40} className="text-accent-violet mb-4" />
                <h3 className="text-xl font-medium">{skill.name}</h3>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;

