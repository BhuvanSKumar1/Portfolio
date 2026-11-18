
import { motion } from 'framer-motion';
import { Mail, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/personal';
import GithubIcon from '../components/icons/GithubIcon';
import LinkedinIcon from '../components/icons/LinkedinIcon';

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative bg-bg-primary border-t border-white/10 py-10 overflow-hidden">

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-accent-violet/10 blur-[100px] pointer-events-none" />

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 text-foreground"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Personal information */}
          <div className="text-center md:text-left">
            <p className="font-bold text-lg">
              Bhuvan S Kumar
            </p>

            <p className="text-sm text-foreground/60 mt-1">
              Aspiring Software Engineer
            </p>
          </div>

          {/* Quick navigation */}
          <nav className="flex flex-wrap justify-center gap-5 text-sm text-foreground/70">

            <a href="#home" className="hover:text-accent-violet transition-colors">
              Home
            </a>
            <div className="flex gap-4 mt-2">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2 rounded-full border border-white/10 hover:border-accent-violet hover:text-accent-violet transition-colors">
                <GithubIcon size={20} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 rounded-full border border-white/10 hover:border-accent-violet hover:text-accent-violet transition-colors">
                <LinkedinIcon size={20} />
              </a>
            </div>

            <a href="#about" className="hover:text-accent-violet transition-colors">
              About
            </a>
            <div className="flex gap-4 mt-2">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2 rounded-full border border-white/10 hover:border-accent-violet hover:text-accent-violet transition-colors">
                <GithubIcon size={20} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 rounded-full border border-white/10 hover:border-accent-violet hover:text-accent-violet transition-colors">
                <LinkedinIcon size={20} />
              </a>
            </div>

            <a href="#skills" className="hover:text-accent-violet transition-colors">
              Skills
            </a>
            <div className="flex gap-4 mt-2">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2 rounded-full border border-white/10 hover:border-accent-violet hover:text-accent-violet transition-colors">
                <GithubIcon size={20} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 rounded-full border border-white/10 hover:border-accent-violet hover:text-accent-violet transition-colors">
                <LinkedinIcon size={20} />
              </a>
            </div>

            <a href="#projects" className="hover:text-accent-violet transition-colors">
              Projects
            </a>
            <div className="flex gap-4 mt-2">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2 rounded-full border border-white/10 hover:border-accent-violet hover:text-accent-violet transition-colors">
                <GithubIcon size={20} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 rounded-full border border-white/10 hover:border-accent-violet hover:text-accent-violet transition-colors">
                <LinkedinIcon size={20} />
              </a>
            </div>

            <a href="#experience" className="hover:text-accent-violet transition-colors">
              Experience
            </a>
            <div className="flex gap-4 mt-2">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2 rounded-full border border-white/10 hover:border-accent-violet hover:text-accent-violet transition-colors">
                <GithubIcon size={20} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 rounded-full border border-white/10 hover:border-accent-violet hover:text-accent-violet transition-colors">
                <LinkedinIcon size={20} />
              </a>
            </div>

            <a href="#contact" className="hover:text-accent-violet transition-colors">
              Contact
            </a>
            <div className="flex gap-4 mt-2">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2 rounded-full border border-white/10 hover:border-accent-violet hover:text-accent-violet transition-colors">
                <GithubIcon size={20} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 rounded-full border border-white/10 hover:border-accent-violet hover:text-accent-violet transition-colors">
                <LinkedinIcon size={20} />
              </a>
            </div>

          </nav>

          {/* Email contact */}
          <a
            href="mailto:"
            aria-label="Send email"
            className="p-3 rounded-full border border-white/10 text-foreground/70 hover:text-accent-violet hover:border-accent-violet transition-all duration-300"
          >
            <Mail size={20} />
          </a>
            <div className="flex gap-4 mt-2">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2 rounded-full border border-white/10 hover:border-accent-violet hover:text-accent-violet transition-colors">
                <GithubIcon size={20} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 rounded-full border border-white/10 hover:border-accent-violet hover:text-accent-violet transition-colors">
                <LinkedinIcon size={20} />
              </a>
            </div>

        </div>

        {/* Back to top */}
        <div className="mt-8 flex justify-center">

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollTop}
            className="flex items-center gap-2 px-5 py-2.5 bg-accent-violet text-white rounded-full hover:bg-accent-blue transition-all duration-300"
          >
            <ArrowUp size={16} />
            Back to Top
          </motion.button>

        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <p className="text-center text-xs text-foreground/50">
            © {year} Bhuvan S Kumar. All rights reserved.
          </p>
        </div>

      </motion.div>
    </footer>
  );
};

export default Footer;
