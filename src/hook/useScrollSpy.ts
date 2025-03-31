import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import debounce from 'lodash.debounce'; 


const isElementInView = (element: HTMLElement): boolean => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
};

const useScrollSpy = (sectionIds: string[], basePath: string) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Debounced scroll handler
    const debouncedOnScroll = debounce(() => {
      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section && isElementInView(section)) {
          const newUrl = `${basePath}/${id}`;

          if (location.pathname !== newUrl) {
            navigate(newUrl, { replace: true }); // Update URL without reloading
          }
          break; // Stop checking after the first visible section
        }
      }
    }, 100); // Adjust debounce delay as needed

    window.addEventListener('scroll', debouncedOnScroll);

    return () => {
      // Cleanup the event listener and debounce instance
      window.removeEventListener('scroll', debouncedOnScroll);
      debouncedOnScroll.cancel(); // Cancel any pending debounced calls
    };
  }, [sectionIds, basePath, location.pathname, navigate]);
};

export default useScrollSpy;
