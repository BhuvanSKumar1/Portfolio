import React, { useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation: React.FC<IntroAnimationProps> = ({ onComplete }) => {
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    // Extended intro duration to 6.6 seconds (6–7s range)
    const timer = setTimeout(() => {
      onComplete();
    }, 6600);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const handleSkip = () => {
    onComplete();
  };

  // Words and letters for smooth letter-by-letter 3D reveal
  const nameWords = [
    { id: 'bhuvan', letters: 'BHUVAN'.split('') },
    { id: 's', letters: ['S'] },
    { id: 'kumar', letters: 'KUMAR'.split('') },
  ];

  // Slow, natural floating particles with extended cycle durations (8s–12s)
  const particles = [
    { id: 1, x: '16%', y: '22%', size: 3, color: 'bg-violet-400', glow: 'shadow-[0_0_8px_#a78bfa]', duration: 9.5, delay: 0 },
    { id: 2, x: '84%', y: '26%', size: 2.5, color: 'bg-cyan-400', glow: 'shadow-[0_0_8px_#38bdf8]', duration: 11.2, delay: 0.6 },
    { id: 3, x: '22%', y: '74%', size: 3.5, color: 'bg-blue-400', glow: 'shadow-[0_0_9px_#60a5fa]', duration: 10.4, delay: 1.2 },
    { id: 4, x: '78%', y: '70%', size: 2, color: 'bg-violet-300', glow: 'shadow-[0_0_6px_#c4b5fd]', duration: 8.8, delay: 0.4 },
    { id: 5, x: '48%', y: '16%', size: 2.5, color: 'bg-indigo-300', glow: 'shadow-[0_0_8px_#a5b4fc]', duration: 11.8, delay: 1.5 },
    { id: 6, x: '10%', y: '50%', size: 2, color: 'bg-cyan-300', glow: 'shadow-[0_0_6px_#67e8f9]', duration: 10.0, delay: 0.8 },
    { id: 7, x: '90%', y: '48%', size: 3, color: 'bg-violet-400', glow: 'shadow-[0_0_8px_#a78bfa]', duration: 10.8, delay: 0.5 },
    { id: 8, x: '32%', y: '84%', size: 2.5, color: 'bg-blue-400', glow: 'shadow-[0_0_7px_#60a5fa]', duration: 9.2, delay: 1.1 },
    { id: 9, x: '68%', y: '20%', size: 2, color: 'bg-cyan-400', glow: 'shadow-[0_0_6px_#38bdf8]', duration: 11.0, delay: 0.3 },
    { id: 10, x: '38%', y: '32%', size: 2.5, color: 'bg-violet-300', glow: 'shadow-[0_0_8px_#c4b5fd]', duration: 9.8, delay: 1.4 },
    { id: 11, x: '62%', y: '80%', size: 3, color: 'bg-indigo-400', glow: 'shadow-[0_0_8px_#818cf8]', duration: 8.9, delay: 0.7 },
    { id: 12, x: '74%', y: '40%', size: 2, color: 'bg-cyan-400', glow: 'shadow-[0_0_7px_#38bdf8]', duration: 11.5, delay: 0.4 },
  ];

  // Helper to calculate continuous letter index across words
  let globalLetterIndex = 0;

  return (
    <motion.div
      key="intro-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        filter: shouldReduceMotion ? 'none' : 'blur(4px)',
      }}
      transition={{ duration: 0.9, ease: 'easeInOut' }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#06050e] overflow-hidden select-none px-4"
    >
      {/* Background Layer: Technical Grid, Ambient Lighting, Light Beam, and Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* 1. TECHNICAL GRID: Fine-line low-opacity violet/blue grid with radial vignette */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(139,92,246,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.04)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_85%)] opacity-80" />

        {/* 1b. Perspective Depth Grid: Slower, gentle floor drift */}
        <div className="absolute inset-x-0 bottom-0 h-[48%] overflow-hidden pointer-events-none [perspective:800px]">
          <motion.div
            initial={{ opacity: 0.35 }}
            animate={shouldReduceMotion ? { opacity: 0.35 } : { translateY: [0, 22, 0] }}
            transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
            className="w-full h-[220%] origin-top -translate-y-6 [transform:rotateX(68deg)] bg-[linear-gradient(to_right,rgba(139,92,246,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:38px_38px] [mask-image:linear-gradient(to_bottom,black_15%,transparent_90%)]"
          />
        </div>

        {/* 3. AMBIENT LIGHTING: Left side Soft Violet Radial Glow (Gradual 9s cycle) */}
        <motion.div
          initial={{ opacity: 0.25, scale: 0.95 }}
          animate={
            shouldReduceMotion
              ? { opacity: 0.3 }
              : { opacity: [0.22, 0.35, 0.25], scale: [0.95, 1.08, 0.95] }
          }
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 -left-28 w-[520px] h-[520px] sm:w-[680px] sm:h-[680px] rounded-full bg-violet-600/18 blur-[140px]"
        />

        {/* 3b. AMBIENT LIGHTING: Opposite Right side Electric-Blue Radial Glow (Gradual 10s cycle) */}
        <motion.div
          initial={{ opacity: 0.2, scale: 0.95 }}
          animate={
            shouldReduceMotion
              ? { opacity: 0.28 }
              : { opacity: [0.18, 0.32, 0.22], scale: [1, 1.12, 1] }
          }
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-1/4 -right-28 w-[520px] h-[520px] sm:w-[680px] sm:h-[680px] rounded-full bg-blue-600/16 blur-[140px]"
        />

        {/* 3c. AMBIENT LIGHTING: Gentle Blue-Violet Core Glow behind typography (Gradual 8s cycle) */}
        <motion.div
          initial={{ opacity: 0.25, scale: 0.95 }}
          animate={
            shouldReduceMotion
              ? { opacity: 0.35 }
              : { opacity: [0.25, 0.42, 0.28], scale: [0.96, 1.06, 0.96] }
          }
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[340px] sm:w-[950px] sm:h-[420px] rounded-full bg-gradient-to-r from-violet-600/22 via-indigo-600/18 to-cyan-500/14 blur-[130px]"
        />

        {/* 4. LIGHT BEAM: Diffused cinematic light beam behind name (Slow 8s cycle) */}
        <motion.div
          initial={{ opacity: 0.12 }}
          animate={
            shouldReduceMotion
              ? { opacity: 0.16 }
              : { opacity: [0.12, 0.22, 0.15], rotate: [-14, -10, -14] }
          }
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[520px] h-[950px] bg-gradient-to-b from-transparent via-violet-400/12 via-cyan-400/8 to-transparent blur-3xl pointer-events-none"
        />

        {/* 2. FLOATING PARTICLES: Slow, graceful drifting */}
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 0 }}
            animate={
              shouldReduceMotion
                ? { opacity: 0.55 }
                : {
                    opacity: [0.15, 0.7, 0.25],
                    y: [-6, 6, -6],
                    x: [-3, 3, -3],
                  }
            }
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: p.delay,
            }}
            style={{
              left: p.x,
              top: p.y,
              width: `${p.size}px`,
              height: `${p.size}px`,
            }}
            className={`absolute rounded-full pointer-events-none ${p.color} ${p.glow}`}
          />
        ))}
      </div>

      {/* Skip Button */}
      <motion.button
        type="button"
        onClick={handleSkip}
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.16)' }}
        whileTap={{ scale: 0.95 }}
        className="absolute top-5 right-5 sm:top-7 sm:right-8 z-20 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium text-white/80 bg-white/10 hover:text-white border border-white/20 backdrop-blur-md shadow-lg transition-colors cursor-pointer"
        aria-label="Skip Introduction"
      >
        <span>Skip Intro</span>
        <span className="text-violet-300 font-bold">✕</span>
      </motion.button>

      {/* Main Composition Container: Centered, 70-85% Width on Desktop */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center justify-center text-center">
        {/* 1. BSK Monogram: Smooth, gradual entrance */}
        <motion.div
          initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.75, y: shouldReduceMotion ? 0 : -18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
          className="mb-5 sm:mb-7 flex flex-col items-center"
        >
          <div className="relative flex items-center justify-center">
            {/* Ambient halo ring */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-600 via-indigo-500 to-cyan-500 blur-md opacity-60 animate-pulse" />

            {/* Monogram emblem box with 3D bevel effect */}
            <div className="relative px-5 py-2 sm:px-6 sm:py-2.5 rounded-xl bg-gradient-to-b from-[#1c1736] to-[#0e0c1f] border border-violet-500/50 shadow-[0_4px_20px_rgba(139,92,246,0.4),inset_0_1px_1px_rgba(255,255,255,0.2)] flex items-center gap-2">
              <span className="text-sm sm:text-base font-black tracking-[0.25em] text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-white to-cyan-300 drop-shadow-[0_0_10px_rgba(139,92,246,0.6)]">
                BSK
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#38bdf8]" />
            </div>
          </div>
        </motion.div>

        {/* 2. Main Name: "BHUVAN S KUMAR" (Slower, letter-by-letter reveal with ample time) */}
        <div className="relative w-full px-2 sm:px-4">
          <div className="flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-6 md:gap-x-8">
            {nameWords.map((wordObj) => (
              <span
                key={wordObj.id}
                className="inline-flex whitespace-nowrap font-sans font-black uppercase tracking-tight sm:tracking-normal text-[clamp(2.1rem,7.5vw,6.5rem)] leading-[1.05]"
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: 1000,
                }}
              >
                {wordObj.letters.map((char) => {
                  const letterDelay = 0.8 + globalLetterIndex * 0.1;
                  globalLetterIndex += 1;

                  return (
                    <motion.span
                      key={`${wordObj.id}-${char}-${globalLetterIndex}`}
                      initial={{
                        opacity: 0,
                        y: shouldReduceMotion ? 0 : 28,
                        rotateX: shouldReduceMotion ? 0 : -30,
                        scale: shouldReduceMotion ? 1 : 0.88,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        rotateX: 0,
                        scale: 1,
                      }}
                      transition={{
                        delay: letterDelay,
                        duration: 1.1,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="relative inline-block"
                    >
                      {/* 3D Extrusion Depth Layer (creates physical 3D drop depth) */}
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 select-none text-[#231847] translate-y-1 sm:translate-y-2 translate-x-0.5 sm:translate-x-1 blur-[0.5px]"
                        style={{
                          textShadow:
                            '0 1px 0 #3b1d75, 0 2px 0 #2a1458, 0 3px 0 #1c0c3e, 0 4px 10px rgba(0,0,0,0.8)',
                        }}
                      >
                        {char}
                      </span>

                      {/* Primary Face: Violet-to-electric-blue gradient with 3D lighting */}
                      <span
                        className="relative block bg-gradient-to-r from-violet-300 via-indigo-200 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_10px_25px_rgba(139,92,246,0.45)] drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]"
                        style={{
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                        }}
                      >
                        {char}
                      </span>
                    </motion.span>
                  );
                })}
              </span>
            ))}
          </div>

          {/* Slower, smoother light sweep across the complete name */}
          <motion.div
            aria-hidden="true"
            initial={{ x: '-100%', opacity: 0 }}
            animate={
              shouldReduceMotion
                ? {}
                : {
                    x: ['-100%', '220%'],
                    opacity: [0, 0.65, 0],
                  }
            }
            transition={{
              delay: 2.5,
              duration: 2.2,
              ease: 'easeInOut',
            }}
            className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-white/35 to-transparent mix-blend-overlay"
          />
        </div>

        {/* 3. Subtitle (SOFTWARE ENGINEER | FULL-STACK DEVELOPER) */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 sm:mt-8 flex items-center justify-center"
        >
          <div className="flex items-center gap-2 sm:gap-3 px-3 py-1 rounded-full bg-violet-950/40 border border-violet-500/20 backdrop-blur-sm shadow-[0_0_15px_rgba(139,92,246,0.15)]">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-ping" />
            <h2 className="text-xs sm:text-sm md:text-base font-mono font-semibold tracking-[0.2em] sm:tracking-[0.25em] text-violet-200/95 uppercase">
              SOFTWARE ENGINEER <span className="text-cyan-400 mx-1">|</span> FULL-STACK DEVELOPER
            </h2>
          </div>
        </motion.div>

        {/* 4. Tagline: Building Ideas Into Intelligent Digital Products. */}
        <motion.p
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.6, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base font-sans font-medium text-slate-300/90 tracking-wide max-w-xl mx-auto px-4"
        >
          Building Ideas Into Intelligent Digital Products.
        </motion.p>

        {/* Subtle Bottom Progress Line (calibrated to the 6.6s timeline) */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 5.6, ease: 'linear' }}
          className="mt-8 sm:mt-10 w-40 sm:w-56 h-[2px] bg-gradient-to-r from-violet-500 via-indigo-400 to-cyan-400 rounded-full origin-center opacity-70 shadow-[0_0_10px_rgba(56,189,248,0.5)]"
        />
      </div>
    </motion.div>
  );
};

export default IntroAnimation;
