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

    const onHashNavigate = () =>
      handleHashNavigation({
        sectionIds,
        headerHeight,
        isHeaderVisible,
        location,
        isNavigating,
      });

    window.addEventListener('scroll', onScroll);
    onHashNavigate();

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [sectionIds, basePath, headerHeight, isHeaderVisible, location.pathname]);
};

export default useScrollUpdateURL;
