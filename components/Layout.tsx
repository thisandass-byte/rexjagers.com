import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import useScrollToTop from '../hooks/useScrollToTop';
import CustomCursor from './CustomCursor';
import { AnimatePresence } from 'framer-motion';
import BackToTopButton from './BackToTopButton';
import useSmoothScroll from '../hooks/useSmoothScroll';

const Layout: React.FC = () => {
  useScrollToTop();
  useSmoothScroll();

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only skip-link">
        Skip to main content
      </a>
      <CustomCursor />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main id="main-content" className="flex-grow">
          <AnimatePresence mode="wait">
             <Outlet />
          </AnimatePresence>
        </main>
        <Footer />
      </div>
      <BackToTopButton />
    </>
  );
};

export default Layout;