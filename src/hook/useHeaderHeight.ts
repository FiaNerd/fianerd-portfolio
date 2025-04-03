import { useLayoutEffect, useState } from 'react';

const useHeaderHeight = () => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useLayoutEffect(() => {
    const header = document.getElementById('header');

    const updateHeaderHeight = () => {
      if (header) {
        setHeaderHeight(header.getBoundingClientRect().height);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeaderVisible(entry.isIntersecting); // Update visibility state
      },
      { root: null, threshold: 0 } // Observe when the header enters/exits the viewport
    );

    if (header) {
      observer.observe(header);
    }

    updateHeaderHeight(); // Set initial height
    window.addEventListener('resize', updateHeaderHeight);

    return () => {
      if (header) observer.unobserve(header);
      window.removeEventListener('resize', updateHeaderHeight);
    };
  }, []);

  return { headerHeight, isHeaderVisible };
};

export default useHeaderHeight;