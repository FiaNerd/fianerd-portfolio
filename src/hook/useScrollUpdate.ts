import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollUpdateURL = (
  sectionIds: string[],
  basePath: string = '',
  headerHeight: number = 0,
  isHeaderVisible: boolean = true
) => {
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 4;

      let currentSectionId: string | null = null;
      let minDistance = Infinity;

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const sectionTop =
            section.offsetTop - (isHeaderVisible ? headerHeight : 0); // Adjust for header height only if visible
          const sectionHeight = section.offsetHeight;
          const distance = Math.abs(scrollPosition - sectionTop);

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            if (distance < minDistance) {
              minDistance = distance;
              currentSectionId = id;
            }
          }
        }
      });

      if (currentSectionId) {
        // Construct the full path with basePath and currentSectionId
        const fullPath = basePath
          ? `${basePath.replace(/^\/|\/$/g, '')}/${currentSectionId}`
          : `${currentSectionId}`;
        // Update the URL only if it differs from the current pathname
        if (location.pathname !== fullPath) {
          window.history.replaceState(null, '', fullPath);
        }
      }
    };

    const handleHashNavigation = () => {
      const sectionId = location.pathname.split('/').pop();

      if (sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offset = isHeaderVisible
            ? element.offsetTop - 0 // Adjust for header height when visible
            : element.offsetTop; // No adjustment when header is hidden

          window.scrollTo({
            top: offset > 0 ? offset : 0,
            behavior: 'smooth',
          });
        }
      }
    };

    // Handle scroll and hash navigation
    window.addEventListener('scroll', handleScroll);
    handleHashNavigation();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds, basePath, headerHeight, isHeaderVisible, location.pathname]);
};

export default useScrollUpdateURL;
