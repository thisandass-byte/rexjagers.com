import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS } from '../lib/schema.ts';
import { ChevronRightIcon, ChevronLeftIcon } from './Icons.tsx';
import SectionTitle from './SectionTitle.tsx';
import AnimatedSection from './AnimatedSection.tsx';

const TestimonialCarousel: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const testimonialVariants = {
    enter: { opacity: 0, x: 50 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  return (
    <AnimatedSection className="py-20 md:py-28 bg-white dark:bg-navy">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <SectionTitle>What Our Partners Say</SectionTitle>
        </div>
        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={currentTestimonial}
              variants={testimonialVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="bg-light-slate dark:bg-dark-bg-section p-8 rounded-lg border border-navy/15 dark:border-slate/30 shadow-sm"
              aria-live="polite"
              role="region"
            >
              <p className="italic text-lg text-gray-800 dark:text-slate">"{TESTIMONIALS[currentTestimonial].quote}"</p>
              <div className="mt-6">
                <p className="font-bold text-navy dark:text-white text-xl">{TESTIMONIALS[currentTestimonial].name}</p>
                <p className="text-sm text-gold">{TESTIMONIALS[currentTestimonial].company}</p>
              </div>
            </motion.div>
          </AnimatePresence>
          <button 
            onClick={prevTestimonial} 
            className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-16 p-2 rounded-full bg-navy/10 dark:bg-slate/20 hover:bg-navy/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            aria-label="Previous testimonial"
          >
            <ChevronLeftIcon className="w-6 h-6 text-navy dark:text-white" />
          </button>
          <button 
            onClick={nextTestimonial}
            className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-16 p-2 rounded-full bg-navy/10 dark:bg-slate/20 hover:bg-navy/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            aria-label="Next testimonial"
          >
            <ChevronRightIcon className="w-6 h-6 text-navy dark:text-white" />
          </button>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default TestimonialCarousel;