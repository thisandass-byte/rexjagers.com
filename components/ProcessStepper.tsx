import React from 'react';
// FIX: Imported Variants type from framer-motion
import { motion, Variants } from 'framer-motion';
import { PROCESS_STEPS } from '../constants';
import SectionTitle from './SectionTitle';

const ProcessStepper: React.FC = () => {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  // FIX: Added Variants type to fix type inference issue with 'easeOut'.
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <SectionTitle>Our Proven Process</SectionTitle>
        <p className="max-w-3xl mx-auto dark:text-slate mt-4">
          A meticulously crafted journey to find not just a candidate, but the right leader for your future.
        </p>
      </div>

      {/* Desktop & Tablet Layout */}
      <div className="hidden md:grid grid-cols-[1fr_auto_1fr] items-start gap-x-12 max-w-5xl mx-auto">
        {/* Left Column: Descriptions */}
        <motion.div
          className="space-y-16 text-left"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {PROCESS_STEPS.map((step, index) => (
            <motion.div key={index} variants={itemVariants} className="min-h-[100px]">
              <h3 className="text-2xl font-bold text-gold mb-2">{step.title}</h3>
              <p className="dark:text-slate">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Center Column: Timeline */}
        <div className="relative h-full">
          <div className="w-0.5 h-full bg-slate/50 mx-auto" aria-hidden="true"></div>
        </div>
        
        {/* Right Column: Numbers */}
        <motion.div
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {PROCESS_STEPS.map((_, index) => (
            <motion.div key={index} variants={itemVariants} className="min-h-[100px] flex items-center">
               <div className="w-16 h-16 bg-white dark:bg-navy border-2 border-gold rounded-full flex items-center justify-center">
                 <span className="text-2xl font-bold text-navy dark:text-white">{`0${index + 1}`}</span>
               </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden relative">
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate/50" aria-hidden="true"></div>
        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {PROCESS_STEPS.map((step, index) => (
            <motion.div key={index} variants={itemVariants} className="pl-24 relative">
              <div className="absolute left-0 top-0 z-10 w-16 h-16 bg-white dark:bg-navy border-2 border-gold rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-navy dark:text-white">{`0${index + 1}`}</span>
              </div>
              <div className="pt-2 text-left">
                <h3 className="text-2xl font-bold text-gold mb-2">{step.title}</h3>
                <p className="dark:text-slate">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ProcessStepper;