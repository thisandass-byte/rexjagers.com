import React from 'react';
import { motion, Variants } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12,
    },
  },
};

interface LogoProps {
  className?: string;
  variant?: 'default' | 'inverse';
  specialHeaderStyle?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = '', variant = 'default', specialHeaderStyle = false }) => {
  const isInverse = variant === 'inverse';

  const rexColorClasses = specialHeaderStyle
    ? 'text-navy text-glow-white' // Special style for header
    : isInverse
    ? 'text-white' // High-contrast white for other dark backgrounds (footer, etc.)
    : 'text-navy dark:text-white'; // Default navy for light backgrounds, white for dark mode scrolled

  return (
    <motion.div
      className={`flex items-center gap-2 sm:gap-3 text-2xl sm:text-3xl font-logo ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      aria-label="RexJagers Logo"
    >
      {/* Brandmark */}
      <motion.div
        variants={itemVariants}
        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gold flex items-center justify-center text-navy font-bold tracking-tighter"
        whileHover={{ scale: 1.1, rotate: 10 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <span className="italic text-2xl sm:text-3xl">RJ</span>
      </motion.div>
      {/* Wordmark */}
      <motion.div variants={itemVariants} className="overflow-hidden italic">
        <span className={rexColorClasses}>{`Rex`}</span>
        <span className="text-gold">Jagers</span>
      </motion.div>
    </motion.div>
  );
};

export default Logo;
