interface ScrollUpdateParams {
  sectionIds: string[];
  headerHeight: number;
  isHeaderVisible: boolean;
  basePath: string;
  lastVisibleSectionId: React.MutableRefObject<string | null>;
  location: { pathname: string };
  isNavigating: React.MutableRefObject<boolean>;
}

export const updateURLOnScroll = ({
  sectionIds,
  headerHeight,
  isHeaderVisible,
  basePath,
  lastVisibleSectionId,
  location,
  isNavigating,
}: ScrollUpdateParams) => {
  if (isNavigating.current) return;

  let mostVisibleSectionId: string | null = null;
  let maxVisibleHeight = 0;

  sectionIds.forEach((id) => {
    const section = document.getElementById(id);
    if (section) {
      const sectionTop =
        section.offsetTop - (isHeaderVisible ? headerHeight : 0);
      const sectionHeight = section.offsetHeight;
      const scrollPosition = window.scrollY + window.innerHeight / 10;

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
