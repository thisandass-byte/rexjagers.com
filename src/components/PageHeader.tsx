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
      {/* 
        Refined Overlays for Visibility:
        1. A uniform dark overlay (`bg-navy/40`) is applied to the image to ensure high contrast for any content on top.
        2. A gradient fades from the page's solid background color at the bottom to transparent, creating a seamless transition into the page content while keeping the top dark for the main header's visibility.
      */}
      <div className="absolute inset-0 bg-navy/40" aria-hidden="true"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent dark:from-navy"></div>
      
      <div 
        className="relative z-10"
      >
        {/* Text colors updated to be light, ensuring readability against the new dark background overlay. */}
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
      <ScrollDownIndicator />
    </section>
  );
};

export default PageHeader;