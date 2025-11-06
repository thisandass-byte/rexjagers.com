import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../lib/schema.ts';
import { motion, AnimatePresence, LayoutGroup, Variants } from 'framer-motion';
import Logo from './Logo.tsx';
import ThemeToggle from './ThemeToggle.tsx';

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="2.5"
    stroke="currentColor"
    strokeLinecap="round"
    {...props}
  />
);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call on mount to set initial state correctly
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
        document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  const isTransparent = !isScrolled;
  const onHomepageTop = location.pathname === '/' && isTransparent;

  const linkColorClasses = onHomepageTop
    ? 'text-white text-glow-white'
    : isTransparent
    ? 'text-white text-shadow-subtle' // Default for transparent (other pages)
    : 'text-navy dark:text-white'; // For scrolled state
  
  // Animation Variants
  const navContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.4,
      },
    },
  };

  const navItemVariants: Variants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 12,
      },
    },
  };

  const mobileMenuVariants: Variants = {
    hidden: { 
      x: '-100%',
      opacity: 0,
      transition: { type: 'spring', stiffness: 400, damping: 40 }
    },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 400, damping: 40 }
    },
  };
  
  const headerPaddingVariants = {
    initial: { paddingTop: '1rem', paddingBottom: '1rem' },
    scrolled: { paddingTop: '0.5rem', paddingBottom: '0.5rem' }
  }

  return (
    <motion.header 
      className="sticky top-0 z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* Background container for smooth cross-fade */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Solid/blurred background */}
        <motion.div
          className="h-full bg-white/95 backdrop-blur-xl shadow-lg dark:bg-navy/95 border-b border-slate/20 dark:border-slate/80"
          animate={{ opacity: isScrolled ? 1 : 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        />
        {/* Transparent gradient background */}
        <motion.div
          className="h-full bg-gradient-to-b from-black/70 to-transparent backdrop-blur-sm"
          animate={{ opacity: isScrolled ? 0 : 1 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        />
      </div>

      <motion.div 
        className="relative container mx-auto px-4 sm:px-6 flex justify-between items-center"
        variants={headerPaddingVariants}
        animate={isScrolled ? "scrolled" : "initial"}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <div>
          <Link to="/" className="inline-block rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-navy" aria-label="RexJagers Home">
            <Logo variant={isTransparent ? 'inverse' : 'default'} specialHeaderStyle={onHomepageTop} />
          </Link>
        </div>
        
        {/* Desktop Nav */}
        <motion.nav 
          className="hidden lg:flex items-center space-x-6 xl:space-x-8"
          variants={navContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <LayoutGroup>
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <motion.div key={link.name} variants={navItemVariants} className="relative">
                    <NavLink
                      to={link.path}
                      className={`${linkColorClasses} transition-colors duration-300 font-medium rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold hover:text-gold`}
                    >
                      {link.name}
                      {isActive && (
                        <motion.div
                          layoutId="active-nav-underline"
                          className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gold"
                          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        />
                      )}
                    </NavLink>
                </motion.div>
              )
            })}
          </LayoutGroup>
          <motion.div variants={navItemVariants}>
            <Link to="/contact" className="px-4 py-2 text-sm xl:px-5 xl:text-base bg-gold text-navy rounded-md transition-all duration-300 font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-navy transform hover:scale-105 hover:bg-amber-300 hover:box-shadow-gold">
              Contact Us
            </Link>
          </motion.div>
          <motion.div variants={navItemVariants}>
            <ThemeToggle />
          </motion.div>
        </motion.nav>

        {/* Mobile Nav Toggle */}
        <div className="lg:hidden flex items-center">
          <motion.button 
            onClick={() => setIsOpen(!isOpen)} 
            className={`p-3 focus:outline-none rounded-full focus-visible:ring-2 focus-visible:ring-gold z-50 relative transition-colors duration-300 ${isTransparent ? 'text-white hover:bg-white/10' : 'text-navy dark:text-white hover:bg-navy/10 dark:hover:bg-slate/20'}`}
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="sr-only">Toggle menu</span>
            <motion.svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="w-6 h-6"
              animate={isOpen ? "open" : "closed"}
              initial={false}
            >
              <Path
                variants={{
                  closed: { d: "M 2 4.5 L 22 4.5" },
                  open: { d: "M 4 19.5 L 20 2.5" },
                }}
              />
              <Path
                d="M 2 12 L 22 12"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                transition={{ duration: 0.1 }}
              />
              <Path
                variants={{
                  closed: { d: "M 2 19.5 L 22 19.5" },
                  open: { d: "M 4 2.5 L 20 19.5" },
                }}
              />
            </motion.svg>
          </motion.button>
        </div>
      </motion.div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            id="mobile-menu"
            className="lg:hidden fixed top-0 left-0 w-full h-screen bg-white dark:bg-navy"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.nav 
              className="flex flex-col items-center justify-center h-full space-y-8"
              variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: 0.08,
                        delayChildren: 0.2,
                    },
                },
              }}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
             <LayoutGroup id="mobile-nav">
              {NAV_LINKS.map((link) => {
                 const isActive = location.pathname === link.path;
                 return (
                  <motion.div key={link.name} variants={navItemVariants} className="relative w-4/5 max-w-xs">
                    {isActive && (
                      <motion.div
                        layoutId="active-mobile-nav-pill"
                        className="absolute inset-0 bg-gold rounded-full"
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      />
                    )}
                    <NavLink
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`relative z-10 block w-full rounded-full py-3 text-center text-xl sm:text-2xl font-medium transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                          isActive ? 'text-navy' : 'text-navy dark:text-white hover:text-gold'
                      }`}
                    >
                      {link.name}
                    </NavLink>
                  </motion.div>
                 )
              })}
              </LayoutGroup>
              <motion.div variants={navItemVariants} className="mt-4">
                <Link to="/contact" onClick={() => setIsOpen(false)} className="px-6 py-3 border border-gold text-gold text-lg sm:text-xl rounded-md hover:bg-gold hover:text-navy transition-all duration-300 font-semibold">
                  Contact Us
                </Link>
              </motion.div>
              <motion.div variants={navItemVariants} className="pt-8">
                 <ThemeToggle />
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;