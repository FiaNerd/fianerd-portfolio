import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useSmoothScroll = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    const header = document.querySelector("header");
    const headerHeight = header ? header.offsetHeight : 0;

    if (hash) {
      const element = document.getElementById(hash);

      if (element) {
        window.scrollTo({
          top: element.offsetTop - headerHeight,
          behavior: "smooth",
        });
      }
    }
  }, [location]);
};
