// src/components/Navbar.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Menu, X, Home, User, Code, Briefcase, Layers, Mail } from 'lucide-react';

const navLinks = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'skills', label: 'Skills', icon: Layers },
  { id: 'projects', label: 'Projects', icon: Code },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'contact', label: 'Contact', icon: Mail },
];

const Navbar: React.FC = () => {
  const reduced = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState('home');

  // background change on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Update active link on hash change / scroll
  useEffect(() => {
    const updateActive = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      setActiveId(hash);
    };
    window.addEventListener('hashchange', updateActive);
    updateActive();
    return () => window.removeEventListener('hashchange', updateActive);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveId(id);
      setIsOpen(false);
      window.history.replaceState(null, '', `#${id}`);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md ${scrolled ? 'bg-white/20' : 'bg-white/10'} border-b border-white/20`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3 lg:px-8">
        {/* Logo / name */}
        <div className="whitespace-nowrap text-base sm:text-xl font-bold text-foreground cursor-pointer" onClick={() => scrollTo('home')}>
          Bhuvan S Kumar
        </div>
        {/* Desktop links */}
        <ul className="hidden lg:flex space-x-8">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeId === link.id;
            return (
              <li key={link.id} className="relative">
                <motion.button
                  className={`flex items-center space-x-1 text-heading transition hover:text-accent-violet ${isActive ? 'text-accent-violet' : ''}`}
                  onClick={() => scrollTo(link.id)}
                  whileHover={reduced ? undefined : { y: -2, scale: 1.02 }}
                  whileTap={reduced ? undefined : { scale: 0.95 }}
                >
                  <Icon size={16} />
                  <span>{link.label}</span>
                </motion.button>
                {isActive && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute left-0 -bottom-1 w-full h-0.5 bg-accent-violet rounded"
                  />
                )}
              </li>
            );
          })}
        </ul>
        {/* Mobile menu button */}
        <button className="lg:hidden text-foreground p-2 min-w-[44px] min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-violet" onClick={() => setIsOpen(prev => !prev)} aria-label="Menu" aria-expanded={isOpen}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* Mobile menu panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-white/10 backdrop-blur-md border-t border-white/20"
          >
            <ul className="flex flex-col space-y-4 p-4">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = activeId === link.id;
                return (
                  <li key={link.id}>
                    <motion.button
                      className={`flex items-center space-x-2 w-full text-left text-foreground transition hover:text-accent-violet focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-violet ${isActive ? 'text-accent-violet' : ''}`}
                      onClick={() => scrollTo(link.id)}
                      whileHover={reduced ? undefined : { y: -2, scale: 1.02 }}
                      whileTap={reduced ? undefined : { scale: 0.95 }}
                    >
                      <Icon size={20} />
                      <span>{link.label}</span>
                    </motion.button>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
