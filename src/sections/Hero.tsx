import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  ArrowDown,
  Download,
  UserRound,
} from 'lucide-react';
import GithubIcon from '../components/icons/GithubIcon';
import LinkedinIcon from '../components/icons/LinkedinIcon';

import { personalInfo } from '../data/personal';

const Hero = () => {
  const [imageError, setImageError] = useState(false);
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-bg-primary px-4 py-12 sm:px-6 sm:py-20 lg:px-6 lg:py-24"
    >
      {/* Background glow effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent-violet/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-accent-blue/20 rounded-full blur-[120px] pointer-events-none" />

      {/* 3D decorative objects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating violet cube */}
        <motion.div
          className="absolute top-[18%] right-[12%] w-16 h-16 border-2 border-violet-500/50 rounded-xl"
          style={{
            transformStyle: 'preserve-3d',
            boxShadow: '0 0 30px rgba(139,92,246,0.25)',
          }}
          animate={{
            rotateX: [0, 180, 360],
            rotateY: [0, 180, 360],
            y: [0, -25, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Floating blue diamond */}
        <motion.div
          className="absolute bottom-[20%] left-[8%] w-12 h-12 border-2 border-blue-500/50 rounded-lg"
          style={{
            transform: 'rotate(45deg)',
            boxShadow: '0 0 25px rgba(59,130,246,0.3)',
          }}
          animate={{
            rotate: [45, 225, 405],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Floating violet orb */}
        <motion.div
          className="absolute top-[65%] right-[40%] w-5 h-5 rounded-full bg-violet-500/50 blur-[2px]"
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.4, 1],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Floating blue orb */}
        <motion.div
          className="absolute top-[25%] left-[45%] w-4 h-4 rounded-full bg-blue-400/60 blur-[2px]"
          animate={{
            y: [0, 25, 0],
            x: [0, 15, 0],
            opacity: [0.3, 0.9, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
        {/* Text content */}
        <motion.div
          className="text-center lg:text-left"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p className="text-accent-violet font-semibold tracking-[0.25em] uppercase mb-4 text-sm sm:text-base">
            {personalInfo.greeting}
          </p>

          {/* Name */}
          <motion.h1
            className="text-3xl sm:text-4xl lg:text-7xl font-extrabold text-heading mb-5 leading-tight"
            initial={{ opacity: 0, rotateX: -30 }}
            animate={{ opacity: 1, rotateX: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ transformPerspective: 1000 }}
          >
            {personalInfo.fullName}
          </motion.h1>

          {/* Professional title */}
          <h2 className="text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-accent-violet to-accent-blue bg-clip-text text-transparent mb-4">
            {personalInfo.title}
          </h2>

          {/* Specialization */}
          <p className="text-sm sm:text-base lg:text-lg font-semibold bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent tracking-wide leading-relaxed mb-6">
            {personalInfo.specialization}
          </p>

          {/* Introduction */}
          <p className="text-base sm:text-lg text-foreground leading-relaxed max-w-xl mx-auto lg:mx-0 mb-9">
            {personalInfo.introduction}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 min-h-[44px] w-full sm:w-auto rounded-xl bg-[#7C3AED] text-white font-semibold border border-transparent hover:bg-[#6D28D9] hover:-translate-y-1 hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-[#7C3AED]/20"
            >
              View My Work
              <ArrowDown size={18} />
            </a>

            <a
              href="/assets/Bhuvan_S_Kumar_Resume_Final_Aligned.pdf"
              download
              className="inline-flex items-center justify-center gap-2 px-7 py-3 min-h-[44px] w-full sm:w-auto rounded-xl border border-accent-violet/50 text-heading hover:bg-accent-violet/10 transition-all duration-300"
            >
              Download Resume
              <Download size={18} />
            </a>
          </div>

          {/* Social icons */}
          {personalInfo.email && (
            <div className="flex gap-4 justify-center lg:justify-start mt-4">
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Email"
                className="p-3 rounded-full border border-white/10 text-heading/70 hover:text-accent-violet hover:border-accent-violet hover:-translate-y-1 transition-all duration-300"
              >
                <Mail size={22} />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-3 rounded-full border border-white/10 text-heading/70 hover:text-accent-violet hover:border-accent-violet hover:-translate-y-1 transition-all duration-300"
              >
                <GithubIcon size={22} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-3 rounded-full border border-white/10 text-heading/70 hover:text-accent-violet hover:border-accent-violet hover:-translate-y-1 transition-all duration-300"
              >
                <LinkedinIcon size={22} />
              </a>
            </div>
          )}
        </motion.div>
        <div className="flex justify-center lg:justify-end">
          {imageError ? (
            <UserRound size={200} strokeWidth={1} className="text-heading/30" />
          ) : (
            <img
              src="/assets/1790001840969.jpg"
              alt={`${personalInfo.fullName} - Profile`}
              className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full object-cover"
              onError={() => setImageError(true)}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
