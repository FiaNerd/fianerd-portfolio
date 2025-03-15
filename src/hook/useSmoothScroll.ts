import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useSmoothScroll = (offset: number = 0) => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace("#", "");
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        setTimeout(() => {
          const yOffset = targetElement.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: yOffset, behavior: "smooth" });
        }, 100);
      }
    }
  }, [location.hash, offset]);
};

export default useSmoothScroll;
