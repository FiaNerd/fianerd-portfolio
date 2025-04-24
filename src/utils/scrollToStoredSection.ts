export const scrollToStoredSection = (headerHeight: number = 0) => {
  const storedSection = sessionStorage.getItem('activeSection');
  const hash = window.location.hash.replace('#', '') || storedSection;

  if (hash) {
    requestAnimationFrame(() => {
      const section = document.getElementById(hash);
      if (section) {
        const offset = section.offsetTop - headerHeight;
        window.scrollTo({ top: offset, behavior: 'auto' });
      }
    });
  }
};
