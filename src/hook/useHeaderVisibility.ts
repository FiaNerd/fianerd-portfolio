import { useEffect, useState } from 'react';

export const useHeaderVisibility = () => {
  const [isHeaderHidden, setIsHeaderHidden] = useState(false); // Tracks if the header is hidden
  const [lastScrollY, setLastScrollY] = useState(0); // Tracks the last scroll position

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide the header when scrolling down
      if (currentScrollY > lastScrollY + 5) {
        if (!isHeaderHidden) {
          setIsHeaderHidden(true);
        }
      }
      // Show the header when scrolling up
      else if (currentScrollY < lastScrollY - 5) {
        if (isHeaderHidden) {
          setIsHeaderHidden(false);
        }
      }

      setLastScrollY(currentScrollY); // Update the last scroll position
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY, isHeaderHidden]);

  return isHeaderHidden;
};