// src/sections/About.tsx
import { motion } from 'framer-motion';
import { fadeUp, containerStagger } from '../utils/scrollVariants';
import { Laptop, Code2, Award } from 'lucide-react';

const highlights = [
  { icon: Laptop, title: 'Software Engineering Enthusiast – Exploring modern technologies and developing practical software solutions.' },
  { icon: Code2, title: 'Full-Stack Developer & Data Explorer – Building web applications, working with databases, and transforming data into meaningful insights.' },
  { icon: Award, title: 'Innovative Problem Solver & Team Player – Enjoying hackathons, collaborative projects, creative thinking, and turning ideas into reality.' },
];

const About = () => {
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
        <motion.h2
          className="text-3xl lg:text-4xl font-bold text-center text-heading mb-12"
          variants={fadeUp}
        >
          About Me
        </motion.h2>

        {/* Intro paragraph */}
        <motion.p
          className="max-w-3xl mx-auto text-lg text-heading/80 text-center mb-12"
          variants={fadeUp}
        >
          I am Bhuvan S Kumar, a Computer Science student at Shri Madhwa Vadiraja Institute of Technology & Management (SMVITM). I am passionate about software engineering, full‑stack development, problem‑solving and building practical applications.
          <br /><br />
        </motion.p>

        {/* Highlight cards */}
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto"
          variants={containerStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 flex flex-col items-center text-center text-heading"
              variants={fadeUp}
            >
              <item.icon size={48} className="text-accent-violet mb-4" />
              <h3 className="text-xl font-medium">{item.title}</h3>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
