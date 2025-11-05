import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CAREER_OPENINGS } from '../lib/schema.ts';
import { ChevronRightIcon } from '../components/Icons.tsx';
import type { CareerOpening as CareerOpeningType } from '../lib/schema.ts';
import { usePageMeta } from '../lib/seo.tsx';
import PageHeader from '../components/PageHeader.tsx';
import AnimatedSection from '../components/AnimatedSection.tsx';
import SectionTitle from '../components/SectionTitle.tsx';

const JobOpening: React.FC<{ opening: CareerOpeningType }> = ({ opening }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-light-slate dark:bg-dark-bg-section p-6 border border-navy/15 dark:border-slate/30 rounded-lg shadow-sm">
            <button 
                className="flex justify-between items-center w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-md" 
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-controls={`opening-${opening.id}`}
            >
                <div>
                    <h3 className="text-xl font-bold">{opening.title}</h3>
                    <p className="text-gold">{opening.location}</p>
                </div>
                <ChevronRightIcon className={`w-6 h-6 text-navy dark:text-white transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} />
            </button>
            
            <div 
                id={`opening-${opening.id}`}
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}
            >
                <div className="mt-4 pt-4 border-t border-slate/50">
                    <p className="text-navy/75 dark:text-slate mb-4">{opening.description}</p>
                    <h4 className="font-semibold mb-2">Key Requirements:</h4>
                    <ul className="list-disc list-inside space-y-2 text-navy/75 dark:text-slate">
                        {opening.requirements.map((req, index) => (
                            <li key={index}>{req}</li>
                        ))}
                    </ul>
                    <Link to={`/contact?subject=Application for ${opening.title}`} className="mt-6 inline-block px-6 py-2 bg-gold text-navy rounded-md font-semibold hover:bg-amber-300 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-light-slate dark:focus-visible:ring-offset-dark-bg-section">
                        Apply Now
                    </Link>
                </div>
            </div>
        </div>
    );
};

const Careers: React.FC = () => {
  usePageMeta(
    'Career Opportunities | RexJagers Executive Search',
    'Join the RexJagers team. Explore current openings for consultants, research analysts, and associates dedicated to shaping the future of leadership.'
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
    <div className="text-navy/75 dark:text-slate">
      <PageHeader
        title="Career Opportunities"
        subtitle="Join a team of experts dedicated to shaping the future of leadership."
        imageUrl="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        imageAlt="Happy, diverse team of professionals collaborating in a modern dark office environment"
      />

      {/* Job Listings */}
      <AnimatedSection className="py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <SectionTitle>Current Openings</SectionTitle>
            <p className="mt-4 text-navy/75 dark:text-slate">
              We are always looking for passionate and talented individuals to join our firm. Explore our current opportunities below.
            </p>
          </div>

          {CAREER_OPENINGS.length > 0 ? (
            <motion.div 
              className="space-y-6"
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {CAREER_OPENINGS.map((opening) => (
                <motion.div key={opening.id} variants={itemVariants}>
                  <JobOpening opening={opening} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center bg-light-slate dark:bg-dark-bg-section p-8 border border-navy/15 dark:border-slate/30 rounded-lg">
              <h3 className="text-2xl text-navy dark:text-white">No Openings At The Moment</h3>
              <p className="text-navy/75 dark:text-slate mt-2">
                There are currently no open positions, but we are always interested in connecting with talented professionals.
                Feel free to <Link to="/contact" className="text-gold hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold rounded-md">submit your profile</Link> for future consideration.
              </p>
            </div>
          )}
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Careers;
