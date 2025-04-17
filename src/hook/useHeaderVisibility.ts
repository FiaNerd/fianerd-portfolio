import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const useHeaderVisibility = () => {
  const [isHeaderHidden, setIsHeaderHidden] = useState(false); // Tracks if the header is hidden
  const [lastScrollY, setLastScrollY] = useState(0); // Tracks the last scroll position
  const location = useLocation(); // Detects route changes

  useEffect(() => {
    // Reset header visibility when navigating to a new page or the same page
    console.log('Route changed or navigated to the same page, resetting header visibility');
    setIsHeaderHidden(false); // Ensure the header is visible
    setLastScrollY(window.scrollY); // Reset the last scroll position to the current scroll position
  }, [location.key]); // Use `location.key` to detect navigation, even to the same page

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const documentHeight = document.body.scrollHeight; // Total height of the document
      const viewportHeight = window.innerHeight; // Height of the viewport

      // Only apply scroll logic if scrolling is possible
      if (documentHeight > viewportHeight) {
        // Hide the header when scrolling down
        if (currentScrollY > lastScrollY + 5) {
          if (!isHeaderHidden) {
            setIsHeaderHidden(true);
            console.log('Hiding header (scrolling down)');
          }
        }
        // Show the header when scrolling up
        else if (currentScrollY < lastScrollY - 5) {
          if (isHeaderHidden) {
            setIsHeaderHidden(false);
            console.log('Showing header (scrolling up)');
          }
        }

        setLastScrollY(currentScrollY); // Update the last scroll position
      } else {
        // If no scrolling is possible, always show the header
        setIsHeaderHidden(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY, isHeaderHidden]);

  return isHeaderHidden;
};