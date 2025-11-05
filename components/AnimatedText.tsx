import React from 'react';
// FIX: Imported Variants type from framer-motion
import { motion, Variants } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  el?: keyof React.JSX.IntrinsicElements;
  type?: 'word' | 'letter';
  duration?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, el = 'h1', className, type = 'word', duration }) => {
  const items = type === 'letter' ? Array.from(text) : text.split(' ');
  
  // Set a base delay and calculate stagger based on duration if provided
  const delayChildren = 0.5;
  const staggerChildren = duration 
    ? (duration - delayChildren) / items.length 
    : 0.12;


  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren, delayChildren: delayChildren * i },
    }),
  };

  // FIX: Added Variants type to fix type inference issue with 'spring'.
  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const Component = motion[el];

  return (
    <Component
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {items.map((item, index) => (
        <motion.span
          variants={child}
          style={{ 
            marginRight: type === 'word' ? '0.25em' : '0',
            display: 'inline-block',
            // Handle spaces in letter-by-letter animation
            whiteSpace: item === ' ' ? 'pre' : 'normal',
          }}
          key={index}
        >
          {item}
        </motion.span>
      ))}
    </Component>
  );
};

export default AnimatedText;