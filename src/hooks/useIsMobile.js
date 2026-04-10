import { useState, useEffect } from 'react';

const defaultOptions = {
  maxWidth: 768,
  maxHeight: 1024,
  orientation: null
};

export const useIsMobile = (options = {}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const { maxWidth, maxHeight, orientation } = { ...defaultOptions, ...options };

    const checkMobile = () => {
      const widthMatch = window.innerWidth <= maxWidth;
      const heightMatch = window.innerHeight <= maxHeight;
      let orientationMatch = true;

      if (orientation) {
        const currentOrientation =
          window.innerWidth > window.innerHeight ? 'landscape' : 'portrait';
        orientationMatch = currentOrientation === orientation;
      }

      setIsMobile(widthMatch && heightMatch && orientationMatch);
    };

    checkMobile();

    const debounce = (fn, delay) => {
      let timeoutId;
      return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn(...args), delay);
      };
    };

    const debouncedCheck = debounce(checkMobile, 100);

    // Set up event listeners
    window.addEventListener('resize', debouncedCheck);

    // Cleanup
    return () => {
      window.removeEventListener('resize', debouncedCheck);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options.maxWidth, options.maxHeight, options.orientation]);

  return isMobile;
};