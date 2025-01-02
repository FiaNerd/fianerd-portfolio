import { useEffect, useRef, useState } from 'react';

export const useHeaderVisibility = () => {
  const [headerVisible, setHeaderVisible] = useState(true);
  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setHeaderVisible(currentScrollY < lastScrollY.current || currentScrollY <= 121);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return headerVisible;
};
