import React, { Suspense, useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingSpinner from './components/LoadingSpinner.tsx';
import Preloader from './components/Preloader.tsx';
import { ThemeProvider } from './contexts/ThemeContext.tsx';
import AppRoutes from './routes.tsx';

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
          <AppRoutes />
        </Suspense>
      )}
    </ThemeProvider>
  );
};

export default App;
