import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from './analytics.ts';

export const usePageMeta = (title: string, description: string) => {
  const location = useLocation();

  useEffect(() => {
    document.title = title;

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);
    
    // Track page view
    trackPageView(location.pathname + location.search);

  }, [title, description, location]);
};
