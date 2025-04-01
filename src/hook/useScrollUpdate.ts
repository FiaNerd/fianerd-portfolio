import { useEffect } from 'react';

const useScrollUpdateURL = (basePath: string = '') => {
  useEffect(() => {
    if (typeof document === 'undefined') {
      console.error('Document is not available.');
      return;
    }

    let timeout: NodeJS.Timeout;

    const handleScroll = () => {
      clearTimeout(timeout); // Clear the previous timeout
      timeout = setTimeout(() => {
        const sections = document.querySelectorAll<HTMLElement>('section[id]');
        if (!sections || sections.length === 0) {
          console.warn('No sections with IDs found in the DOM.');
          return;
        }

        const scrollPosition = window.scrollY + window.innerHeight / 4;

        let currentSectionId: string | null = null;
        let minDistance = Infinity;

        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          const distance = Math.abs(scrollPosition - sectionTop);

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            if (distance < minDistance) {
              minDistance = distance;
              currentSectionId = section.id;
            }
          }
        });

        if (currentSectionId) {
          const fullPath = basePath
            ? `/${basePath.replace(/^\/|\/$/g, '')}/${currentSectionId}`
            : `/${currentSectionId}`;

          if (window.location.pathname !== fullPath) {
            window.history.replaceState(null, '', fullPath);
            console.log('Full Path (updated):', fullPath);
          }
        } else {
          console.log(
            'No matching section found for the current scroll position.'
          );
        }
      }, 100); // Debounce delay (100ms)
    };

    // Reset the URL on mount if the scroll position is at the top
    if (window.scrollY === 0) {
      const fullPath = basePath ? `/${basePath.replace(/^\/|\/$/g, '')}` : '/';
      if (window.location.pathname !== fullPath) {
        window.history.replaceState(null, '', fullPath);
        console.log('Full Path (reset on mount):', fullPath);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timeout); // Clear timeout on cleanup
      window.removeEventListener('scroll', handleScroll);
    };
  }, [basePath]);
};

export default useScrollUpdateURL;
