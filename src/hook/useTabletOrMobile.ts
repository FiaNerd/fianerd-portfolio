import { useEffect, useState } from 'react';

const useIsTabletOrMobile = () => {
  const [isTabletOrMobile, setIsTabletOrMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1024px)');
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsTabletOrMobile(event.matches);
    };

    setIsTabletOrMobile(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return isTabletOrMobile;
};

export default useIsTabletOrMobile;