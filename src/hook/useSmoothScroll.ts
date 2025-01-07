import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useSmoothScroll = (headerHeight: number) => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    
    if (hash) {
      const element = document.getElementById(hash);
      
      if (element) {
        // Wait for the headerHeight to be updated and for the page to settle
        setTimeout(() => {
          // Check if the element is still in view and the headerHeight is correctly calculated
          window.scrollTo({
            top: element.offsetTop - headerHeight,
            behavior: "smooth",
          });
        }, 100); // You can adjust the timeout value if needed
      }
    }
  }, [location.hash, headerHeight]); // Use `location.hash` instead of `location` to avoid unnecessary re-renders
};
