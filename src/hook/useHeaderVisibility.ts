import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const useHeaderVisibility = () => {
  const [isHeaderHidden, setIsHeaderHidden] = useState(false); // Tracks if the header is hidden
  const [lastScrollY, setLastScrollY] = useState(0); // Tracks the last scroll position
  const location = useLocation(); // Detects route changes
  const [isNavigating, setIsNavigating] = useState(false); // Tracks if navigation is happening

  useEffect(() => {
    // Reset header visibility when navigating to a new page
    console.log('Route changed, resetting header visibility');
    setIsHeaderHidden(false); // Ensure the header is visible
    setLastScrollY(window.scrollY); // Reset the last scroll position to the current scroll position
    setIsNavigating(true); // Mark as navigating

    // Clear the navigation flag after a short delay
    const timeout = setTimeout(() => setIsNavigating(false), 300);

    return () => clearTimeout(timeout);
  }, [location]); // Trigger on route changes

  useEffect(() => {
    const handleScroll = () => {
      if (isNavigating) return; // Ignore scroll events triggered by navigation

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
  }, [lastScrollY, isHeaderHidden, isNavigating]);

  return isHeaderHidden;
};
