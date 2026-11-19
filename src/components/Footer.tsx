// Footer component with dark navy-to-violet gradient
import { motion } from 'framer-motion';
import { Mail, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/personal';
import GithubIcon from '../components/icons/GithubIcon';
import LinkedinIcon from '../components/icons/LinkedinIcon';

const Footer = () => {
  const year = new Date().getFullYear();


  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-r from-[#1E1B4B] to-[#6D28D9] border-t border-white/10 py-10 overflow-hidden text-foreground">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-accent-violet/10 blur-[100px] pointer-events-none" />

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        {/* Layout: three balanced columns */}
        <div className="grid md:grid-cols-3 gap-12 items-start text-center md:text-left">
          {/* Left column: name, subtitle, description */}
          <div>
            <p className="font-bold text-2xl text-white">Bhuvan S Kumar</p>
            <p className="text-sm text-white/70 mt-1">Software Engineer</p>
            <p className="text-sm text-[#E0D0FF] mt-1">Building intelligent solutions through code, data and technology.</p>



          </div>

          {/* Center column: quick navigation */}
          <nav className="flex flex-col md:items-center gap-2 text-sm text-white/70">
            <a href="#home" className="hover:text-accent-violet transition-colors">Home</a>
            <a href="#about" className="hover:text-accent-violet transition-colors">About</a>
            <a href="#skills" className="hover:text-accent-violet transition-colors">Skills</a>
            <a href="#projects" className="hover:text-accent-violet transition-colors">Projects</a>
            <a href="#experience" className="hover:text-accent-violet transition-colors">Experience</a>
            <a href="#contact" className="hover:text-accent-violet transition-colors">Contact</a>
          </nav>

          {/* Right column: Connect With Me */}
          <div className="flex flex-col items-center md:items-end">
            <p className="font-semibold text-white mb-2">Connect With Me</p>
            <div className="flex gap-4">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                className="p-3 rounded-full bg-accent-violet/20 border border-white/20 hover:bg-accent-violet hover:text-white transition-colors flex items-center">
                <GithubIcon size={24} />
                <span className="ml-2 text-sm text-white">GitHub</span>
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                className="p-3 rounded-full bg-accent-violet/20 border border-white/20 hover:bg-accent-violet hover:text-white transition-colors flex items-center">
                <LinkedinIcon size={24} />
                <span className="ml-2 text-sm text-white">LinkedIn</span>
              </a>
              <a href={"mailto:" + personalInfo.email} aria-label="Email"
                className="p-3 rounded-full bg-accent-violet/20 border border-white/20 hover:bg-accent-violet hover:text-white transition-colors flex items-center">
                <Mail size={24} />
                <span className="ml-2 text-sm text-white">Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Back to top */}
        <div className="mt-8 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollTop}
            className="p-3 rounded-full bg-accent-violet text-white hover:bg-accent-blue transition-all duration-300"
            aria-label="Back to Top"
          >
            <ArrowUp size={24} />
          </motion.button>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <p className="text-center text-xs text-white/40">© {year} Bhuvan S Kumar. All rights reserved.</p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
