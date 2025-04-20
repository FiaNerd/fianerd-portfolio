import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { updateURLOnScroll } from '../utils/updateURLOnScroll';
import { handleHashNavigation } from '../utils/handleHashNavigation';

const useScrollUpdateURL = (
  sectionIds: string[],
  basePath: string = '',
  headerHeight: number = 0,
  isHeaderVisible: boolean = false
) => {
  const location = useLocation();
  const isNavigating = useRef(false);
  const lastVisibleSectionId = useRef<string | null>(null);

  useEffect(() => {
    const onScroll = () =>
      updateURLOnScroll({
        sectionIds,
        headerHeight,
        isHeaderVisible,
        basePath,
        lastVisibleSectionId,
        location,
        isNavigating,
      });

    const onHashNavigate = () => {
      if (window.location.hash) {
        handleHashNavigation({
          sectionIds,
          headerHeight,
          isHeaderVisible,
          isNavigating,
        });
      }
    };

    // Scroll to the correct section on page load
    onHashNavigate();

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [sectionIds, basePath, headerHeight, isHeaderVisible, location.pathname]);
};

export default useScrollUpdateURL;