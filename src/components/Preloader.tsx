import React from 'react';
import { motion, Variants } from 'framer-motion';

// Variants for the overall logo container
const logoContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
    exit: { // This animates the logo out before the background fades
        opacity: 0,
        scale: 0.9,
        transition: {
            duration: 0.4,
            ease: "easeIn"
        }
    }
  };
  
// Variants for "Rex" and "Jagers"
const wordmarkVariants: Variants = {
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

// Variants for the "RJ" brandmark
const brandmarkVariants: Variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
};


const Preloader: React.FC = () => {
  return (
    // The main container for the preloader. Fades out after the logo animation.
    <motion.div
      className="fixed inset-0 bg-navy flex items-center justify-center z-[100]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5, delay: 0.5, ease: 'easeInOut' } }}
      aria-live="polite"
      aria-label="Loading RexJagers website"
    >
      {/* The logo container, which has its own entrance and exit animations */}
      <motion.div
        className="flex items-center gap-2 sm:gap-3 text-2xl sm:text-3xl font-logo"
        variants={logoContainerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        aria-label="RexJagers Logo"
      >
        {/* Brandmark with a pulsing glow animation */}
        <motion.div
          variants={brandmarkVariants}
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gold flex items-center justify-center text-navy font-bold tracking-tighter"
          animate={{
            boxShadow: [
                "0 0 0px rgba(212, 175, 55, 0.4)",
                "0 0 25px 10px rgba(212, 175, 55, 0.7)",
                "0 0 0px rgba(212, 175, 55, 0.4)",
            ]
          }}
          transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
          }}
        >
          <span className="italic text-2xl sm:text-3xl">RJ</span>
        </motion.div>
        
        {/* Wordmark */}
        <motion.div variants={wordmarkVariants} className="overflow-hidden italic">
          <span className="text-white">{`Rex`}</span>
          <span className="text-gold">Jagers</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
