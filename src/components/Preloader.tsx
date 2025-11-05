import React from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo.tsx';

const Preloader: React.FC = () => {
  return (
    <motion.div
      className="fixed inset-0 bg-navy flex items-center justify-center z-[100]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5, delay: 0.5 } }}
      aria-live="polite"
      aria-label="Loading RexJagers website"
    >
      <Logo variant="inverse" />
    </motion.div>
  );
};

export default Preloader;
