import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import IntroAnimation from './components/IntroAnimation';
import Navbar from './components/Navbar';
import Background from './components/Background';
import Footer from './components/Footer';

import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import Skills from './sections/Skills';

const INTRO_STORAGE_KEY = 'bsk_intro_seen_v4';

function App() {
  const [showIntro, setShowIntro] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    try {
      const searchParams = new URLSearchParams(window.location.search);
      if (searchParams.has('intro') || window.location.hash === '#intro') {
        return true;
      }
      return !sessionStorage.getItem(INTRO_STORAGE_KEY);
    } catch {
      return false;
    }
  });

  useEffect(() => {
    const handleReplay = () => {
      setShowIntro(true);
    };
    window.addEventListener('replay-intro', handleReplay);
    return () => window.removeEventListener('replay-intro', handleReplay);
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
    try {
      sessionStorage.setItem(INTRO_STORAGE_KEY, 'true');
    } catch {
      // Ignore storage errors if private mode disables sessionStorage
    }
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}
      </AnimatePresence>
      <Navbar />
      <Background />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
