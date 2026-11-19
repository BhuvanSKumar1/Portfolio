// src/sections/About.tsx
import { motion, useReducedMotion } from 'framer-motion';
import { fadeUp, containerStagger } from '../utils/scrollVariants';
import { Laptop, Code2, Award, GraduationCap } from 'lucide-react';

// Existing three information cards
const highlights = [
  {
    icon: Laptop,
    title: 'Software Engineering Enthusiast',
    description: 'Passionate about modern tech, building practical software solutions.',
  },
  {
    icon: Code2,
    title: 'Full-Stack Developer & Data Explorer',
    description: 'Creates web apps, works with databases, and turns data into insights.',
  },
  {
    icon: Award,
    title: 'Innovative Problem Solver & Team Player',
    description: 'Enjoys hackathons, collaborates, and turns ideas into reality.',
  },
];

// Education & CGPA cards – now directly rendered, no separate academicHighlights array needed

const About = () => {
  const shouldReduce = useReducedMotion();
  return (
    <section id="about" className="py-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <motion.div
        className="container mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerStagger}
      >
        {/* Heading */}
        <motion.h2 className="text-4xl lg:text-5xl font-bold text-center text-white mb-8" variants={fadeUp}>
          About Me
        </motion.h2>

        {/* Intro paragraph */}
        <motion.p
          className="max-w-3xl mx-auto text-lg text-gray-200 leading-relaxed text-center mb-10"
          variants={fadeUp}
        >
          I am Bhuvan S Kumar, a Computer Science student at Shri Madhwa Vadiraja Institute of Technology & Management (SMVITM). I am passionate about software engineering, full‑stack development, problem‑solving and building practical applications.
          <br />
          <br />
        </motion.p>

        {/* Highlight cards */}
        <motion.div
          className="grid gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-3 max-w-5xl mx-auto"
          variants={containerStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-purple-900/30 backdrop-blur-md rounded-xl p-6 flex flex-col items-center text-center border border-white/20 shadow-lg min-h-[200px]"
              variants={fadeUp}
              whileHover={shouldReduce ? undefined : { y: -4, borderColor: 'rgba(139,92,246,0.6)', boxShadow: '0 4px 12px rgba(139,92,246,0.3)' }}
              transition={{ type: 'spring', stiffness: 300, duration: 0.2 }}
            >
              <item.icon size={56} className="text-purple-200 mb-4" />
              <h3 className="text-xl font-medium text-white mb-2">{item.title}</h3>
              {item.description && <p className="text-gray-300 mt-1">{item.description}</p>}
            </motion.div>
          ))}

          {/* Education & CGPA cards */}
          <div className="flex flex-col lg:flex-row justify-center items-center gap-6 mb-8 w-full max-w-[680px] mx-auto col-span-3">
            {/* Education card */}
            <motion.div
              className="bg-purple-900/30 backdrop-blur-md rounded-xl py-7 px-6 flex flex-col items-center text-center border border-white/20 shadow-lg flex-shrink-0 w-full lg:w-[320px] h-[220px]"
              variants={fadeUp}
              whileHover={shouldReduce ? undefined : { y: -4, borderColor: 'rgba(139,92,246,0.6)', boxShadow: '0 4px 12px rgba(139,92,246,0.3)' }}
              transition={{ type: 'spring', stiffness: 300, duration: 0.2 }}
            >
              <GraduationCap size={56} className="text-purple-200 mb-4" />
              <h3 className="text-xl font-medium text-white mb-2">Education</h3>
              <p className="text-gray-300">B.E. Computer Science</p>
              <p className="text-gray-300">SMVITM, Bantakal</p>
              <p className="text-gray-300">Batch 2027</p>
            </motion.div>
            {/* CGPA card */}
            <motion.div
              className="bg-purple-900/30 backdrop-blur-md rounded-xl py-7 px-6 flex flex-col items-center text-center border border-white/20 shadow-lg flex-shrink-0 w-full lg:w-[320px] h-[220px]"
              variants={fadeUp}
              whileHover={shouldReduce ? undefined : { y: -4, borderColor: 'rgba(139,92,246,0.6)', boxShadow: '0 4px 12px rgba(139,92,246,0.3)' }}
              transition={{ type: 'spring', stiffness: 300, duration: 0.2 }}
            >
              <Award size={56} className="text-purple-200 mb-4" />
              <h3 className="text-xl font-medium text-white mb-2">Current CGPA</h3>
              <p className="text-3xl font-bold text-white mt-2">9.07</p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
