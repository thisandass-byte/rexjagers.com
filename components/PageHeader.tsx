import React from 'react';
import { motion } from 'framer-motion';
import ScrollDownIndicator from './ScrollDownIndicator';
import AnimatedText from './AnimatedText';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  imageAlt: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, imageUrl, imageAlt }) => {
  return (
    <section className="relative py-32 md:py-48 flex items-center justify-center text-center px-6 overflow-hidden">
      <img
        src={imageUrl}
        alt={imageAlt}
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Strengthened gradient for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-white to-white/80 dark:from-navy dark:to-navy/80"></div>
      <div 
        className="relative z-10"
      >
        {/* Added explicit text colors for high contrast */}
        <AnimatedText el="h1" text={title} className="text-4xl md:text-6xl font-serif font-bold text-navy dark:text-white" />
        <motion.p
          className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-navy/90 dark:text-slate text-shadow-subtle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
        >
          {subtitle}
        </motion.p>
      </div>
      <ScrollDownIndicator />
    </section>
  );
};

export default PageHeader;