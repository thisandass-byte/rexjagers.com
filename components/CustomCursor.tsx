import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import useMousePosition from '../hooks/useMousePosition';
import { useTheme } from '../hooks/useTheme';

const CustomCursor: React.FC = () => {
  const { x, y } = useMousePosition();
  const { theme } = useTheme();
  const [isHovering, setIsHovering] = useState(false);

  const outlineColor = isHovering
    ? 'rgba(212, 175, 55, 0.3)'
    : theme === 'dark'
    ? 'rgba(255, 255, 255, 0.3)'
    : 'rgba(10, 25, 47, 0.3)';

  useEffect(() => {
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    const elements = document.querySelectorAll('a, button, [role="button"], input, textarea, [data-cursor-hover]');
    elements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      elements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <motion.div
        className="cursor-outline"
        style={{
          left: x,
          top: y,
          backgroundColor: outlineColor,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      />
      <motion.div
        className="cursor-dot"
        style={{
          left: x,
          top: y,
        }}
      />
    </>
  );
};

export default CustomCursor;