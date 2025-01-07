

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useSmoothScroll = (headerHeight: number) => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    
    if (hash) {
      const element = document.getElementById(hash);
      
      if (element) {
        setTimeout(() => {
          window.scrollTo({
            top: element.offsetTop - headerHeight,
            behavior: "smooth",
          });
        }, 100);
      }
    }
  }, [location, headerHeight]); 
};
