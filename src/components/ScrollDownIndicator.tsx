import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon } from './Icons.tsx';

const ScrollDownIndicator: React.FC = () => {
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
      <ChevronDownIcon className="w-8 h-8 text-navy dark:text-white" />
    </motion.div>
  );
};

export default ScrollDownIndicator;
