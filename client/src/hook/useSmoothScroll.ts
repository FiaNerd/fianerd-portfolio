import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useSmoothScroll = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
};
