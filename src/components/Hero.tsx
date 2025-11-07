import React from 'react';
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import ScrollDownIndicator from './ScrollDownIndicator.tsx';
import AnimatedText from './AnimatedText.tsx';

const Hero: React.FC = () => {
  const heroBgVariants: Variants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 2.5,
        ease: [0.42, 0, 0.58, 1]
      }
    }
  };

  const heroItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
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
      <div className="relative z-20">
        <AnimatedText 
          el="h1" 
          text="Architects of Leadership" 
          className="text-4xl md:text-6xl lg:text-7xl font-logo font-bold mb-4 tracking-wide text-white text-shadow-strong"
          type="letter"
          duration={2}
        />
        <motion.p variants={heroItemVariants} initial="hidden" animate="visible" transition={{delay: 2.2}} className="text-lg md:text-xl max-w-3xl mx-auto text-white/90 text-shadow-strong">
          A premier executive search firm dedicated to appointing visionary leaders who define tomorrow.
        </motion.p>
        <motion.div variants={heroItemVariants} initial="hidden" animate="visible" transition={{delay: 2.4}}>
          <Link to="/contact" className="mt-8 inline-block px-8 py-4 bg-gold/90 backdrop-blur-sm text-navy rounded-md text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:box-shadow-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-navy">
            Partner With Us
          </Link>
        </motion.div>
      </div>
      <ScrollDownIndicator variant="light" />
    </section>
  );
};

export default Hero;