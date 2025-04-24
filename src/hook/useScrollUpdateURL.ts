import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { updateURLOnScroll } from '../utils/updateURLOnScroll';
import { scrollToStoredSection } from '../utils/scrollToStoredSection';

const useScrollUpdateURL = (
  sectionIds: string[],
  basePath: string = '',
  headerHeight: number = 0,
  isHeaderVisible: boolean = false
) => {
  const location = useLocation();
  const lastVisibleSectionId = useRef<string | null>(null);
  const isNavigating = useRef<boolean>(false);
  const hasScrolled = useRef<boolean>(false);

  useEffect(() => {
    const onScroll = () => {
      updateURLOnScroll({
        sectionIds,
        headerHeight,
        isHeaderVisible,
        basePath,
        lastVisibleSectionId,
        location,
        isNavigating,
      });

      const currentSection = sectionIds.find((id) => {
        const section = document.getElementById(id);
        return (
          section &&
          section.getBoundingClientRect().top >= 0 &&
          section.getBoundingClientRect().top < window.innerHeight
        );
      });

      if (currentSection) {
        sessionStorage.setItem('activeSection', currentSection);
      }
    };

    const scrollToActiveSection = () => {
      if (hasScrolled.current) return;
      hasScrolled.current = true;
      scrollToStoredSection(headerHeight);
    };

    window.addEventListener('load', scrollToActiveSection);
    setTimeout(scrollToActiveSection, 100);

    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('load', scrollToActiveSection);
    };
  }, [sectionIds, basePath, headerHeight, isHeaderVisible, location.pathname]);
};

export default useScrollUpdateURL;
