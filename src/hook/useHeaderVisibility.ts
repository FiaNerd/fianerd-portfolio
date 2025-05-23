import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const useHeaderVisibility = () => {
  const [isHeaderHidden, setIsHeaderHidden] = useState(false); // Tracks if the header is hidden
  const [lastScrollY, setLastScrollY] = useState(0); // Tracks the last scroll position
  const location = useLocation(); // Detects route changes

  useEffect(() => {
    setIsHeaderHidden(false); // Ensure the header is visible
    setLastScrollY(window.scrollY); // Reset the last scroll position to the current scroll position
  }, [location]); // Trigger on route changes

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Prevent flickering by adding a threshold
      const scrollThreshold = 10;

      // Hide the header when scrolling down
      if (currentScrollY > lastScrollY + scrollThreshold) {
        if (!isHeaderHidden) {
          setIsHeaderHidden(true);
        }
      }
      // Show the header when scrolling up
      else if (currentScrollY < lastScrollY - scrollThreshold) {
        if (isHeaderHidden) {
          setIsHeaderHidden(false);
        }
      }

      setLastScrollY(currentScrollY); // Update the last scroll position
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY, isHeaderHidden]);

  return isHeaderHidden;
};
