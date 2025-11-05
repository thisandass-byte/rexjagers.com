import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SERVICES } from '../lib/schema.ts';
import { ChevronRightIcon } from '../components/Icons.tsx';
import { usePageMeta } from '../lib/seo.tsx';
import AnimatedSection from '../components/AnimatedSection.tsx';
import SectionTitle from '../components/SectionTitle.tsx';
import Hero from '../components/Hero.tsx';
import SectorGrid from '../components/SectorGrid.tsx';
import TestimonialCarousel from '../components/TestimonialCarousel.tsx';
import LeadForm from '../components/LeadForm.tsx';

const Home: React.FC = () => {
  usePageMeta(
    'RexJagers | Premier Executive Search & Leadership Recruitment',
    'RexJagers is a top-tier executive search firm in India, specializing in CXO and leadership hiring for IT, Banking, Healthcare, Manufacturing, and Engineering sectors.'
  );

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
    <div className="bg-white dark:bg-navy">
      <Hero />

      {/* About Us Snippet */}
      <AnimatedSection className="py-20 md:py-28 bg-white dark:bg-navy">
        <div className="container mx-auto px-6 text-center">
            <SectionTitle>Defining the Future of Executive Talent</SectionTitle>
            <p className="max-w-3xl mx-auto text-navy/75 dark:text-slate mb-8 mt-4">
                At RexJagers, we believe that the right leadership is the most critical catalyst for an organization's success. With a bespoke, research-driven approach, we connect our clients with the top 1% of talent, ensuring a perfect alignment of vision, culture, and expertise.
            </p>
            <Link to="/about" className="text-gold font-semibold text-lg hover:underline group flex items-center justify-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">
                Discover Our Story <motion.span className="inline-block" whileHover={{ x: 5 }}><ChevronRightIcon className="w-5 h-5 ml-1" /></motion.span>
            </Link>
        </div>
      </AnimatedSection>

      {/* Services Section */}
      <AnimatedSection className="py-20 md:py-28 bg-light-slate dark:bg-dark-bg-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <SectionTitle>Our Signature Services</SectionTitle>
            <p className="mt-4 max-w-2xl mx-auto text-navy/75 dark:text-slate">A comprehensive suite of solutions designed to build and strengthen your leadership foundation.</p>
          </div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {SERVICES.map((service) => (
              <motion.div key={service.title} variants={itemVariants} className="relative bg-white dark:bg-navy p-8 rounded-lg border border-navy/15 dark:border-slate/30 group transition-all duration-300 transform hover:-translate-y-2 shadow-sm hover:box-shadow-gold">
                <div className="absolute -inset-px bg-gradient-to-r from-gold/30 via-slate/30 to-gold/30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg" aria-hidden="true"></div>
                <div className="relative">
                  <service.icon className="h-10 w-10 text-gold mb-4" />
                  <h3 className="text-xl font-bold text-navy dark:text-white mb-2">{service.title}</h3>
                  <p className="text-navy/75 dark:text-slate">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>
      
      <SectorGrid />
      
      <LeadForm />
      
      <TestimonialCarousel />
    </div>
  );
};

export default Home;
