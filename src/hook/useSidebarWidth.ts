import { useEffect, useState } from 'react';

export const useSidebarWidth = () => {
  const [sidebarWidth, setSidebarWidth] = useState(37);

  useEffect(() => {
    const handleResize = () => {
      const sidebar = document.querySelector('.sidebar');
      if (sidebar) {
        const width = sidebar.getBoundingClientRect().width;
        setSidebarWidth(width > 37 ? 50 : 37);
      } else {
        setSidebarWidth(window.innerWidth >= 768 ? 50 : 37);
      }
    };

    handleResize(); // Initial setup
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return sidebarWidth;
};
