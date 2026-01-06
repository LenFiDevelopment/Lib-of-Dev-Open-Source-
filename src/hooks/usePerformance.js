import { useCallback, useRef } from 'react';

/**
 * Custom Hook: useDebounce
 * Debounces a function call - useful for search inputs
 * 
 * @param {Function} callback - The function to debounce
 * @param {number} delay - Delay in milliseconds
 * @returns {Function} Debounced function
 */
export const useDebounce = (callback, delay = 300) => {
  const timeoutRef = useRef(null);

  const debouncedCallback = useCallback(
    (...args) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay]
  );

  return debouncedCallback;
};

/**
 * Custom Hook: useThrottle
 * Throttles a function call - useful for scroll/resize events
 * 
 * @param {Function} callback - The function to throttle
 * @param {number} delay - Delay in milliseconds
 * @returns {Function} Throttled function
 */
export const useThrottle = (callback, delay = 300) => {
  const lastRan = useRef(Date.now());

  const throttledCallback = useCallback(
    (...args) => {
      const now = Date.now();

      if (now - lastRan.current >= delay) {
        callback(...args);
        lastRan.current = now;
      }
    },
    [callback, delay]
  );

  return throttledCallback;
};
