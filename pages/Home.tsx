import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// FIX: Imported Variants type from framer-motion to fix type error.
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { SERVICES, SECTORS, TESTIMONIALS } from '../constants';
import { ChevronRightIcon, ChevronLeftIcon } from '../components/Icons';
import usePageMeta from '../hooks/usePageMeta';
import AnimatedSection from '../components/AnimatedSection';
import SectionTitle from '../components/SectionTitle';
import ScrollDownIndicator from '../components/ScrollDownIndicator';
import GatedContent from '../components/GatedContent';
import AnimatedText from '../components/AnimatedText';

const Home: React.FC = () => {
  usePageMeta(
    'RexJagers | Premier Executive Search & Leadership Recruitment',
    'RexJagers is a top-tier executive search firm in India, specializing in CXO and leadership hiring for IT, Banking, Healthcare, Manufacturing, and Engineering sectors.'
  );

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };
  
  const heroBgVariants: Variants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 2.5,
        ease: [0.42, 0, 0.58, 1] // easeInOut
      }
    }
  };

  const heroItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

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
  
  const testimonialVariants = {
    enter: { opacity: 0, x: 50 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  return (
    <div className="bg-white dark:bg-navy">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent z-10 dark:from-navy dark:via-navy/50"></div>
        <motion.video
          variants={heroBgVariants}
          initial="hidden"
          animate="visible"
          poster="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2"
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="https://videos.pexels.com/video-files/3209828/3209828-hd_1920_1080_25fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </motion.video>
        <div
          className="relative z-20"
        >
          <AnimatedText 
            el="h1" 
            text="Architects of Leadership" 
            className="text-4xl md:text-6xl lg:text-7xl font-logo font-bold mb-4 tracking-wide text-white text-shadow-subtle"
            type="letter"
            duration={2}
          />
          <motion.p variants={heroItemVariants} initial="hidden" animate="visible" transition={{delay: 2.2}} className="text-lg md:text-xl max-w-3xl mx-auto text-white/90 text-shadow-subtle">
            A premier executive search firm dedicated to appointing visionary leaders who define tomorrow.
          </motion.p>
          <motion.div variants={heroItemVariants} initial="hidden" animate="visible" transition={{delay: 2.4}}>
            <Link to="/contact" className="mt-8 inline-block px-8 py-4 bg-gold/90 backdrop-blur-sm text-navy rounded-md text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:box-shadow-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-navy">
              Partner With Us
            </Link>
          </motion.div>
        </div>
        <ScrollDownIndicator />
      </section>

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

      {/* Sectors Section */}
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

      {/* Gated Content Section */}
      <AnimatedSection className="py-20 md:py-28 bg-light-slate dark:bg-dark-bg-section">
          <div className="container mx-auto px-6">
              <GatedContent />
          </div>
      </AnimatedSection>

      {/* Testimonials Section */}
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
              >
                <p className="text-navy/75 dark:text-slate italic text-lg">"{TESTIMONIALS[currentTestimonial].quote}"</p>
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
    </div>
  );
};

export default Home;