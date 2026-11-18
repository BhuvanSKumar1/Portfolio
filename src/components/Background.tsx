// src/components/Background.tsx
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

// Small helper component for a gradient orb
const GradientOrb = ({
  className,
  style,
}: {
  className: string;
  style?: React.CSSProperties;
}) => {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      style={style}
      animate={reduced ? undefined : { x: [0, 30, 0], y: [0, -20, 0] }}
        transition={reduced ? undefined : { duration: 20, repeat: Infinity, ease: 'linear' }}
    />
  );
};

const Background: React.FC = () => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* violet orb */}
      <GradientOrb
        className="bg-orb-violet animate-orb"
        style={{ top: '10%', left: '15%', width: '200px', height: '200px' }}
      />
      {/* blue orb */}
      <GradientOrb
        className="bg-orb-blue animate-orb"
        style={{ bottom: '15%', right: '20%', width: '250px', height: '250px' }}
      />
      {/* soft center glow */}
      <div className="bg-center-glow" />
    </div>
  );
};

export default Background;
