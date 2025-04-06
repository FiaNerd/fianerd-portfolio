import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollUpdateURL = (
  sectionIds: string[],
  basePath: string = '',
  headerRef: React.RefObject<HTMLDivElement>, // Pass the header ref
  headerHeight: number = 0
) => {
  const location = useLocation();
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        let mostVisibleSectionId: string | null = null;
        let maxVisibleHeight = 0;

        sectionIds.forEach((id) => {
          const section = document.getElementById(id);
          if (section) {
            const sectionTop =
              section.offsetTop - (isHeaderVisible ? headerHeight : 0); // Adjust for header height only if visible
            const sectionHeight = section.offsetHeight;
            const scrollPosition = window.scrollY + window.innerHeight / 4;

            const visibleHeight =
              Math.min(
                sectionTop + sectionHeight,
                scrollPosition + window.innerHeight
              ) - Math.max(sectionTop, scrollPosition);

            // Update the most visible section based on visible height
            if (visibleHeight > maxVisibleHeight && visibleHeight > 0) {
              maxVisibleHeight = visibleHeight;
              mostVisibleSectionId = id;
            }
          }
        });

        if (mostVisibleSectionId) {
          const fullPath = basePath
            ? `/${basePath.replace(/^\/|\/$/g, '')}/${mostVisibleSectionId}`
            : `/${mostVisibleSectionId}`;

          console.log('Current Section ID:', mostVisibleSectionId);
          console.log('Constructed Full Path:', fullPath);

          // Update the URL only if it has changed
          if (location.pathname !== fullPath) {
            window.history.replaceState(null, '', fullPath);
          }
        }
      });
    };

    const handleHashNavigation = () => {
      const sectionId = location.pathname.split('/').pop();

      if (sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offset = isHeaderVisible
            ? element.offsetTop - headerHeight 
            : element.offsetTop; 

          // Only scroll if the section is not already in view
          const rect = element.getBoundingClientRect();
          
          if (rect.top < 0 || rect.bottom > window.innerHeight) {
            window.scrollTo({
              top: offset > 0 ? offset : 0,
              behavior: 'smooth',
            });
          }
        }
      }
    };

    // Handle scroll and hash navigation
    window.addEventListener('scroll', handleScroll);
    handleHashNavigation(); // Run only when the URL changes

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds, basePath, headerHeight, isHeaderVisible, location.pathname]);

  return isHeaderVisible; // Return the header visibility state if needed
};

export default useScrollUpdateURL;
