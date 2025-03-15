import { useEffect } from "react";

const useScrollUpdateURL = (basePath: string = "") => {
    useEffect(() => {
      const handleScroll = () => {
        const sections = document.querySelectorAll<HTMLElement>("section[id]");
        const scrollPosition = window.scrollY + window.innerHeight / 3; // Adjust for better detection
  
        let currentSectionId: string | null = null;
        let minDistance = Infinity;
  
        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          const distance = Math.abs(scrollPosition - sectionTop);
  
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            if (distance < minDistance) {
              minDistance = distance;
              currentSectionId = section.id;
            }
          }
        });
  
        if (currentSectionId) {
          window.history.replaceState(null, "", `${basePath}/${currentSectionId}`);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      handleScroll(); // Run on mount
  
      return () => window.removeEventListener("scroll", handleScroll);
    }, [basePath]);
  };
  
  export default useScrollUpdateURL;
  