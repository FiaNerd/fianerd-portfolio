import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollUpdateURL = (
  sectionIds: string[],
  basePath: string = '',
  headerHeight: number = 0,
  isHeaderVisible: boolean = true
) => {
  const location = useLocation();
  const isNavigating = useRef(false);
  const lastVisibleSectionId = useRef<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (isNavigating.current) return;

      let mostVisibleSectionId: string | null = null;
      let maxVisibleHeight = 0;

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const sectionTop =
            section.offsetTop - (isHeaderVisible ? headerHeight : 0); // Adjust for header visibility
          const sectionHeight = section.offsetHeight;
          const scrollPosition = window.scrollY + window.innerHeight / 4;

          const visibleHeight =
            Math.min(
              sectionTop + sectionHeight,
              scrollPosition + window.innerHeight
            ) - Math.max(sectionTop, scrollPosition);

          if (visibleHeight > maxVisibleHeight && visibleHeight > 0) {
            maxVisibleHeight = visibleHeight;
            mostVisibleSectionId = id;
          }
        }
      });

      if (
        mostVisibleSectionId &&
        mostVisibleSectionId !== lastVisibleSectionId.current
      ) {
        lastVisibleSectionId.current = mostVisibleSectionId;
        const fullPath = basePath
          ? `/${basePath.replace(/^\/|\/$/g, '')}/${mostVisibleSectionId}`
          : `/${mostVisibleSectionId}`;

        if (location.pathname !== fullPath) {
          window.history.replaceState(null, '', fullPath);
        }
      }
    };

    const handleHashNavigation = () => {
      const sectionId = location.pathname.split('/').filter(Boolean).pop();
      if (sectionId) {
        if (sectionIds.includes(sectionId)) {
          const element = document.getElementById(sectionId);
          if (element) {
            isNavigating.current = true;
            const offset =
              element.offsetTop - (isHeaderVisible ? headerHeight : 0);

            window.scrollTo({
              top: offset > 0 ? offset : 0,
              behavior: 'smooth',
            });

            setTimeout(() => {
              isNavigating.current = false;
            }, 500);
          }
        } else {
          console.warn(
            `Section ID "${sectionId}" not found in sectionIds array.`
          );
        }
      } else {
        // Scroll to the top if no section ID is provided
        isNavigating.current = true;
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
        setTimeout(() => {
          isNavigating.current = false;
        }, 500);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleHashNavigation();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds, basePath, headerHeight, isHeaderVisible, location.pathname]);
};

export default useScrollUpdateURL;
