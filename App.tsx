

import React, { Suspense, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import LoadingSpinner from './components/LoadingSpinner';
import Preloader from './components/Preloader';
import { ThemeProvider } from './contexts/ThemeContext';

const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Services = React.lazy(() => import('./pages/Services'));
const Sectors = React.lazy(() => import('./pages/Sectors'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Careers = React.lazy(() => import('./pages/Careers'));
const Candidates = React.lazy(() => import('./pages/Candidates'));
const Insights = React.lazy(() => import('./pages/Insights'));
const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = React.lazy(() => import('./pages/TermsOfService'));


const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // This timeout simulates asset loading and allows the animation to play.
    const timer = setTimeout(() => setIsLoading(false), 1500); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <AnimatePresence>
        {isLoading && <Preloader />}
      </AnimatePresence>
      
      {/* Render the main app content only after the preloader is gone to ensure smooth animation sequence */}
      {!isLoading && (
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="services" element={<Services />} />
              <Route path="sectors" element={<Sectors />} />
              <Route path="candidates" element={<Candidates />} />
              <Route path="insights" element={<Insights />} />
              <Route path="careers" element={<Careers />} />
              <Route path="contact" element={<Contact />} />
              <Route path="privacy-policy" element={<PrivacyPolicy />} />
              <Route path="terms-of-service" element={<TermsOfService />} />
            </Route>
          </Routes>
        </Suspense>
      )}
    </ThemeProvider>
  );
};

export default App;