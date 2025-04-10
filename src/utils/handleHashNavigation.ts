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

  if (hash) {
    const sectionId = hash.substring(1);

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
          if (onNavigationComplete) {
            onNavigationComplete();
          }
        }, 500);
      } else {
        console.warn(`Element with ID "${sectionId}" not found in the DOM.`);
      }
    } else {
      console.warn(
        `Section ID "${sectionId}" is not in the valid sectionIds array.`
      );
    }
  }
};
