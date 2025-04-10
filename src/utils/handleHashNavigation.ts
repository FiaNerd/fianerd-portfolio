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
  const hash = window.location.hash.slice(1); // Get the hash without '#'

  if (sectionIds.includes(hash)) {
    const element = document.getElementById(hash);
    if (element) {
      const topOffset = isHeaderVisible ? headerHeight : 0;
      window.scrollTo({
        top: element.offsetTop - topOffset,
        behavior: 'smooth',
      });
      if (onNavigationComplete) onNavigationComplete();
    }
  }
};
