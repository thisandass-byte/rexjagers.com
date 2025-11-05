import React from 'react';
import { motion } from 'framer-motion';
import { SECTORS } from '../lib/schema.ts';
import SectionTitle from './SectionTitle.tsx';
import AnimatedSection from './AnimatedSection.tsx';

const SectorGrid: React.FC = () => {
    const listVariants = {
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      };
    
      const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      };

    return (
        <AnimatedSection className="py-20 md:py-28 bg-white dark:bg-navy">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <SectionTitle>Industry Expertise</SectionTitle>
            <p className="mt-4 max-w-2xl mx-auto text-navy/75 dark:text-slate">Deep domain knowledge across primary verticals to ensure we understand your unique challenges.</p>
          </div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {SECTORS.slice(0, 6).map((sector) => (
              <motion.div key={sector.name} variants={itemVariants} className="group relative overflow-hidden rounded-lg shadow-lg">
                <img src={sector.image} alt={`Executive search for the ${sector.name} industry`} loading="lazy" className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"/>
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-all duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{sector.name}</h3>
                  <p className="text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-0 group-hover:h-auto">{sector.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>
    );
};

export default SectorGrid;
