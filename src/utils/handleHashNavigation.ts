interface IHashNavigationParams {
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
}: IHashNavigationParams) => {
  const hash = window.location.hash;

  if (hash) {
    const sectionId = hash.substring(1);
    console.log(sectionIds);
    console.log(isNavigating.current);

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
