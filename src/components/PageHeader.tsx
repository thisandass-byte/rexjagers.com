import React from 'react';
import { motion } from 'framer-motion';
import ScrollDownIndicator from './ScrollDownIndicator.tsx';
import AnimatedText from './AnimatedText.tsx';

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
      {/* Reduced dark tint for better image visibility */}
      <div className="absolute inset-0 bg-black/25" aria-hidden="true"></div>
      {/* Softened gradient overlay to blend into page content */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent dark:from-navy/90"></div>
      
      <div 
        className="relative z-10"
      >
        <AnimatedText el="h1" text={title} className="text-4xl md:text-6xl font-serif font-bold text-white text-shadow-subtle" />
        <motion.p
          className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-slate-light text-shadow-subtle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
        >
          {subtitle}
        </motion.p>
      </div>
      <ScrollDownIndicator variant="light" />
    </section>
  );
};

export default PageHeader;
