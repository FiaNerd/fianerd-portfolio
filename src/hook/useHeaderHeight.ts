import { useEffect, useState } from 'react';

const useHeaderHeight = () => {
  const [headerHeight, setHeaderHeight] = useState(112); // Default height (e.g., 64px)

  useEffect(() => {
    const header = document.getElementById('header');

    const updateHeaderHeight = () => {
      if (header) {
        const newHeight = header.getBoundingClientRect().height;
        setHeaderHeight(newHeight);
      }
    };

    // Update header height initially
    updateHeaderHeight();

    // Update header height on window resize
    window.addEventListener('resize', updateHeaderHeight);

    return () => {
      window.removeEventListener('resize', updateHeaderHeight);
    };
  }, []);

  return headerHeight;
};

export default useHeaderHeight;
