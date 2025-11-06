import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from './analytics.ts';

interface SEOProps {
  title: string;
  description: string;
  imageUrl?: string;
  imageAlt?: string;
  type?: string;
}

const SITE_URL = 'https://rexjagers.com';
const SITE_NAME = 'RexJagers Executive Search';
const TWITTER_HANDLE = '@RexJagers'; // Placeholder
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.jpg`;

const setMetaTag = (selector: string, value: string, content: string) => {
    let element = document.querySelector(`meta[${selector}="${value}"]`) as HTMLMetaElement;
    if (!element) {
        element = document.createElement('meta');
        element.setAttribute(selector, value);
        document.head.appendChild(element);
    }
    element.setAttribute('content', content);
};

export const useSEO = ({ title, description, imageUrl, imageAlt, type = 'website' }: SEOProps) => {
  const location = useLocation();
  const canonicalUrl = `${SITE_URL}${location.pathname}`;

  useEffect(() => {
    const fullTitle = `${title}`;
    const finalImageUrl = imageUrl || DEFAULT_OG_IMAGE;
    const finalImageAlt = imageAlt || 'RexJagers Executive Search';

    document.title = fullTitle;

    setMetaTag('name', 'description', description);
    
    // Canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);
    
    // Open Graph
    setMetaTag('property', 'og:title', fullTitle);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:site_name', SITE_NAME);
    setMetaTag('property', 'og:type', type);
    setMetaTag('property', 'og:image', finalImageUrl);
    setMetaTag('property', 'og:image:alt', finalImageAlt);
    
    // Twitter Card
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', fullTitle);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', finalImageUrl);
    setMetaTag('name', 'twitter:image:alt', finalImageAlt);
    if(TWITTER_HANDLE) setMetaTag('name', 'twitter:site', TWITTER_HANDLE);

    // Track page view
    trackPageView(location.pathname + location.search);

  }, [title, description, imageUrl, imageAlt, type, location, canonicalUrl]);
};