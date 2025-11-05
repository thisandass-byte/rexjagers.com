import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const HEADER_OFFSET = 90; // Approximate height of the sticky header

const useScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // On path changes (without a hash), scroll to the top instantly.
    if (!hash) {
      window.dispatchEvent(
        new CustomEvent('scrollTo', {
          detail: { top: 0, immediate: true },
        })
      );
      return;
    }

    // If there is a hash, wait for render and then smooth scroll to the element.
    const timerId = setTimeout(() => {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const targetTop = elementPosition + window.scrollY - HEADER_OFFSET;
        
        window.dispatchEvent(
          new CustomEvent('scrollTo', {
            detail: { top: targetTop, immediate: false },
          })
        );
      }
    }, 150); // Increased delay for lazy components

    return () => clearTimeout(timerId);
  }, [pathname, hash]);

  return null;
};

export default useScrollToTop;