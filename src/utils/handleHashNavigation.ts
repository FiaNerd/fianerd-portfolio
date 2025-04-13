interface HashNavigationParams {
  sectionIds: string[];
  headerHeight: number;
  isHeaderVisible: boolean;
  isNavigating: React.MutableRefObject<boolean>;
  onNavigationComplete?: () => void;
  location?: Location;
}

export const handleHashNavigation = ({
  sectionIds,
  headerHeight,
  isHeaderVisible,
  isNavigating,
  onNavigationComplete,
}: HashNavigationParams) => {
  const hash = window.location.hash.slice(1); // Get the current hash
  console.log('Current hash:', hash);

  if (!hash) {
    return;
  }

  if (!sectionIds.includes(hash)) {
    console.error(`Section ID "${hash}" is not in the valid sectionIds array.`);
    return;
  }

  const element = document.getElementById(hash);
  if (element) {
    isNavigating.current = true;

    const offset = element.offsetTop - (isHeaderVisible ? headerHeight : 0);

    window.scrollTo({
      top: offset > 0 ? offset : 0,
      behavior: 'smooth',
    });

    setTimeout(() => {
      isNavigating.current = false;
      if (onNavigationComplete) {
        onNavigationComplete();
      }
    }, 500);
  } else {
    console.warn(`Element with ID "${hash}" not found in the DOM.`);
  }
};
