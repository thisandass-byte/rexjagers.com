import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface CTAButtonProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({ to, children, className = '' }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      <Link
        to={to}
        className={`inline-block px-8 py-4 bg-gold text-navy rounded-md text-lg font-semibold transition-all duration-300 transform hover:box-shadow-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-navy ${className}`}
      >
        {children}
      </Link>
    </motion.div>
  );
};

export default CTAButton;