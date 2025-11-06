import React from 'react';
import { motion } from 'framer-motion';
import { SECTORS } from '../constants';
import usePageMeta from '../hooks/usePageMeta';
import AnimatedSection from '../components/AnimatedSection';
import PageHeader from '../components/PageHeader';


const Sectors: React.FC = () => {
  usePageMeta(
    'Industry Sectors | RexJagers Executive Search',
    'Discover RexJagers\' deep domain expertise in key sectors like IT, Banking, Healthcare, Manufacturing, Engineering, and Consumer & Retail executive recruitment.'
  );

  return (
    <div className="dark:text-slate">
      <PageHeader
        title="Industry Sectors"
        subtitle="Specialized expertise across the markets that matter."
        imageUrl="https://images.pexels.com/photos/327540/pexels-photo-327540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        imageAlt="Abstract glowing lines connecting points, symbolizing various industry sectors"
      />

      {/* Sectors List */}
      <AnimatedSection className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {SECTORS.map((sector, index) => (
              <motion.div
                key={sector.name}
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
              >
                <div className="md:w-1/2">
                  <img src={sector.image} alt={`Leadership recruitment for the ${sector.name} sector`} loading="lazy" className="rounded-lg shadow-2xl w-full h-auto object-cover max-h-[400px]"/>
                </div>
                <div className="md:w-1/2">
                  <h2 className="text-3xl font-serif text-gold mb-3">{sector.name}</h2>
                  <p className="dark:text-slate leading-relaxed">
                    {sector.description} We possess a profound understanding of the talent landscape within this vertical. Our dedicated consultants maintain a vast network of senior executives and emerging leaders, enabling us to provide unparalleled market insights and access to the most sought-after professionals in the field.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Sectors;