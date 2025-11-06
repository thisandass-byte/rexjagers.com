import React from 'react';
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