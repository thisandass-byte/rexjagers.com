import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon } from './Icons.tsx';

interface ScrollDownIndicatorProps {
  variant?: 'light' | 'dark';
}

const ScrollDownIndicator: React.FC<ScrollDownIndicatorProps> = ({ variant = 'dark' }) => {
  const colorClass = variant === 'light' ? 'text-white' : 'text-navy dark:text-white';

  return (
    <motion.div
      className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30"
      animate={{
        y: [0, 10, 0],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatType: 'loop',
      }}
    >
      <ChevronDownIcon className={`w-8 h-8 ${colorClass}`} />
    </motion.div>
  );
};

export default ScrollDownIndicator;