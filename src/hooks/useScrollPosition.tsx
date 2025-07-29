import { useEffect, useRef } from 'react';

export const useScrollPosition = () => {
  const scrollPositions = useRef<{ [key: string]: number }>({});

  const saveScrollPosition = (key: string) => {
    scrollPositions.current[key] = window.scrollY;
  };

  const restoreScrollPosition = (key: string) => {
    const position = scrollPositions.current[key];
    if (position !== undefined) {
      setTimeout(() => {
        window.scrollTo({ top: position, behavior: 'instant' });
      }, 0);
    }
  };

  return { saveScrollPosition, restoreScrollPosition };
};