import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToSection = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        // Scroll to the element with smooth behavior
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return null;
};

export default ScrollToSection;
