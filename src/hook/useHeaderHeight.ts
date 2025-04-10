import { useEffect, useState } from 'react';

const useHeaderHeight = () => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0); // Track last scroll position
  const [isHeaderVisible, setIsHeaderVisible] = useState(true); // Header visibility state

  useEffect(() => {
    const header = document.getElementById('header');

    const updateHeaderHeight = () => {
      if (header) {
        const newHeight = header.getBoundingClientRect().height;
        setHeaderHeight((prevHeight) => {
          if (prevHeight !== newHeight) return newHeight;
          return prevHeight;
        });
      }
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if scrolling up or down
      if (currentScrollY > lastScrollY) {
        // Scrolling down, show header
        setIsHeaderVisible(true);
      } else if (
        currentScrollY < lastScrollY &&
        currentScrollY > headerHeight
      ) {
        // Scrolling up and passed headerHeight, hide header
        setIsHeaderVisible(false);
      }

      // Update last scroll position
      setLastScrollY(currentScrollY);
    };

    // Update header height initially
    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);
    window.addEventListener('scroll', handleScroll); // Listen to scroll events

    return () => {
      window.removeEventListener('resize', updateHeaderHeight);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY, headerHeight]);

  const hideHeaderOnNavigation = () => {
    // Hide header immediately when navigating
    setIsHeaderVisible(false);
  };

  return { headerHeight, isHeaderVisible, hideHeaderOnNavigation };
};

export default useHeaderHeight;
