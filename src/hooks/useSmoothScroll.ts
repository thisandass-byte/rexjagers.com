import { useEffect, useRef } from 'react';

const LERP_FACTOR = 0.1;
const SCROLL_THRESHOLD = 0.5;

const useSmoothScroll = () => {
  const scrollData = useRef({
    current: 0,
    target: 0,
    isScrolling: false,
  });
  const frameId = useRef<number | null>(null);

  useEffect(() => {
    // Check if the user prefers reduced motion
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motionQuery.matches) {
      return;
    }

    const handleWheel = (e: WheelEvent) => {
      // Allow default behavior for trackpads' horizontal scroll, etc.
      if (e.ctrlKey) return;
      
      e.preventDefault();
      scrollData.current.target += e.deltaY;
      scrollData.current.target = Math.max(0, scrollData.current.target);
      scrollData.current.target = Math.min(scrollData.current.target, document.body.scrollHeight - window.innerHeight);
      
      if (!scrollData.current.isScrolling) {
        startScrolling();
      }
    };

    const handleScrollTo = (e: CustomEvent) => {
        const { top, immediate } = e.detail;
        if (immediate) {
            window.scrollTo(0, top);
            scrollData.current.target = top;
            scrollData.current.current = top;
        } else {
            scrollData.current.target = top;
            if (!scrollData.current.isScrolling) {
                startScrolling();
            }
        }
    };
    
    const lerp = (start: number, end: number, t: number) => {
      return start * (1 - t) + end * t;
    };

    const updateScroll = () => {
      scrollData.current.current = lerp(scrollData.current.current, scrollData.current.target, LERP_FACTOR);
      
      if (Math.abs(scrollData.current.current - scrollData.current.target) < SCROLL_THRESHOLD) {
        scrollData.current.current = scrollData.current.target;
        stopScrolling();
      }

      window.scrollTo(0, scrollData.current.current);
      
      if (scrollData.current.isScrolling) {
        frameId.current = requestAnimationFrame(updateScroll);
      }
    };

    const startScrolling = () => {
      scrollData.current.isScrolling = true;
      frameId.current = requestAnimationFrame(updateScroll);
    };

    const stopScrolling = () => {
      scrollData.current.isScrolling = false;
      if (frameId.current) {
        cancelAnimationFrame(frameId.current);
        frameId.current = null;
      }
    };
    
    // Set initial position
    scrollData.current.current = window.scrollY;
    scrollData.current.target = window.scrollY;

    // Use passive: false to be able to preventDefault
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('scrollTo', handleScrollTo as EventListener);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scrollTo', handleScrollTo as EventListener);
      stopScrolling();
    };
  }, []);
};

export default useSmoothScroll;
