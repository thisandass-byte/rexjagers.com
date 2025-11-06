import { useEffect, useRef } from 'react';

const LERP_FACTOR = 0.1;
const SCROLL_THRESHOLD = 0.5;

const useSmoothScroll = () => {
  const scrollData = useRef({
    current: 0,
    target: 0,
    isScrolling: false,
  });

  const touchData = useRef({
    isDragging: false,
    startY: 0,
    startScroll: 0,
  });
  
  const frameId = useRef<number | null>(null);

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motionQuery.matches) {
      return;
    }

    const lerp = (start: number, end: number, t: number) => {
      return start * (1 - t) + end * t;
    };

    const getMaxScroll = () => {
      return Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
      ) - window.innerHeight;
    };

    const stopScrolling = () => {
      scrollData.current.isScrolling = false;
      if (frameId.current) {
        cancelAnimationFrame(frameId.current);
        frameId.current = null;
      }
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
      if (!scrollData.current.isScrolling) {
        scrollData.current.isScrolling = true;
        frameId.current = requestAnimationFrame(updateScroll);
      }
    };

    const clampTarget = () => {
      const maxScroll = getMaxScroll();
      scrollData.current.target = Math.max(0, scrollData.current.target);
      scrollData.current.target = Math.min(scrollData.current.target, maxScroll);
    };

    const handleWheel = (e: WheelEvent) => {
      if (e.ctrlKey) return;
      e.preventDefault();
      scrollData.current.target += e.deltaY;
      clampTarget();
      startScrolling();
    };

    const handleScrollTo = (e: CustomEvent) => {
        const { top, immediate } = e.detail;
        if (immediate) {
            window.scrollTo(0, top);
            scrollData.current.target = top;
            scrollData.current.current = top;
            stopScrolling();
        } else {
            scrollData.current.target = top;
            clampTarget();
            startScrolling();
        }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
        let shouldPreventDefault = true;
        const maxScroll = getMaxScroll();

        switch (e.key) {
            case 'ArrowUp':
                scrollData.current.target -= 120;
                break;
            case 'ArrowDown':
                scrollData.current.target += 120;
                break;
            case 'PageUp':
                scrollData.current.target -= window.innerHeight * 0.9;
                break;
            case 'PageDown':
            case ' ': // Spacebar
                scrollData.current.target += window.innerHeight * 0.9;
                break;
            case 'Home':
                scrollData.current.target = 0;
                break;
            case 'End':
                scrollData.current.target = maxScroll;
                break;
            default:
                shouldPreventDefault = false;
                break;
        }
        
        if (shouldPreventDefault) {
            e.preventDefault();
            clampTarget();
            startScrolling();
        }
    };

    const handleTouchStart = (e: TouchEvent) => {
        touchData.current.isDragging = true;
        touchData.current.startY = e.touches[0].clientY;
        touchData.current.startScroll = scrollData.current.target;
        stopScrolling(); 
    };
    
    const handleTouchMove = (e: TouchEvent) => {
        if (!touchData.current.isDragging) return;
        e.preventDefault();
        
        const deltaY = e.touches[0].clientY - touchData.current.startY;
        const newTarget = touchData.current.startScroll - deltaY;
        
        scrollData.current.target = newTarget;
        scrollData.current.current = newTarget;
        
        clampTarget();
        window.scrollTo(0, scrollData.current.target);
    };
    
    const handleTouchEnd = () => {
        touchData.current.isDragging = false;
    };
    
    scrollData.current.current = window.scrollY;
    scrollData.current.target = window.scrollY;

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('scrollTo', handleScrollTo as EventListener);
    window.addEventListener('keydown', handleKeyDown, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scrollTo', handleScrollTo as EventListener);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      stopScrolling();
    };
  }, []);
};

export default useSmoothScroll;
