interface HashNavigationParams {
  sectionIds: string[];
  headerHeight: number;
  isHeaderVisible: boolean;
  location: { pathname: string };
  isNavigating: React.MutableRefObject<boolean>;
}

export const handleHashNavigation = ({
  sectionIds,
  headerHeight,
  isHeaderVisible,
  location,
  isNavigating,
}: HashNavigationParams) => {
  const sectionId = location.pathname.split('/').filter(Boolean).pop();
  if (sectionId) {
    if (sectionIds.includes(sectionId)) {
      const element = document.getElementById(sectionId);
      if (element) {
        isNavigating.current = true;
        const offset = element.offsetTop - (isHeaderVisible ? headerHeight : 0);

        window.scrollTo({
          top: offset > 0 ? offset : 0,
          behavior: 'smooth',
        });

        setTimeout(() => {
          isNavigating.current = false;
        }, 500);
      }
    } else {
      console.warn(`Section ID "${sectionId}" not found in sectionIds array.`);
    }
  } else {
    isNavigating.current = true;
    window.scrollTo({
      top: isHeaderVisible ? headerHeight : 0,
      behavior: 'smooth',
    });
    setTimeout(() => {
      isNavigating.current = false;
    }, 500);
  }
};
